// src/app/api/quiz/route.ts
import { NextResponse } from 'next/server';
// Local mock data (inlined because ../../lib/db-mock was missing)
const mockQuestions = [
  {
    id: 'q1',
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '22'],
    answer: '4'
  },
  {
    id: 'q2',
    question: 'What is the capital of France?',
    options: ['Paris', 'Rome', 'Berlin', 'Madrid'],
    answer: 'Paris'
  }
];

// SD Steal: This function handles the HTTP GET request.
export async function GET() {
  // Simulating a network delay for a more realistic feel
  // await new Promise((resolve) => setTimeout(resolve, 500));

  // Return the mock data as a JSON response.
  return NextResponse.json(mockQuestions);
}

// SD Note: Now, open your browser to http://localhost:3000/api/quiz.
// If you see your JSON data, the pipeline is OPEN. Celebrate this win!
