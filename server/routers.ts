import { GoogleGenerativeAI } from "@google/generative-ai"; 
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";

// Inisialisasi Google AI menggunakan API Key dari .env
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  chatbot: router({
    ask: publicProcedure
      .input(
        z.object({
          question: z.string().min(1, "Pertanyaan tidak boleh kosong"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Menggunakan model Gemini 2.0 Flash agar cepat dan responsif
          const model = genAI.getGenerativeModel({ 
          model: "gemini-3-flash-preview", 
          generationConfig: {
            temperature: 0.5, // Ini yang bikin AI-nya lebih luwes & nggak kaku
            topP: 0.95,
          }
          });

          const systemPrompt = `
          Anda adalah asisten chat dari Shield Pest Control Surabaya yang ramah, solutif, dan asik diajak ngobrol. 
        

        GAYA BICARA:
        - Singkat, padat, dan jelas. Maksimal 2-3 kalimat saja per jawaban.
        - JANGAN bertele-tele atau curhat. 
        - Gunakan bahasa yang santai tapi profesional (panggil "Kak").
        - JANGAN pakai poin-poin panjang.

        KONTEKS LAYANAN:
        - Fokus pada: Rayap, Fogging Nyamuk, Tikus, Kecoa, dan Semut.
        - Lokasi: Surabaya dan sekitarnya.
        - Penawaran Utama: Konsultasi & Survey GRATIS.

        INSTRUKSI WAJIB:
        1. Jika ditanya soal harga atau mau pesan, langsung arahkan dengan luwes ke WhatsApp: 0811-3513-799.
        2. Contoh jawaban: "Wah kalau soal rayap di lemari, emang mending segera dicek Kak biar nggak merembet. Tim Shield bisa bantu survey gratis kok ke lokasi. Langsung aja chat admin di WA 0811-3513-799 ya biar dijadwalkan!"
         `.trim();

          const result = await model.generateContent(`${systemPrompt}\n\nUser: ${input.question}`);
          const response = await result.response;
          const answer = response.text();

          return {
            success: true,
            answer: answer.trim(),
          };
        } catch (error) {
          console.error("Gemini Error:", error);
          return {
            success: false,
            answer: "Waduh, otak saya lagi loading. Langsung chat WhatsApp admin aja yuk di 0811-3513-799!",
          };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;