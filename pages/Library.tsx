// =============================================================================
// Library - 器械库页面
// 设计：黑金风格，分类 Tab + 器械网格卡片
// =============================================================================

import { useState } from "react";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import EquipmentCard from "@/components/EquipmentCard";
import {
  muscleCategories,
  getEquipmentByCategory,
  equipmentList,
  type MuscleGroup,
} from "@/lib/data";
import { Search } from "lucide-react";

export default function Library() {
  const [activeCategory, setActiveCategory] = useState<MuscleGroup | "全部">(
    "全部"
  );
  const [searchQuery, setSearchQuery] = useState("");

  const displayEquipments =
    activeCategory === "全部"
      ? equipmentList
      : getEquipmentByCategory(activeCategory);

  const filteredEquipments = searchQuery
    ? displayEquipments.filter(
        (eq) =>
          eq.name.includes(searchQuery) ||
          eq.targetMuscle.includes(searchQuery)
      )
    : displayEquipments;

  const allCategories = [
    { name: "全部" as const, emoji: "🏋️", color: "from-zinc-900/80 to-zinc-800/80" },
    ...muscleCategories,
  ];

  return (
    <div
      className="min-h-screen page-enter"
      style={{ background: "oklch(0.08 0.005 60)" }}
    >
      <TopBar title="器械库" />

      <div className="pt-14 pb-28 max-w-[480px] mx-auto">
        {/* 搜索框 */}
        <div className="px-4 pt-4 pb-3">
          <div
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl"
            style={{
              background: "oklch(0.13 0.008 60)",
              border: "1px solid oklch(1 0 0 / 10%)",
            }}
          >
            <Search size={16} style={{ color: "oklch(0.45 0.01 80)" }} />
            <input
              type="text"
              placeholder="搜索器械..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-sm outline-none"
              style={{
                color: "oklch(0.85 0.01 80)",
                fontFamily: "'Noto Sans SC', sans-serif",
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs px-1.5 py-0.5 rounded"
                style={{
                  color: "oklch(0.45 0.01 80)",
                  fontFamily: "'Noto Sans SC', sans-serif",
                }}
              >
                清除
              </button>
            )}
          </div>
        </div>

        {/* 分类 Tab 横向滚动 */}
        <div className="px-4 mb-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {allCategories.map((cat) => {
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name as MuscleGroup | "全部")}
                  className="btn-press flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200"
                  style={{
                    background: isActive
                      ? "oklch(0.75 0.14 82)"
                      : "oklch(0.13 0.008 60)",
                    color: isActive
                      ? "oklch(0.08 0.005 60)"
                      : "oklch(0.65 0.01 80)",
                    border: isActive
                      ? "1px solid oklch(0.75 0.14 82)"
                      : "1px solid oklch(1 0 0 / 8%)",
                    fontFamily: "'Noto Sans SC', sans-serif",
                    boxShadow: isActive
                      ? "0 0 12px oklch(0.75 0.14 82 / 40%)"
                      : "none",
                  }}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 器械数量提示 */}
        <div className="px-4 mb-3 flex items-center justify-between">
          <h2
            className="text-sm font-semibold"
            style={{
              color: "oklch(0.65 0.01 80)",
              fontFamily: "'Noto Sans SC', sans-serif",
            }}
          >
            {activeCategory === "全部" ? "全部器械" : activeCategory}
          </h2>
          <span
            className="text-xs"
            style={{
              color: "oklch(0.40 0.01 80)",
              fontFamily: "'Noto Sans SC', sans-serif",
            }}
          >
            {filteredEquipments.length} 件
          </span>
        </div>

        {/* 器械网格 */}
        <div className="px-4">
          {filteredEquipments.length > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {filteredEquipments.map((eq, i) => (
                <EquipmentCard key={eq.id} equipment={eq} index={i} />
              ))}
            </div>
          ) : (
            <div
              className="text-center py-16"
              style={{
                color: "oklch(0.40 0.01 80)",
                fontFamily: "'Noto Sans SC', sans-serif",
              }}
            >
              <div className="text-4xl mb-3">🔍</div>
              <p className="text-sm">未找到相关器械</p>
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
