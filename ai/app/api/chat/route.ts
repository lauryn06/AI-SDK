import { streamText, UIMessage, convertToModelMessages } from 'ai';

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: "google/gemini-3-pro-preview",
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}