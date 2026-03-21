// 
import { streamText, UIMessage, convertToModelMessages } from 'ai';
import { mistral } from '@ai-sdk/mistral';


export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model:  mistral('mistral-small-latest'),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}