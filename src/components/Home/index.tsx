import { Link } from "react-router-dom";
import Button from "../shared/Button";

const Home = () => {
  return (
    <div className="flex flex-col gap-2 h-full w-full">
      <div className="flex justify-end">
        <Button>
          <Link to="/create">Create movie</Link>
        </Button>
      </div>
      <div className="flex justify-center items-center h-full w-full">
        <p className="text-secondary font-[400]">There's no movies</p>
      </div>
    </div>
  );
};
export default Home;
