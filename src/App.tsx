import { Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';
import { routeDefinitions } from '@/routes/route-definitions';

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        {routeDefinitions.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
        <Route index element={<Navigate to="/ftv/ft/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/ftv/ft/dashboard" replace />} />
      </Route>
    </Routes>
  );
}
