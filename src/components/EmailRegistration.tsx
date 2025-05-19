import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface EmailRegistrationProps {
  onRegistrationComplete: (email: string, country: string, state: string) => void;
}

const EmailRegistration: React.FC<EmailRegistrationProps> = ({ onRegistrationComplete }) => {
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email. Please enter a valid email address.");
      return;
    }
    if (!country.trim()) {
      alert("Please enter your country.");
      return;
    }
    if (!state.trim()) {
      alert("Please enter your state.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      onRegistrationComplete(email, country.trim(), state.trim());
      setIsSubmitting(false);

      alert("Registration successful! You can now answer the questions.");
    }, 1500);
  };

  return (
    <Card className="max-w-md mx-auto mt-10 shadow-lg rounded-xl border border-gray-200">
      <CardHeader className="px-8 pt-10 pb-6 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 rounded-t-xl shadow-md">
  <div className="flex items-center space-x-3">
    {/* Example: Icon or logo placeholder */}
    <svg 
      className="w-10 h-10 text-white" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg" 
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"></path>
    </svg>
    <CardTitle className="text-3xl font-extrabold text-white tracking-tight">
      Join QuestionVerse
    </CardTitle>
  </div>
  <CardDescription className="text-indigo-100 mt-3 text-base max-w-[300px] leading-relaxed">
    Enter your email, country, and state to start answering questions.
  </CardDescription>
  <div className="mt-4 h-1 w-20 bg-white rounded-full shadow-sm"></div> {/* accent underline */}
</CardHeader>

      <CardContent className="px-8 pt-0 pb-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <Label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700">
              Email Address
            </Label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-lg border border-gray-300 px-4 py-3 text-base placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                         transition-shadow shadow-sm"
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="country" className="mb-2 text-sm font-medium text-gray-700">
              Country
            </Label>
            <input
              id="country"
              type="text"
              placeholder="Your country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              className="rounded-lg border border-gray-300 px-4 py-3 text-base placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                         transition-shadow shadow-sm"
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="state" className="mb-2 text-sm font-medium text-gray-700">
              State
            </Label>
            <input
              id="state"
              type="text"
              placeholder="Your state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              className="rounded-lg border border-gray-300 px-4 py-3 text-base placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                         transition-shadow shadow-sm"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="px-8 pb-8 pt-0">
        <Button
          onClick={handleSubmit}
          disabled={!email || !country || !state || isSubmitting}
          className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500
                     disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-lg"
        >
          {isSubmitting ? "Verifying..." : "Start Answering"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EmailRegistration;
