import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./hero";
import OnlineStore from "./OnlineStore/OnlineStore";
import ImageGrid from "./ImageGrid/imageGrid";
import Content from "./Content/Content";
import  LastContent from "./lastContent/LastContent";
export default function Home() {
  return (
    <div>
        <HeroSection/>
        <OnlineStore/>
        <ImageGrid/>
        <Content/>
        < LastContent/>
    </div>

    
  );
}
