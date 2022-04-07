import { IAccount, Nullable } from '@sv-connect/shared';
import { useEffect, useState } from 'react';
import { useValidateJwt } from './use-validate-jwt.hook';

export const useAuthProvider = () => {
  const [account, setAccount] = useState<Nullable<IAccount>>(null);

  const { mutate: validateJwt } = useValidateJwt({
    onError: () => setAccount(null),
    onSuccess: ({ data, statusCode }) => {
      if (statusCode === 200) setAccount(data);
      else setAccount(null);
    },
  });

  useEffect(() => {
    validateJwt();
  }, []);

  return { account };
};
