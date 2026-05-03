// =============================================================================
// Training - 本日训练页面
// 设计：黑金风格，训练方案卡片列表，统一肌肉部位 SVG 图标
// =============================================================================

import { Link } from "wouter";
import { ChevronRight, Clock, Dumbbell, Flame } from "lucide-react";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import { trainingPlans, getEquipmentForPlan } from "@/lib/data";
import { planMuscleIconMap } from "@/components/MuscleIcon";

const planBgColors: Record<string, string> = {
  "chest-triceps": "oklch(0.65 0.18 25)",
  "back-biceps": "oklch(0.55 0.15 240)",
  "legs-glutes": "oklch(0.60 0.15 145)",
  "shoulders-core": "oklch(0.70 0.15 85)",
  cardio: "oklch(0.65 0.18 15)",
};

export default function Training() {
  return (
    <div
      className="min-h-screen page-enter"
      style={{ background: "oklch(0.08 0.005 60)" }}
    >
      <TopBar title="本日训练" />

      {/* 顶部说明 */}
      <div className="pt-14 px-4 pb-2 max-w-[480px] mx-auto">
        <div className="pt-4 pb-2">
          <h2
            className="text-2xl font-black tracking-wide"
            style={{
              color: "oklch(0.92 0.01 80)",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            选择训练方案
          </h2>
          <p
            className="text-xs mt-1"
            style={{
              color: "oklch(0.45 0.01 80)",
              fontFamily: "'Noto Sans SC', sans-serif",
            }}
          >
            {trainingPlans.length} 套专项方案，点击开始今日训练
          </p>
        </div>
        <div
          className="h-px w-12 mb-3"
          style={{
            background: "linear-gradient(90deg, oklch(0.75 0.14 82), transparent)",
          }}
        />
      </div>

      {/* 方案列表 */}
      <div className="px-4 pb-28 max-w-[480px] mx-auto space-y-3">
        {trainingPlans.map((plan, i) => {
          const equipments = getEquipmentForPlan(plan);
          const accentColor = planBgColors[plan.id] || "oklch(0.75 0.14 82)";
          const MuscleIconComponent = planMuscleIconMap[plan.id];

          return (
            <Link key={plan.id} href={`/training/${plan.id}`}>
              <div
                className="btn-press relative overflow-hidden rounded-2xl card-enter"
                style={{
                  animationDelay: `${i * 80}ms`,
                  background: "oklch(0.13 0.008 60)",
                  border: "1px solid oklch(1 0 0 / 8%)",
                  boxShadow: "0 4px 20px oklch(0 0 0 / 40%)",
                }}
              >
                {/* 背景光晕 */}
                <div
                  className="absolute top-0 right-0 w-28 h-28 rounded-full -translate-y-10 translate-x-10 opacity-8"
                  style={{ background: accentColor, filter: "blur(20px)" }}
                />

                <div className="p-4 flex items-center gap-4">
                  {/* 肌肉部位图标 */}
                  <div
                    className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: `radial-gradient(circle at center, ${accentColor}18 0%, oklch(0.10 0.006 60) 80%)`,
                      border: `1px solid ${accentColor}25`,
                    }}
                  >
                    {MuscleIconComponent ? (
                      <MuscleIconComponent
                        size={64}
                        primaryColor={accentColor}
                        bodyColor="oklch(0.40 0.01 80)"
                      />
                    ) : (
                      <span className="text-2xl">{plan.emoji}</span>
                    )}
                  </div>

                  {/* 文字信息 */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3
                        className="font-black text-xl leading-tight"
                        style={{
                          color: "oklch(0.92 0.01 80)",
                          fontFamily:
                            "'Barlow Condensed', 'Noto Sans SC', sans-serif",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {plan.name}
                      </h3>
                      <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
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
                        <ChevronRight
                          size={16}
                          style={{ color: "oklch(0.35 0.01 80)" }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mt-1 mb-2">
                      <span
                        className="flex items-center gap-1 text-xs"
                        style={{
                          color: "oklch(0.50 0.01 80)",
                          fontFamily: "'Noto Sans SC', sans-serif",
                        }}
                      >
                        <Clock size={11} />
                        {plan.duration}
                      </span>
                      <span
                        className="flex items-center gap-1 text-xs"
                        style={{
                          color: "oklch(0.50 0.01 80)",
                          fontFamily: "'Noto Sans SC', sans-serif",
                        }}
                      >
                        <Dumbbell size={11} />
                        {equipments.length} 个器械
                      </span>
                    </div>

                    {/* 器械预览标签 */}
                    <div className="flex flex-wrap gap-1">
                      {equipments.slice(0, 3).map((eq) => (
                        <span
                          key={eq.id}
                          className="text-[10px] px-2 py-0.5 rounded-full"
                          style={{
                            background: "oklch(1 0 0 / 5%)",
                            color: "oklch(0.60 0.01 80)",
                            fontFamily: "'Noto Sans SC', sans-serif",
                            border: "1px solid oklch(1 0 0 / 8%)",
                          }}
                        >
                          {eq.name}
                        </span>
                      ))}
                      {equipments.length > 3 && (
                        <span
                          className="text-[10px] px-2 py-0.5 rounded-full"
                          style={{
                            background: `${accentColor}12`,
                            color: accentColor,
                            fontFamily: "'Noto Sans SC', sans-serif",
                            border: `1px solid ${accentColor}25`,
                          }}
                        >
                          +{equipments.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* 左侧色条 */}
                <div
                  className="absolute left-0 top-3 bottom-3 w-1 rounded-r"
                  style={{
                    background: `linear-gradient(180deg, ${accentColor}, ${accentColor}30)`,
                  }}
                />
              </div>
            </Link>
          );
        })}

        {/* 底部提示 */}
        <div
          className="text-center py-4 flex items-center justify-center gap-2"
          style={{
            color: "oklch(0.35 0.01 80)",
            fontFamily: "'Noto Sans SC', sans-serif",
            fontSize: "0.75rem",
          }}
        >
          <Flame size={12} />
          坚持训练，突破极限
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
