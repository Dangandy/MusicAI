"use client";

import { InputPrompt } from "@/components/InputPrompt";
import { AbcPrompt } from "@/components/abc/abc-prompt";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";

export const FormSchema = z.object({
  prompt: z.string().min(10, {
    message: "Prompt must be at least 10 characters.",
  }),
});

export default function Home() {
  const [notation, setNotation] = useState("");
  const [loading, setLoading] = useState(false);
  const [completeNotation, setCompleteNotation] = useState("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      prompt: "", // Set initial default value if needed
    },
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
      setCompleteNotation(abcNotation);
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

  async function onContinue() {
    const { prompt } = form.getValues();
    setLoading(true);
    try {
      const res = await fetch("/api/generate-abc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          continuation: completeNotation,
          prompt,
        }),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const { abcNotation } = await res.json();
      const updatedNotation = completeNotation + abcNotation;
      setCompleteNotation(updatedNotation);
      setNotation(updatedNotation);

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
      <InputPrompt
        form={form}
        onSubmit={onSubmit}
        loading={loading}
        setNotation={setNotation}
        onContinue={onContinue}
        completeNotation={completeNotation}
      />
      <AbcPrompt notation={notation} setNotation={setNotation} />
    </main>
  );
}
