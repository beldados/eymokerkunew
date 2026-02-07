// This is the blueprint for a single question object.
// Every question we get from the API or show in the UI must match this structure.
export interface Question {
  id: string,
  text: string;
  options: string[];
  correctionIndex: number;
  explanation: string;
}

export interface UserAnswer {
  questionId: string;
  selectedIndex: number;
  isCorrect: boolean;
}
