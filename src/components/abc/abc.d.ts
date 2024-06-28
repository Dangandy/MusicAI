export declare const defaultNotations: string[];
export declare const defaultPrompts: string[];

export interface AbcPromptProps {
  notation: string;
  setNotation: (notation: string) => void;
}

export interface AbcPlayerProps {
  notation: string;
}
