import filterCharacters from "@/lib/filterCharacters";
import fetchData from "../../actions/fetchData";
import CharactersGrid from "./_components/CharactersGrid";

const HomePage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    status: string;
    gender: string;
  }>;
}) => {
  const data = await fetchData();
  const { gender, status } = await searchParams;

  const filteredData = filterCharacters(data.results, gender, status);
  console.log(filteredData);
  return (
    <div>
      <CharactersGrid data={filteredData} />
    </div>
  );
};

export default HomePage;
