
'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';

export default function Chat() {
  const [input, setInput] = useState('');
  const { messages, sendMessage } = useChat();

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto px-4 py-6">
      
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto space-y-4 pb-24">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div className="max-w-[80%] px-4 py-2 rounded-xl shadow">
              
              <div className="text-xs mb-1 opacity-70">
                {message.role === 'user' ? 'You' : 'AI'}
              </div>

              {message.parts.map((part, i) => {
                if (part.type === 'text') {
                  return (
                    <div
                      key={`${message.id}-${i}`}
                      className="whitespace-pre-wrap text-sm"
                    >
                      {part.text}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.trim()) return;
          sendMessage({ text: input });
          setInput('');
        }}
        className="fixed bottom-0 left-0 right-0 flex justify-center pb-6"
      >
        <div className="w-full max-w-md px-4">
          <input
            className="w-full p-3 border border-zinc-300 dark:border-zinc-800 rounded-xl shadow focus:outline-none"
            value={input}
            placeholder="Type your message..."
            onChange={e => setInput(e.currentTarget.value)}
          />
        </div>
      </form>
    </div>
  );
}