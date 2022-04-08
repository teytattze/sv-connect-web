/// <reference types="react" />
import { IRoute } from '../../interfaces/routes.interface';
export declare enum SidebarType {
    DEFAULT = "DEFAULT",
    MINIMIZE = "MINIMIZE",
    MODAL = "MODAL"
}
export interface SidebarProps {
    isOpen: boolean;
    routes: IRoute[];
    type: SidebarType;
    handleToggle: () => void;
}
export declare function Sidebar({ isOpen, routes, type, handleToggle }: SidebarProps): JSX.Element;
export declare function SidebarModal({ isOpen, routes, handleToggle }: SidebarProps): JSX.Element;
//# sourceMappingURL=sidebar.d.ts.map