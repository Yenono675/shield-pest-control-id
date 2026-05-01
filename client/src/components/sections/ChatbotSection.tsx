import { useState, useRef, useEffect } from "react";
import { Send, X, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function ChatbotSection({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Halo! 👋 Saya adalah asisten Shield Pest Control. Tanyakan apa saja tentang layanan pembasmi hama kami, fogging, rayap, nyamuk, atau hama lainnya. Bagaimana cara saya membantu Anda?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatbotMutation = trpc.chatbot.ask.useMutation();
  const userQuestionRef = useRef<string>("");

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    userQuestionRef.current = input;
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    chatbotMutation.mutate(
      { question: userQuestionRef.current },
      {
        onSuccess: (data) => {
          const answer = typeof data.answer === 'string' ? data.answer : String(data.answer);
          const assistantMessage: Message = {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content:
              answer ||
              "Maaf, saya tidak dapat memproses pertanyaan Anda. Silakan hubungi kami melalui WhatsApp untuk bantuan lebih lanjut.",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, assistantMessage]);
        },
        onError: (error) => {
          console.error("Chatbot error:", error);
          const errorMessage: Message = {
            id: (Date.now() + 2).toString(),
            role: "assistant",
            content:
              "Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi kami melalui WhatsApp: 0811-3513-799",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, errorMessage]);
        },
      }
    );
  };

  const isLoading = chatbotMutation.isPending;

  return (
    <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-24px)] bg-white rounded-lg shadow-2xl z-40 flex flex-col h-96 md:h-[500px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-t-lg flex justify-between items-center">
        <div>
          <h3 className="font-bold">Shield Pest Control Bot</h3>
          <p className="text-xs text-orange-100">Siap membantu Anda</p>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:bg-orange-700 p-1 rounded transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                message.role === "user"
                  ? "bg-orange-500 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-900 rounded-bl-none"
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p
                className={`text-xs mt-1 ${
                  message.role === "user"
                    ? "text-orange-100"
                    : "text-gray-600"
                }`}
              >
                {message.timestamp.toLocaleTimeString("id-ID", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg rounded-bl-none flex items-center gap-2">
              <Loader2 size={16} className="animate-spin" />
              <span className="text-sm">Sedang mengetik...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 p-4 bg-white rounded-b-lg">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && !isLoading) {
                handleSendMessage();
              }
            }}
            placeholder="Tanya tentang hama..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim()}
            className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 disabled:bg-gray-400 transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          💡 Tanya tentang fogging, rayap, nyamuk, atau hama lainnya
        </p>
      </div>
    </div>
  );
}
