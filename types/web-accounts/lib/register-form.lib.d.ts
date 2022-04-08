import { RegisterOptions } from 'react-hook-form';
interface ICreateAccountPayload {
    email: string;
    password: string;
}
export declare const registerValue: {
    name: string;
    email: string;
    password: string;
};
export declare const registerValidation: Record<ICreateAccountPayload['email' | 'password'], RegisterOptions>;
export {};
//# sourceMappingURL=register-form.lib.d.ts.map