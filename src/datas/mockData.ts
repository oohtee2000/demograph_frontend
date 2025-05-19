import { Question, User, Statistics } from "@/types";

export const mockQuestions: Question[] = [
  {
    id: "q1",
    text: "What is your favorite programming language?",
    options: ["JavaScript", "Python", "Java", "C#", "TypeScript", "Other"],
    createdAt: "2023-05-10T12:00:00Z",
    answeredBy: 243,
    isActive: true,
  },
  {
    id: "q2",
    text: "How many years of experience do you have in software development?",
    options: ["Less than 1 year", "1-3 years", "3-5 years", "5-10 years", "10+ years"],
    createdAt: "2023-05-15T14:30:00Z",
    answeredBy: 198,
    isActive: true,
  },
  {
    id: "q3",
    text: "What is your preferred frontend framework?",
    options: ["React", "Vue", "Angular", "Svelte", "None/Vanilla JS", "Other"],
    createdAt: "2023-05-20T09:15:00Z",
    answeredBy: 176,
    isActive: true,
  },
  {
    id: "q4",
    text: "Do you prefer working remotely or in an office?",
    options: ["Remote", "Office", "Hybrid", "No preference"],
    createdAt: "2023-05-25T16:45:00Z",
    answeredBy: 267,
    isActive: false,
  },
  {
    id: "q5",
    text: "What database system do you primarily work with?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Firebase", "Other"],
    createdAt: "2023-06-01T11:20:00Z", 
    answeredBy: 152,
    isActive: true,
  }
];

export const mockUsers: User[] = [
  {
    id: "u1",
    email: "user1@example.com",
    location: {
      country: "United States",
      state: "California",
    },
    ipAddress: "192.168.1.101",
    dateAnswered: "2023-05-15T09:30:00Z",
  },
  {
    id: "u2",
    email: "user2@example.com",
    location: {
      country: "United Kingdom",
      state: "England",
    },
    ipAddress: "192.168.1.102",
    dateAnswered: "2023-05-16T14:45:00Z",
  },
  {
    id: "u3",
    email: "user3@example.com",
    location: {
      country: "Canada",
      state: "Ontario",
    },
    ipAddress: "192.168.1.103",
    dateAnswered: "2023-05-17T11:20:00Z",
  },
  {
    id: "u4",
    email: "user4@example.com",
    location: {
      country: "Australia",
      state: "New South Wales",
    },
    ipAddress: "192.168.1.104",
    dateAnswered: "2023-05-18T16:10:00Z",
  },
  {
    id: "u5",
    email: "user5@example.com",
    location: {
      country: "Germany",
      state: "Bavaria",
    },
    ipAddress: "192.168.1.105",
    dateAnswered: "2023-05-19T08:15:00Z",
  },
  {
    id: "u6",
    email: "user6@example.com",
    location: {
      country: "United States",
      state: "New York",
    },
    ipAddress: "192.168.1.106",
    dateAnswered: "2023-05-20T13:40:00Z",
  },
  {
    id: "u7",
    email: "user7@example.com",
    location: {
      country: "India",
      state: "Maharashtra",
    },
    ipAddress: "192.168.1.107",
    dateAnswered: "2023-05-21T10:05:00Z",
  },
  {
    id: "u8",
    email: "user8@example.com",
    location: {
      country: "United States",
      state: "Texas",
    },
    ipAddress: "192.168.1.108",
    dateAnswered: "2023-05-22T15:25:00Z",
  }
];

export const mockStatistics: Statistics = {
  totalParticipants: 876,
  participantsByCountry: {
    "United States": 342,
    "United Kingdom": 124,
    "India": 98,
    "Germany": 76,
    "Canada": 65,
    "Australia": 58,
    "France": 42,
    "Brazil": 37,
    "Japan": 34
  },
  participantsByState: {
    "California": 156,
    "New York": 87,
    "Texas": 65,
    "Florida": 34,
    "England": 124,
    "Bavaria": 45,
    "Ontario": 38,
    "Maharashtra": 67,
    "New South Wales": 29
  },
  totalAnswers: 4321
};