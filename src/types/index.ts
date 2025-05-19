export interface User {
    id: string;
    email: string;
    location: {
      country: string;
      state: string;
    };
    ipAddress: string;
    dateAnswered: string;
  }
  
  export interface Question {
    id: string;
    text: string;
    options?: string[];
    createdAt: string;
    answeredBy: number;
    isActive: boolean;
  }
  
  export interface Answer {
    id: string;
    questionId: string;
    userId: string;
    value: string;
    createdAt: string;
  }
  
  export interface Statistics {
    totalParticipants: number;
    participantsByCountry: {
      [country: string]: number;
    };
    participantsByState: {
      [state: string]: number;
    };
    totalAnswers: number;
  }
  