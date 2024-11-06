/*Skrevet af Anders */
import Typography from "../Typography";

function EmptyFavorites() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg my-4">
      <Typography variant="subHeading" className="text-gray-500">
        Ingen favorit butikker endnu
      </Typography>
      <Typography variant="body" className="text-gray-400 mt-2">
        Klik på hjerte-ikonet ved butikkerne nedenfor for at tilføje dem til dine favoritter
      </Typography>
    </div>
  );
}

export default EmptyFavorites;