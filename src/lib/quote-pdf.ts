// eslint-disable-next-line @typescript-eslint/no-require-imports
const pdfmake = require("pdfmake");
import fs from "fs";
import path from "path";
import type { TDocumentDefinitions, Content } from "pdfmake/interfaces";

const COLORS = {
  green: "#2D7A6B",
  greenDark: "#1F5A50",
  greenLight: "#E8F5F1",
  cream: "#FAF7F2",
  text: "#1F2937",
  muted: "#6B7280",
  border: "#E5E7EB",
};

export interface PlanSection {
  title: string;
  body: string;
}

export interface QuoteInput {
  quoteNumber: string;
  issuedDate: string;
  validUntil: string;
  currency: string;
  customerName: string;
  customerAddress: string[];
  recipientName: string;
  recipientNotes: string;
  situation: string;
  recommendationHeading: string;
  recommendation: string;
  planSections: PlanSection[];
  assessorBlurb: string;
  installerBlurb: string;
  guarantee: string;
  total: number;
  totalCaption: string;
  nextSteps: string[];
  contactEmail: string;
  contactPhone: string;
}

const fonts = {
  Helvetica: {
    normal: "Helvetica",
    bold: "Helvetica-Bold",
    italics: "Helvetica-Oblique",
    bolditalics: "Helvetica-BoldOblique",
  },
  Times: {
    normal: "Times-Roman",
    bold: "Times-Bold",
    italics: "Times-Italic",
    bolditalics: "Times-BoldItalic",
  },
};

pdfmake.setFonts(fonts);
pdfmake.setUrlAccessPolicy(() => false);

const fmtTotal = (currency: string, amount: number) =>
  `${currency} ${amount.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;

let cachedLogoDataUrl: string | null = null;
function loadLogo(): string {
  if (cachedLogoDataUrl) return cachedLogoDataUrl;
  const p = path.join(
    process.cwd(),
    "public",
    "images",
    "jaga-icon-transparent.png",
  );
  const buf = fs.readFileSync(p);
  cachedLogoDataUrl = `data:image/png;base64,${buf.toString("base64")}`;
  return cachedLogoDataUrl;
}

export function buildQuoteDoc(q: QuoteInput): TDocumentDefinitions {
  const logo = loadLogo();

  const header: Content = {
    columns: [
      {
        width: 260,
        columns: [
          { image: logo, width: 42, margin: [0, 2, 0, 0] },
          {
            width: "*",
            stack: [
              { text: "Jaga.Care", style: "brand" },
              {
                text: "Home ready before they are",
                style: "brandSub",
                margin: [0, 1, 0, 0],
              },
            ],
            margin: [10, 0, 0, 0],
          },
        ],
      },
      {
        width: "*",
        stack: [
          { text: "CARE PLAN", style: "quoteTitle", alignment: "right" },
          {
            text: q.quoteNumber,
            style: "quoteNumber",
            alignment: "right",
            margin: [0, 2, 0, 8],
          },
          {
            text: `Issued: ${q.issuedDate}`,
            style: "meta",
            alignment: "right",
          },
          {
            text: `Valid until: ${q.validUntil}`,
            style: "meta",
            alignment: "right",
          },
        ],
      },
    ],
    margin: [0, 0, 0, 16],
  };

  const accentBar: Content = {
    canvas: [
      { type: "rect", x: 0, y: 0, w: 515, h: 2, color: COLORS.green },
    ],
    margin: [0, 0, 0, 18],
  };

  const customerBlock: Content = {
    columns: [
      {
        width: "*",
        stack: [
          { text: "PREPARED FOR", style: "sectionLabel" },
          {
            text: q.customerName,
            style: "customerName",
            margin: [0, 4, 0, 2],
          },
          ...q.customerAddress.map((line) => ({
            text: line,
            style: "customerLine",
          })),
        ],
      },
      {
        width: "*",
        stack: [
          { text: "CARE RECIPIENT", style: "sectionLabel" },
          {
            text: q.recipientName,
            style: "customerName",
            margin: [0, 4, 0, 2],
          },
          { text: q.recipientNotes, style: "customerLine" },
        ],
      },
    ],
    columnGap: 24,
    margin: [0, 0, 0, 22],
  };

  const situationBlock: Content = {
    stack: [
      { text: "YOUR SITUATION", style: "sectionLabel" },
      { text: q.situation, style: "paragraph", margin: [0, 6, 0, 0] },
    ],
    margin: [0, 0, 0, 18],
  };

  const recommendationBlock: Content = {
    stack: [
      { text: q.recommendationHeading, style: "sectionLabel" },
      {
        text: q.recommendation,
        style: "paragraph",
        margin: [0, 6, 0, 0],
      },
    ],
    margin: [0, 0, 0, 22],
  };

  const planBlock: Content = {
    stack: [
      { text: "WHAT YOUR PLAN INCLUDES", style: "sectionLabel" },
      ...q.planSections.map<Content>((section) => ({
        columns: [
          {
            width: 14,
            text: "✓",
            style: "checkmark",
            margin: [0, 1, 0, 0],
          },
          {
            width: "*",
            stack: [
              { text: section.title, style: "planTitle" },
              {
                text: section.body,
                style: "planBody",
                margin: [0, 2, 0, 0],
              },
            ],
          },
        ],
        columnGap: 6,
        margin: [0, 10, 0, 0],
      })),
      {
        columns: [
          {
            width: 14,
            text: "✓",
            style: "checkmark",
            margin: [0, 1, 0, 0],
          },
          {
            width: "*",
            stack: [
              {
                text: "Professional occupational therapist assessment",
                style: "planTitle",
              },
              {
                text: q.assessorBlurb,
                style: "planBody",
                margin: [0, 2, 0, 0],
              },
            ],
          },
        ],
        columnGap: 6,
        margin: [0, 10, 0, 0],
      },
      {
        columns: [
          {
            width: 14,
            text: "✓",
            style: "checkmark",
            margin: [0, 1, 0, 0],
          },
          {
            width: "*",
            stack: [
              {
                text: "Installation by Jaga-certified contractors",
                style: "planTitle",
              },
              {
                text: q.installerBlurb,
                style: "planBody",
                margin: [0, 2, 0, 0],
              },
            ],
          },
        ],
        columnGap: 6,
        margin: [0, 10, 0, 0],
      },
      {
        columns: [
          {
            width: 14,
            text: "✓",
            style: "checkmark",
            margin: [0, 1, 0, 0],
          },
          {
            width: "*",
            stack: [
              { text: "Our guarantee", style: "planTitle" },
              {
                text: q.guarantee,
                style: "planBody",
                margin: [0, 2, 0, 0],
              },
            ],
          },
        ],
        columnGap: 6,
        margin: [0, 10, 0, 0],
      },
    ],
    margin: [0, 0, 0, 20],
  };

  const totalBlock: Content = {
    table: {
      widths: ["*"],
      body: [
        [
          {
            stack: [
              {
                text: "YOUR INVESTMENT",
                style: "totalLabel",
                alignment: "center",
              },
              {
                text: fmtTotal(q.currency, q.total),
                style: "totalAmount",
                alignment: "center",
                margin: [0, 6, 0, 4],
              },
              {
                text: "All-inclusive · no hidden fees",
                style: "totalTag",
                alignment: "center",
              },
              {
                text: q.totalCaption,
                style: "totalCaption",
                alignment: "center",
                margin: [0, 2, 0, 0],
              },
            ],
            fillColor: COLORS.cream,
            border: [false, false, false, false],
            margin: [14, 16, 14, 16],
          },
        ],
      ],
    },
    layout: {
      defaultBorder: false,
      paddingLeft: () => 0,
      paddingRight: () => 0,
      paddingTop: () => 0,
      paddingBottom: () => 0,
    },
    margin: [0, 0, 0, 22],
  };

  const nextStepsBlock: Content = {
    stack: [
      { text: "NEXT STEPS", style: "sectionLabel", margin: [0, 0, 0, 8] },
      {
        ol: q.nextSteps,
        style: "step",
      },
    ],
    margin: [0, 0, 0, 20],
  };

  const footer: Content = {
    columns: [
      {
        text: [
          { text: "Questions? ", color: COLORS.muted },
          { text: q.contactEmail, color: COLORS.green, bold: true },
          { text: "  ·  ", color: COLORS.muted },
          { text: q.contactPhone, color: COLORS.green, bold: true },
        ],
        fontSize: 8,
      },
      {
        text: `This care plan is valid until ${q.validUntil}`,
        fontSize: 8,
        color: COLORS.muted,
        alignment: "right",
      },
    ],
  };

  return {
    pageSize: "A4",
    pageMargins: [40, 40, 40, 50],
    defaultStyle: {
      font: "Helvetica",
      fontSize: 10,
      color: COLORS.text,
      lineHeight: 1.4,
    },
    content: [
      header,
      accentBar,
      customerBlock,
      situationBlock,
      recommendationBlock,
      planBlock,
      totalBlock,
      nextStepsBlock,
      footer,
    ],
    styles: {
      brand: { font: "Times", fontSize: 20, bold: true, color: COLORS.green },
      brandSub: { fontSize: 8, color: COLORS.muted, italics: true },
      quoteTitle: {
        font: "Times",
        fontSize: 16,
        characterSpacing: 3,
        color: COLORS.text,
      },
      quoteNumber: { fontSize: 10, color: COLORS.muted },
      meta: { fontSize: 8, color: COLORS.muted },
      sectionLabel: {
        fontSize: 8,
        bold: true,
        characterSpacing: 1.4,
        color: COLORS.muted,
      },
      customerName: { fontSize: 12, bold: true, color: COLORS.text },
      customerLine: { fontSize: 9, color: COLORS.muted },
      paragraph: { fontSize: 10, color: COLORS.text, lineHeight: 1.5 },
      checkmark: { fontSize: 11, bold: true, color: COLORS.green },
      planTitle: { fontSize: 10, bold: true, color: COLORS.text },
      planBody: { fontSize: 9, color: COLORS.muted, lineHeight: 1.45 },
      totalLabel: {
        fontSize: 9,
        bold: true,
        characterSpacing: 2.4,
        color: COLORS.muted,
      },
      totalAmount: {
        font: "Times",
        fontSize: 32,
        bold: true,
        color: COLORS.green,
      },
      totalTag: { fontSize: 9, color: COLORS.text, bold: true },
      totalCaption: { fontSize: 8, color: COLORS.muted, italics: true },
      step: { fontSize: 10, color: COLORS.text, lineHeight: 1.5 },
    },
  };
}

export async function renderQuotePdf(q: QuoteInput): Promise<Buffer> {
  const docDef = buildQuoteDoc(q);
  const doc = pdfmake.createPdf(docDef);
  return doc.getBuffer();
}
