import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from '@/types';
import { formatDistanceToNow } from 'date-fns'; //error: annot find module 'date-fns' or its corresponding type declarations.ts(2307)

interface RecentUsersProps {
  users: User[];
}

const RecentUsers: React.FC<RecentUsersProps> = ({ users }) => {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Recent Participants</CardTitle>
        <CardDescription>The most recent users who have answered questions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {users.slice(0, 5).map((user) => (
            <div key={user.id} className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-medium">{user.email}</p>
                <p className="text-sm text-gray-500">{`${user.location.country}, ${user.location.state}`}</p>
              </div>
              <div className="text-sm text-gray-500">
                {formatDistanceToNow(new Date(user.dateAnswered), { addSuffix: true })}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentUsers;