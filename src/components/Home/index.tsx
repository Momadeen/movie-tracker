import Button from "../shared/Button";

const Home = () => (
  <div className="flex flex-col gap-2 h-full w-full">
    <div className="flex justify-end">
      <Button>Add New Movie</Button>
    </div>
    <div className="flex justify-center items-center h-full w-full">
        <p className="text-gray-500">There's no movies</p>
    </div>
  </div>
);
export default Home;
