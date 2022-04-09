import { Box, Stack, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

export interface IDashboardPageContainerProps {
  title: string;
  children: ReactNode;
}

export function DashboardPageContainer({
  title,
  children,
}: IDashboardPageContainerProps) {
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
