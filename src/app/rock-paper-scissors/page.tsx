import ScoreTab from "./components/ScoreTab";
import "./rps-style.scss";

export default function page() {
  return (
    <main className="h-screen bg-gradient pt-8">
      <ScoreTab />
    </main>
  );
}
