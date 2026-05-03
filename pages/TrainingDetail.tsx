// =============================================================================
// TrainingDetail - 训练详情页（含饮食推荐联动）
// 页面结构：训练名称 → 饮食推荐模块 → 训练器械列表
// 设计：黑金风格，网格卡片布局，肌肉部位图标
// =============================================================================

import { useParams } from "wouter";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";
import EquipmentCard from "../components/EquipmentCard";
import DietRecommendation from "../components/DietRecommendation";
import { getPlanById, getEquipmentForPlan, getDietRecommendation } from "../lib/data";
import { Clock, Dumbbell } from "lucide-react";
import { useLocation } from "wouter";
import { planMuscleIconMap } from "../components/MuscleIcon";

const planBgColors: Record<string, string> = {
  "chest-triceps": "oklch(0.65 0.18 25)",
  "back-biceps": "oklch(0.55 0.15 240)",
  "legs-glutes": "oklch(0.60 0.15 145)",
  "shoulders-core": "oklch(0.70 0.15 85)",
  cardio: "oklch(0.65 0.18 15)",
};

export default function TrainingDetail() {
  const params = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const plan = getPlanById(params.id);

  if (!plan) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "oklch(0.08 0.005 60)" }}
      >
        <div className="text-center">
          <p
            style={{
              color: "oklch(0.55 0.01 80)",
              fontFamily: "'Noto Sans SC', sans-serif",
            }}
          >
            未找到训练方案
          </p>
          <button
            onClick={() => navigate("/training")}
            className="mt-4 text-sm"
            style={{
              color: "oklch(0.75 0.14 82)",
              fontFamily: "'Noto Sans SC', sans-serif",
            }}
          >
            返回训练列表
          </button>
        </div>
      </div>
    );
  }

  const equipments = getEquipmentForPlan(plan);
  const accentColor = planBgColors[plan.id] || "oklch(0.75 0.14 82)";
  const MuscleIconComponent = planMuscleIconMap[plan.id];
  const dietRec = getDietRecommendation(plan.id);

  return (
    <div
      className="min-h-screen page-enter"
      style={{ background: "oklch(0.08 0.005 60)" }}
    >
      <TopBar
        title={plan.name}
        showBack
        onBack={() => navigate("/training")}
      />

      {/* ── 方案信息头部 ──────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden pt-14"
        style={{
          background: `linear-gradient(135deg, ${accentColor}12 0%, oklch(0.08 0.005 60) 100%)`,
        }}
      >
        <div className="px-4 py-5 max-w-[480px] mx-auto">
          <div className="flex items-center gap-4 mb-3">
            {/* 肌肉部位图标 */}
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: `radial-gradient(circle at center, ${accentColor}18 0%, oklch(0.12 0.007 60) 100%)`,
                border: `1px solid ${accentColor}30`,
              }}
            >
              {MuscleIconComponent ? (
                <MuscleIconComponent
                  size={64}
                  primaryColor={accentColor}
                  bodyColor="oklch(0.40 0.01 80)"
                />
              ) : (
                <span className="text-3xl">{plan.emoji}</span>
              )}
            </div>

            <div>
              <h1
                className="text-2xl font-black"
                style={{
                  color: "oklch(0.92 0.01 80)",
                  fontFamily:
                    "'Barlow Condensed', 'Noto Sans SC', sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                {plan.name}
              </h1>
              <div className="flex items-center gap-3 mt-1 flex-wrap">
                <span
                  className="flex items-center gap-1 text-xs"
                  style={{
                    color: "oklch(0.55 0.01 80)",
                    fontFamily: "'Noto Sans SC', sans-serif",
                  }}
                >
                  <Clock size={12} />
                  {plan.duration}
                </span>
                <span
                  className="flex items-center gap-1 text-xs"
                  style={{
                    color: "oklch(0.55 0.01 80)",
                    fontFamily: "'Noto Sans SC', sans-serif",
                  }}
                >
                  <Dumbbell size={12} />
                  {equipments.length} 个器械
                </span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background:
                      plan.difficulty === "高级"
                        ? "oklch(0.65 0.18 25 / 20%)"
                        : plan.difficulty === "中级"
                        ? "oklch(0.75 0.14 82 / 20%)"
                        : "oklch(0.60 0.15 145 / 20%)",
                    color:
                      plan.difficulty === "高级"
                        ? "oklch(0.65 0.18 25)"
                        : plan.difficulty === "中级"
                        ? "oklch(0.75 0.14 82)"
                        : "oklch(0.60 0.15 145)",
                    fontFamily: "'Noto Sans SC', sans-serif",
                  }}
                >
                  {plan.difficulty}
                </span>
              </div>
            </div>
          </div>

          {/* 金色分割线 */}
          <div
            className="h-px w-full"
            style={{
              background: `linear-gradient(90deg, ${accentColor}60, transparent)`,
            }}
          />
        </div>
      </div>

      {/* ── 主内容区 ──────────────────────────────────────────────────── */}
      <div className="px-4 pb-28 max-w-[480px] mx-auto space-y-5 mt-1">

        {/* ① 饮食推荐模块（在器械列表上方）*/}
        {dietRec && (
          <DietRecommendation
            recommendation={dietRec}
            accentColor={accentColor}
          />
        )}

        {/* ② 训练器械列表 */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div
                className="w-1 h-4 rounded-full"
                style={{
                  background: `linear-gradient(180deg, ${accentColor}, ${accentColor}50)`,
                }}
              />
              <h2
                className="text-sm font-bold tracking-wide"
                style={{
                  color: "oklch(0.85 0.01 80)",
                  fontFamily:
                    "'Barlow Condensed', 'Noto Sans SC', sans-serif",
                  letterSpacing: "0.06em",
                }}
              >
                训练器械
              </h2>
            </div>
            <span
              className="text-xs"
              style={{
                color: "oklch(0.40 0.01 80)",
                fontFamily: "'Noto Sans SC', sans-serif",
              }}
            >
              点击查看详情
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {equipments.map((eq, i) => (
              <EquipmentCard key={eq.id} equipment={eq} index={i} />
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
