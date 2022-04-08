import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export function AccountsList() {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader sx={{ width: '100%' }}>
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Updated At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {accounts.map((account) => (
            <TableRow
              key={account.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {account.email}
              </TableCell>
              <TableCell>{account.role}</TableCell>
              <TableCell>
                {account.emailVerified ? 'Verified' : 'Not Verified'}
              </TableCell>
              <TableCell>{account.createdAt}</TableCell>
              <TableCell>{account.updatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const accounts = [
  {
    id: '1',
    email: 'tattzetey@gmail.com',
    emailVerified: true,
    role: 'STUDENT',
    createdAt: '2020-01-01T00:00:00.000Z',
    updatedAt: '2020-01-01T00:00:00.000Z',
  },
  {
    id: '1',
    email: 'tattzetey@gmail.com',
    emailVerified: true,
    role: 'STUDENT',
    createdAt: '2020-01-01T00:00:00.000Z',
    updatedAt: '2020-01-01T00:00:00.000Z',
  },
  {
    id: '1',
    email: 'tattzetey@gmail.com',
    emailVerified: true,
    role: 'STUDENT',
    createdAt: '2020-01-01T00:00:00.000Z',
    updatedAt: '2020-01-01T00:00:00.000Z',
  },
  {
    id: '1',
    email: 'tattzetey@gmail.com',
    emailVerified: true,
    role: 'STUDENT',
    createdAt: '2020-01-01T00:00:00.000Z',
    updatedAt: '2020-01-01T00:00:00.000Z',
  },
  {
    id: '1',
    email: 'tattzetey@gmail.com',
    emailVerified: true,
    role: 'STUDENT',
    createdAt: '2020-01-01T00:00:00.000Z',
    updatedAt: '2020-01-01T00:00:00.000Z',
  },
  {
    id: '1',
    email: 'tattzetey@gmail.com',
    emailVerified: true,
    role: 'STUDENT',
    createdAt: '2020-01-01T00:00:00.000Z',
    updatedAt: '2020-01-01T00:00:00.000Z',
  },
  {
    id: '1',
    email: 'tattzetey@gmail.com',
    emailVerified: true,
    role: 'STUDENT',
    createdAt: '2020-01-01T00:00:00.000Z',
    updatedAt: '2020-01-01T00:00:00.000Z',
  },
];
