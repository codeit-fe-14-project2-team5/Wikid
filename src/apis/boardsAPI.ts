import { axiosInstance } from "@/apis/axios";

interface queryParam {
  page? : number,
  orderby? : string,
  keyword? : string
}
export async function getArticleList({ page = 1, orderby = 'recent', keyword = '', } : queryParam ) {
  const response = await axiosInstance.get(`/api/14-5/articles`);
  return response.data;
}