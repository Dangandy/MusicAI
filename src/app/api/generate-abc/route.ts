import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { prompt, continuation } = await req.json();
  console.log({ prompt, continuation });

  const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
    {
      role: "system",
      content:
        "You are a helpful assistant that generates ABC notation for music based on mood and genre descriptions.",
    },
    { role: "user", content: prompt },
  ];
  console.log({ messages });

  if (continuation) {
    messages.push({ role: "assistant", content: continuation });
    messages.push({ role: "user", content: "Continue generating." });
  }

  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    model: "gpt-3.5-turbo",
    messages: messages,
    max_tokens: 150, // Increased token limit for longer responses
  };

  try {
    const response = await openai.chat.completions.create(params);
    console.log(JSON.stringify(response));

    const abcNotation = response.choices[0].message?.content?.trim();
    return NextResponse.json({ abcNotation });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
