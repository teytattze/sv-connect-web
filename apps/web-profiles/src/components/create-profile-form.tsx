import { LoadingButton } from '@mui/lab';
import { Alert, Box, Paper, Stack, TextField } from '@mui/material';
import { FormTitle } from '@sv-connect/web-ui';
import { ICreateProfilePayload } from '@sv-connect/shared';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import { createProfileValue } from '../lib/profiles-form.lib';
import { useCreateProfile } from '../hooks/use-create-profile.hook';

export function CreateProfileForm() {
  const [errorMsg, setErrorMsg] = useState<string>('');

  const {
    handleSubmit,
    control,
    formState: { errors: formErrors },
  } = useForm<ICreateProfilePayload>();

  const { mutate: createProfile } = useCreateProfile();

  return (
    <Paper
      sx={{
        p: 5,
        mx: 'auto',
        width: '100%',
        maxWidth: '520px',
      }}
    >
      <FormTitle title="Setup Profile" />
      <form onSubmit={handleSubmit((payload) => createProfile(payload))}>
        <Box sx={{ my: 5 }}>
          <Stack direction="column" spacing={2.5}>
            {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}
            <Controller
              name="firstName"
              control={control}
              defaultValue={createProfileValue.firstName}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                  helperText={formErrors.firstName?.message}
                  error={!!formErrors.firstName}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              defaultValue={createProfileValue.lastName}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="lastName"
                  label="Last Name"
                  variant="outlined"
                  helperText={formErrors.lastName?.message}
                  error={!!formErrors.lastName}
                />
              )}
            />
            <Controller
              name="headline"
              control={control}
              defaultValue={createProfileValue.headline}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="headline"
                  label="Headline"
                  variant="outlined"
                  helperText={formErrors.headline?.message}
                  error={!!formErrors.headline}
                />
              )}
            />
            <Controller
              name="summary"
              control={control}
              defaultValue={createProfileValue.summary}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="summary"
                  label="Summary"
                  variant="outlined"
                  multiline
                  rows={4}
                  helperText={formErrors.summary?.message}
                  error={!!formErrors.summary}
                />
              )}
            />
          </Stack>
        </Box>
        <LoadingButton
          type="submit"
          variant="contained"
          fullWidth
          disableElevation
        >
          Confirm
        </LoadingButton>
      </form>
    </Paper>
  );
}
