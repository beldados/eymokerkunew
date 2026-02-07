import { Question } from "@/types/quiz";
export const mockQuestions: Question[] = [{
  id: 'q-math-001',
  text: 'What is the maximum value of $f(x) = -x^2 + 4x - 3$?',
  options: ['1', '2', '0', '-3'],
  correctionIndex: 0,
  explanation: 'The function is a parabola opening downwards. The maximum value occurs at the vertex x = -b/(2a) = -4/(2*-1) = 2. Submitting x=2 gives y = -(2)^2 + 4(2) - 3 = 1.',

},
{
  id: 'q-bio-002',
  text: 'Which organelle is primarily responsible for photosynthesis in plant cells?',
  options: ['Mitochondria', 'Nucleus', 'Ribosomes', 'Chloroplast'],
  correctionIndex: 3,
  explanation: 'Chloroplasts contain chlorophyll and are the sites where the process of photosynthesis takes place.',
},


];
