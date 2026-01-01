import type { LeaderboardCardProps } from '../../lib/types/students-leaderboard-data';
import styles from './leaderboard-card.module.scss';
import crown from '../../../../assets/crown.svg';
import grade from '../../../../assets/grade.svg';
import section from '../../../../assets/section.svg';
import avatar from '../../../../client/public/avatar/avatar-07.png';
import string from '../../../../assets/strings.json';

export default function LeaderboardCard({ rank, student }: LeaderboardCardProps) {
  // translations
  const t = string;

  const rankClass = rank === 1 ? styles.first : rank === 3 ? styles.third : styles.second;
  const rankName =
    rank === 1 ? t['first place']['ar'] : rank === 2 ? t['second place']['ar'] : t['third place']['ar'];

  const show = rank === 1;
  return (
    <div className={`${styles.cardWrapper} ${rankClass}`}>
      <div className={styles.cardContainer}>
        {/* top circle */}
        <div className={styles.topCircle}>
          {/* inner circle */}
          <figure className={`${styles.innerCircle} ${rankClass}`}>
            {/* crown */}
            {show && (
              <figure className={styles.crown}>
                <img src={crown} alt="crown" />
              </figure>
            )}
            <img
              className={styles.profileImage}
              src={student?.studentImage ? student?.studentImage : avatar}
              alt="img"
            />
          </figure>
        </div>
        <h2 className={styles.cardTitle}>{student?.name?.ar}</h2>
        <p className={styles.cardSubtitle}>{rankName}</p>
        <div className={styles.pointsContainer}>
          <p className={`${styles.pointsBadge} ${rankClass} english-text`}>{student?.points} PT</p>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.infoGroup}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>{t['grade']['ar']}</span>
              <span className={`${styles.infoValue} english-text`}>{student?.grade}</span>
            </div>
            <figure className={styles.iconContainer}>
              <img src={grade} alt="grade" />
            </figure>
          </div>
          <div className={styles.infoGroup}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>{t['section']['ar']}</span>
              <span className={styles.infoValue}>{student?.section}</span>
            </div>
            <figure className={styles.iconContainer}>
              <img src={section} alt="section" />
            </figure>
          </div>
        </div>
      </div>
      <div className={`${styles.rankNumber} ${rankClass} english-text`}>{rank}</div>
    </div>
  );
}
