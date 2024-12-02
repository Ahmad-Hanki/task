import Container from "@/components/Container";
import CharactersCard from "./CharactersCard";

export interface Character {
  id: string;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  gender: string
  species: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
  image: string;
}
const CharactersGrid = ({ data }: { data: Character[] }) => {
  return (
    <div className="py-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.map((item) => (
            <CharactersCard objectData={item} key={item.id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CharactersGrid;
