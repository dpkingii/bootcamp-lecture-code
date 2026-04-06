import { useState } from "react";
import ScoreCard from "./components/ScoreCard";
import HomeworkButton from "./components/Clickerbutton";
import UpgradeList from "./components/Upgradelist";
import MilestoneToast from "./components/Milestonetoast";
import "./index.css";

export default function App() {
  // Concept: Array Destructuring with useState
  const [assignments, setAssignments] = useState(0);
  const [productivity, setProductivity] = useState(1);
  const [upgrades, setUpgrades] = useState([
    {
      id: 1,
      name: "Cup of Ramen",
      cost: 50,
      description: "Comfort food focus boost — 2× productivity",
      multiplier: 2,
      owned: false,
    },
    {
      id: 2,
      name: "One More Episode",
      cost: 200,
      description: "Paradoxically refreshing — 5× productivity",
      multiplier: 5,
      owned: false,
    },
    {
      id: 3,
      name: "Study Group",
      cost: 500,
      description: "Peer pressure works wonders — 10× productivity",
      multiplier: 10,
      owned: false,
    },
  ]);

  // Event Handler: clicking the homework button
  function handleHomeworkClick() {
    setAssignments((prev) => prev + productivity);
  }

  // Event Handler: buying an upgrade
  function handleBuyUpgrade(id) {
    const upgrade = upgrades.find((u) => u.id === id);
    if (!upgrade || upgrade.owned || assignments < upgrade.cost) return;

    setAssignments((prev) => prev - upgrade.cost);
    setProductivity(upgrade.multiplier);

    // Map over upgrades to mark the purchased one as owned
    setUpgrades((prev) =>
      prev.map((u) => (u.id === id ? { ...u, owned: true } : u)),
    );
  }

  return (
    <div className="app">
      {/* Left column: score + homework button */}
      <div className="col-left">
        <ScoreCard assignments={assignments} productivity={productivity} />
        <MilestoneToast assignments={assignments} />
        <HomeworkButton onHomeworkClick={handleHomeworkClick} />
      </div>

      {/* Right column: upgrades */}
      <div className="col-right">
        <UpgradeList
          upgrades={upgrades}
          assignments={assignments}
          onBuy={handleBuyUpgrade}
        />
      </div>
    </div>
  );
}
