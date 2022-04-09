import { LoadingButton } from '@mui/lab';
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { ICreateProjectPayload } from '@sv-connect/shared';
import { useSearchParams } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useCreateProject } from '../hooks/use-create-project.hook';
import { useIndexFields } from '../hooks/use-index-fields.hook';
import { useIndexSpecializations } from '../hooks/use-index-specializations.hook';
import {
  createProjectValue,
  ICreateProjectForm,
} from '../lib/projects-form.lib';

export function CreateProjectForm() {
  const { data: fieldsRes } = useIndexFields();
  const { data: specializationsRes } = useIndexSpecializations();

  const [urlSearchParams] = useSearchParams();

  const {
    handleSubmit,
    control,
    formState: { errors: formErrors },
  } = useForm<ICreateProjectForm>();

  const { mutate: createProject } = useCreateProject();

  return (
    <form
      onSubmit={handleSubmit((payload) => {
        const formattedPayload: ICreateProjectPayload = {
          title: payload.title,
          summary: payload.summary,
          field: { id: payload.fieldId },
          specializations: payload.specializationIds.map((id) => ({ id })),
          student: { id: urlSearchParams.get('studentId') },
        };
        createProject(formattedPayload);
      })}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name="title"
            control={control}
            defaultValue={createProjectValue.title}
            render={({ field }) => (
              <TextField
                {...field}
                id="title"
                label="Title"
                variant="outlined"
                fullWidth
                helperText={formErrors.title?.message}
                error={!!formErrors.title}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="summary"
            control={control}
            defaultValue={createProjectValue.summary}
            render={({ field }) => (
              <TextField
                {...field}
                id="summary"
                label="Summary"
                variant="outlined"
                fullWidth
                helperText={formErrors.summary?.message}
                error={!!formErrors.summary}
                multiline
                rows={4}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="fieldId"
            control={control}
            defaultValue={createProjectValue.fieldId}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>Field</InputLabel>
                <Select {...field} id="field" label="Field">
                  {fieldsRes?.data?.map(({ id, title }) => (
                    <MenuItem key={id} value={id}>
                      {title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="specializationIds"
            control={control}
            defaultValue={createProjectValue.specializationIds}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>Specializations</InputLabel>
                <Select
                  {...field}
                  id="specializations"
                  label="Specialization"
                  multiple
                >
                  {specializationsRes?.data?.map(({ id, title }) => (
                    <MenuItem key={id} value={id}>
                      {title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          width: '100%',
          mt: 6,
          textAlign: 'center',
        }}
      >
        <LoadingButton type="submit" variant="contained">
          Create
        </LoadingButton>
      </Box>
    </form>
  );
}
