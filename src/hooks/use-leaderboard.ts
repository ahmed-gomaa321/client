import { useQuery } from '@apollo/client/react';
import type { StudentsLeaderboardQuery } from '../lib/types/students-leaderboard-data';
import { STUDENTS_LEADERBOARD_QUERY } from '../lib/services/leaderboard.service';

export function useLeaderboard() {
  const { data, loading, error } = useQuery<StudentsLeaderboardQuery>(STUDENTS_LEADERBOARD_QUERY, {
    variables: { schoolId: '1' },
  });

  return {
    data: data?.studentsLeaderboard,
    loading,
    error,
  };
}
