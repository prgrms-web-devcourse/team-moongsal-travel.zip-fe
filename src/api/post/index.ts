import { AxiosResponse } from 'axios';

import http from '@/api/core/axiosInstance';
import { SubTravelogueType, TravelogueResponseType, TravelogueType } from '@/types/post';

export const postTravelogue = async (
  data: TravelogueType,
): Promise<AxiosResponse<TravelogueResponseType>> => {
  return await http.post(`api/travelogues`, data);
};

export const postSubTravelogue = async ({
  data,
  travelogueId,
}: {
  data: SubTravelogueType;
  travelogueId: string;
}) => {
  return await http.post(`api/travelogues/${travelogueId}/subTravelogues`, data);
};

export const patchTravelogueForEdit = async ({
  data,
  travelogueId,
}: {
  data: SubTravelogueType;
  travelogueId: string;
}) => {
  return await http.patch(`api/members/my/travelogues/${travelogueId}`, data);
};

export const patchSubTravelogue = async ({
  data,
  travelogueId,
  subTravelogueId,
}: {
  data: SubTravelogueType;
  travelogueId: string;
  subTravelogueId: string;
}) => {
  return await http.patch(
    `api/members/my/travelogues/${travelogueId}/subTravelogues/${subTravelogueId}`,
    data,
  );
};

export const patchTraveloguePublish = async ({
  travelogueId,
}: {
  travelogueId: number;
}) => {
  return await http.patch(`api/travelogues/${travelogueId}/publish`);
};

export const getTravelogueForEdit = async (
  travelogueId: string,
): Promise<AxiosResponse<TravelogueResponseType>> => {
  return await http.get(`api/members/my/travelogues/${travelogueId}`);
};

export const getSubTravelogueForEdit = async ({
  travelogueId,
  subTravelogueId,
}: {
  travelogueId: string;
  subTravelogueId: string;
}) => {
  return await http.get(
    `api/members/my/travelogues/${travelogueId}/subTravelogues/${subTravelogueId}`,
  );
};
