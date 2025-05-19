'use client';

import React from 'react';
// import Navbar from '@/components/Navbar'; // uncomment and use your actual path
import StatCard from '@/components/StatCard';
import LocationChart from '@/components/dashboard/LocationChart';
import RecentUsers from '@/components/dashboard/RecentUsers';
import { mockStatistics, mockUsers, mockQuestions } from '@/datas/mockData';
import { Users, MapPin, Map } from 'lucide-react';

const Dashboard = () => {
  const activeQuestions = mockQuestions.filter(q => q.isActive).length;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* <Navbar /> */}

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Overview of question participation and analytics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Total Participants"
            value={mockStatistics.totalParticipants}
            icon={<Users size={20} />}
          />
          <StatCard
            title="Countries"
            value={Object.keys(mockStatistics.participantsByCountry).length}
            icon={<Map size={20} />}
          />
          <StatCard
            title="States/Regions"
            value={Object.keys(mockStatistics.participantsByState).length}
            icon={<MapPin size={20} />}
          />
          <StatCard
            title="Active Questions"
            value={activeQuestions}
            description={`out of ${mockQuestions.length} total questions`}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <RecentUsers users={mockUsers} />
          <LocationChart statistics={mockStatistics} />
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

export default Dashboard;
