export const defaultNotations: string[] = [
  `X:1
T:Jazzy Mozartian Melody
M:4/4
L:1/8
K:C
|: (3EFG | "C"c2 d2 e2 f2 | "F"efgf "C"e2 (3ded | "G"g2 ^f2 "C"e2 d2 | "F"cdec "G"B(3cBA |
"C"c2 d2 e2 f2 | "F"efgf "C"e2 (3ded | "G"g2 ^f2 "C"e2 d2 | "F"cdec "C"c2 :|
|: (3GFE | "Am"A2 B2 c2 d2 | "Dm"defg "G"ed (3cdc | "F"A2 c2 "G"d2 e2 | "C"cdcB "G"A2 (3GFE |
"Am"A2 B2 c2 d2 | "Dm"defg "G"ed (3cdc | "F"A2 c2 "G"d2 e2 | "C"cdcB "C"c2 :|`,
  `X:1
T:Jazzy Mozart Inspired Melody
M:4/4
L:1/4
K:C
"C"D2 E2 "G7"C2 E2 | "F"D2 F2 "C"E2 G2 | "Am"A2 c2 "Dm"d2 f2 | "G7"e2 "C"g2 "F"a2 "C"b2 |
"C"c2 e2 "G7"g2 e2 | "F"a2 f2 "C"e2 c2 | "Am"A2 d2 "Dm"f2 d2 | "G7"g2 "C"e2 "C7"g2 "F"a2 |
"Bb"b2 d2 "F7"c2 A2 | "Bb"B3 A "E7"G3 F | "Am"A2 G2 "Dm"F2 E2 | "G7"D3 G "C"c3 E |
"C"E3 F "G7"G2 A2 | "C"G2 F2 "F"E2 D2 | "G7"D3 G "C"E3 F | "C"G2 "G7"c2 "C"c2 z2 |]`,
  `X:1
T:Lively Baroque Melody
M:4/4
L:1/8
K:C
%%score (V1 V2)
[V:V1] z2 G2 G2| c2 e2 e2| d4 D2| E4 z2| z2 G2 G2| c2 e2 e2| d4 D2| E4 z2|
[V:V2] E2 C2 C2| E2 C2 C2| A4 G2| F4 z2| E2 C2 C2| E2 C2 C2| A4 G2| F4 z2|
[V:V1] z2 G2 G2| c2 e2 e2| d4 D2| E4 z2| z2 G2 G2| c2 e2 e2| d4 D2| E4 z2|
[V:V2] c2 e2 e2| g2 e2 e2| a4 g2| f4 z2| c2 e2 e2| g2 e2 e2| a4 g2| f4 z2| 
[V:V1] z2 G2 G2| c2 e2 e2| d4 D2| E4 z2|
[V:V2] E2 C2 C2| E2 C2 C2| A4 G2| F4 z2| E2 C2 C2| E2 C2 C2| A4 G2| F4 z2|
[V:V1] z2 G2 G2| c2 e2 e2| d4 D2| E4 z2| z2 G2 G2| c2 e2 e2| d4 D2| E4 z2|]`,
  `X:1
T:Springtime Frolic
M:4/4
L:1/8
Q:1/4=120
K:C
V:1
(3EFG|:^G2G2A2A2|AGFE F4|E2E2 FGAB|c2c2 ^G3A|
^G2G2A2A2|AGFE F4|c2c2 BABc|1d2d2 d3E:|2d2d2 d4||
|:e2e2 e2^g2|a2^g2 a4|g2g2 g2f2|e2d2 d3E|
e2e2 e2^g2|a2^g2 a4|g2g2 f2e2|1d2d2 d4:|2d2d2 d3E||
V:2
(3C^de|:E2E2F2F2|FGFE F4|D2D2 FGAB|c2c2 C3D|
E2E2F2F2|FGFE F4|c2c2 BABc|1d2d2 d3E:|2d2d2 d4||
|:e2e2 e2^g2|a2^g2 a4|g2g2 g2f2|e2d2 d3E|
e2e2 e2^g2|a2^g2 a4|g2g2 f2e2|1d2d2 d4:|2d2d2 d3E||`,
  `X:1
T:Melancholic Blues
M:4/4
L:1/8
K:Cmin
G,2 | C2 E2 G2 E2 | C2 A,2 E2 G,2 | C2 E2 G2 E2 | D4 G,2 G,2 |
C2 E2 G2 E2 | C2 A,2 E2 G,2 | C2 E2 G2 E2 | F4 C2 C2 |
G2 E2 F2 D2 | C2 A,2 E2 G,2 | C2 E2 G2 E2 | D4 G,2 G,2 |
C2 E2 G2 E2 | C2 A,2 E2 G,2 | C2 E2 G2 F2 | E4 C2 C2 |`,
];

export const defaultPrompts: string[] = [
  "Create a lively melody in ABC notation. The mood should be upbeat and playful, with a style reminiscent of Vivaldi's Spring from The Four Seasons. Ensure the notation is rich with dynamics and variations to capture the essence of Vivaldi's baroque brilliance.",
  "Compose a melody in ABC notation. The mood should be melancholic and soulful, inspired by the blues. Incorporate intricate rhythms and emotive phrasing to convey a deep sense of longing and expression.",
  "Generate a melody in ABC notation. The mood should be jazzy and the style inspired by Mozart. Please make sure the notation is detailed and includes a variety of musical elements to reflect the complexity of jazz and the elegance of Mozart's compositions.",
  "Create a lively melody in ABC notation. The mood should be upbeat and playful, with a style reminiscent of Vivaldi's Spring from The Four Seasons. Ensure the notation is rich with dynamics and variations to capture the essence of Vivaldi's baroque brilliance.",
  "Compose a melody in ABC notation. The mood should be melancholic and soulful, inspired by the blues. Incorporate intricate rhythms and emotive phrasing to convey a deep sense of longing and expression.",
];
