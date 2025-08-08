
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import MapaContexto from "./pages/MapaContexto";
import MapaLojas from "./pages/MapaLojas";
import Departamentos from "./pages/Departamentos";
import DetalheDepartamento from "./pages/DetalheDepartamento";
import Colaboradores from "./pages/Colaboradores";
import AgenteIA from "./pages/AgenteIA";
import NotFound from "./pages/NotFound";
import DocumentacaoPD from "./pages/DocumentacaoPD";
import Documentacao from "./pages/Documentacao";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/mapa-contexto" element={<MapaContexto />} />
            <Route path="/mapa-lojas" element={<MapaLojas />} />
            <Route path="/departamentos" element={<Departamentos />} />
            <Route path="/departamentos/:nome" element={<DetalheDepartamento />} />
            <Route path="/colaboradores" element={<Colaboradores />} />
            <Route path="/agente-ia" element={<AgenteIA />} />
          <Route path="/docs-pd" element={<DocumentacaoPD />} />
          <Route path="/documentacao" element={<Documentacao />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
