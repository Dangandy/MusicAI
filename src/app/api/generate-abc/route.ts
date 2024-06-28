import {
  defaultNotation,
  example2,
  example3,
  example4,
} from "@/components/abc/data";
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
    {
      role: "user",
      content: `Here is an example of ABC notation for reference:\n${defaultNotation}\nNotice how there are no new lines, that is bad.`,
    },
    {
      role: "user",
      content: `Here is an example of ABC notation for reference:\n${example2}\nThe prompt here was:Give me a 1 minute melody in ABC notation, mood is jazz, style is similar to beethovan`,
    },
    {
      role: "user",
      content: `Here is an example of ABC notation for reference:\n${example3}\nThe prompt here was:Give me a 1 minute melody in ABC notation, mood is jazz, style is Mozart`,
    },
    {
      role: "user",
      content: `Here is an example response:${example4}\nThe prompt here was:Give me a 1 minute melody in the style of mozart, with a hint of chopin theme is background game music it should make the people listening want to dance!! Notice how there is a description line and line break ("Here is the generated ABC notation based on your request:\n\n")? this is bad, don't do it.`,
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
    max_tokens: 300, // Increased token limit for longer responses
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
