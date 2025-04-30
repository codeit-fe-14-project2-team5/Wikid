import BestPosts from "components/boards/BestPosts";
import BoardSearchBar from "components/boards/BoardSearchBar";
import BoardTable from "components/boards/BoardTable";


export default function boards () {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <BestPosts></BestPosts>
        <BoardSearchBar></BoardSearchBar>
        <BoardTable></BoardTable>
      </div>

    </>
  )
}