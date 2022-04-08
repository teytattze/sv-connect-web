import { Box, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';

export interface IPageContainerProps {
  title: string;
  children: ReactNode;
}

export function PageContainer({ title, children }: IPageContainerProps) {
  return (
    <Stack direction="column" spacing={2} sx={{ p: 2 }}>
      <Box sx={{ px: 1 }}>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            fontWeight: 'bold',
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box>{children}</Box>
    </Stack>
  );
}
