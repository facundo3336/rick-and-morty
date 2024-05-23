"use client";

import { Header } from "@/components/Header/Header";
import styles from "./page.module.scss";
import { GreyBackground } from "@/components/GreyBackground/GreyBackground";
import { CharacterCard } from "@/components/CharacterCard/CharacterCard";
import { HeadingSection } from "@/components/HeadingSection/HeadingSection";
import { useCharacters } from "../api/useCharacters";
import { Character } from "@/types/types";
import { Container } from "@/components/Container/Container";

export default function Home() {
  const { isPending, error, data } = useCharacters();

  if (isPending) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <main>
      <Header />
      <HeadingSection />
      <GreyBackground>
        <Container>
          <h2 className={styles.charactersTitle}>Rick and Morty Characters</h2>
          <div className={styles.characters}>
            {data?.results?.map((character) => {
              return (
                <CharacterCard
                  key={character.id}
                  title={character.title}
                  lastLocation={character.location.name}
                  firstSeen={character.location.name}
                  imageUrl={character.image}
                  specie={character.species}
                  status={character.status}
                />
              );
            })}
          </div>
        </Container>
      </GreyBackground>
    </main>
  );
}
