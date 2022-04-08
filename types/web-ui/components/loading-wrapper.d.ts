import React from 'react';
export interface LoadingWrapperProps {
    loading?: boolean;
    type?: 'skeleton' | 'disable';
    renderSkeleton?: () => React.ReactElement | null;
    children: React.ReactNode;
}
export declare function LoadingWrapper({ loading, type, renderSkeleton, children, }: LoadingWrapperProps): JSX.Element;
//# sourceMappingURL=loading-wrapper.d.ts.map