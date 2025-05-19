'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-extrabold text-brand-600 tracking-wide">
                QuestionVerse
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex md:space-x-8 items-center">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-md transition"
            >
              Questions
            </Link>
            <Link
              href="/dashboard"
              className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-md transition"
            >
              Dashboard
            </Link>

            <Link href="/post-question" passHref>
              <Button
                variant="outline"
                className="ml-6 px-5 py-2 rounded-md border-brand-600 text-brand-600 font-semibold hover:bg-brand-600 hover:text-white transition"
              >
                Post a Question
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
