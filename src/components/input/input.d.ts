import { z } from "zod";
import { UseFormReturn } from "react-hook-form";

// Type declaration for FormSchema
export declare const FormSchema: z.ZodObject<{
  prompt: z.ZodString;
}, "strip", z.ZodTypeAny, {
  prompt: string;
}, {
  prompt: string;
}>;

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
