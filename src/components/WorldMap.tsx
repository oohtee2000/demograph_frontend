import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface WorldMapProps {
  locationData: { country: string; count: number; percentage: number }[];
}

const WorldMap: React.FC<WorldMapProps> = ({ locationData }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Participant Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
          <p className="text-muted-foreground">
            World map visualization goes here
          </p>
        </div>

        {/* Example usage of locationData */}
        <ul className="mt-4">
          {locationData.map(({ country, count, percentage }) => (
            <li key={country} className="text-sm">
              {country}: {count} participants ({percentage}%)
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default WorldMap;
