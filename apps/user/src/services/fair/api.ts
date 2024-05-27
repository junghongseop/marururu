import { maru } from '@/apis/instance/instance';
import type { GetFairListRes } from '@/types/fair/remote';

export const getFairList = async (category: string) => {
  const { data } = await maru.get<GetFairListRes>(`/fair?category=${category}`);
  return data;
};
