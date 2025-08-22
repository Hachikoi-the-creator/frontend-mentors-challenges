import ScoreTab from "./components/ScoreTab";
import "./rps-style.scss";

type Props = {
  catalogSchema: Record<string, any>;
};

export type FixedCatalogData = {
  id: string;
  name?: string;
  images?: string[];
  brand?: string;
  title?: string;
  currency?: string;
  price?: number;
  availability?: {
    available_tag?: string;
    available_color?: string;
  };
} & Record<string, any>;

export default function page() {
  return (
    <main className="h-screen bg-gradient pt-8">
      <ScoreTab />
    </main>
  );
}
