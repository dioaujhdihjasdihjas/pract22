import { Navigate, Route, Routes } from 'react-router-dom';
import SiteHeader from './components/SiteHeader.jsx';
import { useTheme } from './contexts/ThemeContext.jsx';
import CartPage from './pages/CartPage.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

export default function App() {
  const { theme } = useTheme();

  return (
    <div className="app" data-theme={theme}>
      <SiteHeader />
      <main className="page">
        <Routes>
          <Route path="/" element={<Navigate to="/catalog" replace />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<Navigate to="/catalog" replace />} />
        </Routes>
      </main>
    </div>
  );
}
