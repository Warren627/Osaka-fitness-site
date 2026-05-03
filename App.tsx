// =============================================================================
// App.tsx - 路由配置
// 设计：工业暗金风格（Industrial Dark Gold）
// 路由：首页 / 本日训练 / 训练详情 / 器械库 / 器械详情
// =============================================================================

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Training from "./pages/Training";
import TrainingDetail from "./pages/TrainingDetail";
import Library from "./pages/Library";
import EquipmentDetail from "./pages/EquipmentDetail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/training" component={Training} />
      <Route path="/training/:id" component={TrainingDetail} />
      <Route path="/library" component={Library} />
      <Route path="/equipment/:id" component={EquipmentDetail} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster
            theme="dark"
            toastOptions={{
              style: {
                background: "oklch(0.18 0.010 60)",
                border: "1px solid oklch(0.75 0.14 82 / 30%)",
                color: "oklch(0.92 0.01 80)",
              },
            }}
          />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
