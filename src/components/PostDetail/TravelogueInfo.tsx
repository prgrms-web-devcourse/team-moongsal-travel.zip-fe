import { Visibility as VisibilityIcon } from '@mui/icons-material';
import { Avatar, Stack } from '@mui/material';

import { SubTitle } from '@/components/common';
import { TravelogueDetailType } from '@/types/travelogue';

interface PostProfileProps {
  travelogueDetail: TravelogueDetailType;
}

const TravelogueInfo = ({ travelogueDetail }: PostProfileProps) => {
  const { nickname, viewCount } = travelogueDetail;
  return (
    <Stack direction='row' spacing={2} my={1}>
      <Stack direction='row' spacing={0.5} alignItems={'center'} key={nickname}>
        <Avatar sx={InfoStyle} />
        <SubTitle fontSize='0.9rem' color='gray030.main'>
          {nickname}
        </SubTitle>
      </Stack>
      <Stack direction='row' spacing={0.5} alignItems={'center'} key={viewCount}>
        <VisibilityIcon sx={InfoStyle} />
        <SubTitle fontSize='0.9rem' color='gray030.main'>
          {viewCount}
        </SubTitle>
      </Stack>
    </Stack>
  );
};

export default TravelogueInfo;

const InfoStyle = {
  width: '1.5rem',
  height: '1.5rem',
  color: 'gray030.main',
  src: 'default',
};