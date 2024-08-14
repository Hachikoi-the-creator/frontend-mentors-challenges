import Score from "./Score";

export default function ScoreTab() {
  return (
    <div className="flex max-w-2xl border border-gray-500 rounded-md mx-auto p-3 justify-between">
      <div className="uppercase text-white text-2xl">
        <p>rock</p>
        <p>paper</p>
        <p>scissors</p>
      </div>
      <Score />
    </div>
  );
}
