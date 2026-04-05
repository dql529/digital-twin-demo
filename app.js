const twinProfile = {
  name: "林越",
  role: "产品战略负责人 / 31 岁 / 上海 / Bio Twin Subject",
  brief: "这个身体适合高强度判断，不适合持续高密度输入。一旦会议和社交叠加，心率、呼吸节律与神经负荷会一起抬升。",
  archetype: "HIGH COGNITION / LOW NOISE",
  recovery: "SOLO WALK / LOW INPUT / BREATH RESET",
  bestWindow: "10:30 - 12:30",
  values: "OXYGEN / CLARITY / RECOVERY",
  traits: [
    "PROTECT CLARITY FIRST",
    "SOCIAL NOISE COSTS MORE",
    "LOW SLEEP REDUCES FLOW",
    "WALK RESETS THE SYSTEM",
    "RECOVERY WINDOW IS HARD RULE",
    "ANATOMY + VITALS SHOULD BE LINKED",
  ],
  facts: [
    { label: "Height", value: "178 cm" },
    { label: "Weight", value: "71 kg" },
    { label: "Body Fat", value: "16.8%" },
    { label: "Twin Coverage", value: "74%" },
  ],
};

const twinLayers = [
  {
    index: "01",
    title: "Capture Surface",
    body: "先建立一个像人的身体本体。身高、体重、围度、体脂、姿态和扫描结果，决定 Twin 的外壳层。",
  },
  {
    index: "02",
    title: "Read Vitals",
    body: "SpO2、心率、血压、HRV、睡眠和恢复，是 Twin 的运行状态层，让身体不是静止模型。",
  },
  {
    index: "03",
    title: "Map Anatomy",
    body: "骨骼、器官、肌肉和影像结构把 Twin 从健康记录器，推进成真正的人体地图。",
  },
  {
    index: "04",
    title: "Explain Change",
    body: "长期节奏、阈值和行为记忆决定为什么同样的输入，不同人会走向完全不同的身体状态。",
  },
];

const signalStream = [
  {
    label: "Wearables + HealthKit",
    title: "PPG、SpO2、HRV 与睡眠，负责把身体从静态档案变成活体状态流",
    body: "这一步解决的是“现在这个身体正在发生什么”，而不只是记录一张历史报告。",
  },
  {
    label: "Body Scan",
    title: "3D 身体扫描、围度和姿态，让用户先认出这是自己，再去理解数据",
    body: "身体壳层必须清楚可信，否则后面的器官层和趋势层都只会像概念图。",
  },
  {
    label: "Imaging + Anatomy",
    title: "骨骼与器官层来自影像、模型或规则化解剖映射，负责解释身体内部结构",
    body: "这层决定产品看起来像数字孪生，还是只像一堆漂亮图表。",
  },
  {
    label: "Behavior Memory",
    title: "日历、活动、恢复习惯和长期节奏，定义这个身体的反应阈值与变化路径",
    body: "同样的压力输入，不同人会有完全不同的心率、呼吸和恢复走势。",
  },
];

const memoryNodes = [
  {
    year: "2021",
    title: "连续数周高压冲刺后，开始出现晚上心率难降",
    body: "从那以后，模型会把晚间恢复窗口视为硬约束，而不是可选项。",
  },
  {
    year: "2023",
    title: "固定步行习惯形成，恢复速度明显提升",
    body: "步行被识别为这个身体最稳定的降载动作之一，优先级高于被动刷信息。",
  },
  {
    year: "2024",
    title: "高频出差阶段让睡眠和 HRV 出现波动",
    body: "模型因此更看重节奏连续性，一旦休息被打断，第二天神经负荷会上升得更快。",
  },
  {
    year: "2025",
    title: "角色更偏策略后，脑负荷开始高于执行负荷",
    body: "这让 Twin 在评估状态时，会优先关注认知占用与恢复储备，而不是任务数量本身。",
  },
];

const quickPrompts = [
  "如果今晚继续开会，这个版本的我会怎样？",
  "现在更适合运动还是恢复？",
  "哪个系统最需要被保护？",
  "给我一个更稳的身体排程",
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
  cardiacLoadValue: document.querySelector("#cardiacLoadValue"),
  cardiacLoadNote: document.querySelector("#cardiacLoadNote"),
  recoveryValue: document.querySelector("#recoveryValue"),
  recoveryNote: document.querySelector("#recoveryNote"),
  quickPrompts: document.querySelector("#quickPrompts"),
  chatLog: document.querySelector("#chatLog"),
  chatForm: document.querySelector("#chatForm"),
  chatInput: document.querySelector("#chatInput"),
  reveals: document.querySelectorAll(".reveal"),
};

let activeLayer = "3d";

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
          <strong>${item.title}</strong>
          <p>${item.body}</p>
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

function getLayerNarrative(layer, state) {
  if (layer === "3d") {
    return `3D Shell 负责建立最直观的身体感。先看到一个真实可旋转的人体，再决定要不要继续钻进 Body Map、器官层和体征层。当前恢复余量 ${state.recoveryReserve}。`;
  }

  if (layer === "skin") {
    return `Body Shell 负责先建立“这就是这个人”的第一印象。当前最重要的不只是外形，而是这个身体仍保有 ${state.recoveryReserve} 的恢复余量。`;
  }

  if (layer === "skeleton") {
    return "Skeleton 层强调结构和承载路径。它让 Twin 看起来不只是穿戴设备数据，而是真正有骨架、有姿态的人体模型。";
  }

  if (layer === "vitals") {
    return `Vitals 层展示这个身体此刻如何运行：SpO2 ${state.spo2}% 、心率 ${state.heartRate} BPM、HRV ${state.hrv} ms，说明恢复与压力正在怎样拉扯。`;
  }

  return `当前展示器官层。神经负荷 ${state.brainLoad}% 、心血管负荷 ${state.cardiacLoad}% 、呼吸交换 ${state.lungExchange}% 会一起决定这个身体还能不能继续高质量输出。`;
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

function renderSystemBars(state) {
  const systems = [
    {
      label: "Neural Reserve",
      value: state.neuralReserve,
      note: state.neuralReserve > 70 ? "仍适合深度判断与结构化输出" : "认知耐心开始收缩",
    },
    {
      label: "Circulation",
      value: state.perfusion,
      note: state.perfusion > 78 ? "末梢灌注仍在友好区间" : "循环表现开始变紧",
    },
    {
      label: "Respiration",
      value: state.respirationEfficiency,
      note: state.respirationEfficiency > 78 ? "呼吸效率稳定" : "呼吸已经明显受压力影响",
    },
    {
      label: "Recovery",
      value: state.recoveryReserve,
      note: state.recoveryReserve > 60 ? "仍有恢复空间" : "恢复必须被优先保护",
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
  refs.stageState.textContent = `${activeLayer.toUpperCase()} / ${getStageStateLabel(tone)}`;
  refs.layerNarrative.textContent = getLayerNarrative(activeLayer, state);
  refs.summaryCopy.textContent = state.summary;

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
  refs.cardiacLoadValue.textContent = `${state.cardiacLoad}%`;
  refs.cardiacLoadNote.textContent = getCardiacLoadNote(state);
  refs.recoveryValue.textContent = String(state.recoveryReserve);
  refs.recoveryNote.textContent = getRecoveryNote(state);

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
    "你可以直接问我：如果今晚继续开会会怎样、现在更适合运动还是恢复，或者哪个系统最需要被保护。"
  );
}

initializePage();
bindLayerSwitch();
bindEvents();
setupRevealObserver();
renderState();
seedConversation();
