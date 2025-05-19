
'use client'

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import StatsCard from "@/components/StatCard"; 
// import QuestionCreator from "@/components/QuestionCard";
import WorldMap from "@/components/WorldMap";
import { Users, MapPin,  ArrowUp } from "lucide-react";

// Sample data - in a real app, this would come from a database
const sampleLocationData = [
  { country: "United States", count: 145, percentage: 42 },
  { country: "United Kingdom", count: 76, percentage: 22 },
  { country: "Canada", count: 54, percentage: 16 },
  { country: "Australia", count: 32, percentage: 9 },
  { country: "Germany", count: 22, percentage: 6 },
  { country: "France", count: 12, percentage: 3 },
  { country: "Japan", count: 6, percentage: 2 },
];

const sampleQuestions = [
  {
    id: "q1",
    title: "What is your favorite color?",
    options: ["Red", "Blue", "Green", "Yellow"]
  },
  {
    id: "q2",
    title: "How often do you exercise?",
    options: ["Daily", "Weekly", "Monthly", "Never"]
  },
  {
    id: "q3",
    title: "What is your age range?",
    options: ["18-24", "25-34", "35-44", "45+"]
  }
];

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your quiz and view participant data
          </p>
        </div>
        <Button>Export Data</Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatsCard 
          title="Total Participants"
          value="347"
          icon={<Users />}
          description="Up 12% from last month"
        />
        <StatsCard 
          title="Unique Locations"
          value="24"
          icon={<MapPin />}
          description="Participants from 24 countries"
        />
        <StatsCard 
          title="Completion Rate"
          value="86%"
          icon={<ArrowUp />}
          description="Average quiz completion rate"
        />
      </div>
      
      <Tabs defaultValue="questions">
        <TabsList>
          <TabsTrigger value="questions">Questions</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="questions" className="space-y-4">
          {/* <QuestionCreator /> */}
          
          <h3 className="text-lg font-medium mt-6">Existing Questions</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sampleQuestions.map((question) => (
              <Card key={question.id}>
                <CardHeader>
                  <CardTitle className="text-md">{question.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {question.options.map((option, i) => (
                      <li key={i}>{option}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="analytics">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Responses Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
                  <p className="text-muted-foreground">
                    Chart visualization will appear here
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <WorldMap locationData={sampleLocationData} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;