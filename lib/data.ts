// =============================================================================
// FitPro 健身数据层
// 设计风格：工业暗金风格（Industrial Dark Gold）
// 数据包含：器械库、训练方案
// =============================================================================

export type MuscleGroup =
  | "胸部"
  | "背部"
  | "腿部"
  | "肩部"
  | "手臂"
  | "核心"
  | "有氧";

export interface Equipment {
  id: string;
  name: string;
  category: MuscleGroup;
  targetMuscle: string;
  image: string; // Unsplash URL
  keyPoints: string[];
  cautions: string[];
  sets: string;
  description?: string;
}

export interface TrainingPlan {
  id: string;
  name: string;
  emoji: string;
  color: string; // tailwind gradient class
  equipmentIds: string[];
  duration: string;
  difficulty: "初级" | "中级" | "高级";
}

// ---------------------------------------------------------------------------
// 器械图片（Unsplash 参数化链接）
// ---------------------------------------------------------------------------
const IMG = {
  treadmill:
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
  bike: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
  recumbentBike:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  elliptical:
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
  stairClimber:
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
  chestPress:
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80",
  pecDeck:
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
  inclinePress:
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
  dumbbell:
    "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80",
  latPulldown:
    "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=600&q=80",
  seatedRow:
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80",
  latMachine:
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80",
  shoulderPress:
    "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=600&q=80",
  cablePress:
    "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&q=80",
  dips: "https://images.unsplash.com/photo-1616803689943-5601631c7fec?w=600&q=80",
  legPress:
    "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=600&q=80",
  legExtension:
    "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=600&q=80",
  legCurl:
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
  squat:
    "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?w=600&q=80",
  adductor:
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
  abductor:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
  abCrunch:
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
  rotaryTorso:
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
  crunchBench:
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
  smithMachine:
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
  cablePulley:
    "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&q=80",
  dumbbellCurl:
    "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80",
};

// ---------------------------------------------------------------------------
// 器械数据
// ---------------------------------------------------------------------------
export const equipmentList: Equipment[] = [
  // ── 有氧 ──────────────────────────────────────────────────────────────────
  {
    id: "treadmill",
    name: "跑步机",
    category: "有氧",
    targetMuscle: "全身 / 心肺",
    image: IMG.treadmill,
    keyPoints: [
      "热身阶段：5–10 分钟低速慢走",
      "减脂训练：20–40 分钟中等强度",
      "脚落点在身体正下方，步伐自然",
      "保持核心收紧，躯干直立",
    ],
    cautions: ["不要抓扶手跑步，影响姿势与热量消耗", "速度变化时先降速再停机"],
    sets: "20–40 分钟 / 次",
    description: "最经典的有氧训练器械，适合热身与持续燃脂",
  },
  {
    id: "bike",
    name: "动感单车",
    category: "有氧",
    targetMuscle: "腿部 / 心肺",
    image: IMG.bike,
    keyPoints: [
      "座椅高度调至髋部水平",
      "踩踏时保持膝盖与脚尖方向一致",
      "上半身放松，不要过度前倾",
    ],
    cautions: ["膝盖不要内扣", "阻力不宜过低，保持有效刺激"],
    sets: "20–45 分钟 / 次",
    description: "低冲击有氧训练，对膝关节友好",
  },
  {
    id: "recumbentBike",
    name: "卧式单车",
    category: "有氧",
    targetMuscle: "腿部（低冲击）",
    image: IMG.recumbentBike,
    keyPoints: ["靠背支撑腰部，减少下背压力", "适合新手或膝盖不适人群"],
    cautions: ["座椅距离调整至腿微弯", "避免速度过快失去控制"],
    sets: "20–40 分钟 / 次",
    description: "适合新手与膝盖不适人群的低冲击有氧",
  },
  {
    id: "elliptical",
    name: "椭圆机",
    category: "有氧",
    targetMuscle: "全身",
    image: IMG.elliptical,
    keyPoints: ["手脚同步协调运动", "保持核心稳定，不要晃动躯干", "步幅均匀，节奏稳定"],
    cautions: ["不要完全依赖扶手支撑体重", "保持核心稳定"],
    sets: "20–40 分钟 / 次",
    description: "全身协调有氧，对关节冲击极小",
  },
  {
    id: "stairClimber",
    name: "爬楼机",
    category: "有氧",
    targetMuscle: "臀部 / 腿部",
    image: IMG.stairClimber,
    keyPoints: ["步幅稳定，不要踩半步", "躯干微前倾，激活臀肌", "控制速度，避免惯性"],
    cautions: ["不要压扶手借力", "膝盖不要超过脚尖过多"],
    sets: "15–30 分钟 / 次",
    description: "高效臀腿有氧，燃脂效果突出",
  },

  // ── 胸部 ──────────────────────────────────────────────────────────────────
  {
    id: "chestPress",
    name: "胸推机",
    category: "胸部",
    targetMuscle: "胸大肌",
    image: IMG.chestPress,
    keyPoints: [
      "肩胛骨收紧贴靠背垫",
      "推到手臂微弯，不要锁死手肘",
      "下放时控制节奏，感受胸肌拉伸",
    ],
    cautions: ["不要耸肩代偿", "重量过大时请使用保护装置"],
    sets: "3–4 组 × 8–12 次",
    description: "胸部训练基础器械，安全高效",
  },
  {
    id: "pecDeck",
    name: "飞鸟机",
    category: "胸部",
    targetMuscle: "胸内侧 / 胸大肌",
    image: IMG.pecDeck,
    keyPoints: ["手肘保持微弯，不要完全伸直", "夹胸时感受胸肌内侧收缩", "控制回收速度"],
    cautions: ["回收幅度不要过大，避免肩关节受伤", "重量不宜过重"],
    sets: "3–4 组 × 10–15 次",
    description: "专注胸内侧线条，塑造胸肌分离感",
  },
  {
    id: "inclinePress",
    name: "上斜卧推",
    category: "胸部",
    targetMuscle: "上胸 / 胸大肌上束",
    image: IMG.inclinePress,
    keyPoints: ["靠背角度 30–45°", "下放时控制节奏，感受上胸拉伸", "推起时集中意念在上胸"],
    cautions: ["不要耸肩", "避免重量过大导致肩部代偿"],
    sets: "3–4 组 × 8–12 次",
    description: "针对上胸发展，打造饱满胸型",
  },
  {
    id: "dumbbell",
    name: "哑铃",
    category: "胸部",
    targetMuscle: "自由训练 / 多部位",
    image: IMG.dumbbell,
    keyPoints: ["动作稳定，控制重心", "左右重量保持平衡", "根据训练目标选择重量"],
    cautions: ["初学者先从轻重量开始", "避免甩动借力"],
    sets: "3–4 组 × 8–15 次",
    description: "最灵活的自由重量训练工具",
  },

  // ── 背部 ──────────────────────────────────────────────────────────────────
  {
    id: "latPulldown",
    name: "高位下拉",
    category: "背部",
    targetMuscle: "背阔肌",
    image: IMG.latPulldown,
    keyPoints: ["拉至锁骨位置，不要低于胸口", "下拉时肩胛骨向下收紧", "控制回程，感受背阔肌拉伸"],
    cautions: ["不要借力后仰", "握距不宜过宽"],
    sets: "3–4 组 × 8–12 次",
    description: "背阔肌训练首选，打造宽背V形",
  },
  {
    id: "seatedRow",
    name: "坐姿划船",
    category: "背部",
    targetMuscle: "中背 / 菱形肌",
    image: IMG.seatedRow,
    keyPoints: ["收紧肩胛骨，感受中背收缩", "躯干保持直立，不要弓背", "拉至腹部位置"],
    cautions: ["不要弓背代偿", "回程控制速度，不要惯性放"],
    sets: "3–4 组 × 8–12 次",
    description: "中背厚度训练，增强背部立体感",
  },
  {
    id: "latMachine",
    name: "拉背机",
    category: "背部",
    targetMuscle: "背部综合",
    image: IMG.latMachine,
    keyPoints: ["控制节奏，避免惯性", "感受背部肌群全程发力", "呼吸配合动作节奏"],
    cautions: ["避免用手臂代偿", "重量适中，注重感受"],
    sets: "3–4 组 × 10–15 次",
    description: "背部综合训练，适合各阶段训练者",
  },

  // ── 肩部 ──────────────────────────────────────────────────────────────────
  {
    id: "shoulderPress",
    name: "肩推机",
    category: "肩部",
    targetMuscle: "三角肌前束 / 中束",
    image: IMG.shoulderPress,
    keyPoints: ["推至手臂微弯，不要锁死", "下降时控制节奏", "保持核心收紧，不要借腰力"],
    cautions: ["不要耸肩", "重量过大时容易损伤肩袖"],
    sets: "3–4 组 × 8–12 次",
    description: "肩部训练核心器械，塑造宽肩线条",
  },

  // ── 手臂 ──────────────────────────────────────────────────────────────────
  {
    id: "cablePress",
    name: "绳索下压",
    category: "手臂",
    targetMuscle: "肱三头肌",
    image: IMG.cablePress,
    keyPoints: ["手肘固定在体侧，不要摆动", "下压至手臂完全伸直", "控制回程，感受三头拉伸"],
    cautions: ["不要摆动上臂借力", "重量不宜过重"],
    sets: "3–4 组 × 10–15 次",
    description: "三头肌孤立训练，塑造手臂后侧线条",
  },
  {
    id: "dips",
    name: "双杠臂屈伸",
    category: "手臂",
    targetMuscle: "肱三头肌 / 胸肌",
    image: IMG.dips,
    keyPoints: ["控制下放速度，不要猛落", "躯干微前倾增加胸肌参与", "推起时三头充分收缩"],
    cautions: ["不要耸肩", "肩关节不适者谨慎使用"],
    sets: "3–4 组 × 8–15 次",
    description: "复合动作，同时训练三头与胸肌",
  },
  {
    id: "dumbbellCurl",
    name: "哑铃弯举",
    category: "手臂",
    targetMuscle: "肱二头肌",
    image: IMG.dumbbellCurl,
    keyPoints: ["手肘固定在体侧", "弯举至顶峰时旋转小臂", "控制下放，感受二头拉伸"],
    cautions: ["不要借助身体摆动", "保持手腕中立"],
    sets: "3–4 组 × 10–15 次",
    description: "二头肌经典训练动作，增加手臂围度",
  },

  // ── 腿部 ──────────────────────────────────────────────────────────────────
  {
    id: "legPress",
    name: "腿举",
    category: "腿部",
    targetMuscle: "大腿 / 臀部",
    image: IMG.legPress,
    keyPoints: ["脚踏板位置适中，膝盖不超过脚尖", "下放时控制节奏，不要锁膝", "脚距宽窄影响训练重点"],
    cautions: ["不要锁膝", "腰部不要离开靠背"],
    sets: "3–4 组 × 8–15 次",
    description: "腿部训练安全高效，适合大重量训练",
  },
  {
    id: "legExtension",
    name: "腿屈伸",
    category: "腿部",
    targetMuscle: "股四头肌",
    image: IMG.legExtension,
    keyPoints: ["踢腿时控制速度，不要猛踢", "顶峰时保持1秒收缩", "下降时慢速控制"],
    cautions: ["不要猛踢", "膝关节不适者谨慎"],
    sets: "3–4 组 × 10–15 次",
    description: "股四头肌孤立训练，塑造大腿前侧线条",
  },
  {
    id: "legCurl",
    name: "腿弯举",
    category: "腿部",
    targetMuscle: "股二头肌 / 腘绳肌",
    image: IMG.legCurl,
    keyPoints: ["慢收慢放，全程控制", "弯举至最大幅度", "感受腘绳肌充分收缩"],
    cautions: ["不要惯性甩腿", "重量适中"],
    sets: "3–4 组 × 10–15 次",
    description: "腘绳肌专项训练，平衡大腿前后侧发展",
  },
  {
    id: "squat",
    name: "深蹲架",
    category: "腿部",
    targetMuscle: "腿部 / 臀部 / 核心",
    image: IMG.squat,
    keyPoints: ["背部挺直，核心收紧", "下蹲至大腿平行地面", "膝盖与脚尖方向一致"],
    cautions: ["背部不要弓起", "重量过大时务必使用保险杠"],
    sets: "3–5 组 × 5–10 次",
    description: "下肢训练之王，全面发展腿臀力量",
  },
  {
    id: "adductor",
    name: "髋内收",
    category: "腿部",
    targetMuscle: "大腿内侧 / 内收肌",
    image: IMG.adductor,
    keyPoints: ["控制内收幅度，感受内侧收缩", "不要借助惯性", "保持躯干直立"],
    cautions: ["幅度不要过大", "重量适中"],
    sets: "3–4 组 × 12–20 次",
    description: "大腿内侧塑形，改善腿部线条",
  },
  {
    id: "abductor",
    name: "髋外展",
    category: "腿部",
    targetMuscle: "臀中肌 / 大腿外侧",
    image: IMG.abductor,
    keyPoints: ["外展时感受臀中肌收缩", "控制回程速度", "保持躯干稳定"],
    cautions: ["不要借助腰部摆动", "幅度适中"],
    sets: "3–4 组 × 12–20 次",
    description: "臀中肌专项训练，塑造翘臀侧线",
  },

  // ── 核心 ──────────────────────────────────────────────────────────────────
  {
    id: "abCrunch",
    name: "卷腹机",
    category: "核心",
    targetMuscle: "腹直肌",
    image: IMG.abCrunch,
    keyPoints: ["用腹肌发力，不要用颈部", "卷腹时呼气，还原时吸气", "控制全程节奏"],
    cautions: ["不要用脖子发力", "不要借助惯性"],
    sets: "3–4 组 × 15–20 次",
    description: "腹肌专项训练，安全有效",
  },
  {
    id: "rotaryTorso",
    name: "扭腰机",
    category: "核心",
    targetMuscle: "腹斜肌",
    image: IMG.rotaryTorso,
    keyPoints: ["控制旋转幅度，不要过度", "感受腹斜肌收缩", "慢速控制，不要惯性甩"],
    cautions: ["幅度不要过大", "腰部不适者谨慎"],
    sets: "3–4 组 × 12–15 次 / 侧",
    description: "腹斜肌专项，塑造腰部线条",
  },
  {
    id: "crunchBench",
    name: "仰卧板",
    category: "核心",
    targetMuscle: "核心综合",
    image: IMG.crunchBench,
    keyPoints: ["慢动作控制全程", "不要用惯性起身", "可调节角度增加难度"],
    cautions: ["颈部不要过度用力", "腰部保持贴合"],
    sets: "3–4 组 × 15–20 次",
    description: "核心综合训练，多角度刺激腹肌",
  },

  // ── 自由力量 ──────────────────────────────────────────────────────────────
  {
    id: "smithMachine",
    name: "史密斯机",
    category: "胸部",
    targetMuscle: "全身 / 多部位",
    image: IMG.smithMachine,
    keyPoints: ["固定轨道提供安全保护", "注意站位与动作轨迹", "可进行深蹲、卧推、肩推等多种动作"],
    cautions: ["注意固定轨道与自然动作轨迹的差异", "重量过大时务必锁定保险"],
    sets: "3–4 组 × 8–12 次",
    description: "多功能训练器械，适合全身各部位训练",
  },
  {
    id: "cablePulley",
    name: "双滑轮",
    category: "胸部",
    targetMuscle: "多角度 / 全身",
    image: IMG.cablePulley,
    keyPoints: ["可调节高度实现多角度训练", "控制重量，注重感受", "适合孤立训练与拉伸"],
    cautions: ["控制重量，不要惯性甩", "调节高度时注意安全"],
    sets: "3–4 组 × 10–15 次",
    description: "最灵活的绳索训练系统，多角度全方位刺激",
  },
];

// ---------------------------------------------------------------------------
// 训练方案
// ---------------------------------------------------------------------------
export const trainingPlans: TrainingPlan[] = [
  {
    id: "chest-triceps",
    name: "胸 + 三头",
    emoji: "💪",
    color: "from-red-900 to-red-700",
    equipmentIds: ["chestPress", "pecDeck", "inclinePress", "cablePress", "dips"],
    duration: "50–70 分钟",
    difficulty: "中级",
  },
  {
    id: "back-biceps",
    name: "背 + 二头",
    emoji: "🦍",
    color: "from-blue-900 to-blue-700",
    equipmentIds: ["latPulldown", "seatedRow", "latMachine", "dumbbellCurl"],
    duration: "50–60 分钟",
    difficulty: "中级",
  },
  {
    id: "legs-glutes",
    name: "腿 + 臀",
    emoji: "🦵",
    color: "from-green-900 to-green-700",
    equipmentIds: ["squat", "legPress", "legExtension", "legCurl", "abductor", "adductor"],
    duration: "60–80 分钟",
    difficulty: "高级",
  },
  {
    id: "shoulders-core",
    name: "肩 + 核心",
    emoji: "🏋️",
    color: "from-yellow-900 to-yellow-700",
    equipmentIds: ["shoulderPress", "dumbbell", "abCrunch", "rotaryTorso"],
    duration: "45–60 分钟",
    difficulty: "中级",
  },
  {
    id: "cardio",
    name: "有氧燃脂",
    emoji: "🔥",
    color: "from-orange-900 to-orange-700",
    equipmentIds: ["treadmill", "elliptical", "bike", "stairClimber"],
    duration: "30–60 分钟",
    difficulty: "初级",
  },
];

// ---------------------------------------------------------------------------
// 分类配置
// ---------------------------------------------------------------------------
export const muscleCategories: {
  name: MuscleGroup;
  emoji: string;
  color: string;
}[] = [
  { name: "胸部", emoji: "💪", color: "from-red-900/80 to-red-800/80" },
  { name: "背部", emoji: "🦍", color: "from-blue-900/80 to-blue-800/80" },
  { name: "腿部", emoji: "🦵", color: "from-green-900/80 to-green-800/80" },
  { name: "肩部", emoji: "🏋️", color: "from-yellow-900/80 to-yellow-800/80" },
  { name: "手臂", emoji: "💪", color: "from-purple-900/80 to-purple-800/80" },
  { name: "核心", emoji: "🧱", color: "from-orange-900/80 to-orange-800/80" },
  { name: "有氧", emoji: "🔥", color: "from-pink-900/80 to-pink-800/80" },
];

// ---------------------------------------------------------------------------
// 工具函数
// ---------------------------------------------------------------------------
export function getEquipmentById(id: string): Equipment | undefined {
  return equipmentList.find((e) => e.id === id);
}

export function getEquipmentByCategory(category: MuscleGroup): Equipment[] {
  return equipmentList.filter((e) => e.category === category);
}

export function getPlanById(id: string): TrainingPlan | undefined {
  return trainingPlans.find((p) => p.id === id);
}

export function getEquipmentForPlan(plan: TrainingPlan): Equipment[] {
  return plan.equipmentIds
    .map((id) => getEquipmentById(id))
    .filter(Boolean) as Equipment[];
}

// ---------------------------------------------------------------------------
// 饮食推荐数据
// ---------------------------------------------------------------------------

export type DietPlanType = "convenience" | "restaurant";

export interface DietItem {
  name: string;
}

export interface DietPlan {
  type: DietPlanType;
  label: string;       // 显示名称
  items: DietItem[];
  note: string;        // 说明
}

export interface DietRecommendation {
  planId: string;      // 对应 TrainingPlan.id
  plans: DietPlan[];
}

export const dietRecommendations: DietRecommendation[] = [
  {
    planId: "chest-triceps",
    plans: [
      {
        type: "convenience",
        label: "711 便利店",
        items: [
          { name: "沙拉鸡胸肉" },
          { name: "香蕉" },
          { name: "鸡蛋" },
        ],
        note: "高蛋白 + 适量碳水，帮助肌肉恢复",
      },
      {
        type: "restaurant",
        label: "外食方案",
        items: [
          { name: "やよい軒 鸡肉定食" },
          { name: "米饭半份" },
        ],
        note: "控制碳水同时保证蛋白摄入",
      },
    ],
  },
  {
    planId: "back-biceps",
    plans: [
      {
        type: "convenience",
        label: "711 便利店",
        items: [
          { name: "沙拉鸡胸肉" },
          { name: "饭团" },
          { name: "鸡蛋" },
        ],
        note: "补充蛋白和少量碳水，促进恢复",
      },
      {
        type: "restaurant",
        label: "外食方案",
        items: [
          { name: "松屋 / 吉野家 牛肉饭" },
          { name: "生野菜" },
          { name: "温泉蛋" },
        ],
        note: "蛋白 + 铁元素，有助肌肉修复",
      },
    ],
  },
  {
    planId: "legs-glutes",
    plans: [
      {
        type: "convenience",
        label: "711 便利店",
        items: [
          { name: "沙拉鸡胸肉" },
          { name: "香蕉" },
          { name: "饭团" },
        ],
        note: "腿部训练消耗大，需要补充碳水",
      },
      {
        type: "restaurant",
        label: "外食方案",
        items: [
          { name: "やよい軒 定食" },
          { name: "米饭正常份" },
        ],
        note: "允许较高碳水，帮助恢复",
      },
    ],
  },
  {
    planId: "shoulders-core",
    plans: [
      {
        type: "convenience",
        label: "711 便利店",
        items: [
          { name: "沙拉鸡胸肉" },
          { name: "沙拉" },
        ],
        note: "低碳水，保持蛋白摄入",
      },
      {
        type: "restaurant",
        label: "外食方案",
        items: [
          { name: "松屋 牛肉 + 沙拉" },
          { name: "米饭半份" },
        ],
        note: "控制总热量",
      },
    ],
  },
  {
    planId: "cardio",
    plans: [
      {
        type: "convenience",
        label: "711 便利店",
        items: [
          { name: "沙拉鸡胸肉" },
          { name: "沙拉" },
        ],
        note: "低碳水高蛋白，促进脂肪消耗",
      },
      {
        type: "restaurant",
        label: "外食方案",
        items: [
          { name: "やよい軒 烤鱼定食" },
          { name: "米饭少量或不吃" },
        ],
        note: "减少碳水摄入",
      },
    ],
  },
];

export function getDietRecommendation(planId: string): DietRecommendation | undefined {
  return dietRecommendations.find((d) => d.planId === planId);
}
