// import { LoadingButton } from '@mui/lab';
// import {
//   Box,
//   FormControl,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
// } from '@mui/material';
// import { IUpdateProjectPayload } from '@sv-connect/shared';
// import { useParams } from 'react-router-dom';
// import { Controller, useForm } from 'react-hook-form';
// import { useIndexFields } from '../hooks/use-index-fields.hook';
// import { useIndexSpecializations } from '../hooks/use-index-specializations.hook';
// import { IUpdateProjectForm } from '../lib/projects-form.lib';
// import { useUpdateProjectById } from '../hooks/use-update-project.hook';

// export function CreateProjectForm() {
//   const { data: fieldsRes } = useIndexFields();
//   const { data: specializationsRes } = useIndexSpecializations();

//   const { projectId } = useParams();

//   const {
//     handleSubmit,
//     control,
//     formState: { errors: formErrors },
//   } = useForm<IUpdateProjectForm>();

//   const { mutate: updateProject } = useUpdateProjectById(projectId);

//   return (
//     <form
//       onSubmit={handleSubmit((payload) => {
//         const formattedPayload: IUpdateProjectPayload = {
//           title: payload.title,
//           summary: payload.summary,
//           field: { connect: { id: payload.fieldId } },
//           specializations: payload.specializationIds.map((id) => ({ id })),
//         };
//         updateProject(formattedPayload);
//       })}
//     >
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Controller
//             name="title"
//             control={control}
//             defaultValue={createProjectValue.title}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 id="title"
//                 label="Title"
//                 variant="outlined"
//                 fullWidth
//                 helperText={formErrors.title?.message}
//                 error={!!formErrors.title}
//               />
//             )}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <Controller
//             name="summary"
//             control={control}
//             defaultValue={createProjectValue.summary}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 id="summary"
//                 label="Summary"
//                 variant="outlined"
//                 fullWidth
//                 helperText={formErrors.summary?.message}
//                 error={!!formErrors.summary}
//                 multiline
//                 rows={4}
//               />
//             )}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <Controller
//             name="fieldId"
//             control={control}
//             defaultValue={createProjectValue.fieldId}
//             render={({ field }) => (
//               <FormControl fullWidth>
//                 <InputLabel>Field</InputLabel>
//                 <Select {...field} id="field" label="Field">
//                   {fieldsRes?.data?.map(({ id, title }) => (
//                     <MenuItem key={id} value={id}>
//                       {title}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             )}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <Controller
//             name="specializationIds"
//             control={control}
//             defaultValue={createProjectValue.specializationIds}
//             render={({ field }) => (
//               <FormControl fullWidth>
//                 <InputLabel>Specializations</InputLabel>
//                 <Select
//                   {...field}
//                   id="specializations"
//                   label="Specialization"
//                   multiple
//                 >
//                   {specializationsRes?.data?.map(({ id, title }) => (
//                     <MenuItem key={id} value={id}>
//                       {title}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             )}
//           />
//         </Grid>
//       </Grid>
//       <Box
//         sx={{
//           width: '100%',
//           mt: 6,
//           textAlign: 'center',
//         }}
//       >
//         <LoadingButton type="submit" variant="contained">
//           Create
//         </LoadingButton>
//       </Box>
//     </form>
//   );
// }
