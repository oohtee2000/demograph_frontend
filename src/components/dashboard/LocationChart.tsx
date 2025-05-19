
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';//error : Cannot find module 'recharts' or its corresponding type declarations.ts(2307)
import { Statistics } from '@/types';

interface LocationChartProps {
  statistics: Statistics;
}

const LocationChart: React.FC<LocationChartProps> = ({ statistics }) => {
  const [activeTab, setActiveTab] = useState<'country' | 'state'>('country');

  const formatDataForChart = (data: Record<string, number>, maxItems: number = 10) => {
    return Object.entries(data)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, maxItems);
  };

  const countryData = formatDataForChart(statistics.participantsByCountry);
  const stateData = formatDataForChart(statistics.participantsByState);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Participant Locations</CardTitle>
        <CardDescription>Breakdown of participants by geographical location</CardDescription>
        <Tabs defaultValue="country" onValueChange={(val) => setActiveTab(val as 'country' | 'state')}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="country">By Country</TabsTrigger>
            <TabsTrigger value="state">By State/Region</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={activeTab === 'country' ? countryData : stateData}
              margin={{ top: 5, right: 20, left: 20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={-45} 
                textAnchor="end" 
                height={70}
                tick={{ fontSize: 12 }}
              />
              <YAxis />
              <Tooltip formatter={(value) => [`${value} participants`, 'Participants']} />
              <Bar dataKey="value" name="Participants" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationChart;