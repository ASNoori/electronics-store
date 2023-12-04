import React from "react";
import HeroSection from "./hero";
import OnlineStore from "./OnlineStore/OnlineStore";
import ImageGrid from "./ImageGrid/imageGrid";
import Content from "./Content/Content";
import LastContent from "./lastContent/LastContent";
function HomePage() {
  return (
    <div>
      <HeroSection />
      <OnlineStore />
      <ImageGrid />
      <Content />
      <LastContent />
    </div>
  );
}

export default HomePage;
