import { Character } from "@/app/(home)/_components/CharactersGrid";

const filterCharacters = (
  data: Character[] | null,
  gender: string | null,
  status: string | null
): Character[] => {
  if (!data) return [];

  return data.filter((character) => {
    const isGenderMatch = gender ? character.gender === gender : true;
    const isStatusMatch = status ? character.status === status : true;

    return isGenderMatch && isStatusMatch;
  });
};

export default filterCharacters;
