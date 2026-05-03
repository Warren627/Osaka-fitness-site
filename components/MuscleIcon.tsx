// =============================================================================
// MuscleIcon - 训练方案肌肉部位图标（统一线条风格）
// 设计：人体轮廓 + 高亮目标肌群，金色强调，极简线条
// =============================================================================

interface MuscleIconProps {
  size?: number;
  primaryColor?: string;
  bodyColor?: string;
  strokeWidth?: number;
}

// 通用人体轮廓基础路径
const BODY_STROKE = 1.2;

// ── 胸+三头（正面胸部高亮）──────────────────────────────────────────────

export function ChestTricepsIcon({
  size = 80,
  primaryColor = "oklch(0.75 0.14 82)",
  bodyColor = "oklch(0.45 0.01 80)",
  strokeWidth = BODY_STROKE,
}: MuscleIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 头 */}
      <circle cx="40" cy="12" r="7" stroke={bodyColor} strokeWidth={strokeWidth} />
      {/* 颈 */}
      <line x1="40" y1="19" x2="40" y2="24" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 肩 */}
      <line x1="40" y1="24" x2="22" y2="28" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="40" y1="24" x2="58" y2="28" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 胸部高亮 */}
      <path d="M22 28 Q28 42 40 44 Q52 42 58 28 Q50 24 40 24 Q30 24 22 28Z"
        stroke={primaryColor} strokeWidth={1.8} fill={`${primaryColor}25`} strokeLinejoin="round" />
      {/* 腹部 */}
      <line x1="40" y1="44" x2="40" y2="58" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="34" y1="44" x2="32" y2="58" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="46" y1="44" x2="48" y2="58" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 上臂三头高亮 */}
      <path d="M22 28 Q16 36 18 48 Q20 52 24 50 Q26 44 26 36Z"
        stroke={primaryColor} strokeWidth={1.5} fill={`${primaryColor}20`} strokeLinejoin="round" />
      <path d="M58 28 Q64 36 62 48 Q60 52 56 50 Q54 44 54 36Z"
        stroke={primaryColor} strokeWidth={1.5} fill={`${primaryColor}20`} strokeLinejoin="round" />
      {/* 前臂 */}
      <line x1="18" y1="48" x2="14" y2="62" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="62" y1="48" x2="66" y2="62" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 腿 */}
      <line x1="32" y1="58" x2="28" y2="74" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="48" y1="58" x2="52" y2="74" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

// ── 背+二头（背面背部高亮）──────────────────────────────────────────────

export function BackBicepsIcon({
  size = 80,
  primaryColor = "oklch(0.75 0.14 82)",
  bodyColor = "oklch(0.45 0.01 80)",
  strokeWidth = BODY_STROKE,
}: MuscleIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 头 */}
      <circle cx="40" cy="12" r="7" stroke={bodyColor} strokeWidth={strokeWidth} />
      {/* 颈 */}
      <line x1="40" y1="19" x2="40" y2="24" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 背部高亮（V形背阔肌）*/}
      <path d="M22 28 Q24 44 34 50 L40 52 L46 50 Q56 44 58 28 Q50 22 40 22 Q30 22 22 28Z"
        stroke={primaryColor} strokeWidth={1.8} fill={`${primaryColor}25`} strokeLinejoin="round" />
      {/* 菱形肌线条 */}
      <line x1="34" y1="30" x2="46" y2="30" stroke={primaryColor} strokeWidth={1.2} strokeLinecap="round" />
      <line x1="33" y1="36" x2="47" y2="36" stroke={primaryColor} strokeWidth={1.2} strokeLinecap="round" />
      {/* 腹部 */}
      <line x1="40" y1="52" x2="40" y2="58" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="34" y1="50" x2="32" y2="58" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="46" y1="50" x2="48" y2="58" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 上臂二头高亮 */}
      <path d="M22 28 Q16 34 18 46 Q20 50 24 48 Q26 42 26 34Z"
        stroke={primaryColor} strokeWidth={1.5} fill={`${primaryColor}20`} strokeLinejoin="round" />
      <path d="M58 28 Q64 34 62 46 Q60 50 56 48 Q54 42 54 34Z"
        stroke={primaryColor} strokeWidth={1.5} fill={`${primaryColor}20`} strokeLinejoin="round" />
      {/* 前臂 */}
      <line x1="18" y1="46" x2="14" y2="60" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="62" y1="46" x2="66" y2="60" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 腿 */}
      <line x1="32" y1="58" x2="28" y2="74" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="48" y1="58" x2="52" y2="74" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

// ── 腿+臀（腿部高亮）──────────────────────────────────────────────────────

export function LegsGlutesIcon({
  size = 80,
  primaryColor = "oklch(0.75 0.14 82)",
  bodyColor = "oklch(0.45 0.01 80)",
  strokeWidth = BODY_STROKE,
}: MuscleIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 头 */}
      <circle cx="40" cy="10" r="7" stroke={bodyColor} strokeWidth={strokeWidth} />
      {/* 躯干 */}
      <line x1="40" y1="17" x2="40" y2="22" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="40" y1="22" x2="24" y2="26" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="40" y1="22" x2="56" y2="26" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="24" y1="26" x2="22" y2="40" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="56" y1="26" x2="58" y2="40" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="22" y1="40" x2="14" y2="54" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="58" y1="40" x2="66" y2="54" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 腹部 */}
      <line x1="36" y1="22" x2="34" y2="40" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="44" y1="22" x2="46" y2="40" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 臀部高亮 */}
      <path d="M30 40 Q28 50 32 56 Q36 60 40 60 Q44 60 48 56 Q52 50 50 40 Q44 44 40 44 Q36 44 30 40Z"
        stroke={primaryColor} strokeWidth={1.8} fill={`${primaryColor}25`} strokeLinejoin="round" />
      {/* 大腿高亮 */}
      <path d="M32 56 Q26 66 28 74 Q32 76 34 74 Q36 66 36 58Z"
        stroke={primaryColor} strokeWidth={1.5} fill={`${primaryColor}20`} strokeLinejoin="round" />
      <path d="M48 56 Q54 66 52 74 Q48 76 46 74 Q44 66 44 58Z"
        stroke={primaryColor} strokeWidth={1.5} fill={`${primaryColor}20`} strokeLinejoin="round" />
    </svg>
  );
}

// ── 肩+核心（肩部+腹部高亮）────────────────────────────────────────────────

export function ShoulderCoreIcon({
  size = 80,
  primaryColor = "oklch(0.75 0.14 82)",
  bodyColor = "oklch(0.45 0.01 80)",
  strokeWidth = BODY_STROKE,
}: MuscleIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 头 */}
      <circle cx="40" cy="12" r="7" stroke={bodyColor} strokeWidth={strokeWidth} />
      {/* 颈 */}
      <line x1="40" y1="19" x2="40" y2="24" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 肩部高亮（三角肌）*/}
      <path d="M40 24 Q30 22 22 28 Q20 34 24 38 Q30 32 40 30Z"
        stroke={primaryColor} strokeWidth={1.8} fill={`${primaryColor}25`} strokeLinejoin="round" />
      <path d="M40 24 Q50 22 58 28 Q60 34 56 38 Q50 32 40 30Z"
        stroke={primaryColor} strokeWidth={1.8} fill={`${primaryColor}25`} strokeLinejoin="round" />
      {/* 胸部 */}
      <path d="M22 28 Q28 40 40 42 Q52 40 58 28" stroke={bodyColor} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" />
      {/* 核心腹部高亮 */}
      <path d="M34 42 Q32 56 34 60 L40 62 L46 60 Q48 56 46 42 Q44 44 40 44 Q36 44 34 42Z"
        stroke={primaryColor} strokeWidth={1.8} fill={`${primaryColor}25`} strokeLinejoin="round" />
      {/* 腹肌分割线 */}
      <line x1="40" y1="44" x2="40" y2="62" stroke={primaryColor} strokeWidth={1.2} strokeLinecap="round" />
      <line x1="34" y1="48" x2="46" y2="48" stroke={primaryColor} strokeWidth={1.2} strokeLinecap="round" />
      <line x1="34" y1="54" x2="46" y2="54" stroke={primaryColor} strokeWidth={1.2} strokeLinecap="round" />
      {/* 手臂 */}
      <line x1="24" y1="38" x2="18" y2="52" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="56" y1="38" x2="62" y2="52" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="18" y1="52" x2="14" y2="64" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="62" y1="52" x2="66" y2="64" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      {/* 腿 */}
      <line x1="34" y1="62" x2="30" y2="74" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="46" y1="62" x2="50" y2="74" stroke={bodyColor} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

// ── 有氧燃脂（全身高亮）──────────────────────────────────────────────────

export function CardioIcon({
  size = 80,
  primaryColor = "oklch(0.75 0.14 82)",
  bodyColor = "oklch(0.45 0.01 80)",
  strokeWidth = BODY_STROKE,
}: MuscleIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 跑步姿态人形 */}
      {/* 头 */}
      <circle cx="44" cy="12" r="7" stroke={primaryColor} strokeWidth={1.8} fill={`${primaryColor}15`} />
      {/* 躯干 */}
      <line x1="42" y1="19" x2="38" y2="36" stroke={primaryColor} strokeWidth={1.8} strokeLinecap="round" />
      {/* 左臂前摆 */}
      <line x1="40" y1="24" x2="26" y2="30" stroke={primaryColor} strokeWidth={1.8} strokeLinecap="round" />
      <line x1="26" y1="30" x2="20" y2="22" stroke={primaryColor} strokeWidth={1.8} strokeLinecap="round" />
      {/* 右臂后摆 */}
      <line x1="40" y1="24" x2="54" y2="28" stroke={primaryColor} strokeWidth={1.8} strokeLinecap="round" />
      <line x1="54" y1="28" x2="60" y2="36" stroke={primaryColor} strokeWidth={1.8} strokeLinecap="round" />
      {/* 左腿前跨 */}
      <line x1="38" y1="36" x2="28" y2="50" stroke={primaryColor} strokeWidth={1.8} strokeLinecap="round" />
      <line x1="28" y1="50" x2="22" y2="62" stroke={primaryColor} strokeWidth={1.8} strokeLinecap="round" />
      {/* 右腿后蹬 */}
      <line x1="38" y1="36" x2="50" y2="46" stroke={primaryColor} strokeWidth={1.8} strokeLinecap="round" />
      <line x1="50" y1="46" x2="58" y2="58" stroke={primaryColor} strokeWidth={1.8} strokeLinecap="round" />
      {/* 心跳线 */}
      <polyline points="8,40 14,40 18,32 22,48 26,36 30,40 36,40"
        stroke={primaryColor} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6" />
    </svg>
  );
}

// ── 图标映射 ──────────────────────────────────────────────────────────────

export const planMuscleIconMap: Record<string, React.FC<MuscleIconProps>> = {
  "chest-triceps": ChestTricepsIcon,
  "back-biceps": BackBicepsIcon,
  "legs-glutes": LegsGlutesIcon,
  "shoulders-core": ShoulderCoreIcon,
  cardio: CardioIcon,
};
