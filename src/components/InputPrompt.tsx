"use client";

import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { defaultNotations, defaultPrompts } from "./abc/data";

const FormSchema = z.object({
  prompt: z.string().min(10, {
    message: "Prompt must be at least 10 characters.",
  }),
});

type FormSchemaType = z.infer<typeof FormSchema>;

interface InputPromptProps {
  form: UseFormReturn<FormSchemaType>;
  onSubmit: (data: FormSchemaType) => void;
  onContinue: () => void;
  loading: boolean;
  setNotation: (notation: string) => void;
  completeNotation: string;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function InputPrompt({
  form,
  onSubmit,
  setNotation,
  loading,
  onContinue,
  completeNotation,
}: InputPromptProps) {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const randomInt = getRandomInt(defaultNotations.length);
    form.setValue("prompt", defaultPrompts[randomInt]);
    setNotation(defaultNotations[randomInt]);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="prompt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prompt</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Generate a melody in ABC notation."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Not Creative? Try the help button.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading} className="mr-3">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          ) : (
            "Submit"
          )}
        </Button>
        <Button disabled={loading} className="mr-3" onClick={onClick}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          ) : (
            "I'm feeling lucky"
          )}
        </Button>
        {completeNotation && (
          <Button disabled={loading} className="mr-3" onClick={onContinue}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </>
            ) : (
              "Continue"
            )}
          </Button>
        )}
      </form>
    </Form>
  );
}
