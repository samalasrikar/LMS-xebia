import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';

// Temporary inline components placeholder for structural routing completeness
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="p-6 md:p-8 space-y-4">
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{title} Screen</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400">Structural layout view container is fully ready for development.</p>
    </div>
    <div className="h-64 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-950 flex items-center justify-center p-4">
      <p className="text-xs font-mono text-slate-400">Component Content Space Grid Placeholder</p>
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: '/dashboard',
    element: <MainLayout><Dashboard /></MainLayout>,
  },
  {
    path: '/courses',
    element: <MainLayout><Courses /></MainLayout>,
  },
  {
    path: '/course-details',
    element: <MainLayout><PlaceholderPage title="Course Details" /></MainLayout>,
  },
  {
    path: '/users',
    element: <MainLayout><PlaceholderPage title="Users Directory" /></MainLayout>,
  },
  {
    path: '/batches',
    element: <MainLayout><PlaceholderPage title="Batches Layout" /></MainLayout>,
  },
  {
    path: '/assessments',
    element: <MainLayout><PlaceholderPage title="Assessments Engine" /></MainLayout>,
  },
  {
    path: '/learning',
    element: <MainLayout><PlaceholderPage title="Learning Portal" /></MainLayout>,
  },
  {
    path: '/notifications',
    element: <MainLayout><PlaceholderPage title="Notifications Hub" /></MainLayout>,
  },
  {
    path: '/reports',
    element: <MainLayout><PlaceholderPage title="Reports Analytics" /></MainLayout>,
  },
  {
    path: '/approvals',
    element: <MainLayout><PlaceholderPage title="Approvals Flow" /></MainLayout>,
  },
  {
    path: '/settings',
    element: <MainLayout><PlaceholderPage title="Global Settings" /></MainLayout>,
  },
  {
    path: '/login',
    element: <PlaceholderPage title="Login Portal Auth" />, // Login screen generally omits full app sidebar framework
  }
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
