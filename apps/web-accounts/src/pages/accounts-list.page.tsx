import { DashboardPageContainer } from '@sv-connect/web-ui';
import { AccountsList } from '../components/accounts-list';

export function AccountsListPage() {
  return (
    <DashboardPageContainer title="Accounts List">
      <AccountsList />
    </DashboardPageContainer>
  );
}
