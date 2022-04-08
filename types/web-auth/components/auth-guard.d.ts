import { AccountRole } from '@sv-connect/shared';
import { ReactNode } from 'react';
interface IAuthGuardProps {
    children: ReactNode;
    type?: 'hidden' | 'redirect';
    roles?: AccountRole[];
}
export declare function AuthGuard({ children, type, roles, }: IAuthGuardProps): JSX.Element;
export {};
//# sourceMappingURL=auth-guard.d.ts.map