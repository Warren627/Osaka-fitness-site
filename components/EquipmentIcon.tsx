// =============================================================================
// EquipmentIcon - 极简线条风格器械图标
// 设计：单色线条 SVG，金色描边，黑色背景，辨识度高
// =============================================================================

interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

// ── 有氧器械 ──────────────────────────────────────────────────────────────

export function TreadmillIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 跑步带 */}
      <rect x="8" y="38" width="48" height="6" rx="3" stroke={color} strokeWidth={strokeWidth} />
      {/* 前滚轮 */}
      <circle cx="12" cy="41" r="4" stroke={color} strokeWidth={strokeWidth} />
      {/* 后滚轮 */}
      <circle cx="52" cy="41" r="4" stroke={color} strokeWidth={strokeWidth} />
      {/* 扶手左 */}
      <line x1="20" y1="38" x2="16" y2="18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 扶手右 */}
      <line x1="44" y1="38" x2="48" y2="18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 横杆 */}
      <line x1="16" y1="18" x2="48" y2="18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 控制面板 */}
      <rect x="26" y="14" width="12" height="8" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 跑步人形 */}
      <circle cx="38" cy="28" r="3" stroke={color} strokeWidth={strokeWidth} />
      <line x1="38" y1="31" x2="36" y2="38" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="36" y1="38" x2="33" y2="42" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="36" y1="38" x2="39" y2="42" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="38" y1="31" x2="35" y2="35" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="38" y1="31" x2="41" y2="34" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function BikeIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 后轮 */}
      <circle cx="16" cy="44" r="12" stroke={color} strokeWidth={strokeWidth} />
      {/* 前轮 */}
      <circle cx="48" cy="44" r="12" stroke={color} strokeWidth={strokeWidth} />
      {/* 车架 */}
      <line x1="16" y1="44" x2="32" y2="28" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="32" y1="28" x2="48" y2="44" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="32" y1="28" x2="36" y2="20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 车把 */}
      <line x1="33" y1="20" x2="42" y2="20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 座椅杆 */}
      <line x1="32" y1="28" x2="28" y2="20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 座椅 */}
      <line x1="23" y1="20" x2="33" y2="20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 曲柄 */}
      <circle cx="32" cy="36" r="3" stroke={color} strokeWidth={strokeWidth} />
      <line x1="32" y1="36" x2="28" y2="42" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="32" y1="36" x2="36" y2="30" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function EllipticalIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 底座 */}
      <ellipse cx="32" cy="52" rx="20" ry="4" stroke={color} strokeWidth={strokeWidth} />
      {/* 主柱 */}
      <line x1="32" y1="48" x2="32" y2="20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 扶手 */}
      <line x1="32" y1="20" x2="20" y2="30" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="32" y1="20" x2="44" y2="30" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 踏板椭圆轨迹 */}
      <ellipse cx="20" cy="44" rx="6" ry="3" stroke={color} strokeWidth={strokeWidth} />
      <ellipse cx="44" cy="44" rx="6" ry="3" stroke={color} strokeWidth={strokeWidth} />
      {/* 连杆 */}
      <line x1="20" y1="30" x2="20" y2="41" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="44" y1="30" x2="44" y2="41" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 控制台 */}
      <rect x="26" y="12" width="12" height="8" rx="2" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

export function StairClimberIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 机身 */}
      <rect x="20" y="12" width="24" height="40" rx="3" stroke={color} strokeWidth={strokeWidth} />
      {/* 踏板左 */}
      <rect x="10" y="34" width="14" height="5" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 踏板右 */}
      <rect x="40" y="42" width="14" height="5" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 连杆左 */}
      <line x1="17" y1="34" x2="24" y2="24" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 连杆右 */}
      <line x1="47" y1="42" x2="40" y2="32" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 扶手 */}
      <line x1="24" y1="12" x2="20" y2="6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="40" y1="12" x2="44" y2="6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 显示屏 */}
      <rect x="26" y="16" width="12" height="8" rx="1.5" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

export function RecumbentBikeIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 后轮 */}
      <circle cx="14" cy="46" r="10" stroke={color} strokeWidth={strokeWidth} />
      {/* 前轮 */}
      <circle cx="50" cy="46" r="10" stroke={color} strokeWidth={strokeWidth} />
      {/* 车架横梁 */}
      <line x1="14" y1="46" x2="50" y2="46" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 靠背 */}
      <line x1="22" y1="46" x2="18" y2="28" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="18" y1="28" x2="30" y2="28" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 座椅 */}
      <line x1="22" y1="38" x2="34" y2="38" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 踏板 */}
      <circle cx="44" cy="40" r="3" stroke={color} strokeWidth={strokeWidth} />
      <line x1="44" y1="40" x2="40" y2="34" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="44" y1="40" x2="48" y2="34" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

// ── 胸部器械 ──────────────────────────────────────────────────────────────

export function ChestPressIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 座椅 */}
      <rect x="24" y="44" width="16" height="6" rx="2" stroke={color} strokeWidth={strokeWidth} />
      <line x1="32" y1="50" x2="32" y2="56" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 靠背 */}
      <rect x="26" y="28" width="12" height="16" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 推把左 */}
      <line x1="26" y1="34" x2="14" y2="30" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="14" y1="30" x2="10" y2="36" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 推把右 */}
      <line x1="38" y1="34" x2="50" y2="30" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="50" y1="30" x2="54" y2="36" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 重量块 */}
      <rect x="6" y="18" width="6" height="20" rx="1" stroke={color} strokeWidth={strokeWidth} />
      <rect x="52" y="18" width="6" height="20" rx="1" stroke={color} strokeWidth={strokeWidth} />
      {/* 人头 */}
      <circle cx="32" cy="22" r="5" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

export function PecDeckIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 主机 */}
      <rect x="22" y="10" width="20" height="44" rx="3" stroke={color} strokeWidth={strokeWidth} />
      {/* 左臂 */}
      <path d="M22 28 Q8 28 8 38" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" fill="none" />
      {/* 右臂 */}
      <path d="M42 28 Q56 28 56 38" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" fill="none" />
      {/* 左把手 */}
      <circle cx="8" cy="38" r="3" stroke={color} strokeWidth={strokeWidth} />
      {/* 右把手 */}
      <circle cx="56" cy="38" r="3" stroke={color} strokeWidth={strokeWidth} />
      {/* 座椅 */}
      <rect x="25" y="44" width="14" height="5" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 显示屏 */}
      <rect x="27" y="14" width="10" height="7" rx="1.5" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

export function InclinePressIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 斜面靠背 */}
      <path d="M16 52 L28 24" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 座椅 */}
      <line x1="16" y1="52" x2="36" y2="52" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 支架 */}
      <line x1="36" y1="52" x2="36" y2="58" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="16" y1="52" x2="16" y2="58" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 杠铃 */}
      <line x1="14" y1="20" x2="50" y2="20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 杠铃片左 */}
      <rect x="10" y="14" width="5" height="12" rx="1" stroke={color} strokeWidth={strokeWidth} />
      {/* 杠铃片右 */}
      <rect x="49" y="14" width="5" height="12" rx="1" stroke={color} strokeWidth={strokeWidth} />
      {/* 人 */}
      <circle cx="30" cy="20" r="4" stroke={color} strokeWidth={strokeWidth} />
      <line x1="30" y1="24" x2="28" y2="36" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function DumbbellIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 握杆 */}
      <line x1="20" y1="32" x2="44" y2="32" stroke={color} strokeWidth={strokeWidth + 0.5} strokeLinecap="round" />
      {/* 左内片 */}
      <rect x="14" y="26" width="7" height="12" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 左外片 */}
      <rect x="8" y="23" width="7" height="18" rx="2.5" stroke={color} strokeWidth={strokeWidth} />
      {/* 右内片 */}
      <rect x="43" y="26" width="7" height="12" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 右外片 */}
      <rect x="49" y="23" width="7" height="18" rx="2.5" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

// ── 背部器械 ──────────────────────────────────────────────────────────────

export function LatPulldownIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 顶部横梁 */}
      <line x1="8" y1="10" x2="56" y2="10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 主柱 */}
      <line x1="32" y1="10" x2="32" y2="56" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 滑轮 */}
      <circle cx="32" cy="14" r="4" stroke={color} strokeWidth={strokeWidth} />
      {/* 绳索 */}
      <line x1="32" y1="18" x2="32" y2="28" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 下拉杆 */}
      <line x1="16" y1="28" x2="48" y2="28" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 人 */}
      <circle cx="32" cy="36" r="4" stroke={color} strokeWidth={strokeWidth} />
      <line x1="32" y1="40" x2="32" y2="50" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 手臂 */}
      <line x1="32" y1="42" x2="22" y2="30" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="32" y1="42" x2="42" y2="30" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 重量块 */}
      <rect x="28" y="48" width="8" height="10" rx="1" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

export function SeatedRowIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 机器主体 */}
      <rect x="8" y="20" width="10" height="30" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 脚踏板 */}
      <line x1="8" y1="36" x2="4" y2="36" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="8" y1="44" x2="4" y2="44" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 绳索 */}
      <line x1="18" y1="32" x2="36" y2="32" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 人 */}
      <circle cx="44" cy="24" r="5" stroke={color} strokeWidth={strokeWidth} />
      <line x1="44" y1="29" x2="44" y2="42" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 手臂拉动 */}
      <line x1="44" y1="34" x2="36" y2="32" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="44" y1="34" x2="38" y2="28" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 腿 */}
      <line x1="44" y1="42" x2="40" y2="52" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="44" y1="42" x2="48" y2="52" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 座椅 */}
      <line x1="38" y1="42" x2="52" y2="42" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function LatMachineIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 框架 */}
      <rect x="10" y="8" width="44" height="48" rx="3" stroke={color} strokeWidth={strokeWidth} />
      {/* 顶部滑轮 */}
      <circle cx="32" cy="16" r="5" stroke={color} strokeWidth={strokeWidth} />
      {/* 绳索 */}
      <line x1="32" y1="21" x2="32" y2="32" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 把手 */}
      <line x1="22" y1="32" x2="42" y2="32" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 重量 */}
      <rect x="26" y="38" width="12" height="14" rx="2" stroke={color} strokeWidth={strokeWidth} />
      <line x1="30" y1="38" x2="30" y2="52" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="34" y1="38" x2="34" y2="52" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

// ── 肩部器械 ──────────────────────────────────────────────────────────────

export function ShoulderPressIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 座椅 */}
      <rect x="22" y="46" width="20" height="6" rx="2" stroke={color} strokeWidth={strokeWidth} />
      <line x1="32" y1="52" x2="32" y2="58" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 靠背 */}
      <rect x="26" y="30" width="12" height="16" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 人头 */}
      <circle cx="32" cy="24" r="5" stroke={color} strokeWidth={strokeWidth} />
      {/* 推把 - 上推状态 */}
      <line x1="26" y1="36" x2="16" y2="28" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="16" y1="28" x2="16" y2="18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="38" y1="36" x2="48" y2="28" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="48" y1="28" x2="48" y2="18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 重量块 */}
      <rect x="10" y="10" width="8" height="20" rx="1.5" stroke={color} strokeWidth={strokeWidth} />
      <rect x="46" y="10" width="8" height="20" rx="1.5" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

// ── 手臂器械 ──────────────────────────────────────────────────────────────

export function CablePressIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 机器框架 */}
      <rect x="8" y="8" width="12" height="48" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 顶部滑轮 */}
      <circle cx="14" cy="16" r="4" stroke={color} strokeWidth={strokeWidth} />
      {/* 绳索 */}
      <path d="M14 20 Q14 32 28 36" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" fill="none" />
      {/* 把手 */}
      <line x1="24" y1="34" x2="32" y2="38" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 人 */}
      <circle cx="44" cy="22" r="5" stroke={color} strokeWidth={strokeWidth} />
      <line x1="44" y1="27" x2="44" y2="42" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 手臂下压 */}
      <line x1="44" y1="32" x2="32" y2="38" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="44" y1="32" x2="52" y2="36" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 腿 */}
      <line x1="44" y1="42" x2="40" y2="54" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="44" y1="42" x2="48" y2="54" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 重量 */}
      <rect x="10" y="28" width="8" height="16" rx="1" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

export function DipsIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 左杆 */}
      <line x1="14" y1="10" x2="14" y2="54" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 右杆 */}
      <line x1="50" y1="10" x2="50" y2="54" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 左把手 */}
      <line x1="14" y1="28" x2="22" y2="28" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 右把手 */}
      <line x1="50" y1="28" x2="42" y2="28" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 底部连接 */}
      <line x1="14" y1="54" x2="50" y2="54" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 人 */}
      <circle cx="32" cy="20" r="5" stroke={color} strokeWidth={strokeWidth} />
      <line x1="32" y1="25" x2="32" y2="40" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 手臂 */}
      <line x1="32" y1="30" x2="22" y2="28" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="32" y1="30" x2="42" y2="28" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 腿弯曲 */}
      <line x1="32" y1="40" x2="26" y2="50" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="32" y1="40" x2="38" y2="50" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function DumbbellCurlIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 人 */}
      <circle cx="32" cy="14" r="6" stroke={color} strokeWidth={strokeWidth} />
      <line x1="32" y1="20" x2="32" y2="38" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="32" y1="38" x2="26" y2="50" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="32" y1="38" x2="38" y2="50" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 右臂弯举 */}
      <line x1="32" y1="28" x2="46" y2="32" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="46" y1="32" x2="48" y2="22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 哑铃 */}
      <line x1="44" y1="18" x2="52" y2="18" stroke={color} strokeWidth={strokeWidth + 0.5} strokeLinecap="round" />
      <rect x="41" y="14" width="4" height="8" rx="1" stroke={color} strokeWidth={strokeWidth} />
      <rect x="51" y="14" width="4" height="8" rx="1" stroke={color} strokeWidth={strokeWidth} />
      {/* 左臂 */}
      <line x1="32" y1="28" x2="18" y2="32" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

// ── 腿部器械 ──────────────────────────────────────────────────────────────

export function LegPressIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 斜面机身 */}
      <path d="M8 52 L8 20 L52 8 L52 52 Z" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinejoin="round" />
      {/* 踏板 */}
      <rect x="44" y="12" width="10" height="16" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 人 */}
      <circle cx="24" cy="28" r="5" stroke={color} strokeWidth={strokeWidth} />
      <line x1="24" y1="33" x2="24" y2="46" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 腿推 */}
      <line x1="24" y1="40" x2="44" y2="22" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="24" y1="40" x2="44" y2="28" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 座椅 */}
      <line x1="14" y1="46" x2="34" y2="46" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function LegExtensionIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 机器主体 */}
      <rect x="8" y="10" width="16" height="44" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 座椅 */}
      <rect x="18" y="28" width="20" height="8" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 靠背 */}
      <rect x="18" y="14" width="8" height="16" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 腿部杠杆 */}
      <line x1="24" y1="36" x2="24" y2="50" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="24" y1="50" x2="44" y2="50" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 腿垫 */}
      <rect x="40" y="46" width="8" height="8" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 人腿 */}
      <line x1="30" y1="36" x2="30" y2="50" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="30" y1="50" x2="40" y2="50" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function LegCurlIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 机器台面 */}
      <rect x="8" y="30" width="48" height="8" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 支腿 */}
      <line x1="16" y1="38" x2="16" y2="54" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="48" y1="38" x2="48" y2="54" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 腿垫杠杆 */}
      <line x1="44" y1="30" x2="44" y2="18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <rect x="38" y="14" width="12" height="6" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 人趴卧 */}
      <circle cx="24" cy="24" r="5" stroke={color} strokeWidth={strokeWidth} />
      <line x1="24" y1="29" x2="44" y2="30" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function SquatRackIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 左柱 */}
      <line x1="12" y1="8" x2="12" y2="56" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 右柱 */}
      <line x1="52" y1="8" x2="52" y2="56" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 顶横梁 */}
      <line x1="12" y1="8" x2="52" y2="8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 底横梁 */}
      <line x1="12" y1="56" x2="52" y2="56" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 杠铃托架 */}
      <line x1="12" y1="24" x2="20" y2="24" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="52" y1="24" x2="44" y2="24" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 杠铃 */}
      <line x1="16" y1="28" x2="48" y2="28" stroke={color} strokeWidth={strokeWidth + 0.5} strokeLinecap="round" />
      <rect x="10" y="22" width="6" height="12" rx="1" stroke={color} strokeWidth={strokeWidth} />
      <rect x="48" y="22" width="6" height="12" rx="1" stroke={color} strokeWidth={strokeWidth} />
      {/* 人深蹲 */}
      <circle cx="32" cy="22" r="4" stroke={color} strokeWidth={strokeWidth} />
      <line x1="32" y1="26" x2="28" y2="38" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="32" y1="26" x2="36" y2="38" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="28" y1="38" x2="24" y2="48" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="36" y1="38" x2="40" y2="48" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function AdductorIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 座椅 */}
      <rect x="22" y="36" width="20" height="8" rx="2" stroke={color} strokeWidth={strokeWidth} />
      <line x1="32" y1="44" x2="32" y2="54" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 靠背 */}
      <rect x="26" y="20" width="12" height="16" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 人头 */}
      <circle cx="32" cy="14" r="5" stroke={color} strokeWidth={strokeWidth} />
      {/* 腿内收 */}
      <line x1="28" y1="44" x2="18" y2="52" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="36" y1="44" x2="46" y2="52" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 内收垫 */}
      <rect x="12" y="48" width="8" height="8" rx="2" stroke={color} strokeWidth={strokeWidth} />
      <rect x="44" y="48" width="8" height="8" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 箭头表示内收 */}
      <line x1="20" y1="52" x2="26" y2="52" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="44" y1="52" x2="38" y2="52" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function AbductorIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 座椅 */}
      <rect x="22" y="36" width="20" height="8" rx="2" stroke={color} strokeWidth={strokeWidth} />
      <line x1="32" y1="44" x2="32" y2="54" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 靠背 */}
      <rect x="26" y="20" width="12" height="16" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 人头 */}
      <circle cx="32" cy="14" r="5" stroke={color} strokeWidth={strokeWidth} />
      {/* 腿外展 */}
      <line x1="28" y1="44" x2="14" y2="56" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="36" y1="44" x2="50" y2="56" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 外展垫 */}
      <rect x="8" y="52" width="8" height="8" rx="2" stroke={color} strokeWidth={strokeWidth} />
      <rect x="48" y="52" width="8" height="8" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 箭头表示外展 */}
      <line x1="16" y1="52" x2="22" y2="48" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="48" y1="52" x2="42" y2="48" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

// ── 核心器械 ──────────────────────────────────────────────────────────────

export function AbCrunchIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 机器主体 */}
      <rect x="20" y="10" width="24" height="44" rx="3" stroke={color} strokeWidth={strokeWidth} />
      {/* 座椅 */}
      <rect x="22" y="40" width="20" height="8" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 脚踏板 */}
      <line x1="20" y1="50" x2="10" y2="50" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="44" y1="50" x2="54" y2="50" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 卷腹把手 */}
      <path d="M26 24 Q32 18 38 24" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" fill="none" />
      {/* 人 */}
      <circle cx="32" cy="32" r="5" stroke={color} strokeWidth={strokeWidth} />
      {/* 卷腹动作 */}
      <path d="M32 37 Q28 42 28 46" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function RotaryTorsoIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 旋转底座 */}
      <circle cx="32" cy="44" r="12" stroke={color} strokeWidth={strokeWidth} />
      {/* 旋转箭头 */}
      <path d="M22 38 Q20 44 24 50" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" fill="none" />
      <path d="M42 38 Q44 44 40 50" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" fill="none" />
      {/* 座椅 */}
      <rect x="26" y="40" width="12" height="6" rx="2" stroke={color} strokeWidth={strokeWidth} />
      {/* 人 */}
      <circle cx="32" cy="20" r="6" stroke={color} strokeWidth={strokeWidth} />
      <line x1="32" y1="26" x2="32" y2="40" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 扭转把手 */}
      <line x1="32" y1="30" x2="18" y2="26" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="32" y1="30" x2="46" y2="34" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function CrunchBenchIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 斜板 */}
      <path d="M10 50 L50 20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 脚钩 */}
      <line x1="46" y1="20" x2="54" y2="16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="54" y1="16" x2="54" y2="24" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 支架 */}
      <line x1="10" y1="50" x2="10" y2="56" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="30" y1="36" x2="30" y2="56" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 人 */}
      <circle cx="28" cy="28" r="5" stroke={color} strokeWidth={strokeWidth} />
      <path d="M28 33 Q24 38 20 42" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" fill="none" />
      {/* 手抱头 */}
      <line x1="28" y1="30" x2="22" y2="26" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="28" y1="30" x2="34" y2="26" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

// ── 自由力量 ──────────────────────────────────────────────────────────────

export function SmithMachineIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 左柱 */}
      <line x1="10" y1="6" x2="10" y2="58" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 右柱 */}
      <line x1="54" y1="6" x2="54" y2="58" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 顶梁 */}
      <line x1="10" y1="6" x2="54" y2="6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 底梁 */}
      <line x1="10" y1="58" x2="54" y2="58" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 轨道线 */}
      <line x1="16" y1="10" x2="16" y2="54" stroke={color} strokeWidth={strokeWidth * 0.7} strokeLinecap="round" strokeDasharray="3 3" />
      <line x1="48" y1="10" x2="48" y2="54" stroke={color} strokeWidth={strokeWidth * 0.7} strokeLinecap="round" strokeDasharray="3 3" />
      {/* 杠铃 */}
      <line x1="16" y1="30" x2="48" y2="30" stroke={color} strokeWidth={strokeWidth + 0.5} strokeLinecap="round" />
      <rect x="10" y="24" width="7" height="12" rx="1.5" stroke={color} strokeWidth={strokeWidth} />
      <rect x="47" y="24" width="7" height="12" rx="1.5" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

export function CablePulleyIcon({ size = 64, color = "currentColor", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 框架 */}
      <rect x="8" y="6" width="48" height="52" rx="3" stroke={color} strokeWidth={strokeWidth} />
      {/* 顶部滑轮 */}
      <circle cx="32" cy="16" r="5" stroke={color} strokeWidth={strokeWidth} />
      {/* 底部滑轮 */}
      <circle cx="32" cy="48" r="5" stroke={color} strokeWidth={strokeWidth} />
      {/* 绳索 */}
      <line x1="32" y1="21" x2="32" y2="43" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 顶部把手 */}
      <line x1="24" y1="14" x2="40" y2="14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 底部把手 */}
      <line x1="24" y1="50" x2="40" y2="50" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 中间重量指示 */}
      <rect x="28" y="28" width="8" height="8" rx="1" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

// ── 图标映射表 ──────────────────────────────────────────────────────────────

export const equipmentIconMap: Record<string, React.FC<IconProps>> = {
  treadmill: TreadmillIcon,
  bike: BikeIcon,
  recumbentBike: RecumbentBikeIcon,
  elliptical: EllipticalIcon,
  stairClimber: StairClimberIcon,
  chestPress: ChestPressIcon,
  pecDeck: PecDeckIcon,
  inclinePress: InclinePressIcon,
  dumbbell: DumbbellIcon,
  latPulldown: LatPulldownIcon,
  seatedRow: SeatedRowIcon,
  latMachine: LatMachineIcon,
  shoulderPress: ShoulderPressIcon,
  cablePress: CablePressIcon,
  dips: DipsIcon,
  dumbbellCurl: DumbbellCurlIcon,
  legPress: LegPressIcon,
  legExtension: LegExtensionIcon,
  legCurl: LegCurlIcon,
  squat: SquatRackIcon,
  adductor: AdductorIcon,
  abductor: AbductorIcon,
  abCrunch: AbCrunchIcon,
  rotaryTorso: RotaryTorsoIcon,
  crunchBench: CrunchBenchIcon,
  smithMachine: SmithMachineIcon,
  cablePulley: CablePulleyIcon,
};
