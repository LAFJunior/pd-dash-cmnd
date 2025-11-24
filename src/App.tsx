
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import MapaContexto from "./pages/MapaContexto";
import MapaLojas from "./pages/MapaLojas";
import Lojas from "./pages/Lojas";
import LojaDetalhe from "./pages/LojaDetalhe";
import Departamentos from "./pages/Departamentos";
import DetalheDepartamento from "./pages/DetalheDepartamento";
import Organograma from "./pages/Organograma";
import AgenteIA from "./pages/AgenteIA";
import NotFound from "./pages/NotFound";
import DocumentacaoPD from "./pages/DocumentacaoPD";
import Documentacao from "./pages/Documentacao";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import ResetPassword from "./pages/ResetPassword";
import MuralDigital from "./pages/MuralDigital";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/*" element={
              <Layout>
                <Routes>
                  <Route path="/mural-digital" element={<ProtectedRoute><MuralDigital /></ProtectedRoute>} />
                  <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                  <Route path="/mapa-contexto" element={<ProtectedRoute><MapaContexto /></ProtectedRoute>} />
                  <Route path="/mapa-lojas" element={<ProtectedRoute><MapaLojas /></ProtectedRoute>} />
                  <Route path="/lojas" element={<ProtectedRoute><Lojas /></ProtectedRoute>} />
                  <Route path="/lojas/:id" element={<ProtectedRoute><LojaDetalhe /></ProtectedRoute>} />
                  <Route path="/departamentos" element={<ProtectedRoute><Departamentos /></ProtectedRoute>} />
                  <Route path="/departamentos/:nome" element={<ProtectedRoute><DetalheDepartamento /></ProtectedRoute>} />
                  <Route path="/organograma" element={<ProtectedRoute><Organograma /></ProtectedRoute>} />
                  <Route path="/agente-ia" element={<ProtectedRoute><AgenteIA /></ProtectedRoute>} />
                  <Route path="/docs-pd" element={<ProtectedRoute><DocumentacaoPD /></ProtectedRoute>} />
                  <Route path="/documentacao" element={<ProtectedRoute><Documentacao /></ProtectedRoute>} />
                  <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
