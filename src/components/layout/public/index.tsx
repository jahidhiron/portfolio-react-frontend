import { FC } from 'react';
import { Outlet } from 'react-router-dom';
// import { useContext } from 'react';
// import { AuthContext } from 'path-to-auth-context'; 

export const PublicLayout: FC = () => {
  // const auth = useContext(AuthContext);
  // if (auth) {
  //   return <Navigate to="/dashboard" />;
  // }

  return (
    <>
      <Outlet />
    </>
  );
};
