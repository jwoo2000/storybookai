import AddCard from "../components/AddCard";
import NewCard from "../components/NewCard";

function Gallery() {

  return (
    <>
      <div className="bg-amber-100 min-h-screen w-full space-y-10 py-10 items-center justify-center">
        <div className="flex flex-row flex-wrap place-content-between align-middle">
          <div className="self-start font-extralight text-6xl ml-10">
            Bookshelf
          </div>
        </div>

        <div className="flex flex-row flex-wrap">
          <AddCard />
          <NewCard
            color={"bg-orange-200"}
            title={"Harry Potter and the Philosopher’s Stone"}
          />
          <NewCard
            color={"bg-pink-200"}
            title={"A Hitchhiker’s Guide to the Galaxy"}
          />
          <NewCard color={"bg-blue-200"} title="Nineteen eighty-four" />
          <NewCard
            color={"bg-orange-200"}
            title={"Harry Potter and the Philosopher’s Stone"}
          />
          <NewCard
            color={"bg-pink-200"}
            title={"A Hitchhiker’s Guide to the Galaxy"}
          />
          <NewCard color={"bg-blue-200"} title={"Nineteen eighty-four"} />
        </div>
      </div>
    </>
  );
}

export default Gallery;
