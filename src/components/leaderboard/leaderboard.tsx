import styles from './leaderboard.module.scss';
import logo from '../../../../assets/logo.svg';
import school from '../../../../client/src/assets/school.png';
import LeaderboardCard from './leaderboard-card';
import { useLeaderboard } from '../../hooks/use-leaderboard';
import { Audio } from 'react-loader-spinner';
import type { LeaderboardCardProps } from '../../lib/types/students-leaderboard-data';
import string from '../../../../assets/strings.json';
import Error from '../../shared/error-component/error';
export default function Leaderboard() {
  // translations
  const t = string;

  //hooks
  const { data, loading, error, refetch } = useLeaderboard();

  // students
  const students = data?.students ?? [];

  // sorted students
  const sortedStudents = students ? [...students].sort((a, b) => b.points - a.points).slice(0, 3) : [];

  // ranked students
  const rankedStudents = sortedStudents.map((student, index) => ({
    student,
    rank: (index + 1) as 1 | 2 | 3,
  }));

  if (error) {
    return (
      <div className={styles.leaderBoard}>
        <nav className={styles.leaderBoardNav}>
          <figure className={styles.leaderBoardLogo}>
            <img src={logo} alt="logo" />
          </figure>
        </nav>
        <main className={styles.leaderBoardMain}>
          <Error onRetry={() => refetch()} />
        </main>
      </div>
    );
  }
  return (
    <div className={styles.leaderBoard}>
      <nav className={styles.leaderBoardNav}>
        <figure className={styles.leaderBoardLogo}>
          <img src={logo} alt="logo" />
        </figure>
      </nav>
      <main className={styles.leaderBoardMain}>
        {loading ? (
          <Audio height="80" width="80" color="white" ariaLabel="loading" />
        ) : (
          <>
            <div className={styles.leaderBoardHeader}>
              <div className={styles.headerInfo}>
                <p className={styles.headerLabel}>{t.leaderboard.ar}</p>
                <h2 className={styles.headerValue}>{data?.school?.name?.ar}</h2>
              </div>
              <figure className={styles.iconContainer}>
                <img src={data?.school?.image ?? school} alt="school" />
              </figure>
            </div>
            <div className={styles.leaderBoardBody}>
              {rankedStudents.length > 0 ? (
                rankedStudents.map(({ student, rank }: LeaderboardCardProps) => (
                  <LeaderboardCard key={student?.id} student={student} rank={rank} />
                ))
              ) : (
                <div className={styles.emptyState}>
                  <p>{t['no students found']['ar']}</p>
                </div>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
