import { ChangeEvent } from 'react';
import BestPosts from "components/boards/BestPosts";
import BoardSearchBar from "components/boards/BoardSearchBar";
import BoardTable from "components/boards/BoardTable";
import { getArticleList } from "@/apis/boardsAPI";

const posts : postType[] = [
  {
    "updatedAt": "2025-05-01T02:39:33.254Z",
    "createdAt": "2025-05-01T02:39:33.254Z",
    "likeCount": 135,
    "writer": {
      "name": "박동욱",
      "id": 1
    },
    "image": "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
    "title": "게시글 제목입니다1",
    "id": 1
  },
  {
    "updatedAt": "2025-05-01T02:39:33.254Z",
    "createdAt": "2025-05-01T02:39:33.254Z",
    "likeCount": 150,
    "writer": {
      "name": "박욱",
      "id": 2
    },
    "image": "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
    "title": "게시글 제목입니다2",
    "id": 2
  },
  {
    "updatedAt": "2025-05-01T02:39:33.254Z",
    "createdAt": "2025-05-01T02:39:33.254Z",
    "likeCount": 120,
    "writer": {
      "name": "박정욱",
      "id": 3
    },
    "image": "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
    "title": "게시글 제목입니다3",
    "id": 3
  },{
    "updatedAt": "2025-05-01T02:39:33.254Z",
    "createdAt": "2025-05-01T02:39:33.254Z",
    "likeCount": 200,
    "writer": {
      "name": "박싱욱",
      "id": 4
    },
    "image": "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
    "title": "게시글 제목입니다4",
    "id": 4
  }
]

export interface postType {
  "updatedAt": string,
  "createdAt": string,
  "likeCount": number,
  "image" : string,
  "title" : string,
  "writer": {
    "name": string,
    "id": number
  },
  "id": number
}

export default function boards () {
    //const [order, setOrder] = useState('createdAt');
    //const sortedItems = items.sort((a,b) => b.likeCount - a.likeCount)
    //const handleNewestClick = () => setOrder('createdAt')
    //const handleLikeClick = () => setOrder('likeCount')
    function handleChange(e: ChangeEvent<HTMLInputElement>){
      //const { } = e.target;

    }
    function handleClick(e: MouseEvent){
      //const { } = e.target;
      e.preventDefault();
      //const message = `${values.username}`


  }
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <BestPosts posts={posts}></BestPosts>
        <BoardSearchBar></BoardSearchBar>
        <BoardTable posts={posts} ></BoardTable>
      </div>

    </>
  )
}