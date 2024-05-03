import { Header } from "@/components/Header/Header";
import styles from "./page.module.css";
import { GreyBackground } from "@/components/GreyBackground/GreyBackground";
import { CharacterCard } from "@/components/CharacterCard/CharacterCard";

export default function Home() {
  return (
    <main>
      <Header />
      <GreyBackground>
        <div>
          <CharacterCard
            title="Fascist Shrimp Rick"
            status="Alive"
            specie="Animal"
            firstSeen="Edge of Tomorty: Rick, Die, Rickpeat"
            lastLocation="Earth (Fascist Shrimp Dimension)"
            imageUrl="./503.jpeg"
          />
        </div>
      </GreyBackground>
    </main>
  );
}
