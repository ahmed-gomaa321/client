import style from './error.module.scss';
import string from '../../../../assets/strings.json';
export default function Error() {
  const t = string;
  return (
    <div className={style.errorWrapper}>
      <div className={style.errorIcon}>!</div>
      <p className={style.errorMessage}>{t['errors']['ar']}</p>
      <button className={style.retryButton} onClick={() => window.location.reload()}>
        {t['try again']['ar']}
      </button>
    </div>
  );
}
