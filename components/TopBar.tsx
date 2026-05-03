// =============================================================================
// TopBar - 顶部导航栏
// 设计：黑金风格，毛玻璃效果，支持返回按钮
// =============================================================================

import { ChevronLeft } from "lucide-react";
import { useLocation } from "wouter";

interface TopBarProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  transparent?: boolean;
  rightElement?: React.ReactNode;
}

export default function TopBar({
  title,
  showBack = false,
  onBack,
  transparent = false,
  rightElement,
}: TopBarProps) {
  const [, navigate] = useLocation();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      window.history.back();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 max-w-[480px] mx-auto ${
        transparent ? "bg-transparent" : "glass border-b"
      }`}
      style={
        transparent
          ? {}
          : { borderColor: "oklch(0.75 0.14 82 / 10%)" }
      }
    >
      <div className="flex items-center justify-between h-14 px-4">
        {showBack ? (
          <button
            onClick={handleBack}
            className="btn-press flex items-center gap-1 -ml-1 p-1 rounded-lg"
            style={{ color: "oklch(0.75 0.14 82)" }}
          >
            <ChevronLeft size={24} />
          </button>
        ) : (
          <div className="w-8" />
        )}

        {title && (
          <h1
            className="text-base font-semibold tracking-wide"
            style={{
              fontFamily: "'Barlow Condensed', 'Noto Sans SC', sans-serif",
              color: "oklch(0.92 0.01 80)",
              letterSpacing: "0.05em",
            }}
          >
            {title}
          </h1>
        )}

        <div className="w-8 flex justify-end">
          {rightElement}
        </div>
      </div>
      {/* iOS 顶部安全区域 */}
      <div style={{ height: "env(safe-area-inset-top)" }} />
    </header>
  );
}
