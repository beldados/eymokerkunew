// src/app/page.tsx
'use client';
// SD Steal: Need 'use client' for hooks (useState, useEffect)

import { Question } from '@/types/quiz'; // Import the Contract
import { useEffect, useState } from 'react';

export default function QuizConductor() {
  // 1. STATE MANAGEMENT (The Brain)
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // 2. THE EFFECT (The Pipe Opener - Stealing the Fetch)
  useEffect(() => {
    // SD Note: Define the function inside useEffect for cleanliness
    const fetchQuestions = async () => {
      try {
        const response = await fetch('/api/quiz'); // Call YOUR endpoint!
        if (!response.ok) throw new Error('Network response was not ok');

        const data: Question[] = await response.json();
        setQuestions(data); // Put the data into state

        // --- THE UGLY DEBUG CHECK ---
        console.log("SUCCESS: Data pipe opened. Fetched questions:", data);
        // -----------------------------
      } catch (error) {
        console.error("Failed to fetch quiz questions:", error);
      } finally {
        setIsLoading(false); // Stop the loading state regardless of outcome
      }
    };

    fetchQuestions();
  }, []); // Empty dependency array means run ONLY on mount (page load)

  // 3. CONDITIONAL RENDERING (The Pro Display)
  if (isLoading) {
    // SD Steal: Always show a loading state for better UX
    return <div className="text-center p-8">Loading Ethio-Prep Questions...</div>;
  }

  if (questions.length === 0) {
    return <div className="text-center p-8 text-red-500">Error: No questions loaded. Check your API route.</div>;
  }

  // Final view: Just show the question text for now!
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Question {currentQuestionIndex + 1}</h1>
      <p className="text-xl mb-6">{currentQuestion.text}</p>

      {/* SD Note: Next step is to replace this with the QuizCard component */}
      <div className="mt-8 border p-4 bg-gray-50">
        <p>The Answer is Index: {currentQuestion.correctionIndex}</p>
        <p>Options will go here, mapped from the array.</p>
      </div>

    </div>
  );
}
