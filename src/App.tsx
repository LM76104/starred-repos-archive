import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import MapPage from "@/pages/Map";
import FeedPage from "@/pages/Feed";
import RecipesPage from "@/pages/Recipes";
import CreaturesPage from "@/pages/Creatures";
import PlantsPage from "@/pages/Plants";
import VersionsPage, { VersionDetail } from "@/pages/Versions";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Magical Background Particles */}
        <div className="magic-particles" />

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/creatures" element={<CreaturesPage />} />
            <Route path="/plants" element={<PlantsPage />} />
            <Route path="/versions" element={<VersionsPage />} />
            <Route path="/versions/:versionId" element={<VersionDetail />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
