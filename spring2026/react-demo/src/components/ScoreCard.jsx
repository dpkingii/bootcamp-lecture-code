export default function ScoreDisplay({ assignments, productivity }) {
  return (
    <div className="score-card">
      <div>
        <div className="score-label">assignments done</div>
        <div className="score-value">{assignments.toLocaleString()}</div>
      </div>
      <div style={{ textAlign: "right" }}>
        <div className="score-label">productivity</div>
        <div className="score-sub">x{productivity}</div>
      </div>
    </div>
  );
}
