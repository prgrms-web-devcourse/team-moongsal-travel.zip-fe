import { ArrowBackIosNew, ArrowForwardIosOutlined } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';

interface StepperButtonProps {
  format: 'forward' | 'backward' | 'complete';
  steps: number;
  setSteps: Dispatch<SetStateAction<number>>;
}

const StepperButton = ({ format, steps, setSteps }: StepperButtonProps) => {
  const router = useRouter();

  return (
    <>
      {format === 'forward' ? (
        <Button
          variant='contained'
          sx={{ display: 'flex', alignItems: 'center' }}
          onClick={() => setSteps(steps + 1)}>
          <Typography variant='body1' component='span' sx={{ fontSize: '0.5rem' }}>
            다음
          </Typography>
          {<ArrowForwardIosOutlined sx={{ fontSize: '0.5rem' }} />}
        </Button>
      ) : format === 'backward' ? (
        <Button
          variant='contained'
          sx={{ display: 'flex', alignItems: 'center' }}
          onClick={() => setSteps(steps - 1)}>
          {<ArrowBackIosNew sx={{ fontSize: '0.5rem' }} />}
          <Typography variant='body1' component='span' sx={{ fontSize: '0.5rem' }}>
            이전
          </Typography>
        </Button>
      ) : (
        <Button
          variant='contained'
          sx={{ display: 'flex', alignItems: 'center' }}
          onClick={() => router.push('/')}>
          <Typography variant='body1' component='span' sx={{ fontSize: '0.5rem' }}>
            완료
          </Typography>
          {<ArrowForwardIosOutlined sx={{ fontSize: '0.5rem' }} />}
        </Button>
      )}
    </>
  );
};

export default StepperButton;