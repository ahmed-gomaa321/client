export interface LocalizedName {
  ar: string;
  en: string;
}

export interface Student {
  id: string;
  name: LocalizedName;
  grade: string;
  section: string;
  schoolName: LocalizedName;
  points: number;
  studentImage: string | null;
}

export interface School {
  id: string;
  name: LocalizedName;
  image: string;
}

export interface StudentsLeaderboardData {
  school: School;
  students: Student[];
}

export interface StudentsLeaderboardQuery {
  studentsLeaderboard: StudentsLeaderboardData;
}

export interface LeaderboardCardProps {
  student: Student;
  rank: 1 | 2 | 3;
}
