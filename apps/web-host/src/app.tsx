import { AccountsListPage, RegisterPage } from '@sv-connect/web-accounts';
import { AuthProvider, LoginPage } from '@sv-connect/web-auth';
import {
  CssBaseline,
  SnackbarProvider,
  ThemeProvider,
  muiTheme,
} from '@sv-connect/web-ui';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from './layouts/dashboard-layout';
import { DefaultLayout } from './layouts/default-layout';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const queryClient = new QueryClient();

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <SnackbarProvider>
            <AuthProvider>
              <Routes>
                <Route path="/" element={<DefaultLayout />}>
                  <Route index element={<LoginPage />} />
                  <Route path="login" element={<LoginPage />} />
                  <Route path="register" element={<RegisterPage />} />
                </Route>
                <Route path="/dashboard" element={<DashboardLayout />}>
                  <Route index element={<AccountsListPage />} />
                </Route>
              </Routes>
            </AuthProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
