import { Navigate } from 'react-router-dom';

export const publicRouts = [{ path: '*', element: <Navigate to="/" /> }];
