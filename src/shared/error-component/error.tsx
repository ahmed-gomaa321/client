import style from './error.module.scss';
import string from '../../../../assets/strings.json';
export default function Error({ onRetry }: { onRetry?: () => void }) {
  const t = string;
  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };
  return (
    <div className={style.errorWrapper}>
      <div className={style.errorIcon}>!</div>
      <p className={style.errorMessage}>{t['errors']['ar']}</p>
      <button className={style.retryButton} onClick={handleRetry}>
        {t['try again']['ar']}
      </button>
    </div>
  );
}
