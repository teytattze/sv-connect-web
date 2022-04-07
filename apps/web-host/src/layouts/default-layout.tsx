import { Box, Divider, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

export function DefaultLayout() {
  return (
    <Box
      sx={{
        width: '100%',
        py: 8,
        px: 2,
      }}
    >
      <Box
        sx={{
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{
            fontWeight: 'bold',
          }}
        >
          SV Connect
        </Typography>
      </Box>
      <Divider
        sx={{
          mt: 2,
          mb: 4,
          mx: 'auto',
          maxWidth: '560px',
        }}
      />
      <Box
        component="main"
        sx={{
          width: '100%',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
