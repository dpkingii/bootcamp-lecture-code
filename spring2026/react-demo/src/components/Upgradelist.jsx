import UpgradeCard from "./Upgradecard";

export default function UpgradeList({ upgrades, assignments, onBuy }) {
  return (
    <div>
      <div className="section-label">Productivity boosts</div>

      {/* Map Function: renders one UpgradeCard per upgrade in the array */}
      {upgrades.map((upgrade) => (
        <UpgradeCard
          key={upgrade.id}
          upgrade={upgrade}
          assignments={assignments}
          onBuy={onBuy}
        />
      ))}
    </div>
  );
}
