// =============================================================================
// Home - 首页（精简版）
// 设计：Minamoto Fitness 品牌，大气简洁，两个大入口按钮，励志语
// =============================================================================

import { Link } from "wouter";
import { ChevronRight, Zap, Dumbbell } from "lucide-react";
import BottomNav from "@/components/BottomNav";

// 今日日期
const today = new Date();
const weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
const dateStr = `${today.getMonth() + 1}月${today.getDate()}日 · ${weekdays[today.getDay()]}`;

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col page-enter"
      style={{ background: "oklch(0.08 0.005 60)" }}
    >
      {/* ── 顶部品牌区 ──────────────────────────────────────────────── */}
      <div className="flex-shrink-0 px-6 pt-14 pb-2 max-w-[480px] mx-auto w-full">
        {/* 品牌名 */}
        <div className="mb-1">
          <p
            className="text-[10px] tracking-[0.25em] uppercase mb-1"
            style={{
              color: "oklch(0.55 0.01 80)",
              fontFamily: "'Barlow Condensed', sans-serif",
            }}
          >
            {dateStr}
          </p>
          <h1
            className="leading-none"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              letterSpacing: "0.04em",
            }}
          >
            <span
              className="block text-4xl gold-shimmer"
            >
              MINAMOTO
            </span>
            <span
              className="block text-2xl tracking-[0.15em]"
              style={{ color: "oklch(0.55 0.01 80)" }}
            >
              FITNESS
            </span>
          </h1>
        </div>
      </div>

      {/* ── 金色分割线 ──────────────────────────────────────────────── */}
      <div className="px-6 max-w-[480px] mx-auto w-full">
        <div
          className="h-px w-16 mb-6"
          style={{
            background: "linear-gradient(90deg, oklch(0.75 0.14 82), transparent)",
          }}
        />
      </div>

      {/* ── 励志语 ──────────────────────────────────────────────────── */}
      <div className="px-6 max-w-[480px] mx-auto w-full mb-10">
        <p
          className="text-2xl font-bold leading-snug"
          style={{
            color: "oklch(0.92 0.01 80)",
            fontFamily: "'Barlow Condensed', 'Noto Sans SC', sans-serif",
            letterSpacing: "0.03em",
          }}
        >
          自律，
          <br />
          给我自由。
        </p>
        <p
          className="text-sm mt-2"
          style={{
            color: "oklch(0.45 0.01 80)",
            fontFamily: "'Noto Sans SC', sans-serif",
          }}
        >
          每一次训练，都是对自己的承诺
        </p>
      </div>

      {/* ── 两大入口按钮 ──────────────────────────────────────────────── */}
      <div className="px-6 max-w-[480px] mx-auto w-full space-y-3 flex-1">
        {/* 本日训练 */}
        <Link href="/training">
          <div
            className="btn-press relative overflow-hidden rounded-2xl card-enter"
            style={{
              animationDelay: "0ms",
              background: "oklch(0.75 0.14 82)",
              boxShadow: "0 8px 32px oklch(0.75 0.14 82 / 35%)",
              minHeight: "88px",
            }}
          >
            {/* 背景纹理 */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 8px, oklch(0 0 0 / 30%) 8px, oklch(0 0 0 / 30%) 9px)",
              }}
            />
            <div className="relative flex items-center justify-between px-6 py-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "oklch(0 0 0 / 20%)" }}
                >
                  <Zap size={24} style={{ color: "oklch(0.08 0.005 60)" }} />
                </div>
                <div>
                  <h2
                    className="text-xl font-black leading-tight"
                    style={{
                      color: "oklch(0.08 0.005 60)",
                      fontFamily:
                        "'Barlow Condensed', 'Noto Sans SC', sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    本日训练
                  </h2>
                  <p
                    className="text-xs mt-0.5"
                    style={{
                      color: "oklch(0.20 0.005 60)",
                      fontFamily: "'Noto Sans SC', sans-serif",
                    }}
                  >
                    5 套专项方案
                  </p>
                </div>
              </div>
              <ChevronRight
                size={22}
                style={{ color: "oklch(0.20 0.005 60)" }}
              />
            </div>
          </div>
        </Link>

        {/* 器械库 */}
        <Link href="/library">
          <div
            className="btn-press relative overflow-hidden rounded-2xl card-enter"
            style={{
              animationDelay: "80ms",
              background: "oklch(0.14 0.008 60)",
              border: "1px solid oklch(0.75 0.14 82 / 25%)",
              boxShadow: "0 4px 24px oklch(0 0 0 / 40%), inset 0 1px 0 oklch(0.75 0.14 82 / 10%)",
              minHeight: "88px",
            }}
          >
            <div className="flex items-center justify-between px-6 py-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: "oklch(0.75 0.14 82 / 15%)",
                    border: "1px solid oklch(0.75 0.14 82 / 25%)",
                  }}
                >
                  <Dumbbell
                    size={24}
                    style={{ color: "oklch(0.75 0.14 82)" }}
                  />
                </div>
                <div>
                  <h2
                    className="text-xl font-black leading-tight"
                    style={{
                      color: "oklch(0.92 0.01 80)",
                      fontFamily:
                        "'Barlow Condensed', 'Noto Sans SC', sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    器械库
                  </h2>
                  <p
                    className="text-xs mt-0.5"
                    style={{
                      color: "oklch(0.50 0.01 80)",
                      fontFamily: "'Noto Sans SC', sans-serif",
                    }}
                  >
                    7 大分类 · 25+ 件器械
                  </p>
                </div>
              </div>
              <ChevronRight
                size={22}
                style={{ color: "oklch(0.40 0.01 80)" }}
              />
            </div>
          </div>
        </Link>
      </div>

      {/* ── 底部品牌标语 ──────────────────────────────────────────────── */}
      <div className="px-6 pb-28 pt-8 max-w-[480px] mx-auto w-full">
        <p
          className="text-center text-[10px] tracking-[0.2em] uppercase"
          style={{
            color: "oklch(0.30 0.01 80)",
            fontFamily: "'Barlow Condensed', sans-serif",
          }}
        >
          Minamoto Fitness · 源于自律
        </p>
      </div>

      <BottomNav />
    </div>
  );
}
