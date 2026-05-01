import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { invokeLLM } from "./_core/llm";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
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
          const systemPrompt = `Anda adalah asisten customer service Shield Pest Control Surabaya yang ahli dalam pembasmi hama.
Anda harus menjawab semua pertanyaan dalam Bahasa Indonesia dengan ramah dan profesional.

Informasi tentang Shield Pest Control:
- Nama: Shield Pest Control Surabaya
- Slogan: "SCAN IN AJA TUNTAS MELINDUNGI"
- WhatsApp: 0811-3513-799
- Instagram: @shieldpestcontrol.surabaya
- Layanan: Fogging Nyamuk, Anti Rayap, Pembasmi Tikus, Disinfektan, Pembasmi Semut/Lalat/Kecoa, Konsultasi & Survey Gratis
- Area Layanan: Surabaya Raya
- Izin: Dinas Kesehatan Kota Surabaya
- Owner: Ricky Wicaksono

Jika ditanya tentang layanan spesifik, jelaskan dengan detail dan profesional.
Jika pertanyaan di luar topik, arahkan ke layanan kami atau sarankan hubungi WhatsApp.
Selalu berikan nomor WhatsApp 0811-3513-799 untuk konsultasi lebih lanjut.`;

          const response = await invokeLLM({
            messages: [
              {
                role: "system",
                content: systemPrompt,
              },
              {
                role: "user",
                content: input.question,
              },
            ],
          });

          const answer =
            response.choices[0]?.message?.content ||
            "Maaf, saya tidak dapat memproses pertanyaan Anda saat ini. Silakan hubungi kami melalui WhatsApp: 0811-3513-799";

          return {
            answer,
            success: true,
          };
        } catch (error) {
          console.error("Chatbot error:", error);
          return {
            answer:
              "Maaf, terjadi kesalahan. Silakan hubungi kami melalui WhatsApp: 0811-3513-799",
            success: false,
          };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
