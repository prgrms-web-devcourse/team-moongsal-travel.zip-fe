import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Box, IconButton, OutlinedInput } from '@mui/material';

const Location = () => {
  return (
    <Box sx={locationBoxStyle}>
      <OutlinedInput fullWidth placeholder='지역을 입력하세요' type='text' />
      <IconButton sx={{ position: 'absolute', right: 0, top: '0.5rem' }}>
        <LocationOnOutlinedIcon />
      </IconButton>
    </Box>
  );
};

export default Location;

const locationBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  paddingBottom: '15px',
  position: 'relative',
};
