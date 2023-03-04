import { Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

import { createPost } from '@/api/post';
import { AlertMessage } from '@/components/common';
import { PostBasic } from '@/components/CreatePost';
import { travelogueFormProps } from '@/constants/defaultFormValue';
import useImageUpload from '@/hooks/useImageUpload';
import { TravelogueForm } from '@/types/post';

const First = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TravelogueForm>(travelogueFormProps);
  const { getImageUrlFromS3, deleteFile } = useImageUpload();

  const handleComplete = async (data: TravelogueForm) => {
    const { key, url } = await getImageUrlFromS3(data.thumbnail as File);
    const response = await createPost({ ...data, thumbnail: url });
    if (response.status !== 200) {
      deleteFile(key);
      return;
    }
    // Todo: 트래블로그 작성 성공시 서브 트래블로그로 아이디와 일수 넘기기
  };

  return (
    <form onSubmit={handleSubmit(handleComplete)}>
      <PostBasic control={control} />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {Object.keys(errors).length > 0 && <AlertMessage />}
        <Button type='submit'>다음</Button>
      </Box>
    </form>
  );
};

export default First;
