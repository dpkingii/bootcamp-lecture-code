export default function UpgradeCard({ upgrade, assignments, onBuy }) {
  // Concept: Array Destructuring (destructuring the upgrade object)
  const { id, name, cost, description, owned } = upgrade;
  const canAfford = assignments >= cost;

  return (
    <div className="upgrade-card">
      <div className="upgrade-info">
        <div className="upgrade-name">{name}</div>
        <div className="upgrade-desc">{description}</div>
      </div>

      {/* Conditional Rendering: show "Unlocked" badge or a buy button */}
      {owned ? (
        <span className="upgrade-btn owned">Unlocked</span>
      ) : (
        <button
          className="upgrade-btn"
          disabled={!canAfford}
          onClick={() => onBuy(id)}
        >
          {cost.toLocaleString()} 📝
        </button>
      )}
    </div>
  );
}
