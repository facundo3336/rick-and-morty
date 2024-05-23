"use client";
import { CharacterResponse } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

export const useCharacters = () => {
  const { isPending, error, data } = useQuery<CharacterResponse>({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://rickandmortyapi.com/api/character").then((res) =>
        res.json()
      ),
  });

  return { isPending, error, data };
}
