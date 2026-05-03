// =============================================================================
// EquipmentCard - 器械卡片组件（SVG 图标版）
// 设计：黑金风格，极简 SVG 图标 + 名称 + 部位标签，无图片
// =============================================================================

import { Equipment } from "../lib/data";
import { Link } from "wouter";
import { equipmentIconMap } from "./EquipmentIcon";
import { ChevronRight } from "lucide-react";

interface EquipmentCardProps {
  equipment: Equipment;
  index?: number;
  compact?: boolean;
}

const categoryColors: Record<string, string> = {
  胸部: "oklch(0.65 0.18 25)",
  背部: "oklch(0.60 0.15 240)",
  腿部: "oklch(0.60 0.15 145)",
  肩部: "oklch(0.70 0.15 85)",
  手臂: "oklch(0.65 0.18 300)",
  核心: "oklch(0.65 0.18 50)",
  有氧: "oklch(0.65 0.18 15)",
};

export default function EquipmentCard({
  equipment,
  index = 0,
  compact = false,
}: EquipmentCardProps) {
  const accentColor = categoryColors[equipment.category] || "oklch(0.75 0.14 82)";
  const IconComponent = equipmentIconMap[equipment.id];

  return (
    <Link href={`/equipment/${equipment.id}`}>
      <div
        className="btn-press card-enter card-hover relative overflow-hidden rounded-2xl"
        style={{
          animationDelay: `${index * 60}ms`,
          background: "oklch(0.13 0.008 60)",
          border: "1px solid oklch(1 0 0 / 8%)",
          boxShadow: "0 4px 20px oklch(0 0 0 / 40%)",
        }}
      >
        {/* 图标区域 */}
        <div
          className={`relative flex items-center justify-center ${compact ? "h-28" : "h-36"}`}
          style={{
            background: `radial-gradient(circle at center, ${accentColor}12 0%, oklch(0.10 0.006 60) 70%)`,
          }}
        >
          {/* 背景圆形装饰 */}
          <div
            className="absolute w-20 h-20 rounded-full opacity-10"
            style={{ background: accentColor }}
          />

          {/* SVG 图标 */}
          {IconComponent ? (
            <IconComponent
              size={compact ? 52 : 64}
              color={accentColor}
              strokeWidth={1.5}
            />
          ) : (
            /* 降级：显示分类首字 */
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-black"
              style={{
                background: `${accentColor}20`,
                color: accentColor,
                fontFamily: "'Barlow Condensed', sans-serif",
              }}
            >
              {equipment.category[0]}
            </div>
          )}

          {/* 分类标签 */}
          <div className="absolute top-2 right-2">
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{
                background: `${accentColor}20`,
                color: accentColor,
                border: `1px solid ${accentColor}35`,
                fontFamily: "'Noto Sans SC', sans-serif",
              }}
            >
              {equipment.category}
            </span>
          </div>
        </div>

        {/* 文字区域 */}
        <div className="px-3 pb-3 pt-2">
          <h3
            className="font-bold leading-tight"
            style={{
              color: "oklch(0.92 0.01 80)",
              fontFamily: "'Barlow Condensed', 'Noto Sans SC', sans-serif",
              fontSize: compact ? "0.82rem" : "0.92rem",
              letterSpacing: "0.02em",
            }}
          >
            {equipment.name}
          </h3>
          <p
            className="text-xs mt-0.5 truncate"
            style={{
              color: "oklch(0.50 0.01 80)",
              fontFamily: "'Noto Sans SC', sans-serif",
            }}
          >
            {equipment.targetMuscle}
          </p>
        </div>

        {/* 左侧色条 */}
        <div
          className="absolute left-0 top-3 bottom-3 w-0.5 rounded-r"
          style={{
            background: `linear-gradient(180deg, ${accentColor}, ${accentColor}30)`,
          }}
        />
      </div>
    </Link>
  );
}
