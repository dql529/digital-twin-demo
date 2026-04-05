const twinProfile = {
  name: "林越",
  role: "策略负责人 / 31 岁 / 上海 / 逸疗病例对象",
  brief: "这个身体适合高质量判断，不适合长时间高噪音输入。会议和社交一旦叠加，模型会先看到 HRV、呼吸节律和认知储备一起收缩。",
  archetype: "ADULT BODY / HIGH COGNITION / LOW NOISE",
  recovery: "WALK / QUIET / BREATH RESET",
  bestWindow: "10:30 - 12:30",
  values: "OXYGEN / CLARITY / RECOVERY",
  traits: [
    "MORNING CARRIES THE BEST WORK",
    "HRV DROPS BEFORE OUTPUT QUALITY",
    "SOCIAL NOISE COSTS MORE THAN TASK COUNT",
    "WALK IS THE CHEAPEST RESET",
    "EVENING RECOVERY IS NON-NEGOTIABLE",
    "BODY SHAPE + VITALS MUST STAY LINKED",
  ],
  facts: [
    { label: "Height", value: "178 cm" },
    { label: "Weight", value: "71 kg" },
    { label: "Body Fat", value: "16.8%" },
    { label: "Anatomy Depth", value: "74%" },
  ],
};

const twinLayers = [
  {
    index: "01",
    title: "Body Shell",
    body: "先建立体表壳层与成年人体型分割，让用户先看到一具可信的身体本体，而不是概念插画。",
  },
  {
    index: "02",
    title: "Vitals Layer",
    body: "把 SpO2、心率、血压、HRV 和恢复指数贴回壳层，让状态变化始终依附在同一具身体上。",
  },
  {
    index: "03",
    title: "Anatomy Map",
    body: "骨骼、器官和结构热点负责解释内部层，让系统可以被分段查看、定位和说明。",
  },
  {
    index: "04",
    title: "Explainability",
    body: "最后把变化翻译成 findings、趋势和建议，形成一页能交付的临床解释界面。",
  },
];

const signalStream = [
  {
    label: "Surface Capture",
    title: "体表扫描、围度和姿态重建，先把“这具身体是谁”建立起来",
    body: "第一页必须先给出可信的成年人体本体，否则后面的器官层和体征层都只会像概念图。",
  },
  {
    label: "Vital Stream",
    title: "Wearables、PPG、SpO2、HRV 与睡眠，让系统从静态模型变成活体状态流",
    body: "这一步解决的是“现在这具身体正在发生什么”，而不是只留下一张历史报告。",
  },
  {
    label: "Anatomy Stack",
    title: "影像、规则化解剖和器官映射，负责让内部层能被查看、聚焦和解释",
    body: "这层决定产品看起来像临床数字孪生，还是只像一堆漂亮图表。",
  },
  {
    label: "Behavior Memory",
    title: "日历、活动、恢复习惯和长期节奏，决定这个身体会如何被时间持续改写",
    body: "同样的压力输入，不同人会有完全不同的心率、呼吸和恢复路径。",
  },
];

const memoryNodes = [
  {
    year: "Finding 01",
    title: "晚间恢复储备会先于血氧下降",
    body: "这具身体在高密度会议和社交叠加时，通常先掉的是 HRV 与认知储备，所以“看起来还能撑”不代表还适合继续透支。",
  },
  {
    year: "Finding 02",
    title: "步行是最稳定、成本最低的回稳动作",
    body: "与继续刷信息相比，步行更快让心率和呼吸节律回落。对这具身体来说，它比被动休息更有效。",
  },
  {
    year: "Finding 03",
    title: "上午窗口承载最重的判断任务",
    body: "模型把 10:30 到 12:30 识别为最适合深度工作的区间。越晚处理高噪音沟通，恢复代价越高。",
  },
  {
    year: "Finding 04",
    title: "数字孪生必须同时看外形层和体征层",
    body: "如果人体外壳、体型变化和内部体征脱节，用户只会看到漂亮图，而不会信这真是自己的身体模型。",
  },
];

const quickPrompts = [
  "如果把今晚两场会推迟，恢复窗口会回稳多少？",
  "现在最该优先保护的是哪一层？",
  "如果只留 30 分钟恢复，代价是什么？",
  "给我一个今天更稳的身体排程",
];

const controls = {
  sleep: document.querySelector("#sleepInput"),
  meeting: document.querySelector("#meetingInput"),
  social: document.querySelector("#socialInput"),
  movement: document.querySelector("#movementInput"),
  solo: document.querySelector("#soloInput"),
};

const valueRefs = {
  sleep: document.querySelector("#sleepValue"),
  meeting: document.querySelector("#meetingValue"),
  social: document.querySelector("#socialValue"),
  movement: document.querySelector("#movementValue"),
  solo: document.querySelector("#soloValue"),
};

const refs = {
  bodyStage: document.querySelector("#bodyStage"),
  layerSwitch: document.querySelector("#layerSwitch"),
  stageState: document.querySelector("#stageState"),
  layerNarrative: document.querySelector("#layerNarrative"),
  heroSpo2: document.querySelector("#heroSpo2"),
  heroHeart: document.querySelector("#heroHeart"),
  heroRecovery: document.querySelector("#heroRecovery"),
  heroConfidence: document.querySelector("#heroConfidence"),
  summaryCopy: document.querySelector("#summaryCopy"),
  systemBars: document.querySelector("#systemBars"),
  profileName: document.querySelector("#profileName"),
  profileRole: document.querySelector("#profileRole"),
  identityBrief: document.querySelector("#identityBrief"),
  profileArchetype: document.querySelector("#profileArchetype"),
  profileRecovery: document.querySelector("#profileRecovery"),
  profileWindow: document.querySelector("#profileWindow"),
  profileValues: document.querySelector("#profileValues"),
  traitCloud: document.querySelector("#traitCloud"),
  subjectFacts: document.querySelector("#subjectFacts"),
  sliceGrid: document.querySelector("#sliceGrid"),
  heroReportGrid: document.querySelector("#heroReportGrid"),
  compositionRail: document.querySelector("#compositionRail"),
  signalStream: document.querySelector("#signalStream"),
  memoryList: document.querySelector("#memoryList"),
  forecastTitle: document.querySelector("#forecastTitle"),
  forecastSummary: document.querySelector("#forecastSummary"),
  forecastBars: document.querySelector("#forecastBars"),
  recommendCard: document.querySelector("#recommendCard"),
  spo2Value: document.querySelector("#spo2Value"),
  spo2Note: document.querySelector("#spo2Note"),
  heartRateValue: document.querySelector("#heartRateValue"),
  heartRateNote: document.querySelector("#heartRateNote"),
  pressureValue: document.querySelector("#pressureValue"),
  pressureNote: document.querySelector("#pressureNote"),
  hrvValue: document.querySelector("#hrvValue"),
  hrvNote: document.querySelector("#hrvNote"),
  brainLoadValue: document.querySelector("#brainLoadValue"),
  brainLoadNote: document.querySelector("#brainLoadNote"),
  lungExchangeValue: document.querySelector("#lungExchangeValue"),
  lungExchangeNote: document.querySelector("#lungExchangeNote"),
  mobileLungValue: document.querySelector("#mobileLungValue"),
  mobileLungNote: document.querySelector("#mobileLungNote"),
  cardiacLoadValue: document.querySelector("#cardiacLoadValue"),
  cardiacLoadNote: document.querySelector("#cardiacLoadNote"),
  recoveryValue: document.querySelector("#recoveryValue"),
  recoveryNote: document.querySelector("#recoveryNote"),
  mobileRecoveryValue: document.querySelector("#mobileRecoveryValue"),
  mobileRecoveryNote: document.querySelector("#mobileRecoveryNote"),
  quickPrompts: document.querySelector("#quickPrompts"),
  chatLog: document.querySelector("#chatLog"),
  chatForm: document.querySelector("#chatForm"),
  chatInput: document.querySelector("#chatInput"),
  reveals: document.querySelectorAll(".reveal"),
};

let activeLayer = "skin";

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

function initializePage() {
  refs.profileName.textContent = twinProfile.name;
  refs.profileRole.textContent = twinProfile.role;
  refs.identityBrief.textContent = twinProfile.brief;
  refs.profileArchetype.textContent = twinProfile.archetype;
  refs.profileRecovery.textContent = twinProfile.recovery;
  refs.profileWindow.textContent = twinProfile.bestWindow;
  refs.profileValues.textContent = twinProfile.values;

  refs.traitCloud.innerHTML = twinProfile.traits.map((trait) => `<span>${trait}</span>`).join("");
  refs.subjectFacts.innerHTML = twinProfile.facts
    .map(
      (item) => `
        <div>
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </div>
      `
    )
    .join("");

  refs.compositionRail.innerHTML = twinLayers
    .map(
      (item) => `
        <article class="rail-row">
          <span class="rail-index">${item.index}</span>
          <div>
            <strong>${item.title}</strong>
            <p>${item.body}</p>
          </div>
        </article>
      `
    )
    .join("");

  refs.signalStream.innerHTML = signalStream
    .map(
      (item) => `
        <article class="signal-item">
          <span>${item.label}</span>
          <strong>${item.title}</strong>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");

  refs.memoryList.innerHTML = memoryNodes
    .map(
      (item) => `
        <article class="memory-item">
          <span class="memory-year">${item.year}</span>
          <div>
            <strong>${item.title}</strong>
            <p>${item.body}</p>
          </div>
        </article>
      `
    )
    .join("");

  refs.quickPrompts.innerHTML = quickPrompts
    .map((prompt) => `<button class="prompt-chip" type="button">${prompt}</button>`)
    .join("");
}

function getInputs() {
  return {
    sleep: Number(controls.sleep.value),
    meeting: Number(controls.meeting.value),
    social: Number(controls.social.value),
    movement: Number(controls.movement.value),
    solo: Number(controls.solo.value),
  };
}

function deriveState(input) {
  const energy = clamp(
    46 + input.sleep * 6.8 + input.movement * 0.18 + input.solo * 0.12 - input.meeting * 6.4 - input.social * 3.6,
    18,
    98
  );
  const focus = clamp(
    42 + input.sleep * 6.2 + input.solo * 0.1 - input.meeting * 7.4 - input.social * 2.8 + input.movement * 0.06,
    16,
    96
  );
  const stress = clamp(
    20 + input.meeting * 9.4 + input.social * 4.8 - input.sleep * 3.8 - input.movement * 0.08 - input.solo * 0.06,
    8,
    96
  );
  const recoveryNeed = clamp(100 - energy + stress * 0.26 + input.social * 2.4, 8, 94);
  const confidence = clamp(96 - Math.abs(input.sleep - 7.2) * 5 - Math.abs(input.meeting - 3) * 4, 72, 97);

  const spo2 = clamp(
    96 + input.sleep * 0.28 + input.movement * 0.02 + input.solo * 0.006 - input.meeting * 0.55 - input.social * 0.35,
    91,
    100
  );
  const heartRate = clamp(
    60 + stress * 0.55 + input.meeting * 1.8 + input.social * 1.1 - input.movement * 0.12 - input.sleep * 1.5 - input.solo * 0.04,
    54,
    118
  );
  const respiratoryRate = clamp(
    11 + stress * 0.085 + input.meeting * 0.35 + input.social * 0.28 - input.sleep * 0.16 - input.movement * 0.012,
    10,
    26
  );
  const skinTemp = clamp(
    36.28 + stress * 0.0045 + input.meeting * 0.028 + input.social * 0.018 - input.sleep * 0.01 + input.movement * 0.0015,
    36.0,
    37.6
  );
  const hrv = clamp(
    82 + input.sleep * 1.8 + input.solo * 0.1 + input.movement * 0.08 - stress * 1.05 - input.meeting * 2.2 - input.social * 1.5,
    24,
    98
  );
  const systolic = clamp(
    104 + stress * 0.42 + input.meeting * 2.1 + input.social * 0.9 - input.sleep * 1.3 - input.solo * 0.03 - input.movement * 0.08,
    96,
    144
  );
  const diastolic = clamp(
    68 + stress * 0.26 + input.meeting * 0.7 + input.social * 0.5 - input.sleep * 0.7 - input.movement * 0.03,
    60,
    96
  );
  const perfusion = clamp(58 + energy * 0.32 + input.movement * 0.18 + input.sleep * 1.2 - stress * 0.25 - input.social * 1.7, 28, 98);
  const brainLoad = clamp(18 + focus * 0.16 + input.meeting * 5 + input.social * 2.5 + stress * 0.18 - input.solo * 0.05, 18, 96);
  const cardiacLoad = clamp(22 + heartRate * 0.45 + stress * 0.22 - input.movement * 0.08 - input.solo * 0.03, 16, 94);
  const lungExchange = clamp(60 + spo2 * 0.22 + input.movement * 0.16 + input.sleep * 0.9 - stress * 0.16, 36, 99);
  const vascularFlow = clamp(46 + perfusion * 0.38 + input.movement * 0.18 - stress * 0.2 + input.sleep * 1.2, 24, 98);
  const autonomicBalance = clamp(62 + hrv * 0.22 - stress * 0.35 + input.solo * 0.08, 18, 96);
  const recoveryReserve = clamp(100 - recoveryNeed, 6, 96);
  const respirationEfficiency = clamp(
    86 - (respiratoryRate - 12) * 5 - stress * 0.18 + input.movement * 0.14 + input.sleep * 1.1,
    20,
    97
  );
  const neuralReserve = clamp(92 - brainLoad * 0.62 + focus * 0.18, 18, 97);

  const forecast = Array.from({ length: 6 }, (_, index) => {
    const drift = index * (input.meeting * 2.4 + input.social * 1.3);
    const rebound = index > 2 ? input.solo * 0.12 + input.movement * 0.05 : 0;
    return clamp(neuralReserve * 0.42 + perfusion * 0.34 + autonomicBalance * 0.24 - drift + rebound, 18, 96);
  });

  let title = "接下来 6 小时仍在可持续输出区";
  let summary = "当前身体仍能支撑高质量输出，但晚些时候如果继续叠加会议和社交，恢复储备会先掉下来。";
  let recommendation = "推荐排法：前 90 分钟完成最难任务，随后转向必要同步，晚上给心率和呼吸留出回落空间。";

  if (stress > 60 || heartRate > 82 || hrv < 48) {
    title = "模型判断：交感兴奋正在抬升，先降载";
    summary = "这个身体已经出现心率偏快、HRV 回落和呼吸变浅的迹象，再继续叠加会议会明显推高身体负荷。";
    recommendation = "推荐排法：先步行或静坐 20 分钟，再处理重要沟通。把需要清晰表达的任务延后到体征回落后。";
  } else if (neuralReserve > 76 && perfusion > 82 && hrv > 62) {
    title = "模型判断：这是一个高质量输出窗口";
    summary = "血氧、灌注和自主神经稳定都在友好区间，当前身体可以支撑一段高质量的深度输出。";
    recommendation = "推荐排法：先深度工作，再短会，傍晚做恢复性活动，让 HRV 维持在友好区间。";
  }

  return {
    energy: Math.round(energy),
    focus: Math.round(focus),
    stress: Math.round(stress),
    confidence: Math.round(confidence),
    spo2: Math.round(spo2),
    heartRate: Math.round(heartRate),
    respiratoryRate: Math.round(respiratoryRate),
    skinTemp: Number(skinTemp.toFixed(1)),
    hrv: Math.round(hrv),
    systolic: Math.round(systolic),
    diastolic: Math.round(diastolic),
    perfusion: Math.round(perfusion),
    brainLoad: Math.round(brainLoad),
    cardiacLoad: Math.round(cardiacLoad),
    lungExchange: Math.round(lungExchange),
    vascularFlow: Math.round(vascularFlow),
    autonomicBalance: Math.round(autonomicBalance),
    recoveryReserve: Math.round(recoveryReserve),
    respirationEfficiency: Math.round(respirationEfficiency),
    neuralReserve: Math.round(neuralReserve),
    forecast,
    title,
    summary,
    recommendation,
  };
}

function getStageTone(state) {
  if (state.stress > 60 || state.heartRate > 82 || state.hrv < 48) {
    return "alert";
  }

  if (state.recoveryReserve < 48 || state.neuralReserve < 56) {
    return "recover";
  }

  return "stable";
}

function getStageStateLabel(tone) {
  if (tone === "alert") {
    return "LOAD RISING";
  }

  if (tone === "recover") {
    return "RECOVERY FIRST";
  }

  return "STABLE WINDOW";
}

function getLayerStageLabel(layer) {
  if (layer === "skin") {
    return "BODY SHELL";
  }

  if (layer === "organs") {
    return "ORGANS";
  }

  if (layer === "skeleton") {
    return "SKELETON";
  }

  return "VITALS";
}

function getLayerNarrative(layer, state) {
  if (layer === "skin") {
    return `当前查看临床壳层。先确认体型和姿态，再切到器官、骨骼与体征层。恢复指数 ${state.recoveryReserve}。`;
  }

  if (layer === "skeleton") {
    return "当前查看骨骼层。重点是结构路径、承载关系和姿态支撑。";
  }

  if (layer === "vitals") {
    return `当前查看体征层。SpO2 ${state.spo2}% 、心率 ${state.heartRate} BPM、HRV ${state.hrv} ms。`;
  }

  return `当前查看器官层。神经负荷 ${state.brainLoad}% 、心血管负荷 ${state.cardiacLoad}% 、呼吸交换 ${state.lungExchange}%。`;
}

function getAtlasSummary(state) {
  if (state.stress > 60 || state.heartRate > 82 || state.hrv < 48) {
    return "当前系统判断：压力信号已经从体征层传到恢复层，优先保护呼吸、心率和晚间回落窗口，不要再把身体当成还能硬扛的稳态模型。";
  }

  if (state.neuralReserve > 76 && state.perfusion > 82 && state.hrv > 62) {
    return "当前系统判断：外壳层、体征层和恢复层仍然对齐，这具身体正处在高质量输出窗口，适合先做少而重的动作。";
  }

  return "当前系统判断：身体仍可持续运行，但如果继续叠加会议和社交，最先收缩的不会是意志力，而是恢复储备、认知耐心和呼吸节律。";
}

function getSpo2Note(state) {
  if (state.spo2 < 95) {
    return "氧交换偏紧，需要降低负荷并恢复呼吸节律";
  }

  if (state.respiratoryRate > 16) {
    return "氧合仍稳，但呼吸已经开始变浅";
  }

  return "氧合稳定，呼吸储备仍然友好";
}

function getHeartRateNote(state) {
  if (state.heartRate > 82) {
    return "心率偏快，身体正在进入高警觉";
  }

  if (state.heartRate > 72) {
    return "心率略高，适合减少输入密度";
  }

  return "心率处于稳态区间";
}

function getPressureNote(state) {
  if (state.systolic > 126) {
    return "循环压力偏高，建议尽快降载";
  }

  return "循环压力仍在可控区间";
}

function getHrvNote(state) {
  if (state.hrv < 45) {
    return "恢复余量明显下降，今天不适合继续透支";
  }

  if (state.hrv < 60) {
    return "恢复余量开始收缩，需要保护晚间窗口";
  }

  return "恢复余量仍然友好";
}

function getBrainLoadNote(state) {
  if (state.brainLoad > 72) {
    return "认知层已经接近拐点，继续输入会拉低判断质量";
  }

  if (state.brainLoad > 58) {
    return "大脑仍能运转，但需要低噪音环境";
  }

  return "认知负荷仍在稳态区间";
}

function getCardiacLoadNote(state) {
  if (state.cardiacLoad > 68) {
    return "循环系统开始承压，建议先恢复再继续";
  }

  return "心血管压力尚可";
}

function getLungExchangeNote(state) {
  if (state.lungExchange < 74) {
    return "呼吸交换效率回落，需要降低兴奋水平";
  }

  return "氧交换维持友好区间";
}

function getRecoveryNote(state) {
  if (state.recoveryReserve < 42) {
    return "恢复余量偏低，应该把恢复当作主任务";
  }

  if (state.recoveryReserve < 60) {
    return "还撑得住，但不能再随意透支";
  }

  return "身体仍有恢复余量";
}

function getPrimaryClinicalFocus(state) {
  if (state.lungExchange < 74 || state.spo2 < 95) {
    return {
      title: "Respiratory Window",
      note: "先保护呼吸交换和氧合稳定，避免继续抬高兴奋水平。",
    };
  }

  if (state.cardiacLoad > 68 || state.heartRate > 82) {
    return {
      title: "Cardiac Recovery",
      note: "循环系统已经开始承压，需要先拉回心率和灌注节律。",
    };
  }

  if (state.brainLoad > 64) {
    return {
      title: "Neural Quieting",
      note: "认知层正在接近拐点，应先降低噪音和输入密度。",
    };
  }

  return {
    title: "Recovery Corridor",
    note: "目前最值得保护的是晚间回落窗口，让恢复层继续保持打开状态。",
  };
}

function getClinicalAction(state) {
  if (state.recoveryReserve < 42) {
    return "立即降载并留出完整恢复窗口";
  }

  if (state.cardiacLoad > 68 || state.heartRate > 82) {
    return "先步行或静坐 20 分钟，再安排高负荷沟通";
  }

  if (state.brainLoad > 64) {
    return "优先处理重判断任务，砍掉不必要同步";
  }

  return "维持当前节奏，但提前锁定今晚恢复时间";
}

function formatReviewTime(offsetMinutes = 0) {
  const value = new Date(Date.now() - offsetMinutes * 60_000);
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(value);
}

function getClinicalFlags(state) {
  const flags = [];

  if (state.hrv < 48) {
    flags.push({ label: "Low HRV", tone: "alert" });
  }

  if (state.heartRate > 82) {
    flags.push({ label: "Elevated HR", tone: "alert" });
  }

  if (state.lungExchange < 74 || state.spo2 < 95) {
    flags.push({ label: "Respiratory Drift", tone: "watch" });
  }

  if (state.brainLoad > 64) {
    flags.push({ label: "Cognitive Strain", tone: "watch" });
  }

  if (state.recoveryReserve < 60) {
    flags.push({ label: "Recovery Compression", tone: "watch" });
  }

  if (flags.length === 0) {
    flags.push({ label: "Stable Window", tone: "ok" });
  }

  return flags;
}

function getWindowBadge(kind, state) {
  if (kind === "thoracic") {
    if (state.lungExchange < 68 || state.spo2 < 94) {
      return { label: "Observe", tone: "alert" };
    }

    if (state.lungExchange < 78 || state.spo2 < 96) {
      return { label: "Watch", tone: "watch" };
    }

    return { label: "Stable", tone: "ok" };
  }

  if (kind === "cardiac") {
    if (state.cardiacLoad > 76 || state.heartRate > 88) {
      return { label: "Elevated", tone: "alert" };
    }

    if (state.cardiacLoad > 64 || state.heartRate > 76) {
      return { label: "Watch", tone: "watch" };
    }

    return { label: "Stable", tone: "ok" };
  }

  if (state.recoveryReserve < 42) {
    return { label: "Reduced", tone: "alert" };
  }

  if (state.recoveryReserve < 60) {
    return { label: "Narrow", tone: "watch" };
  }

  return { label: "Open", tone: "ok" };
}

function renderHeroEvidence(state) {
  const tone = getStageTone(state);
  const flags = getClinicalFlags(state);
  const slices = [
    {
      series: "Series A1",
      label: "Thoracic Window",
      metric: "Lung Exchange",
      value: `${state.lungExchange}%`,
      note: getLungExchangeNote(state),
      width: state.lungExchange,
      updated: formatReviewTime(4),
      badge: getWindowBadge("thoracic", state),
      previewClass: "thoracic",
    },
    {
      series: "Series B3",
      label: "Cardiac Window",
      metric: "Cardiac Load",
      value: `${state.cardiacLoad}%`,
      note: getCardiacLoadNote(state),
      width: state.cardiacLoad,
      updated: formatReviewTime(9),
      badge: getWindowBadge("cardiac", state),
      previewClass: "cardiac",
    },
    {
      series: "Series R2",
      label: "Recovery Window",
      metric: "Recovery Index",
      value: String(state.recoveryReserve),
      note: getRecoveryNote(state),
      width: state.recoveryReserve,
      updated: formatReviewTime(14),
      badge: getWindowBadge("recovery", state),
      previewClass: "recovery",
    },
  ];

  const focus = getPrimaryClinicalFocus(state);
  const reportRows = [
    {
      label: "Primary Focus",
      value: focus.title,
      meta: `Reviewed ${formatReviewTime(2)}`,
      tone: tone === "alert" ? "alert" : tone === "recover" ? "watch" : "ok",
      note: focus.note,
    },
    {
      label: "Model Status",
      value: getStageStateLabel(getStageTone(state)),
      meta: `Sync check ${formatReviewTime(1)}`,
      tone: tone === "alert" ? "alert" : "ok",
      note: `模型可靠度 ${state.confidence}% ，体表与体征同步度保持在可解释区间。`,
    },
    {
      label: "Abnormality Tags",
      value: flags.map((item) => item.label).join(" / "),
      meta: `Flags ${flags.length}`,
      tone: flags.some((item) => item.tone === "alert") ? "alert" : flags.some((item) => item.tone === "watch") ? "watch" : "ok",
      note: "异常标签来自呼吸、循环、恢复和认知负荷的联合筛查，不依赖单一指标。",
    },
    {
      label: "Next Clinical Step",
      value: getClinicalAction(state),
      meta: `Action ${formatReviewTime(0)}`,
      tone: "ok",
      note: `当前 SpO2 ${state.spo2}% ，HRV ${state.hrv} ms，建议把恢复策略提前到今天晚间。`,
    },
  ];

  refs.sliceGrid.innerHTML = slices
    .map(
      (item) => `
        <article class="slice-card">
          <div class="slice-card-head">
            <div>
              <span>${item.series}</span>
              <strong>${item.label}</strong>
            </div>
            <b class="status-badge tone-${item.badge.tone}">${item.badge.label}</b>
          </div>
          <div class="slice-preview ${item.previewClass}">
            <i></i>
          </div>
          <div class="slice-meta">
            <span>${item.metric}</span>
            <span>${item.value}</span>
            <span>Updated ${item.updated}</span>
          </div>
          <p>${item.note}</p>
          <div class="slice-meter"><i class="tone-${item.badge.tone}" style="width:${item.width}%"></i></div>
        </article>
      `
    )
    .join("");

  refs.heroReportGrid.innerHTML = reportRows
    .map(
      (item) => `
        <article class="report-row">
          <div class="report-row-head">
            <span>${item.label}</span>
            <b class="status-badge tone-${item.tone}">${item.meta}</b>
          </div>
          <strong>${item.value}</strong>
          <p>${item.note}</p>
        </article>
      `
    )
    .join("") + `
      <article class="report-note">
        <span>Clinician Note</span>
        <strong>当前建议优先保护恢复窗口，而不是继续追求表面稳定。</strong>
        <p>如果今晚继续叠加会议和高噪音输入，最先收缩的通常是 HRV、呼吸节律和认知耐心，而不是血氧数字本身。</p>
      </article>
    `;
}

function renderSystemBars(state) {
  const vitalSync = clamp(Math.round(state.spo2 * 0.55 + state.hrv * 0.45), 18, 98);
  const anatomyReadiness = clamp(Math.round((state.perfusion + state.lungExchange + (100 - state.cardiacLoad)) / 3), 18, 98);
  const systems = [
    {
      label: "Surface Fidelity",
      value: state.confidence,
      note: state.confidence > 88 ? "外壳层和当前身体画像保持一致" : "扫描层还需要更多上下文校准",
    },
    {
      label: "Vital Sync",
      value: vitalSync,
      note: vitalSync > 78 ? "生命体征与主模型同步稳定" : "状态层开始出现不同步",
    },
    {
      label: "Anatomy Readiness",
      value: anatomyReadiness,
      note: anatomyReadiness > 72 ? "器官与循环层仍在可解释区间" : "结构层信号正在变紧",
    },
    {
      label: "Recovery Margin",
      value: state.recoveryReserve,
      note: state.recoveryReserve > 60 ? "身体还留有恢复空间" : "恢复必须被优先保护",
    },
  ];

  refs.systemBars.innerHTML = systems
    .map(
      (item) => `
        <article class="system-row">
          <div class="system-copy">
            <span>${item.label}</span>
            <strong>${item.value}</strong>
            <p>${item.note}</p>
          </div>
          <div class="system-bar"><span style="width:${item.value}%"></span></div>
        </article>
      `
    )
    .join("");
}

function updateForecastBars(series) {
  const labels = ["现在", "+1h", "+2h", "+3h", "+4h", "+5h"];
  refs.forecastBars.innerHTML = series
    .map(
      (value, index) => `
        <div class="bar-slot">
          <span class="bar-value">${Math.round(value)}</span>
          <div class="bar-track">
            <div class="bar-fill" style="height:${Math.max(24, value * 1.6)}px"></div>
          </div>
          <span class="bar-time">${labels[index]}</span>
        </div>
      `
    )
    .join("");
}

function renderState() {
  const input = getInputs();
  const state = deriveState(input);
  const tone = getStageTone(state);

  valueRefs.sleep.textContent = input.sleep.toFixed(1);
  valueRefs.meeting.textContent = String(input.meeting);
  valueRefs.social.textContent = String(input.social);
  valueRefs.movement.textContent = String(input.movement);
  valueRefs.solo.textContent = String(input.solo);

  refs.heroSpo2.textContent = `${state.spo2}%`;
  refs.heroHeart.textContent = `${state.heartRate} BPM`;
  refs.heroRecovery.textContent = String(state.recoveryReserve);
  refs.heroConfidence.textContent = `${state.confidence}%`;

  refs.bodyStage.dataset.layer = activeLayer;
  refs.bodyStage.dataset.state = tone;
  refs.stageState.textContent = `${getLayerStageLabel(activeLayer)} / ${getStageStateLabel(tone)}`;
  refs.layerNarrative.textContent = getLayerNarrative(activeLayer, state);
  refs.summaryCopy.textContent = getAtlasSummary(state);

  refs.forecastTitle.textContent = state.title;
  refs.forecastSummary.textContent = state.summary;
  refs.recommendCard.textContent = state.recommendation;

  refs.spo2Value.textContent = `${state.spo2}%`;
  refs.spo2Note.textContent = getSpo2Note(state);
  refs.heartRateValue.textContent = `${state.heartRate} BPM`;
  refs.heartRateNote.textContent = getHeartRateNote(state);
  refs.pressureValue.textContent = `${state.systolic} / ${state.diastolic}`;
  refs.pressureNote.textContent = getPressureNote(state);
  refs.hrvValue.textContent = `${state.hrv} ms`;
  refs.hrvNote.textContent = getHrvNote(state);
  refs.brainLoadValue.textContent = `${state.brainLoad}%`;
  refs.brainLoadNote.textContent = getBrainLoadNote(state);
  refs.lungExchangeValue.textContent = `${state.lungExchange}%`;
  refs.lungExchangeNote.textContent = getLungExchangeNote(state);
  refs.mobileLungValue.textContent = `${state.lungExchange}%`;
  refs.mobileLungNote.textContent = getLungExchangeNote(state);
  refs.cardiacLoadValue.textContent = `${state.cardiacLoad}%`;
  refs.cardiacLoadNote.textContent = getCardiacLoadNote(state);
  refs.recoveryValue.textContent = String(state.recoveryReserve);
  refs.recoveryNote.textContent = getRecoveryNote(state);
  refs.mobileRecoveryValue.textContent = String(state.recoveryReserve);
  refs.mobileRecoveryNote.textContent = getRecoveryNote(state);

  renderHeroEvidence(state);
  renderSystemBars(state);
  updateForecastBars(state.forecast);

  return state;
}

function appendMessage(role, text) {
  const bubble = document.createElement("article");
  bubble.className = `chat-bubble ${role}`;
  bubble.innerHTML = `<p>${text}</p>`;
  refs.chatLog.appendChild(bubble);
  refs.chatLog.scrollTop = refs.chatLog.scrollHeight;
}

function dominantSystem(state) {
  return [
    { label: "神经系统", value: state.brainLoad },
    { label: "心血管系统", value: state.cardiacLoad },
    { label: "呼吸系统", value: 100 - state.lungExchange },
    { label: "恢复系统", value: 100 - state.recoveryReserve },
  ].sort((a, b) => b.value - a.value)[0];
}

function generateTwinReply(prompt, state) {
  const normalized = prompt.trim();

  if (!normalized) {
    return "你可以直接问我今晚继续开会会怎样、现在更适合运动还是恢复，或者哪个系统最需要保护。";
  }

  if (normalized.includes("开会") || normalized.includes("会议") || normalized.includes("同步")) {
    return `如果今晚继续开会，这个版本的你会先表现得还撑得住，但心率、呼吸频率和脑负荷会一起往上走。当前心率 ${state.heartRate} BPM、脑负荷 ${state.brainLoad}% 、恢复储备 ${state.recoveryReserve}，继续透支的代价通常不是当下崩，而是晚上难降、第二天难清醒。`;
  }

  if (normalized.includes("运动")) {
    if (state.stress > 55 || state.heartRate > 80) {
      return `现在更适合恢复，不适合做高强度运动。你的心率已经在 ${state.heartRate} BPM，HRV 是 ${state.hrv} ms，先用步行或低强度活动把身体拉回稳态更划算。`;
    }

    return `现在可以做轻到中等强度运动，但目标应该是促循环，不是继续推高心率。你当前的灌注效率 ${state.perfusion}% 、HRV ${state.hrv} ms，最适合步行、慢跑或拉伸。`;
  }

  if (normalized.includes("器官") || normalized.includes("系统") || normalized.includes("保护") || normalized.includes("身体")) {
    const system = dominantSystem(state);
    return `当前最需要保护的是${system.label}。数字孪生不是孤立看某个器官，而是看连锁反应。对这个身体来说，神经、循环和呼吸经常会一起被高密度输入抬上去。`;
  }

  if (normalized.includes("恢复") || normalized.includes("排程") || normalized.includes("安排") || normalized.includes("节奏")) {
    return `更稳的节奏是三段式：先完成最难的判断，再处理必要同步，最后留一段让心率和呼吸回落的恢复窗口。你现在的恢复储备 ${state.recoveryReserve}，HRV ${state.hrv} ms，恢复应该被当作生产条件，而不是奖励。`;
  }

  if (normalized.includes("血氧") || normalized.includes("呼吸") || normalized.includes("氧")) {
    return `当前血氧大约 ${state.spo2}% ，呼吸频率 ${state.respiratoryRate} 次/分，呼吸交换效率 ${state.lungExchange}%。这说明氧合还稳，但如果继续高压输入，呼吸会先变浅，再拖慢恢复。`;
  }

  return "我的综合判断是：现在更适合做少而重的动作，不适合继续把身体暴露在高密度干扰里。这个身体一旦丢掉稳态，看起来还在输出，但真实的判断质量和恢复能力会同时下降。";
}

function bindLayerSwitch() {
  refs.layerSwitch.addEventListener("click", (event) => {
    const button = event.target.closest(".layer-chip");
    if (!button) {
      return;
    }

    activeLayer = button.dataset.layer;
    refs.layerSwitch.querySelectorAll(".layer-chip").forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", active ? "true" : "false");
    });

    renderState();
  });
}

function bindEvents() {
  Object.values(controls).forEach((control) => {
    control.addEventListener("input", renderState);
  });

  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.scrollTarget);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  refs.quickPrompts.addEventListener("click", (event) => {
    const button = event.target.closest(".prompt-chip");
    if (!button) {
      return;
    }

    refs.chatInput.value = button.textContent;
    refs.chatForm.requestSubmit();
  });

  refs.chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const prompt = refs.chatInput.value.trim();
    const state = renderState();

    if (!prompt) {
      appendMessage("twin", generateTwinReply("", state));
      return;
    }

    appendMessage("user", prompt);
    appendMessage("twin", generateTwinReply(prompt, state));
    refs.chatInput.value = "";
  });
}

function setupRevealObserver() {
  if (!("IntersectionObserver" in window)) {
    refs.reveals.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  refs.reveals.forEach((item) => observer.observe(item));
}

function seedConversation() {
  appendMessage(
    "twin",
    "我是这个人的人体数字孪生版本。我会把外形层、生命体征、器官负荷和行为记忆一起考虑，而不是只给你一个孤立指标。"
  );
  appendMessage(
    "twin",
    "你可以直接问我：如果把今晚两场会推迟，这个身体会回稳多少，或者现在最该保护的是哪一层。"
  );
}

initializePage();
bindLayerSwitch();
bindEvents();
setupRevealObserver();
renderState();
seedConversation();
