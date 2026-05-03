// =============================================================================
// DietRecommendation - 饮食推荐联动组件
// 设计：黑金风格，Tab 切换（711便利店 / 外食方案），动态卡片展示
// 图标：线性图标，便利店用购物袋，外食用餐盘
// =============================================================================

import { useState } from "react";
import { DietRecommendation as DietRecommendationType, DietPlanType } from "../lib/data";
import { motion } from "framer-motion";

interface DietRecommendationProps {
  recommendation: DietRecommendationType;
  accentColor: string;
}

// ── 便利店图标（购物袋 + 711风格）──────────────────────────────────────────
function ConvenienceIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* 购物袋主体 */}
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      {/* 购物袋横线 */}
      <line x1="3" y1="6" x2="21" y2="6" />
      {/* 提手 */}
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

// ── 外食餐厅图标（餐盘 + 刀叉）──────────────────────────────────────────────
function RestaurantIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* 餐盘 */}
      <circle cx="11" cy="12" r="7" />
      {/* 刀 */}
      <path d="M20 2v6a2 2 0 01-2 2v12" />
      {/* 叉 */}
      <path d="M17 2v4" />
      <path d="M19 2v4" />
    </svg>
  );
}

// ── 食物列表项图标（圆点）────────────────────────────────────────────────────
function FoodDotIcon({ color }: { color: string }) {
  return (
    <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
      <circle cx="3" cy="3" r="3" fill={color} />
    </svg>
  );
}

export default function DietRecommendation({
  recommendation,
  accentColor,
}: DietRecommendationProps) {
  const [activeType, setActiveType] = useState<DietPlanType>(
    recommendation.plans[0]?.type ?? "convenience"
  );

  const activePlan = recommendation.plans.find((p) => p.type === activeType);

  const tabIconMap: Record<DietPlanType, React.ReactNode> = {
    convenience: <ConvenienceIcon size={16} color="currentColor" />,
    restaurant: <RestaurantIcon size={16} color="currentColor" />,
  };

  return (
    <div>
      {/* ── 模块标题 ──────────────────────────────────────────────────── */}
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-1 h-4 rounded-full"
          style={{
            background: `linear-gradient(180deg, ${accentColor}, ${accentColor}50)`,
          }}
        />
        <h3
          className="text-sm font-bold tracking-wide"
          style={{
            color: "oklch(0.85 0.01 80)",
            fontFamily: "'Barlow Condensed', 'Noto Sans SC', sans-serif",
            letterSpacing: "0.06em",
          }}
        >
          训练后饮食推荐
        </h3>
      </div>

      {/* ── Tab 选择按钮 ──────────────────────────────────────────────── */}
      <div
        className="flex gap-2 mb-3 p-1 rounded-2xl"
        style={{
          background: "oklch(0.11 0.006 60)",
          border: "1px solid oklch(1 0 0 / 8%)",
        }}
      >
        {recommendation.plans.map((plan) => {
          const isActive = plan.type === activeType;
          return (
            <button
              key={plan.type}
              onClick={() => setActiveType(plan.type)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl transition-all duration-200 relative"
              style={{
                background: isActive
                  ? `${accentColor}18`
                  : "transparent",
                border: isActive
                  ? `1px solid ${accentColor}35`
                  : "1px solid transparent",
                color: isActive
                  ? accentColor
                  : "oklch(0.45 0.01 80)",
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "0.8rem",
                fontWeight: isActive ? 600 : 400,
              }}
            >
              {tabIconMap[plan.type]}
              <span>{plan.label}</span>
              {/* 激活指示点 */}
              {isActive && (
                <span
                  className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full"
                  style={{ background: accentColor }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* ── 饮食方案卡片（动态切换）──────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {activePlan && (
          <motion.div
            key={activeType}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "oklch(0.13 0.008 60)",
                border: "1px solid oklch(1 0 0 / 8%)",
                boxShadow: "0 4px 20px oklch(0 0 0 / 35%)",
              }}
            >
              {/* 卡片顶部色条 */}
              <div
                className="h-0.5 w-full"
                style={{
                  background: `linear-gradient(90deg, ${accentColor}, ${accentColor}30, transparent)`,
                }}
              />

              <div className="p-4">
                {/* 方案名称 + 图标 */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${accentColor}15`,
                      border: `1px solid ${accentColor}25`,
                      color: accentColor,
                    }}
                  >
                    {tabIconMap[activePlan.type]}
                  </div>
                  <div>
                    <h4
                      className="font-bold text-sm leading-tight"
                      style={{
                        color: "oklch(0.92 0.01 80)",
                        fontFamily:
                          "'Barlow Condensed', 'Noto Sans SC', sans-serif",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {activePlan.label}方案
                    </h4>
                    <p
                      className="text-[10px] mt-0.5"
                      style={{
                        color: "oklch(0.45 0.01 80)",
                        fontFamily: "'Noto Sans SC', sans-serif",
                      }}
                    >
                      训练后 30–60 分钟内进食
                    </p>
                  </div>
                </div>

                {/* 食物列表 */}
                <div
                  className="rounded-xl p-3 mb-3 space-y-2"
                  style={{
                    background: "oklch(0.10 0.006 60)",
                    border: "1px solid oklch(1 0 0 / 6%)",
                  }}
                >
                  {activePlan.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <FoodDotIcon color={accentColor} />
                      <span
                        className="text-sm"
                        style={{
                          color: "oklch(0.80 0.01 80)",
                          fontFamily: "'Noto Sans SC', sans-serif",
                        }}
                      >
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 说明文字 */}
                <div
                  className="flex items-start gap-2 rounded-xl px-3 py-2.5"
                  style={{
                    background: `${accentColor}10`,
                    border: `1px solid ${accentColor}20`,
                  }}
                >
                  {/* 灯泡图标 */}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={accentColor}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 mt-0.5"
                  >
                    <path d="M9 18h6M10 22h4M12 2a7 7 0 017 7c0 2.5-1.3 4.7-3.3 6H8.3A7 7 0 0112 2z" />
                  </svg>
                  <p
                    className="text-xs leading-relaxed"
                    style={{
                      color: "oklch(0.72 0.01 80)",
                      fontFamily: "'Noto Sans SC', sans-serif",
                    }}
                  >
                    {activePlan.note}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
