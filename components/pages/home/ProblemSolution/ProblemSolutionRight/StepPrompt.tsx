"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Mic, ArrowUp } from "lucide-react";

const StepPrompt = () => {
  const [messages, setMessages] = useState<
    { role: "system" | "user"; text: string }[]
  >([]);
  const [isListening, setIsListening] = useState(false);
  const [streamedUserText, setStreamedUserText] = useState("");

  // Slightly shorter text for better pacing
  const fullUserCommand =
    "Create a profile for George Katsaros, open and admission and then prescribe Amoxicillin 500mg for 7 days";

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;

    const runSequence = async () => {
      // 1. Initial Delay
      await new Promise((r) => setTimeout(r, 500));

      // 2. System Greeting
      setMessages([
        {
          role: "system",
          text: "Good morning, Dr. Katsaros. Ready to assist.",
        },
      ]);

      // 3. Pause for user to "read"
      await new Promise((r) => setTimeout(r, 1500));

      // 4. Activate Microphone
      setIsListening(true);

      // 5. Stream User Text
      let currentText = "";
      const chars = fullUserCommand.split("");

      typingInterval = setInterval(() => {
        if (chars.length > 0) {
          currentText += chars.shift();
          setStreamedUserText(currentText);
        } else {
          clearInterval(typingInterval);
          setIsListening(false);

          // 6. Push to chat history
          setMessages((prev) => [...prev, { role: "user", text: currentText }]);
          setStreamedUserText(""); // Clear input
        }
      }, 25); // Speed up typing to 25ms
    };

    runSequence();

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex flex-col relative"
    >
      {/* --- CHAT HISTORY AREA --- */}
      {/* Added pb-28 to ensure text doesn't hide behind the input bar */}
      <div className="flex-1 w-full flex flex-col justify-end gap-4 px-4 pb-28 overflow-hidden">
        <AnimatePresence>
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`flex w-full ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] p-4 rounded-2xl text-sm md:text-base leading-relaxed shadow-sm relative
                  ${
                    msg.role === "user"
                      ? "bg-teal-600 text-white rounded-br-none"
                      : "bg-white text-slate-700 border border-slate-100 rounded-bl-none"
                  }
                `}
              >
                {/* System Decorative Line */}
                {msg.role === "system" && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-400 opacity-50" />
                )}

                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* --- INPUT BAR AREA --- */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-200/50 border border-white ring-1 ring-slate-100 overflow-hidden">
          <div className="px-4 py-3 flex items-center gap-3 min-h-[64px]">
            {/* Microphone Icon / Animation */}
            <div
              className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isListening ? "bg-red-50" : "bg-slate-50"
              }`}
            >
              {isListening ? (
                <div className="flex items-end gap-0.5 h-3">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-red-500 rounded-full"
                      animate={{ height: ["20%", "100%", "20%"] }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.4,
                        delay: i * 0.1,
                        repeatType: "mirror",
                      }}
                    />
                  ))}
                </div>
              ) : (
                <Mic className="w-5 h-5 text-slate-400" />
              )}
            </div>

            {/* Text Display */}
            <div className="flex-1 overflow-hidden">
              {streamedUserText ? (
                <span className="text-slate-800 font-medium text-md leading-tight block truncate">
                  {streamedUserText}
                  <span className="inline-block w-0.5 h-4 bg-teal-500 ml-1 align-middle animate-pulse" />
                </span>
              ) : (
                <span className="text-slate-400 text-sm font-medium">
                  {isListening ? "Listening..." : "Waiting for input..."}
                </span>
              )}
            </div>

            {/* Send Button */}
            <div
              className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                streamedUserText ? "bg-teal-500" : "bg-slate-200"
              }`}
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Progress Bar Line */}
          {isListening && (
            <div className="h-0.5 w-full bg-slate-100">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "linear" }}
                className="h-full bg-gradient-to-r from-teal-400 to-red-400"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default StepPrompt;
