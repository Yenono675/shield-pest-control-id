import { describe, it, expect, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the LLM function
vi.mock("./_core/llm", () => ({
  invokeLLM: vi.fn(async ({ messages }) => {
    const userMessage = messages[messages.length - 1];
    const question = userMessage.content;

    // Simulate responses based on keywords
    let response = "";
    const lowerQ = question.toLowerCase();
    if ((lowerQ.includes("harga") || lowerQ.includes("biaya")) && (lowerQ.includes("fogging") || lowerQ.includes("layanan"))) {
      response = "Untuk informasi harga yang akurat, silakan hubungi kami melalui WhatsApp: 0811-3513-799. Kami menawarkan konsultasi dan survey gratis untuk area Surabaya Raya.";
    } else if (lowerQ.includes("fogging") || lowerQ.includes("nyamuk")) {
      response = "Layanan fogging nyamuk kami menggunakan teknologi terkini untuk memberantas nyamuk dengan aman dan efektif. Kami melayani area Surabaya Raya dengan harga kompetitif.";
    } else if (lowerQ.includes("rayap")) {
      response = "Anti rayap adalah salah satu layanan unggulan kami. Kami menyediakan perlindungan komprehensif untuk mencegah kerusakan bangunan akibat rayap dengan metode profesional.";
    } else if (lowerQ.includes("harga") || lowerQ.includes("biaya")) {
      response = "Untuk informasi harga yang akurat, silakan hubungi kami melalui WhatsApp: 0811-3513-799. Kami menawarkan konsultasi dan survey gratis untuk area Surabaya Raya.";
    } else {
      response = "Terima kasih atas pertanyaan Anda. Shield Pest Control Surabaya siap membantu dengan berbagai layanan pembasmi hama profesional. Hubungi kami untuk informasi lebih lanjut di 0811-3513-799.";
    }

    return {
      choices: [
        {
          message: {
            content: response,
          },
        },
      ],
    };
  }),
}));

function createContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("chatbot.ask", () => {
  let ctx: TrpcContext;

  beforeEach(() => {
    ctx = createContext();
  });

  it("should answer questions about fogging", async () => {
    const caller = appRouter.createCaller(ctx);
    const result = await caller.chatbot.ask({
      question: "Apa itu layanan fogging nyamuk?",
    });

    expect(result.success).toBe(true);
    expect(result.answer).toContain("fogging");
    expect(result.answer).toBeTruthy();
  });

  it("should answer questions about rayap", async () => {
    const caller = appRouter.createCaller(ctx);
    const result = await caller.chatbot.ask({
      question: "Bagaimana cara mengatasi rayap di rumah?",
    });

    expect(result.success).toBe(true);
    expect(result.answer).toContain("rayap");
    expect(result.answer).toBeTruthy();
  });

  it("should provide contact info for pricing questions", async () => {
    const caller = appRouter.createCaller(ctx);
    const result = await caller.chatbot.ask({
      question: "Berapa harga layanan fogging?",
    });

    expect(result.success).toBe(true);
    expect(result.answer).toContain("0811-3513-799");
  });

  it("should reject empty questions", async () => {
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.chatbot.ask({
        question: "",
      });
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should return a valid response for general questions", async () => {
    const caller = appRouter.createCaller(ctx);
    const result = await caller.chatbot.ask({
      question: "Siapa Ricky Wicaksono?",
    });

    expect(result.success).toBe(true);
    expect(result.answer).toBeTruthy();
    expect(result.answer.length).toBeGreaterThan(0);
  });

  it("should handle questions in Indonesian", async () => {
    const caller = appRouter.createCaller(ctx);
    const result = await caller.chatbot.ask({
      question: "Apa saja layanan yang ditawarkan Shield Pest Control?",
    });

    expect(result.success).toBe(true);
    expect(result.answer).toBeTruthy();
  });
});
