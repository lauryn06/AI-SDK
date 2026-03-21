// 
import { streamText, UIMessage, convertToModelMessages } from 'ai';
import { google } from '@ai-sdk/google';

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google('gemini-1.5-pro'), // ✅ Gemini here
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}