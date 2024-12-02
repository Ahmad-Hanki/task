import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const CharactersCard = ({ objectData }: { objectData: any }) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{objectData.name}</CardTitle>
          <p>
            {objectData.status === "Alive"
              ? "🟢"
              : objectData.status === "Dead"
              ? "🔴"
              : "🟡"}{" "}
            {objectData.status} - {objectData.species}
          </p>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-1">
            <p className="text-muted-foreground">Last known location:</p>
            <p>{objectData.location.name}</p>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground">First seen in: </p>
            <p>{objectData.origin.name}</p>
          </div>
        </CardContent>

        <CardFooter>
          <div className="relative overflow-hidden aspect-square w-full rounded-xl">
            <Image
              alt={objectData.name}
              src={objectData.image}
              fill
              className="object-center"
            />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CharactersCard;
