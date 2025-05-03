import { axiosInstance } from "@/apis/axios";

export async function getArticleList(data : { order='cretedAt', offset=0, limit = 6}) {
  const response = await axiosInstance.post(`/api/14-5/articles`, data);
  return response.data;
}