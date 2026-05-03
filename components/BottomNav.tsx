// =============================================================================
// BottomNav - 底部导航栏（仿原生APP）
// 设计：黑金风格，金色激活指示器，毛玻璃背景
// =============================================================================

import { Home, Dumbbell } from "lucide-react";
import { Link, useLocation } from "wouter";

const navItems = [
  { path: "/", label: "首页", icon: Home },
  { path: "/library", label: "器械库", icon: Dumbbell },
];

export default function BottomNav() {
  const [location] = useLocation();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 glass border-t"
      style={{ borderColor: "oklch(0.75 0.14 82 / 15%)" }}
    >
      <div className="flex items-center justify-around max-w-[480px] mx-auto">
        {navItems.map(({ path, label, icon: Icon }) => {
          const isActive =
            path === "/" ? location === "/" : location.startsWith(path);
          return (
            <Link
              key={path}
              href={path}
              className="flex flex-col items-center gap-1 py-3 px-8 relative transition-all duration-200"
            >
              <div
                className={`transition-all duration-200 ${
                  isActive ? "scale-110" : "scale-100 opacity-50"
                }`}
              >
                <Icon
                  size={22}
                  style={{
                    color: isActive
                      ? "oklch(0.75 0.14 82)"
                      : "oklch(0.65 0.01 80)",
                    filter: isActive
                      ? "drop-shadow(0 0 6px oklch(0.75 0.14 82 / 60%))"
                      : "none",
                  }}
                />
              </div>
              <span
                className="text-[10px] font-medium tracking-wide transition-all duration-200"
                style={{
                  color: isActive
                    ? "oklch(0.75 0.14 82)"
                    : "oklch(0.55 0.01 80)",
                  fontFamily: "'Noto Sans SC', sans-serif",
                }}
              >
                {label}
              </span>
              {isActive && (
                <span
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.82 0.16 85), oklch(0.65 0.10 75))",
                  }}
                />
              )}
            </Link>
          );
        })}
      </div>
      {/* iOS 底部安全区域 */}
      <div style={{ height: "env(safe-area-inset-bottom)" }} />
    </nav>
  );
}
