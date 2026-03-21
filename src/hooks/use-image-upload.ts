"use client";
import { useState, useCallback } from "react";

interface UploadedFile {
  file: File;
  preview: string;
  path?: string;
  uploading: boolean;
  error?: string;
}

async function compressImage(file: File, maxSizeMB = 2): Promise<File> {
  if (file.size <= maxSizeMB * 1024 * 1024) return file;

  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const maxDim = 2000;
      let { width, height } = img;
      if (width > maxDim || height > maxDim) {
        const ratio = Math.min(maxDim / width, maxDim / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        (blob) => {
          resolve(new File([blob!], file.name, { type: "image/jpeg" }));
        },
        "image/jpeg",
        0.8
      );
    };
    img.src = URL.createObjectURL(file);
  });
}

export function useImageUpload(maxFiles = 5) {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const uploading = files.some((f) => f.uploading);

  const addFiles = useCallback(
    async (newFiles: FileList | File[]) => {
      const toAdd = Array.from(newFiles).slice(0, maxFiles - files.length);

      const heicFiles = toAdd.filter(
        (f) =>
          f.type === "image/heic" || f.name.toLowerCase().endsWith(".heic")
      );
      if (heicFiles.length > 0) {
        alert("HEIC photos aren't supported yet. Please use JPEG or PNG.");
        return;
      }

      const compressed = await Promise.all(toAdd.map((f) => compressImage(f)));
      const entries: UploadedFile[] = compressed.map((f) => ({
        file: f,
        preview: URL.createObjectURL(f),
        uploading: false,
      }));
      setFiles((prev) => [...prev, ...entries]);
    },
    [files.length, maxFiles]
  );

  const removeFile = useCallback((index: number) => {
    setFiles((prev) => {
      URL.revokeObjectURL(prev[index].preview);
      return prev.filter((_, i) => i !== index);
    });
  }, []);

  const uploadAll = useCallback(async (): Promise<string[]> => {
    const paths: string[] = [];
    for (let i = 0; i < files.length; i++) {
      if (files[i].path) {
        paths.push(files[i].path!);
        continue;
      }
      setFiles((prev) =>
        prev.map((f, j) => (j === i ? { ...f, uploading: true } : f))
      );
      try {
        const form = new FormData();
        form.append("file", files[i].file);
        const res = await fetch("/api/upload", { method: "POST", body: form });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error);
        paths.push(data.path);
        setFiles((prev) =>
          prev.map((f, j) =>
            j === i ? { ...f, uploading: false, path: data.path } : f
          )
        );
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : "Upload failed";
        setFiles((prev) =>
          prev.map((f, j) =>
            j === i ? { ...f, uploading: false, error: message } : f
          )
        );
      }
    }
    return paths;
  }, [files]);

  return { files, uploading, addFiles, removeFile, uploadAll };
}
