"use client";

import { InputPrompt } from "@/components/InputPrompt";
import { AbcPrompt } from "@/components/abc/abc-prompt";
import { defaultNotation } from "@/components/abc/data";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  prompt: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

export default function Home() {
  const [notation, setNotation] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    try {
      const { prompt } = data;
      const res = await fetch("/api/generate-abc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const { abcNotation } = await res.json();
      setNotation(abcNotation);

      toast({
        title: "SUCCESS",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">Song will now play!</code>
          </pre>
        ),
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "There was an error processing your request.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <InputPrompt form={form} onSubmit={onSubmit} loading={loading} />
      <AbcPrompt notation={notation} setNotation={setNotation} />
    </main>
  );
}
