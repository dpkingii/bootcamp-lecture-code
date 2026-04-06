export default function MilestoneToast({ assignments }) {
  const milestones = [
    {
      threshold: 1000,
      message: "🏆 1,000 assignments — are you even sleeping?",
    },
    { threshold: 500, message: "😤 500 done — your professor is impressed!" },
    { threshold: 100, message: "🎉 100 assignments — you're on a roll!" },
  ];

  const reached = milestones.find((m) => assignments >= m.threshold);

  // Conditional Rendering: return null if no milestone has been reached
  if (!reached) return null;

  return <div className="milestone">{reached.message}</div>;
}
