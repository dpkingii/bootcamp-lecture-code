export default function HomeworkButton({ onHomeworkClick }) {
  return (
    <button
      className="cookie-btn"
      onClick={onHomeworkClick}
      aria-label="Click to do homework"
    >
      📝
    </button>
  );
}
