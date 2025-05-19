'use client'

import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"; 
import { useRouter } from 'next/navigation';  // Import Next.js router

interface QuestionCardProps {
  question?: Question | null;
  userId: number; // Required to submit answer
  onSubmit?: (questionId: number, answer: string) => void;
  className?: string;
}

type Question = {
  id: number;
  question_text: string;
  // options removed since no multiple choice anymore
};

const QuestionCard: React.FC<QuestionCardProps> = ({ question, userId, onSubmit, className }) => {
  const [answerText, setAnswerText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  
  const router = useRouter();

  if (!question) {
    return <div className={`w-full ${className} p-4 text-center text-gray-500`}>No question available</div>;
  }

  // const handleSubmit = async () => {
  //   if (!answerText.trim()) {
  //     alert("Please enter your answer before submitting.");
  //     return;
  //   }

  //   setIsSubmitting(true);

  //   try {
  //     const res = await fetch("https://demograph-backend.onrender.com/api/answers", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         user_id: userId,
  //         question_id: question.id,
  //         answer_text: answerText.trim(),
  //       }),
  //     });

  //     if (!res.ok) throw new Error("Failed to submit answer");

  //     setIsAnswered(true);
  //     if (onSubmit) onSubmit(question.id, answerText.trim());
  //     alert("Answer submitted! Thank you for your participation.");
  //   } catch (err) { //error: 'err' is defined but never used.eslint
  //     alert("Failed to submit answer. Please try again.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async () => {
    if (!answerText.trim()) {
      alert("Please enter your answer before submitting.");
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      const res = await fetch("https://demograph-backend.onrender.com/api/answers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          question_id: question.id,
          answer_text: answerText.trim(),
        }),
      });
  
      if (!res.ok) throw new Error("Failed to submit answer");
  
      setIsAnswered(true);
      if (onSubmit) onSubmit(question.id, answerText.trim());
      alert("Answer submitted! Thank you for your participation.");
    } catch (err) {
      console.error(err);
      alert("Failed to submit answer. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const goHome = () => {
    router.push('/'); // Navigate to home page
  };

  return (
    <>
      <Card className={`w-full ${className}`}>
        <CardHeader>
          <CardTitle className="text-xl">{question.question_text}</CardTitle>
        </CardHeader>
        <CardContent>
          {!isAnswered ? (
            <textarea
              className="w-full border rounded p-2"
              rows={4}
              value={answerText}
              onChange={(e) => setAnswerText(e.target.value)}
              placeholder="Type your answer here..."
            />
          ) : (
            <div className="p-4 bg-green-50 rounded-md text-green-700 text-center">
              Your answer has been recorded. Thank you!
            </div>
          )}
        </CardContent>
        <CardFooter>
          <button
            onClick={handleSubmit}
            style={{ padding: "8px 16px", backgroundColor: "blue", color: "white" }}
            disabled={isSubmitting}
          >
            Submit Answer
          </button>
        </CardFooter>
      </Card>

      {/* Go to Home button placed outside the Card */}
      <div className="mt-4 text-center">
        <button
          onClick={goHome}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          Go to Home Page
        </button>
      </div>
    </>
  );
};

export default QuestionCard;
