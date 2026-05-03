// =============================================================================
// EquipmentDetail - 器械详情页（SVG 图标版）
// 设计：黑金风格，大图标展示 + 详细信息卡片，无照片
// =============================================================================

import { useParams, useLocation } from "wouter";
import { getEquipmentById } from "@/lib/data";
import { ChevronLeft, Target, AlertTriangle, BarChart3, Zap } from "lucide-react";
import { equipmentIconMap } from "@/components/EquipmentIcon";

const categoryColors: Record<string, string> = {
  胸部: "oklch(0.65 0.18 25)",
  背部: "oklch(0.60 0.15 240)",
  腿部: "oklch(0.60 0.15 145)",
  肩部: "oklch(0.70 0.15 85)",
  手臂: "oklch(0.65 0.18 300)",
  核心: "oklch(0.65 0.18 50)",
  有氧: "oklch(0.65 0.18 15)",
};

interface InfoSectionProps {
  icon: React.ReactNode;
  title: string;
  accentColor: string;
  children: React.ReactNode;
}

function InfoSection({ icon, title, accentColor, children }: InfoSectionProps) {
  return (
    <div
      className="rounded-2xl p-4 relative overflow-hidden"
      style={{
        background: "oklch(0.13 0.008 60)",
        border: "1px solid oklch(1 0 0 / 8%)",
      }}
    >
      {/* 左侧色条 */}
      <div
        className="absolute left-0 top-3 bottom-3 w-0.5 rounded-r"
        style={{
          background: `linear-gradient(180deg, ${accentColor}, ${accentColor}40)`,
        }}
      />
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ background: `${accentColor}20` }}
        >
          {icon}
        </div>
        <h3
          className="text-sm font-bold"
          style={{
            color: "oklch(0.92 0.01 80)",
            fontFamily: "'Barlow Condensed', 'Noto Sans SC', sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

export default function EquipmentDetail() {
  const params = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const equipment = getEquipmentById(params.id);

  if (!equipment) {
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
            未找到器械信息
          </p>
          <button
            onClick={() => window.history.back()}
            className="mt-4 text-sm"
            style={{
              color: "oklch(0.75 0.14 82)",
              fontFamily: "'Noto Sans SC', sans-serif",
            }}
          >
            返回
          </button>
        </div>
      </div>
    );
  }

  const accentColor = categoryColors[equipment.category] || "oklch(0.75 0.14 82)";
  const IconComponent = equipmentIconMap[equipment.id];

  return (
    <div
      className="min-h-screen page-enter"
      style={{ background: "oklch(0.08 0.005 60)" }}
    >
      {/* ── 英雄图标区域 ──────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse at 50% 60%, ${accentColor}20 0%, oklch(0.08 0.005 60) 70%)`,
          minHeight: "240px",
        }}
      >
        {/* 返回按钮 */}
        <button
          onClick={() => window.history.back()}
          className="btn-press absolute top-12 left-4 w-9 h-9 rounded-xl flex items-center justify-center z-10"
          style={{
            background: "oklch(0.13 0.008 60 / 80%)",
            border: "1px solid oklch(1 0 0 / 15%)",
            backdropFilter: "blur(8px)",
          }}
        >
          <ChevronLeft size={20} style={{ color: "oklch(0.92 0.01 80)" }} />
        </button>

        {/* 分类标签 */}
        <div className="absolute top-12 right-4 z-10">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              background: `${accentColor}20`,
              color: accentColor,
              border: `1px solid ${accentColor}40`,
              fontFamily: "'Noto Sans SC', sans-serif",
            }}
          >
            {equipment.category}
          </span>
        </div>

        {/* 大图标 */}
        <div className="flex flex-col items-center justify-center pt-20 pb-6">
          {/* 图标容器 */}
          <div
            className="relative w-36 h-36 rounded-3xl flex items-center justify-center mb-5"
            style={{
              background: `radial-gradient(circle at center, ${accentColor}18 0%, oklch(0.12 0.007 60) 100%)`,
              border: `1px solid ${accentColor}30`,
              boxShadow: `0 0 40px ${accentColor}20`,
            }}
          >
            {/* 背景圆形光晕 */}
            <div
              className="absolute w-24 h-24 rounded-full opacity-15"
              style={{ background: accentColor, filter: "blur(16px)" }}
            />
            {IconComponent ? (
              <IconComponent size={88} color={accentColor} strokeWidth={1.4} />
            ) : (
              <div
                className="text-5xl font-black"
                style={{
                  color: accentColor,
                  fontFamily: "'Barlow Condensed', sans-serif",
                }}
              >
                {equipment.category[0]}
              </div>
            )}
          </div>

          {/* 名称 */}
          <h1
            className="text-3xl font-black text-center"
            style={{
              color: "oklch(0.95 0.01 80)",
              fontFamily: "'Barlow Condensed', 'Noto Sans SC', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            {equipment.name}
          </h1>
          {/* 目标肌群 */}
          <p
            className="text-sm mt-1"
            style={{
              color: accentColor,
              fontFamily: "'Noto Sans SC', sans-serif",
            }}
          >
            {equipment.targetMuscle}
          </p>

          {/* 底部金色线 */}
          <div
            className="mt-5 h-px w-16"
            style={{
              background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
            }}
          />
        </div>
      </div>

      {/* ── 详情内容 ──────────────────────────────────────────────────── */}
      <div className="px-4 pb-12 max-w-[480px] mx-auto space-y-3 mt-2">
        {/* 描述 */}
        {equipment.description && (
          <div
            className="rounded-2xl px-4 py-3"
            style={{
              background: `${accentColor}10`,
              border: `1px solid ${accentColor}20`,
            }}
          >
            <p
              className="text-sm leading-relaxed"
              style={{
                color: "oklch(0.75 0.01 80)",
                fontFamily: "'Noto Sans SC', sans-serif",
              }}
            >
              {equipment.description}
            </p>
          </div>
        )}

        {/* 推荐组数 */}
        <InfoSection
          icon={<BarChart3 size={15} style={{ color: accentColor }} />}
          title="推荐组数"
          accentColor={accentColor}
        >
          <div
            className="text-xl font-black"
            style={{
              color: accentColor,
              fontFamily: "'Barlow Condensed', 'Noto Sans SC', sans-serif",
              letterSpacing: "0.03em",
            }}
          >
            {equipment.sets}
          </div>
        </InfoSection>

        {/* 动作要点 */}
        <InfoSection
          icon={<Zap size={15} style={{ color: accentColor }} />}
          title="动作要点"
          accentColor={accentColor}
        >
          <ul className="space-y-2">
            {equipment.keyPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5"
                  style={{
                    background: `${accentColor}20`,
                    color: accentColor,
                    fontFamily: "'Barlow Condensed', sans-serif",
                  }}
                >
                  {i + 1}
                </span>
                <span
                  className="text-sm leading-relaxed"
                  style={{
                    color: "oklch(0.78 0.01 80)",
                    fontFamily: "'Noto Sans SC', sans-serif",
                  }}
                >
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </InfoSection>

        {/* 注意事项 */}
        <InfoSection
          icon={<AlertTriangle size={15} style={{ color: "oklch(0.65 0.18 50)" }} />}
          title="注意事项"
          accentColor="oklch(0.65 0.18 50)"
        >
          <ul className="space-y-2">
            {equipment.cautions.map((caution, i) => (
              <li key={i} className="flex items-start gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                  style={{ background: "oklch(0.65 0.18 50)" }}
                />
                <span
                  className="text-sm leading-relaxed"
                  style={{
                    color: "oklch(0.75 0.01 80)",
                    fontFamily: "'Noto Sans SC', sans-serif",
                  }}
                >
                  {caution}
                </span>
              </li>
            ))}
          </ul>
        </InfoSection>

        {/* 训练部位 */}
        <InfoSection
          icon={<Target size={15} style={{ color: accentColor }} />}
          title="训练部位"
          accentColor={accentColor}
        >
          <div className="flex flex-wrap gap-2">
            <span
              className="px-3 py-1 rounded-full text-sm font-medium"
              style={{
                background: `${accentColor}20`,
                color: accentColor,
                border: `1px solid ${accentColor}40`,
                fontFamily: "'Noto Sans SC', sans-serif",
              }}
            >
              {equipment.targetMuscle}
            </span>
            <span
              className="px-3 py-1 rounded-full text-sm font-medium"
              style={{
                background: "oklch(1 0 0 / 6%)",
                color: "oklch(0.65 0.01 80)",
                border: "1px solid oklch(1 0 0 / 10%)",
                fontFamily: "'Noto Sans SC', sans-serif",
              }}
            >
              {equipment.category}
            </span>
          </div>
        </InfoSection>
      </div>
    </div>
  );
}
