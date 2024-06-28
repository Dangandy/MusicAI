import { z } from "zod";
import { UseFormReturn } from "react-hook-form";

// Define the schema for the form
export const FormSchema = z.object({
  prompt: z.string().min(10, {
    message: "Prompt must be at least 10 characters.",
  }),
});

// Inferred type from the schema
export type FormSchemaType = z.infer<typeof FormSchema>;

// Props for the InputPrompt component
export interface InputPromptProps {
  form: UseFormReturn<FormSchemaType>;
  onSubmit: (data: FormSchemaType) => void;
  onContinue: () => void;
  loading: boolean;
  setNotation: (notation: string) => void;
  completeNotation: string;
}
