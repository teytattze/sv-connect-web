import { DashboardPageContainer } from '@sv-connect/web-ui';
import { CreateProjectForm } from '../components/create-project-form';

export function CreateProjectPage() {
  return (
    <DashboardPageContainer title="Create Project">
      <CreateProjectForm />
    </DashboardPageContainer>
  );
}
