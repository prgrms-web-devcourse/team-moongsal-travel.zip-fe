import { useMutation, useQuery } from '@tanstack/react-query';

import {
  getTravelogueForEdit,
  patchSubTravelogue,
  patchTraveloguePublish,
  postSubTravelogue,
} from '@/api/post';
import { SubTravelogueType } from '@/types/post';

export const useSaveSubTravelogue = (isPatch: boolean) => {
  return useMutation({
    mutationFn: async (data: {
      data: SubTravelogueType;
      travelogueId: string;
      subTravelogueId: string;
    }) => {
      return isPatch ? await patchSubTravelogue(data) : await postSubTravelogue(data);
    },
    onError: (error: { message: string }) => {
      console.error(error.message);
    },
  });
};

export const usePatchTraveloguePublish = () => {
  return useMutation({
    mutationFn: async (data: { travelogueId: number }) =>
      await patchTraveloguePublish(data),
    onError: (error: { message: string }) => {
      console.error(error.message);
    },
  });
};

export const useGetTravelogueForEdit = (travelogueId: string) => {
  return useQuery({
    queryKey: ['TRAVELOGUE', travelogueId],
    queryFn: () => getTravelogueForEdit(travelogueId),
    enabled: false,
  });
};
