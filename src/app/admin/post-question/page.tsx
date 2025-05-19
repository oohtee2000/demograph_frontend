// 'use client'; 

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { PlusCircle, Send } from "lucide-react";

// const formSchema = z.object({
//     question: z.string().min(10, { message: "Question must be at least 10 characters" }),
//     isActive: z.boolean().default(true),
// });

// type FormData = z.infer<typeof formSchema>;

// const PostQuestion = () => {
//   const router = useRouter();
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>({
//     resolver: zodResolver(formSchema), //error: Type 'Resolver<{ question: string; isActive?: boolean | undefined; }, any, { question: string; isActive: boolean; }>' is not assignable to type 'Resolver<{ question: string; isActive: boolean; }, any, { question: string; isActive: boolean; }>'. Types of parameters 'options' and 'options' are incompatible.   Type 'ResolverOptions<{ question: string; isActive: boolean; }>' is not assignable to type 'ResolverOptions<{ question: string; isActive?: boolean | undefined; }>'. Type 'boolean | undefined' is not assignable to type 'boolean'. Type 'undefined' is not assignable to type 'boolean'.ts(2322)
//     defaultValues: {
//       question: "",
//       isActive: true,
//     },
//   });

//   const onSubmit = async (values: FormData) => {
//     setErrorMessage("");
//     setSuccessMessage("");

//     try {
//       const response = await fetch('https://demograph-backend.onrender.com/api/questions', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           question_text: values.question,
//           isActive: values.isActive,
//         }),
//       });

//       if (!response.ok) {
//         const data = await response.json();
//         setErrorMessage(data.message || "Failed to post question.");
//         return;
//       }

//       setSuccessMessage("Your question has been posted successfully.");
//       setTimeout(() => router.push('/'), 2000);
//     } catch (error) {
//       setErrorMessage("An unexpected error occurred. Please try again.");
//       console.error(error);
//     }
//   };
  
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <main className="flex-grow container mx-auto px-4 py-8">
//         <div className="max-w-2xl mx-auto">
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl flex items-center justify-center gap-2">
//               <PlusCircle className="h-8 w-8" />
//               Post a New Question
//             </h1>
//             <p className="mt-4 text-lg text-gray-600">
//               Create a question for the community to answer
//             </p>
//           </div>

//           {successMessage && (
//             <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6" role="alert">
//               <strong className="font-bold">Success!</strong>
//               <span className="block sm:inline ml-2">{successMessage}</span>
//             </div>
//           )}

//           {errorMessage && (
//             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" role="alert">
//               <strong className="font-bold">Error:</strong>
//               <span className="block sm:inline ml-2">{errorMessage}</span>
//             </div>
//           )}

//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-semibold mb-4">Question Details</h2>
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

//               {/* Question Text */}
//               <div>
//                 <label htmlFor="question" className="block text-sm font-medium text-gray-700">
//                   Question Text
//                 </label>
//                 <textarea
//                   id="question"
//                   {...register("question")}
//                   placeholder="Enter your question here..."
//                   className="w-full mt-1 p-2 border border-gray-300 rounded-md min-h-[100px]"
//                 />
//                 <p className="text-sm text-gray-500 mt-1">
//                   Write a clear, specific question for users to answer.
//                 </p>
//                 {errors.question && <p className="text-sm text-red-500">{errors.question.message}</p>}
//               </div>

//               {/* Active Checkbox */}
//               <div className="flex items-start gap-2">
//                 <input
//                   type="checkbox"
//                   id="isActive"
//                   checked={watch("isActive")}
//                   onChange={(e) => setValue("isActive", e.target.checked)}
//                   className="mt-1"
//                 />
//                 <div>
//                   <label htmlFor="isActive" className="font-medium text-gray-700">Active Question</label>
//                   <p className="text-sm text-gray-500">
//                     Make this question immediately available for users to answer.
//                   </p>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//                 >
//                   <Send className="h-4 w-4" />
//                   Post Question
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default PostQuestion;


'use client'; 

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PlusCircle, Send } from "lucide-react";

const formSchema = z.object({
  question: z.string().min(10, { message: "Question must be at least 10 characters" }),
  isActive: z.boolean(),
});

type FormData = z.infer<typeof formSchema>;

const PostQuestion = () => {
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
      isActive: true,
    },
  });

  const onSubmit = async (values: FormData) => {
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch('https://demograph-backend.onrender.com/api/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question_text: values.question,
          isActive: values.isActive,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        setErrorMessage(data.message || "Failed to post question.");
        return;
      }

      setSuccessMessage("Your question has been posted successfully.");
      setTimeout(() => router.push('/'), 2000);
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
      console.error(error);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl flex items-center justify-center gap-2">
              <PlusCircle className="h-8 w-8" />
              Post a New Question
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Create a question for the community to answer
            </p>
          </div>

          {successMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6" role="alert">
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline ml-2">{successMessage}</span>
            </div>
          )}

          {errorMessage && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" role="alert">
              <strong className="font-bold">Error:</strong>
              <span className="block sm:inline ml-2">{errorMessage}</span>
            </div>
          )}

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Question Details</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              {/* Question Text */}
              <div>
                <label htmlFor="question" className="block text-sm font-medium text-gray-700">
                  Question Text
                </label>
                <textarea
                  id="question"
                  {...register("question")}
                  placeholder="Enter your question here..."
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md min-h-[100px]"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Write a clear, specific question for users to answer.
                </p>
                {errors.question && <p className="text-sm text-red-500">{errors.question.message}</p>}
              </div>

              {/* Active Checkbox */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={watch("isActive")}
                  onChange={(e) => setValue("isActive", e.target.checked)}
                  className="mt-1"
                />
                <div>
                  <label htmlFor="isActive" className="font-medium text-gray-700">Active Question</label>
                  <p className="text-sm text-gray-500">
                    Make this question immediately available for users to answer.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  <Send className="h-4 w-4" />
                  Post Question
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PostQuestion;
