import Image from "next/image";
import { MoreVertical, Send, Paperclip, Smile } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-[360px] h-[640px] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-500 p-4 text-white relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <div>
              <p className="font-semibold">Hi there </p>
              <p className="text-xs text-green-300">● We reply immediately</p>
            </div>
          </div>
          <MoreVertical className="absolute right-4 top-4 w-5 h-5" />
        </div>

        {/* Chat */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-gray-50">

          {/* Bot */}
          <div className="flex">
            <div className="bg-white border rounded-xl px-4 py-2 text-sm shadow-sm max-w-[75%]">
              Hello, how can I help you? 
            </div>
          </div>
              
              <p className="text-[10px] text-gray-400 mt-2">
                Lyro AI Chatbot · Today, 22:49
              </p>

        </div>

        {/* Input */}
        <div className="p-3 border-t flex items-center gap-2">
          <Paperclip className="w-5 h-5 text-gray-400" />
          <Smile className="w-5 h-5 text-gray-400" />

          <input
            type="text"
            placeholder="Enter your message..."
            className="flex-1 text-sm outline-none px-2"
          />

          <button className="bg-purple-600 p-2 rounded-full text-white shadow-md hover:bg-purple-700">
            <Send className="w-4 h-4" />
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-[10px] text-gray-400 pb-2">
          POWERED BY <span className="font-semibold text-blue-400">Tidio</span>
        </div>

      </div>
    </div>
  );
}