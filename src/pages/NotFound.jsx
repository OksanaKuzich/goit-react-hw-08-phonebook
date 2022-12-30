import notFound from '../image/404.gif';
import { Box, Button, Stack } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  const GoBackFunk = () => {
    setTimeout(() => {
      alert('I love async JS!');
    }, 2000);
  };

  GoBackFunk();

  return (
    <Box
      sx={{
        mt: 10,
      }}
    >
      {' '}
      <Stack spacing={2}>
        <img src={notFound} alt="Page not found!" loading="lazy" />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            endIcon={<ExitToAppIcon />}
          >
            Go back
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
