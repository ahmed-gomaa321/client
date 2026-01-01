import { gql } from '@apollo/client';

export const STUDENTS_LEADERBOARD_QUERY = gql`
  query StudentsLeaderboard($schoolId: SchoolID!) {
    studentsLeaderboard(schoolId: $schoolId) {
      school {
        id
        name {
          ar
          en
        }
        image
      }
      students {
        id
        name {
          ar
          en
        }
        grade
        section
        schoolName {
          ar
          en
        }
        points
        studentImage
      }
    }
  }
`;
