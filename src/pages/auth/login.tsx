import { Stack, Typography } from '@mui/material';

import { Local } from '@/components/Login';

const LoginPage = () => {
  return (
    <Stack>
      <Typography component='h1' variant='h4' my={10} align='center' color='primary'>
        ✈️ travel.zip
      </Typography>
      <Local />
    </Stack>
  );
};

export default LoginPage;
