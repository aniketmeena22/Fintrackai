const insights = [
  {
    type: "Warning",
    title: "Food spending is high!",
    description: '₹3,500 spent on food — 40% above average',
    color: "red",
  },
  {
    type: "Good Job!",
    title: "Great savings!",
    description: "You saved ₹5,000 this month.",
    color: "green",
  },
  {
    type: "Tip",
    title: "Set a transport budget",
    description: "Create a budget to track transport expenses.",
    color: "blue",
  },
];

const colorStyles = {
  red: {
    text: "text-red-400",
    dot: "bg-red-500",
    border: "border-red-500/20",
    bg: "bg-red-500/5",
  },
  green: {
    text: "text-green-400",
    dot: "bg-green-500",
    border: "border-green-500/20",
    bg: "bg-green-500/5",
  },
  blue: {
    text: "text-blue-400",
    dot: "bg-blue-500",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
  },
};

function InsightCard() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">
          AI Insights
        </h2>

        <span className="text-xl">🤖</span>
      </div>

      {/* Insights */}
      {insights.map((insight, index) => {
        const styles = colorStyles[insight.color];

        return (
          <div
            key={index}
            className={`mb-4 rounded-xl border ${styles.border} ${styles.bg} p-4`}
          >
            <div className="mb-2 flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${styles.dot}`}
              ></span>

              <span className={`text-sm font-medium ${styles.text}`}>
                {insight.type}
              </span>
            </div>

            <h3 className="mb-1 font-semibold text-white">
              {insight.title}
            </h3>

            <p className="text-sm text-slate-400">
              {insight.description}
            </p>
          </div>
        );
      })}

      {/* Footer */}
      <p className="mt-2 text-center text-xs text-slate-500">
        AI-powered financial insights
      </p>
    </div>
  );
}

export default InsightCard;