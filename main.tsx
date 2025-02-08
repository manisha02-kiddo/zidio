import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { Auth } from './pages/Auth';
import { TaskAssignment } from './pages/Features/TaskAssignment';
import { RoleBasedPermissions } from './pages/Features/RoleBasedPermissions';
import { Collaboration } from './pages/Features/Collaboration';
import { Demo } from './pages/Demo';
import { AuthGuard } from './components/AuthGuard';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Auth />,
  },
  {
    path: '/register',
    element: <Auth />,
  },
  {
    path: '/features/task-assignment',
    element: <AuthGuard><TaskAssignment /></AuthGuard>,
  },
  {
    path: '/features/role-based-permissions',
    element: <AuthGuard><RoleBasedPermissions /></AuthGuard>,
  },
  {
    path: '/features/collaboration',
    element: <AuthGuard><Collaboration /></AuthGuard>,
  },
  {
    path: '/demo',
    element: <Demo />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);