// 'use client'

// import React, { useState, useEffect } from 'react';
// import QuestionCard from '@/components/QuestionCard';
// import EmailRegistration from '@/components/EmailRegistration';

// type QuestionOption = {
//   label: string;
//   text: string;
// };

// type Question = {
//   id: number;
//   question_text: string;
//   options: QuestionOption[];
// };

// const API_BASE = "https://demograph-backend.onrender.com/api";

// const Index = () => {
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [userEmail, setUserEmail] = useState<string | null>(null);
//   const [userId, setUserId] = useState<number | null>(null);
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [loadingQuestions, setLoadingQuestions] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const fetchQuestions = async () => {
//     setLoadingQuestions(true);
//     setError(null);
//     try {
//       const res = await fetch(`${API_BASE}/questions`);
//       console.log('Fetch response status:', res.status);
//       if (!res.ok) throw new Error("Failed to fetch questions");
//       const data: Question[] = await res.json();
//       console.log('Fetched questions:', data);
//       setQuestions(data);
//     } catch (err) {
//       console.error(err);
//       setError((err as Error).message);
//     } finally {
//       setLoadingQuestions(false);
//     }
//   };
  


//   const handleRegistrationComplete = async (email: string, country: string, state: string) => {
//     const userData = {
//       email,
//       country,
//       state,
//       ip_address: "0.0.0.0", // Keep as before or get actual IP if you want
//       device_id: null,
//     };
  
//     try {
//       const res = await fetch(`${API_BASE}/users`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(userData),
//       });
  
//       if (res.status === 409) {
//         alert("User already exists or IP already used.");
//         return;
//       }
//       if (!res.ok) throw new Error("Registration failed");
  
//       const json = await res.json();
//       setUserId(json.userId);
//       setUserEmail(email);
//       setIsRegistered(true);
//       fetchQuestions();
//     } catch (err) {
//       alert((err as Error).message);
//     }
//   };
  

//   // Submit answer to backend
//   const handleAnswerSubmit = async (questionId: number, answer: string) => {
//     if (!userId) {
//       alert("User not registered");
//       return;
//     }

//     try {
//       const res = await fetch(`${API_BASE}/answers`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           user_id: userId,
//           question_id: questionId,
//           answer_text: answer,
//         }),
//       });

//       if (!res.ok) throw new Error("Failed to submit answer");

//       alert("Answer submitted successfully!");
//     } catch (err) {
//       alert((err as Error).message);
//     }
//   };

//   // If already registered, fetch questions on mount
//   useEffect(() => {
//     if (isRegistered) {
//       fetchQuestions();
//     }
//   }, [isRegistered]);

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <main className="flex-grow container mx-auto px-4 py-8">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
//               Welcome to QuestionVerse
//             </h1>
//             <p className="mt-4 text-lg text-gray-600">
//               Answer questions and share your perspective with the community
//             </p>
//           </div>

//           {!isRegistered ? (
//             <div className="my-8">
//               <EmailRegistration onRegistrationComplete={handleRegistrationComplete} />
//             </div>
//           ) : (
//             <>
//               <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
//                 <p className="text-sm text-gray-600">
//                   Signed in as <span className="font-medium">{userEmail}</span>
//                 </p>
//               </div>

//               {loadingQuestions && <p>Loading questions...</p>}
//               {error && <p className="text-red-500">{error}</p>}

//               <div className="space-y-6">
//               {questions.map((question) => (
//   <QuestionCard
//     key={question.id}
//     question={question}
//     userId={userId!} // userId should be set if registered
//     onSubmit={(answer) => handleAnswerSubmit(question.id, answer)} //error: Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
//   />
// ))}

//               </div>
//             </>
//           )}
//         </div>
//       </main>

//       <footer className="bg-white border-t py-6">
//         <div className="container mx-auto px-4 text-center text-sm text-gray-500">
//           © {new Date().getFullYear()} QuestionVerse. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Index;

'use client'

import React, { useState, useEffect } from 'react';
import QuestionCard from '@/components/QuestionCard';
import EmailRegistration from '@/components/EmailRegistration';

type QuestionOption = {
  label: string;
  text: string;
};

type Question = {
  id: number;
  question_text: string;
  options: QuestionOption[];
};

const API_BASE = "https://demograph-backend.onrender.com/api";

const Index = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userId, setUserId] = useState<number | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch questions from backend
  const fetchQuestions = async () => {
    setLoadingQuestions(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/questions`);
      console.log('Fetch response status:', res.status);
      if (!res.ok) throw new Error("Failed to fetch questions");
      const data: Question[] = await res.json();
      console.log('Fetched questions:', data);
      setQuestions(data);
    } catch (err) {
      console.error(err);
      setError((err as Error).message);
    } finally {
      setLoadingQuestions(false);
    }
  };

  const handleRegistrationComplete = async (email: string, country: string, state: string) => {
    const userData = {
      email,
      country,
      state,
      ip_address: "0.0.0.0", // Keep as before or get actual IP if you want
      device_id: null,
    };
  
    try {
      const res = await fetch(`${API_BASE}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
  
      if (res.status === 409) {
        alert("User already exists or IP already used.");
        return;
      }
      if (!res.ok) throw new Error("Registration failed");
  
      const json = await res.json();
      setUserId(json.userId);
      setUserEmail(email);
      setIsRegistered(true);
      fetchQuestions();
    } catch (err) {
      alert((err as Error).message);
    }
  };
  
  // Submit answer to backend
  const handleAnswerSubmit = async (questionId: number, answer: string) => {
    if (!userId) {
      alert("User not registered");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/answers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          question_id: questionId,
          answer_text: answer,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit answer");

      alert("Answer submitted successfully!");
    } catch (err) {
      alert((err as Error).message);
    }
  };

  // If already registered, fetch questions on mount
  useEffect(() => {
    if (isRegistered) {
      fetchQuestions();
    }
  }, [isRegistered]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Welcome to QuestionVerse
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Answer questions and share your perspective with the community
            </p>
          </div>

          {!isRegistered ? (
            <div className="my-8">
              <EmailRegistration onRegistrationComplete={handleRegistrationComplete} />
            </div>
          ) : (
            <>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
                <p className="text-sm text-gray-600">
                  Signed in as <span className="font-medium">{userEmail}</span>
                </p>
              </div>

              {loadingQuestions && <p>Loading questions...</p>}
              {error && <p className="text-red-500">{error}</p>}

              <div className="space-y-6">
                {questions.map((question) => (
                  <QuestionCard
                    key={question.id}
                    question={question}
                    userId={userId!} // userId should be set if registered
                    onSubmit={handleAnswerSubmit} // Fixed here
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <footer className="bg-white border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} QuestionVerse. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
