export type ArticleImage = {
  src: string;
  alt: string;
  caption?: string;
  sourceName?: string;
  sourceUrl?: string;
};

export type ArticleSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  imageAfter?: boolean;
};

export type ArticleSource = {
  label: string;
  url: string;
};

export type ArticleFact = {
  label: string;
  value: string;
};

export type Article = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  intro: string;
  category: string;
  heroImage: ArticleImage;
  secondaryImage?: ArticleImage;
  facts?: ArticleFact[];
  sections: ArticleSection[];
  questions: string[];
  sources: ArticleSource[];
  updatedAt: string;
  readingTime: string;
};

const drugArticleRecords: Article[] = [
  {
    slug: 'pembrolizumab',
    eyebrow: '药物资讯 · 免疫治疗',
    title: '帕博利珠单抗（Pembrolizumab）',
    summary: 'PD-1 免疫检查点抑制剂，用于多种癌症的单药或联合治疗。',
    intro: '帕博利珠单抗是一种免疫检查点抑制剂。是否适用需结合癌种、疾病阶段、肿瘤生物标志物、既往治疗和身体状况评估。',
    category: '免疫治疗',
    heroImage: {
      src: '/images/drugs/pembrolizumab-package-3x2-native.webp',
      alt: 'KEYTRUDA 帕博利珠单抗 100 mg/4 mL 包装盒与药瓶',
      caption: 'KEYTRUDA 100 mg/4 mL 包装盒与药瓶。图片用于药物识别，实际包装可能因地区和批次不同。',
      sourceName: 'Drugs.com 药品识别图库；Merck 处方资料核验',
      sourceUrl: 'https://www.drugs.com/imprints/medicine-32671.html',
    },
    facts: [
      { label: '通用名', value: '帕博利珠单抗（Pembrolizumab）' },
      { label: '商品名', value: '可瑞达（KEYTRUDA）' },
      { label: '药厂', value: '默沙东（Merck Sharp & Dohme）' },
      { label: '药物类型', value: 'PD-1 免疫检查点抑制剂' },
      { label: '剂型与规格', value: '静脉注射用溶液；100 mg/4 mL' },
      { label: '常见应用', value: '多种实体瘤及部分血液肿瘤，按癌种、阶段和生物标志物评估' },
    ],
    sections: [
      {
        heading: '药品概况',
        paragraphs: ['帕博利珠单抗是针对 PD-1 的人源化单克隆抗体。肿瘤细胞可通过 PD-L1、PD-L2 等配体抑制免疫反应；药物阻断这一信号后，部分患者的免疫系统可重新识别并攻击肿瘤细胞。', '这类治疗与传统细胞毒化疗的反应模式不同。医生会结合癌种、分期、治疗目标、获批条件、影像和化验结果综合评估。'],
      },
      {
        heading: '适应证与使用场景',
        paragraphs: ['帕博利珠单抗可作为单药，也可与化疗、靶向药或其他治疗联合。常见场景包括非小细胞肺癌、黑色素瘤、头颈部肿瘤、尿路上皮癌、肾癌、部分乳腺癌，以及具有 MSI-H、dMMR 或特定高肿瘤突变负荷的实体瘤。适应证会随地区监管更新。', '部分场景要求 PD-L1 表达达到规定范围，另一些会关注 MSI/MMR、肿瘤突变负荷或癌种特定分子结果。生物标志物相同，治疗阶段和联合方案仍可能不同。'],
      },
      {
        heading: '剂型与给药方式',
        paragraphs: ['帕博利珠单抗通常在医疗机构内静脉输注。给药间隔、联合药物、疗程以及暂停或结束治疗的时机，由医生根据获批方案、疾病反应和不良反应决定。输注当天会核对症状、近期化验及正在使用的药物。'],
      },
      {
        heading: '常见不良反应',
        paragraphs: ['常见反应可包括疲倦、肌肉或关节不适、皮疹或瘙痒、腹泻、食欲下降、恶心、咳嗽，以及甲状腺功能变化。联合化疗时，还可能出现与联合药物相关的血细胞下降、脱发、周围神经不适等。'],
        bullets: ['记录症状出现时间、持续多久和是否影响进食或活动。', '复诊时带上完整用药清单，包括处方药、保健品与中草药。', '出现新的持续症状时，应告知治疗团队。'],
      },
      {
        heading: '需要尽快联系医生的警示症状',
        paragraphs: ['免疫相关反应可能发生在肺、肠道、肝脏、肾脏、皮肤、甲状腺、垂体或其他器官，有时也会在停药后出现。尽早识别通常比等待下一次复诊更重要。'],
        bullets: ['新出现或加重的呼吸困难、胸痛、持续咳嗽。', '频繁腹泻、血便、明显腹痛或持续呕吐。', '皮肤或眼白发黄、尿色明显变深、异常出血。', '剧烈头痛、视力变化、明显乏力、意识或性格改变。', '大面积皮疹、起疱、口腔黏膜破损，或输注时出现寒战、喘鸣、面部肿胀。'],
      },
      {
        heading: '注意事项与治疗监测',
        paragraphs: ['治疗前通常会确认病理诊断、疾病范围和相关生物标志物，同时记录自身免疫病、器官移植、肺病、肝肾疾病及既往免疫治疗史。治疗期间常见监测包括血常规、肝肾功能、甲状腺功能、血糖和影像学评估。检查频率会根据治疗方案与症状调整。'],
      },
    ],
    questions: ['我的癌种和当前阶段，依据哪一项获批条件考虑帕博利珠单抗？', '需要参考哪些生物标志物？现有样本是否足够完成检测？', '它会单独使用还是与其他治疗联合？评估疗效的时间点是什么？', '我已有的自身免疫病、肺部问题或长期用药会怎样影响风险？', '出现哪些症状时应在当天联系治疗团队？'],
    sources: [
      { label: 'DailyMed：KEYTRUDA（pembrolizumab）美国处方资料，2026-02 修订', url: 'https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9333c79b-d487-4538-a9f0-71b91a02b287&version=222' },
      { label: 'NCI：非小细胞肺癌治疗 PDQ（专业版）', url: 'https://www.cancer.gov/types/lung/hp/non-small-cell-lung-treatment-pdq' },
    ],
    updatedAt: '2026-07-13',
    readingTime: '约 7 分钟',
  },
  {
    slug: 'osimertinib',
    eyebrow: '药物资讯 · 靶向治疗',
    title: '奥希替尼（Osimertinib）',
    summary: '第三代 EGFR 靶向药，用于具有特定 EGFR 变异的非小细胞肺癌。',
    intro: '奥希替尼是第三代 EGFR 酪氨酸激酶抑制剂，主要用于特定 EGFR 变异的非小细胞肺癌。是否适用取决于分子检测、疾病阶段和既往治疗，治疗期间需同时监测疗效、症状和心肺安全。',
    category: '靶向治疗',
    heroImage: {
      src: '/images/drugs/osimertinib-package-3x2-native.webp',
      alt: '瑞士版 TAGRISSO 奥希替尼 80 毫克 30 片包装盒',
      caption: '瑞士版 TAGRISSO 80 mg、30 片包装盒。图片用于药物识别，不代表香港在售包装。',
      sourceName: 'Sun Store 瑞士药房目录',
      sourceUrl: 'https://www.sunstore.ch/fr/p/tagrisso-cpr-pell-80-mg-30-pce-6704831',
    },
    facts: [
      { label: '通用名', value: '奥希替尼（Osimertinib）' },
      { label: '商品名', value: '泰瑞沙（TAGRISSO）' },
      { label: '药厂', value: '阿斯利康（AstraZeneca）' },
      { label: '药物类型', value: '第三代 EGFR 酪氨酸激酶抑制剂' },
      { label: '剂型与规格', value: '口服片剂；80 mg' },
      { label: '常见应用', value: '具有特定 EGFR 变异的非小细胞肺癌' },
    ],
    sections: [
      {
        heading: '药品概况',
        paragraphs: ['奥希替尼是一种口服、不可逆的第三代 EGFR 靶向药，可抑制部分常见 EGFR 敏感变异，也对特定耐药变异具有活性。肿瘤依赖异常 EGFR 信号时，阻断它可能延缓疾病进展。', '“EGFR 阳性”需结合具体变异、检测样本和报告解释。组织与血液检测各有适用场景，血液检测阴性时有时仍需组织样本确认。'],
      },
      {
        heading: '适应证与使用场景',
        paragraphs: ['奥希替尼用于带有特定 EGFR 变异的非小细胞肺癌，包括部分早期手术后的辅助治疗、局部晚期放化疗后的治疗，以及晚期或转移性疾病的一线治疗。不同地区的获批范围和组合方案可能更新。', '治疗前会核对病理类型、分期、EGFR 具体变异、脑转移、既往治疗和身体状况。复发或进展时，重新取样或液体活检有时用于分析耐药机制。'],
      },
      {
        heading: '剂型与给药方式',
        paragraphs: ['奥希替尼以片剂口服，通常持续使用。剂量、暂缓、减量或停药由医生根据不良反应、合并用药和疾病状态决定。漏服、吞咽困难或需要通过胃管给药时，应按药师或医生提供的方法处理。', '治疗前应提供完整用药清单，因为部分药物会影响奥希替尼浓度或心脏节律。不要因单项检查变化自行改变服药。'],
      },
      {
        heading: '常见不良反应',
        paragraphs: ['常见反应包括腹泻、皮疹、皮肤干燥、甲沟炎、口腔炎、食欲或指甲变化，也可能出现白细胞、血小板或血红蛋白下降。多数问题可通过早期皮肤护理、补液、饮食调整和医生指导下的对症处理改善。'],
      },
      {
        heading: '需要尽快联系医生的警示症状',
        bullets: ['新出现或迅速加重的气促、咳嗽、发热，需排查间质性肺病或肺炎。', '心悸、晕厥、胸痛、明显头晕，需评估 QT 间期延长或其他心律问题。', '脚踝肿胀、体重短期增加、活动耐量明显下降，需评估心功能。', '严重或持续腹泻、无法进食饮水、明显脱水。', '广泛起疱或脱皮、眼痛和视力变化，或异常瘀青出血。'],
      },
      {
        heading: '注意事项与治疗监测',
        paragraphs: ['常见准备包括 EGFR 检测报告、基线影像和血常规、肝肾功能。对有心脏病、心衰风险、影响 QT 的合并药物或电解质异常者，医生可能安排心电图和电解质监测；部分患者会进行基线及随访心脏超声。', '随访时通常结合症状、影像和化验评估，不以单次肿瘤标志物变化替代整体判断。'],
      },
    ],
    questions: ['EGFR 报告中的具体变异是什么，是否属于当前适应证范围？', '组织检测和血液检测的结果是否一致，还需要补充取样吗？', '开始前是否需要心电图、心脏超声或电解质检查？', '现有药物中是否有影响 QT 间期或奥希替尼浓度的药物？', '出现皮疹、腹泻或呼吸症状时，我应该如何记录并在什么时间联系团队？'],
    sources: [
      { label: 'DailyMed：TAGRISSO（osimertinib）美国处方资料', url: 'https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=5e81b4a7-b971-45e1-9c31-29cea8c87ce7&type=display' },
      { label: 'NCI：非小细胞肺癌治疗 PDQ（专业版）', url: 'https://www.cancer.gov/types/lung/hp/non-small-cell-lung-treatment-pdq' },
    ],
    updatedAt: '2026-07-13',
    readingTime: '约 7 分钟',
  },
  {
    slug: 'cyclophosphamide',
    eyebrow: '药物资讯 · 化学治疗',
    title: '环磷酰胺（Cyclophosphamide）',
    summary: '环磷酰胺的商品名之一，属于常用于联合方案的烷化剂。',
    intro: '安道生（Endoxan）是环磷酰胺（Cyclophosphamide）的商品名之一。环磷酰胺是烷化剂，常用于联合方案。治疗期间需关注累计治疗、血细胞变化、感染、膀胱保护和生育计划。',
    category: '化学治疗',
    heroImage: {
      src: '/images/drugs/cyclophosphamide-package-3x2-native.webp',
      alt: '瑞士版 Baxter Endoxan 安道生 50 毫克 50 片包装盒',
      caption: '瑞士版 Baxter Endoxan 50 mg、50 片包装盒。图片用于药物识别，不代表香港在售包装。',
      sourceName: 'Coop Vitality 瑞士药房目录',
      sourceUrl: 'https://www.coopvitality.ch/de/p/endoxan-filmtabl-50-mg-50-stk-2585766',
    },
    facts: [
      { label: '通用名', value: '环磷酰胺（Cyclophosphamide）' },
      { label: '商品名', value: '安道生（Endoxan）' },
      { label: '药厂', value: '百特（Baxter）' },
      { label: '药物类型', value: '烷化剂' },
      { label: '剂型与规格', value: '口服及静脉剂型；50 mg 片剂' },
      { label: '常见应用', value: '多种肿瘤联合方案及部分免疫相关疾病' },
    ],
    sections: [
      {
        heading: '药品概况',
        paragraphs: ['环磷酰胺是烷化剂类前药。进入体内后由肝脏代谢为活性物质，通过与 DNA 形成交联干扰快速分裂细胞的复制。它可作用于肿瘤细胞，也会影响骨髓、消化道和生殖细胞等正常组织。', '相同通用名可能有不同商品名，制剂规格、辅料、给药途径和当地说明书也可能不同。核对时应同时查看通用名、剂型和完整方案。'],
      },
      {
        heading: '适应证与使用场景',
        paragraphs: ['环磷酰胺常用于乳腺癌、淋巴瘤、白血病、卵巢癌、部分儿童肿瘤和造血干细胞移植相关方案，也可用于某些非肿瘤免疫疾病。肿瘤治疗中常与其他化疗药或靶向药组合，疗效和不良反应需按整个方案理解。', '治疗强度会随疾病、阶段、联合药物、既往治疗和器官功能改变，核对时应查看处方中的完整方案。'],
      },
      {
        heading: '剂型与给药方式',
        paragraphs: ['环磷酰胺有静脉和口服剂型。静脉治疗通常在医疗机构进行，口服治疗也需明确服药、补液和复诊安排。治疗团队会按方案安排补液、止吐、膀胱保护或其他支持措施；剂量由医生根据体表面积、器官功能和方案要求计算。'],
      },
      {
        heading: '常见不良反应',
        paragraphs: ['常见反应包括恶心、呕吐、食欲下降、脱发、疲倦和血细胞减少。白细胞下降会增加感染风险，血小板下降可能增加出血风险，贫血可表现为乏力或气促。部分患者会有口腔黏膜不适、月经变化或精子生成受影响。'],
      },
      {
        heading: '需要尽快联系医生的警示症状',
        bullets: ['发热、寒战、持续咳嗽、排尿疼痛或其他感染迹象。', '尿液呈红色或带血、尿频尿急、下腹疼痛，需排查出血性膀胱炎。', '不明原因瘀青、鼻血难止、黑便或明显出血。', '胸痛、心悸、突发气促、下肢水肿或体重快速增加。', '尿量明显减少、严重呕吐、意识改变，或口腔溃疡影响进食。'],
      },
      {
        heading: '注意事项与治疗监测',
        paragraphs: ['治疗前通常会检查血常规、肝肾功能和尿液，并核对感染、心脏病、既往盆腔放疗、膀胱问题与累计化疗史。治疗期间会按方案复查血细胞和器官功能，并记录尿液变化、体重和补液情况。', '环磷酰胺可能影响生育力，并可对胎儿造成伤害。有生育计划者应在治疗开始前讨论生育力保存、避孕和母乳喂养安排。长期随访还会关注继发恶性肿瘤等延迟风险。'],
      },
    ],
    questions: ['我的方案中环磷酰胺承担什么作用，还会与哪些药物联合？', '治疗前后的血常规、肝肾功能和尿液检查如何安排？', '我需要怎样补液，是否会使用膀胱保护措施？', '发热、血尿或出血达到什么情况应立即联系团队？', '治疗对生育力和避孕安排有何影响，是否应先做生育力保存咨询？'],
    sources: [
      { label: 'DailyMed：Baxter Cyclophosphamide for Injection 美国处方资料，2025-06 修订', url: 'https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=97ab446f-5017-4180-ae65-0a355289b0ed&version=17' },
      { label: 'DailyMed：Cyclophosphamide Tablets 美国处方资料', url: 'https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=769ded74-6186-40a8-8e44-ceff67287451' },
    ],
    updatedAt: '2026-07-13',
    readingTime: '约 7 分钟',
  },
  {
    slug: 'tamoxifen',
    eyebrow: '药物资讯 · 内分泌治疗',
    title: '他莫昔芬（Tamoxifen）',
    summary: '选择性雌激素受体调节剂，主要用于激素受体阳性乳腺癌的内分泌治疗。',
    intro: '他莫昔芬是一种选择性雌激素受体调节剂，可在乳腺组织中阻断雌激素信号。临床应用需结合激素受体状态、绝经状态、疾病阶段、血栓风险和妇科病史评估。',
    category: '内分泌治疗',
    heroImage: {
      src: '/images/drugs/tamoxifen-package-3x2-native.webp',
      alt: '阿斯利康 NOLVADEX 他莫昔芬 20 毫克 20 片包装盒',
      caption: '墨西哥版 NOLVADEX 20 mg、20 片包装盒。图片用于药物识别，不代表香港在售包装。',
      sourceName: '阿斯利康墨西哥官方商店',
      sourceUrl: 'https://www.mitiendaastrazeneca.com/34-nolvadex',
    },
    facts: [
      { label: '通用名', value: '他莫昔芬（Tamoxifen）' },
      { label: '商品名', value: '诺瓦得士（NOLVADEX）' },
      { label: '药厂', value: '阿斯利康（AstraZeneca）' },
      { label: '药物类型', value: '选择性雌激素受体调节剂' },
      { label: '剂型与规格', value: '口服片剂；20 mg' },
      { label: '常见应用', value: '激素受体阳性乳腺癌的辅助、晚期及风险降低治疗' },
    ],
    sections: [
      {
        heading: '药品概况',
        paragraphs: ['他莫昔芬与雌激素受体结合，在乳腺组织中主要表现为阻断雌激素信号，从而抑制部分激素受体阳性肿瘤细胞的生长。它在骨骼、子宫内膜和凝血系统中的作用并不完全相同，因此疗效评估与风险监测需要同时进行。', '病理报告中的 ER、PR 状态是内分泌治疗讨论的重要依据。HER2 状态、疾病阶段、绝经状态和既往治疗也会影响整体方案。'],
      },
      {
        heading: '适应证与使用场景',
        paragraphs: ['他莫昔芬可用于早期激素受体阳性乳腺癌的辅助内分泌治疗，也可用于部分晚期或转移性疾病。对具有较高乳腺癌风险的特定人群，医生可能在完整风险评估后讨论风险降低治疗。', '绝经前和绝经后患者均可能在不同场景使用他莫昔芬。具体疗程、是否联合卵巢功能抑制，以及与芳香化酶抑制剂之间的排序，由医生根据复发风险、耐受情况和绝经状态决定。'],
      },
      {
        heading: '剂型与给药方式',
        paragraphs: ['他莫昔芬通常以片剂口服并持续使用。每日安排、疗程、暂缓或停药由医生根据适应证和不良反应确定。不同市场的商品名、片剂规格和包装数量可能不同，核对时应以通用名和处方为准。'],
      },
      {
        heading: '常见不良反应',
        paragraphs: ['常见反应包括潮热、出汗、恶心、疲倦、月经变化和阴道分泌物改变。部分患者会出现腿部抽筋、情绪或睡眠变化。症状程度及其对日常生活的影响可用于复诊时评估耐受性。'],
      },
      {
        heading: '需要尽快联系医生的警示症状',
        bullets: ['单侧小腿肿痛、突发胸痛、呼吸困难或咳血，需排查静脉血栓或肺栓塞。', '突发肢体无力、言语不清、严重头痛或视力改变，需紧急评估。', '绝经后出血、异常阴道出血或持续盆腔疼痛，需进行妇科检查。', '皮肤或眼白发黄、尿色明显变深，或出现严重过敏反应。'],
      },
      {
        heading: '注意事项与治疗监测',
        paragraphs: ['开始治疗前通常会核对血栓或卒中史、子宫内膜疾病、眼部问题、肝病和完整用药清单。部分强效 CYP2D6 抑制剂可能影响他莫昔芬的活性代谢物，抗凝药也可能增加监测需要。', '治疗期间应记录异常出血、血栓相关症状和视力变化，并按医生安排进行妇科、眼科或肝功能评估。他莫昔芬可能对胎儿造成伤害，生育与避孕安排应在治疗前确认。'],
      },
    ],
    questions: ['我的病理 ER、PR 结果是否支持使用他莫昔芬？', '疗程如何确定，是否需要联合卵巢功能抑制或以后转换其他内分泌药？', '我的血栓、妇科和眼部病史会怎样影响监测安排？', '现有药物中是否有影响 CYP2D6、抗凝或增加血栓风险的药物？', '出现哪些出血、腿部或呼吸症状时需要立即联系医疗团队？'],
    sources: [
      { label: 'DailyMed：Tamoxifen Citrate Tablets 美国处方资料', url: 'https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tamoxifen' },
      { label: 'NCI：乳腺癌治疗 PDQ（专业版）', url: 'https://www.cancer.gov/types/breast/hp/breast-treatment-pdq' },
    ],
    updatedAt: '2026-07-20',
    readingTime: '约 7 分钟',
  },
  {
    slug: 'anastrozole',
    eyebrow: '药物资讯 · 内分泌治疗',
    title: '阿那曲唑（Anastrozole）',
    summary: '芳香化酶抑制剂，主要用于绝经后激素受体阳性乳腺癌。',
    intro: '阿那曲唑是一种非甾体芳香化酶抑制剂，可降低绝经后体内雌激素生成。临床应用需结合激素受体状态、绝经状态、骨骼健康、血脂和既往内分泌治疗评估。',
    category: '内分泌治疗',
    heroImage: {
      src: '/images/drugs/anastrozole-package-3x2-native.webp',
      alt: '阿斯利康 Arimidex 阿那曲唑 1 毫克 28 片包装盒',
      caption: '沙特阿拉伯版 Arimidex 1 mg、28 片包装盒。图片用于药物识别，不代表香港在售包装。',
      sourceName: 'United Pharmacy 沙特阿拉伯药房目录；FDA 处方资料核验',
      sourceUrl: 'https://unitedpharmacy.sa/en/arimidex-1-mg-28-tablets.html',
    },
    facts: [
      { label: '通用名', value: '阿那曲唑（Anastrozole）' },
      { label: '商品名', value: '瑞宁得（Arimidex）' },
      { label: '药厂', value: '阿斯利康（AstraZeneca）' },
      { label: '药物类型', value: '芳香化酶抑制剂' },
      { label: '剂型与规格', value: '口服片剂；1 mg' },
      { label: '常见应用', value: '绝经后激素受体阳性早期及晚期乳腺癌' },
    ],
    sections: [
      {
        heading: '药品概况',
        paragraphs: ['绝经后，身体仍可通过芳香化酶把其他激素转化为雌激素。阿那曲唑抑制这一过程，降低雌激素水平，从而减少部分激素受体阳性乳腺癌细胞获得的生长信号。', '阿那曲唑并不直接替代病理和绝经状态判断。ER、PR、HER2、疾病阶段、复发风险和既往治疗仍是确定方案的基础。'],
      },
      {
        heading: '适应证与使用场景',
        paragraphs: ['阿那曲唑主要用于绝经后激素受体阳性早期乳腺癌的辅助治疗，以及部分局部晚期或转移性疾病。可作为初始内分泌治疗，也可能在他莫昔芬之后转换使用。', '绝经前患者通常不能单独依赖芳香化酶抑制剂；若在特定场景使用，往往需要同时进行卵巢功能抑制并由医生确认抑制是否充分。'],
      },
      {
        heading: '剂型与给药方式',
        paragraphs: ['阿那曲唑通常以片剂口服并持续使用。每日安排、总疗程、是否转换其他内分泌药，以及不良反应出现后的调整由医生确定。不同市场的包装与商品名可能不同。'],
      },
      {
        heading: '常见不良反应',
        paragraphs: ['常见反应包括潮热、关节或肌肉疼痛、疲倦、头痛、恶心和睡眠改变。雌激素降低还可能加快骨量丢失，增加骨质疏松和骨折风险，并可能影响胆固醇水平。'],
      },
      {
        heading: '需要尽快联系医生的警示症状',
        bullets: ['突发胸痛、气促、心悸或神经系统症状。', '严重皮疹、面部或喉部肿胀、呼吸困难等过敏表现。', '新发剧烈骨痛、跌倒后不能负重或疑似骨折。', '皮肤或眼白发黄、持续右上腹不适或尿色明显变深。'],
      },
      {
        heading: '注意事项与治疗监测',
        paragraphs: ['治疗前通常会确认绝经状态，记录骨质疏松、骨折、心血管疾病和高胆固醇病史，并评估骨密度、维生素 D、钙摄入和活动情况。治疗期间可按风险复查骨密度、血脂和肝功能。', '关节症状、骨健康和生活质量会影响长期治疗的可持续性。不要自行停药；持续不适可由医生评估运动、止痛、骨保护或更换内分泌方案。阿那曲唑可能对胎儿造成伤害。'],
      },
    ],
    questions: ['现有检查是否已经确认绝经状态和激素受体状态？', '阿那曲唑在我的整体内分泌方案中预计使用多久？', '开始前是否需要骨密度、维生素 D、血脂或肝功能检查？', '关节疼痛或骨量下降时有哪些评估和处理方式？', '如果曾使用他莫昔芬，转换治疗的依据和时间怎样确定？'],
    sources: [
      { label: 'FDA：ARIMIDEX（anastrozole）美国处方资料', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2018/020541s031lbl.pdf' },
      { label: 'NCI：乳腺癌治疗 PDQ（专业版）', url: 'https://www.cancer.gov/types/breast/hp/breast-treatment-pdq' },
    ],
    updatedAt: '2026-07-20',
    readingTime: '约 7 分钟',
  },
  {
    slug: 'capivasertib',
    eyebrow: '药物资讯 · 靶向治疗',
    title: '卡帕塞替尼（Capivasertib）',
    summary: 'AKT 抑制剂，用于特定生物标志物阳性的晚期乳腺癌及 PTEN 缺失的转移性前列腺癌。',
    intro: '卡帕塞替尼是一种口服 AKT 抑制剂，用于部分存在 PIK3CA、AKT1 或 PTEN 改变的晚期乳腺癌，并在部分地区用于 PTEN 缺失的转移性前列腺癌。适用范围需按当地批准条件、生物标志物和联合方案确认。',
    category: '靶向治疗',
    heroImage: {
      src: '/images/drugs/capivasertib-package-3x2-native.webp',
      alt: '阿斯利康 Truqap 卡帕塞替尼 200 毫克 64 片包装盒',
      caption: '德国版 Truqap 200 mg、64 片包装盒。图片用于药物识别，不代表香港在售包装。',
      sourceName: 'Shop Apotheke 德国药房目录；DailyMed 处方资料核验',
      sourceUrl: 'https://www.shop-apotheke.com/marken/truqap/',
    },
    facts: [
      { label: '通用名', value: '卡帕塞替尼（Capivasertib）' },
      { label: '商品名', value: '荃科得（TRUQAP）' },
      { label: '药厂', value: '阿斯利康（AstraZeneca）' },
      { label: '药物类型', value: 'AKT 抑制剂' },
      { label: '剂型与规格', value: '口服薄膜衣片；200 mg' },
      { label: '常见应用', value: '特定生物标志物阳性的晚期乳腺癌及 PTEN 缺失转移性前列腺癌' },
    ],
    sections: [
      {
        heading: '药品概况',
        paragraphs: ['AKT 是 PI3K/AKT/PTEN 信号通路的重要组成部分。部分肿瘤中的 PIK3CA、AKT1 或 PTEN 改变会使该通路持续活跃。卡帕塞替尼抑制 AKT1、AKT2 和 AKT3，减少相关生长和存活信号。', '是否存在相关改变需要经验证的分子检测确认。检测基因相同并不代表所有癌种、阶段或变异都符合适应证。'],
      },
      {
        heading: '适应证与使用场景',
        paragraphs: ['在乳腺癌中，卡帕塞替尼可与氟维司群联合，用于部分激素受体阳性、HER2 阴性且存在 PIK3CA、AKT1 或 PTEN 改变的局部晚期或转移性疾病，通常涉及既往内分泌治疗后的进展。', '部分地区还批准卡帕塞替尼与阿比特龙和糖皮质激素联合，用于 PTEN 缺失、尚未接受雄激素通路调节治疗的转移性前列腺癌。获批范围会随地区和时间变化。'],
      },
      {
        heading: '剂型与给药方式',
        paragraphs: ['卡帕塞替尼是口服片剂，通常按周期采用间歇给药，并与获批的联合药物使用。具体剂量、每周服药日、漏服处理和不良反应后的暂停或调整，按医生处方执行。', '强效或中效 CYP3A 诱导剂和抑制剂可能改变药物浓度，开始治疗前需核对处方药、非处方药、保健品和草药。'],
      },
      {
        heading: '常见不良反应',
        paragraphs: ['常见反应包括腹泻、皮疹、恶心、疲倦、口腔炎、呕吐和食欲下降。血糖升高较为重要，原有糖尿病或高血糖风险会影响开始治疗前的评估和治疗期间监测。'],
      },
      {
        heading: '需要尽快联系医生的警示症状',
        bullets: ['持续或严重腹泻、无法饮水、头晕、尿量减少等脱水表现。', '口渴和排尿明显增加、恶心呕吐、腹痛、呼吸深快或意识改变，需排查严重高血糖或酮症酸中毒。', '大面积皮疹、皮肤疼痛、起疱、脱皮或口眼黏膜破损。', '发热、感染迹象、严重乏力或无法进食。'],
      },
      {
        heading: '注意事项与治疗监测',
        paragraphs: ['治疗前通常会确认相关生物标志物，检查空腹血糖和糖化血红蛋白，并记录糖尿病、皮肤病、腹泻和合并用药。治疗初期和调整剂量后，血糖与症状监测通常更密集。', '腹泻和皮肤反应应尽早分级和处理。用药期间还会按联合方案监测血常规、肝肾功能和影像。卡帕塞替尼可能对胎儿造成伤害，生育与避孕安排应在治疗前确认。'],
      },
    ],
    questions: ['检测报告中的 PIK3CA、AKT1、PTEN 或 PTEN 缺失结果是否符合当前适应证？', '卡帕塞替尼会与哪一种药物联合，治疗周期怎样安排？', '开始前和治疗期间的空腹血糖、糖化血红蛋白如何监测？', '腹泻或皮疹达到什么程度需要暂停治疗或到院评估？', '现有药物中是否有影响 CYP3A 或血糖的药物？'],
    sources: [
      { label: 'DailyMed：TRUQAP（capivasertib）美国处方资料', url: 'https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d698c106-2322-401e-b738-cbd83c843ecf' },
      { label: 'FDA：Capivasertib 联合方案用于 PTEN 缺失转移性前列腺癌，2026-06', url: 'https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-capivasertib-abiraterone-and-prednisone-pten-deficient-androgen-pathway-modulation' },
    ],
    updatedAt: '2026-07-20',
    readingTime: '约 8 分钟',
  },
  {
    slug: 'zolbetuximab',
    eyebrow: '药物资讯 · 靶向治疗',
    title: '佐妥昔单抗（Zolbetuximab）',
    summary: '靶向 CLDN18.2 的单克隆抗体，用于特定胃癌和胃食管交界处癌的联合治疗。',
    intro: '佐妥昔单抗是一种靶向 CLDN18.2 的单克隆抗体，与含氟尿嘧啶类和铂类药物的化疗联合，用于特定 CLDN18.2 阳性、HER2 阴性的晚期胃或胃食管交界处腺癌。',
    category: '靶向治疗',
    heroImage: {
      src: '/images/drugs/zolbetuximab-package-3x2-native.webp',
      alt: '安斯泰来 VYLOY 佐妥昔单抗 100 毫克包装盒与药瓶',
      caption: '德国版 VYLOY 100 mg 包装盒与药瓶。图片用于药物识别，不代表香港在售包装。',
      sourceName: 'Deutsche Apotheker Zeitung 药品资料；安斯泰来中国说明书核验',
      sourceUrl: 'https://www.deutsche-apotheker-zeitung.de/pharmazie/arzneimittel/2025/01/22/zolbetuximab',
    },
    facts: [
      { label: '通用名', value: '佐妥昔单抗（Zolbetuximab）' },
      { label: '商品名', value: '威络益（VYLOY）' },
      { label: '药厂', value: '安斯泰来（Astellas）' },
      { label: '药物类型', value: 'CLDN18.2 靶向单克隆抗体' },
      { label: '剂型与规格', value: '注射用冻干粉末；100 mg/瓶' },
      { label: '常见应用', value: 'CLDN18.2 阳性、HER2 阴性的晚期胃或胃食管交界处腺癌一线联合治疗' },
    ],
    sections: [
      {
        heading: '药品概况',
        paragraphs: ['CLDN18.2 是紧密连接蛋白 CLDN18 的一种亚型，在正常组织中的表达较受限，但可暴露在部分胃癌和胃食管交界处癌细胞表面。佐妥昔单抗与 CLDN18.2 结合后，可通过抗体依赖的细胞介导细胞毒作用和补体依赖的细胞毒作用攻击表达该靶点的肿瘤细胞。', '是否适用需要通过经验证的免疫组化检测确认 CLDN18.2 表达，并同时核对 HER2 状态、病理类型和疾病范围。'],
      },
      {
        heading: '适应证与使用场景',
        paragraphs: ['佐妥昔单抗联合含氟尿嘧啶类和铂类药物的化疗，用于 CLDN18.2 阳性、HER2 阴性的局部晚期不可切除或转移性胃或胃食管交界处腺癌一线治疗。', '检测报告需要明确样本、检测方法和阳性判定。既往治疗、身体状况、进食和营养情况，以及是否适合联合化疗，均会影响方案评估。'],
      },
      {
        heading: '剂型与给药方式',
        paragraphs: ['佐妥昔单抗为注射用冻干粉末，在医疗机构复溶、稀释后静脉输注，并与获批化疗方案联合。输注前通常使用止吐药；具体给药顺序、速度、间隔及输注反应后的处理按医生和药师安排执行。'],
      },
      {
        heading: '常见不良反应',
        paragraphs: ['与化疗联合时常见反应包括恶心、呕吐、食欲下降、疲倦、腹痛、腹泻、便秘和体重下降。还可能出现周围感觉神经不适、血细胞下降、电解质变化和白蛋白降低，这些表现可能同时受到联合化疗影响。'],
      },
      {
        heading: '需要尽快联系医生的警示症状',
        bullets: ['输注期间或之后出现喘鸣、面部或喉部肿胀、胸闷、低血压、寒战或广泛皮疹。', '持续或严重呕吐、无法进食饮水、尿量减少、头晕或明显体重下降。', '发热、寒战、持续咳嗽或其他感染迹象。', '严重腹痛、黑便、呕血，或新发神经症状。'],
      },
      {
        heading: '注意事项与治疗监测',
        paragraphs: ['治疗前通常会确认胃或胃食管交界处腺癌病理、HER2 和 CLDN18.2 结果，并评估血常规、肝肾功能、电解质、营养状态、恶心呕吐史和过敏史。', '每次输注期间会观察输注反应，治疗后继续关注恶心、呕吐、补液和营养。血细胞、器官功能和影像评估按联合方案安排。严重恶心呕吐或输注反应可能需要暂停、减慢或停止治疗。'],
      },
    ],
    questions: ['CLDN18.2 检测采用什么方法，阳性比例是否符合当前适应证？', 'HER2 结果和病理类型是否已经确认？', '佐妥昔单抗会与哪一种含氟尿嘧啶类和铂类方案联合？', '输注前后的止吐、补液和营养支持如何安排？', '出现哪些输注反应或呕吐表现时需要立即处理？'],
    sources: [
      { label: '安斯泰来中国：注射用佐妥昔单抗说明书', url: 'https://www.astellas.com.cn/system/files/zolbetuximab-inf_chn-prescriber_china_20250103.pdf' },
      { label: 'NMPA：Zolbetuximab for Injection Approved for Marketing，2025-06', url: 'https://english.nmpa.gov.cn/2025-06/11/c_1101500.htm' },
    ],
    updatedAt: '2026-07-20',
    readingTime: '约 8 分钟',
  },
];

export const featuredDrugSlugs = ['tamoxifen', 'anastrozole', 'capivasertib'] as const;
export const featuredCancerSlugs = ['lung-cancer', 'breast-cancer', 'colorectal-cancer'] as const;

const drugArticleOrder = [
  ...featuredDrugSlugs,
  'zolbetuximab',
  'pembrolizumab',
  'osimertinib',
  'cyclophosphamide',
] as const;

export const drugArticles: Article[] = drugArticleOrder
  .map((slug) => drugArticleRecords.find((article) => article.slug === slug))
  .filter((article): article is Article => Boolean(article));

export const cancerArticles: Article[] = [
  {
    slug: 'lung-cancer',
    eyebrow: '癌症知识 · 肺癌',
    title: '肺癌',
    summary: '发生于肺部的恶性肿瘤，主要分为非小细胞肺癌和小细胞肺癌。',
    intro: '肺癌不是一种单一疾病。病理类型、疾病范围、分子变异、PD-L1 表达和整体健康状况共同影响治疗方案。',
    category: '肺癌',
    heroImage: { src: '/images/cancers/lung-anatomy.jpg', alt: '肺、气管、支气管、心脏与胸廓的三维解剖示意，右肺显示局限病灶' },
    secondaryImage: { src: '/images/cancers/lung-consultation.jpg', alt: '亚洲成年患者与一名家属在自然光诊室听医生讲解胸部影像' },
    sections: [
      { heading: '疾病概况和主要类型', paragraphs: ['肺癌主要分为非小细胞肺癌和小细胞肺癌。非小细胞肺癌占多数，其中包括腺癌、鳞状细胞癌等；小细胞肺癌通常生长较快，分期和治疗路径与非小细胞肺癌不同。病理报告不仅要写“肺癌”，还应尽量明确组织学类型和取材方式。', '吸烟是重要风险因素，但不吸烟者也可能患肺癌。职业或环境暴露、家族史和既往肺部疾病等信息，同样值得在就诊概况中记录。'] },
      { heading: '常见症状及需要及时就医的情况', paragraphs: ['持续咳嗽、咳嗽性质改变、咳血、胸痛、气促、声音嘶哑、反复肺部感染、原因不明的体重下降或乏力都可能出现在肺癌中，也可能由其他疾病引起。症状本身不能确诊，关键是结合影像和病理。'], bullets: ['大量咳血、突发或加重的呼吸困难、剧烈胸痛应尽快就医。', '新出现的肢体无力、言语不清、抽搐或严重头痛需要急诊评估。', '发热伴呼吸症状，尤其正在接受治疗时，应及时联系医疗团队。'] },
      { heading: '常用检查、病理诊断和分期', paragraphs: ['胸部 CT 用于了解病灶大小、位置和淋巴结情况；PET-CT、脑部 MRI、骨扫描或其他检查可能用于评估远处病灶。确诊通常需要支气管镜、经皮穿刺、胸腔积液或手术样本的病理。医生会用 TNM 系统描述原发肿瘤、淋巴结和远处转移，并综合为 I 至 IV 期。', '取材既要满足病理诊断，也要尽可能保留足够组织做分子检测。若组织有限，可讨论液体活检的价值和局限。'], imageAfter: true },
      { heading: '重要生物标志物', paragraphs: ['晚期非鳞状非小细胞肺癌常会评估 EGFR、ALK、ROS1、KRAS、BRAF、MET、RET、NTRK、HER2 等分子改变，并检测 PD-L1。结果可能决定是否有相应靶向治疗或免疫治疗讨论。不同检测面板覆盖范围不同，报告上“未检出”也需要看样本质量与检测方法。', 'EGFR、ALK 或 ROS1 等驱动改变存在时，治疗排序与单看 PD-L1 的情况不同。复发或进展后，耐药机制也可能促使再次取样。'] },
      { heading: '不同阶段常见治疗方式', paragraphs: ['较早期肺癌常以手术为核心，并根据分期、病理和分子信息讨论术前或术后的化疗、免疫治疗、靶向治疗或放疗。局部晚期疾病可能采用同步或序贯放化疗，再根据条件考虑后续系统治疗。晚期疾病以系统治疗为主，可包括靶向药、免疫治疗、化疗及其组合；放疗或手术有时用于控制特定病灶或症状。', '治疗目标、顺序与时间点需要结合可切除性、身体状况、分子结果、脑转移情况和患者偏好。'] },
      { heading: '就诊前可整理的资料', bullets: ['病理报告、取材部位与日期，若有病理会诊结果一并列出。', '最近及关键时间点的胸部 CT、PET-CT、脑部 MRI 报告与影像。', '完整分子检测和 PD-L1 报告，包括样本来源与检测平台。', '手术、放疗、系统治疗名称、开始与结束时间、疗效及主要副作用。', '吸烟史、重要合并症、正在使用的药物及当前最影响生活的症状。'] },
    ],
    questions: ['病理类型和分期目前是否完整，还缺哪项检查？', '现有样本是否完成了足够范围的分子检测与 PD-L1 检测？', '当前治疗目标是什么，评估疗效的时间点和标准是什么？', '若出现进展，是否需要重新取样或液体活检？', '哪些症状需要立即联系团队，哪些可以在复诊时集中讨论？'],
    sources: [
      { label: 'NCI：非小细胞肺癌治疗 PDQ（专业版）', url: 'https://www.cancer.gov/types/lung/hp/non-small-cell-lung-treatment-pdq' },
      { label: 'NCI：非小细胞肺癌治疗 PDQ（患者版）', url: 'https://www.cancer.gov/types/lung/patient/non-small-cell-lung-treatment-pdq' },
    ],
    updatedAt: '2026-07-13', readingTime: '约 8 分钟',
  },
  {
    slug: 'breast-cancer',
    eyebrow: '癌症知识 · 乳腺癌',
    title: '乳腺癌',
    summary: '发生于乳腺组织的恶性肿瘤，诊疗通常依据病理类型和受体状态。',
    intro: '乳腺癌的治疗方案依据病理信息、ER、PR、HER2、肿瘤分级、Ki-67、淋巴结和疾病范围确定。',
    category: '乳腺癌',
    heroImage: { src: '/images/cancers/breast-anatomy.jpg', alt: '乳腺、乳管、胸肌、肋骨与腋窝淋巴结的三维解剖示意，乳腺内显示局限病灶' },
    secondaryImage: { src: '/images/cancers/breast-consultation.jpg', alt: '亚洲成年女性患者与一名家属在自然光诊室听医生讲解乳腺影像' },
    sections: [
      { heading: '疾病概况和主要类型', paragraphs: ['乳腺癌可起源于乳管或小叶，常见病理类型包括浸润性导管癌和浸润性小叶癌。导管原位癌局限在乳管内，与浸润性乳腺癌的风险和处理不同。男性也可能发生乳腺癌。', '病理报告通常会写明肿瘤类型、大小、分级、切缘、淋巴血管侵犯和淋巴结情况。手术标本与穿刺标本的信息可能互相补充。'] },
      { heading: '常见症状及需要及时就医的情况', paragraphs: ['无痛性乳房肿块、皮肤凹陷或橘皮样改变、乳头内陷、异常分泌物、乳房形态变化或腋窝肿块都值得评估。很多乳房变化是良性的，但持续存在或新出现的改变应接受临床检查与影像。'], bullets: ['乳房快速红肿、发热或明显疼痛需尽快评估感染或炎性改变。', '确诊后出现新发气促、剧烈骨痛、神经系统症状或黄疸，应及时联系团队。'] },
      { heading: '常用检查、病理诊断和分期', paragraphs: ['常用影像包括乳腺 X 线、超声和在特定情况下使用的乳腺 MRI。确诊依赖穿刺或手术病理。分期会综合原发肿瘤、区域淋巴结、远处转移，以及部分生物学特征。根据疾病阶段，医生可能安排胸腹部影像、骨评估或其他检查。', '影像中病灶大小与病理测量可能不同，应记录各自的时间点和用途。'], imageAfter: true },
      { heading: '重要生物标志物', paragraphs: ['ER 和 PR 反映肿瘤对激素信号的依赖，影响内分泌治疗讨论；HER2 通过免疫组化和必要时的原位杂交确定，关系到 HER2 靶向治疗。Ki-67 反映增殖活性，但解读要结合实验室方法和整体病理。', '年龄、家族史、双侧或多原发肿瘤、三阴性病理等情况可能提示遗传咨询和胚系基因检测。遗传检测结果会影响个人治疗、风险管理和家族成员沟通。'] },
      { heading: '不同阶段常见治疗方式', paragraphs: ['早期乳腺癌通常结合手术、放疗和系统治疗。系统治疗可包括内分泌治疗、化疗、HER2 靶向治疗、免疫治疗或其他靶向药，具体取决于受体状态、阶段和复发风险。有些患者先接受术前治疗，以观察反应并帮助规划手术；术后病理再进一步影响后续治疗。', '转移性乳腺癌以控制疾病、延长生存和维持生活质量为主要目标，通常按肿瘤亚型、既往治疗、转移部位与症状选择序贯方案。'] },
      { heading: '就诊前可整理的资料', bullets: ['所有穿刺和手术病理，特别是 ER、PR、HER2、Ki-67 与切缘、淋巴结结果。', '乳腺 X 线、超声、MRI 及分期影像，注明日期和治疗前后关系。', '手术方式、放疗部位与时间、系统治疗药名和周期。', '遗传检测或家族史资料，包括亲属癌种和大致发病年龄。', '月经或绝经状态、骨健康、心脏病史与生育计划。'] },
    ],
    questions: ['ER、PR、HER2 和 Ki-67 的结果是否完整，是否需要复核？', '目前的临床分期和病理分期分别是什么？', '为什么建议先手术或先系统治疗，如何评价治疗反应？', '我是否符合遗传咨询或胚系基因检测的条件？', '治疗对心脏、骨健康、月经和生育计划会有哪些影响？'],
    sources: [
      { label: 'NCI：乳腺癌治疗 PDQ（专业版）', url: 'https://www.cancer.gov/types/breast/hp/breast-treatment-pdq' },
      { label: 'NCI：乳腺癌分期与生物标志物', url: 'https://www.cancer.gov/types/breast/stages' },
    ],
    updatedAt: '2026-07-13', readingTime: '约 8 分钟',
  },
  {
    slug: 'colorectal-cancer',
    eyebrow: '癌症知识 · 结直肠癌',
    title: '结直肠癌',
    summary: '发生于结肠或直肠的恶性肿瘤，诊疗依据病理、分期和分子检测。',
    intro: '结肠癌和直肠癌都起源于大肠，但解剖位置会明显影响局部治疗方式。病理、肿瘤位置、淋巴结和远处病灶，再加上 MMR/MSI 与分子检测，共同构成后续讨论的基础。',
    category: '结直肠癌',
    heroImage: { src: '/images/cancers/colorectal-anatomy.jpg', alt: '结肠、直肠、小肠与骨盆结构的三维解剖示意，乙状结肠显示局限病灶' },
    secondaryImage: { src: '/images/cancers/colorectal-consultation.jpg', alt: '亚洲成年患者与一名家属在自然光诊室听医生讲解腹部影像与肠镜报告' },
    sections: [
      { heading: '疾病概况和主要类型', paragraphs: ['多数结直肠癌属于腺癌，常由腺瘤性息肉或其他癌前病变逐渐发展。肿瘤位于右半结肠、左半结肠、乙状结肠或直肠，会影响症状、手术方式和部分系统治疗讨论。', '病理报告应尽量记录肿瘤类型、分化程度、浸润深度、淋巴结、切缘、淋巴血管或神经侵犯，以及 MMR 蛋白或 MSI 结果。'] },
      { heading: '常见症状及需要及时就医的情况', paragraphs: ['大便习惯持续改变、便血或黑便、腹痛腹胀、排便不尽感、原因不明的缺铁性贫血、体重下降和乏力都可能出现。右侧结肠病变有时以贫血或乏力为主，直肠病变更常见便血和排便改变。'], bullets: ['持续呕吐、腹胀明显且停止排气排便，需尽快排查肠梗阻。', '大量便血、头晕晕厥或心跳加快，需要急诊评估。', '治疗期间发热、严重腹泻或脱水，应及时联系医疗团队。'] },
      { heading: '常用检查、病理诊断和分期', paragraphs: ['结肠镜可观察病灶并取活检，完整肠镜还用于了解是否有同步病变。胸腹盆 CT 常用于分期；直肠癌常增加盆腔 MRI，以评估肿瘤与直肠系膜筋膜、括约肌和区域淋巴结的关系。CEA 可用于基线和随访，但不能单独诊断或判断疗效。', 'TNM 分期描述肠壁浸润、区域淋巴结和远处转移。结肠癌与直肠癌在局部治疗排序上不同，因此报告中准确的肿瘤位置十分重要。'], imageAfter: true },
      { heading: '重要生物标志物', paragraphs: ['MMR 蛋白免疫组化或 MSI 检测有助于识别 dMMR/MSI-H 肿瘤，并可能提示 Lynch 综合征风险；在晚期疾病中也会影响免疫治疗讨论。RAS（KRAS/NRAS）和 BRAF 变异关系到部分靶向治疗的适用性和治疗排序。', '在 RAS/BRAF 野生型的晚期疾病中，肿瘤左右侧位置也会影响抗 EGFR 治疗讨论；特定患者还会评估 HER2、NTRK 等改变。检测范围应结合治疗阶段和样本质量。'] },
      { heading: '不同阶段常见治疗方式', paragraphs: ['局限性结肠癌通常以手术为主，术后是否化疗取决于分期和复发风险。局部进展期直肠癌常把放疗与化疗安排在手术前后，越来越多方案采用全程新辅助治疗。转移性疾病可使用化疗、靶向治疗、免疫治疗和局部治疗的组合；若肝或肺转移范围有限，多学科评估可能讨论切除或消融。', '治疗顺序会随原发部位、症状、分子结果、转移范围和患者目标改变。'] },
      { heading: '就诊前可整理的资料', bullets: ['肠镜报告、病灶距肛缘或具体肠段位置、活检和手术病理。', '胸腹盆 CT；直肠癌补充盆腔 MRI，必要时准备治疗前后对照。', 'MMR/MSI、KRAS、NRAS、BRAF 及其他分子检测原始报告。', '手术记录、造口情况、放疗范围、系统治疗方案与主要不良反应。', 'CEA 时间线、排便变化、体重、营养和家族肿瘤史。'] },
    ],
    questions: ['肿瘤的准确位置和当前 TNM 分期是什么？', 'MMR/MSI 和 RAS、BRAF 检测是否完整，结果怎样影响讨论？', '对于直肠癌，盆腔 MRI 显示的切缘风险和局部范围如何？', '治疗顺序为什么这样安排，何时进行下一次影像评估？', '是否需要遗传咨询、多学科评估或针对肝肺病灶的局部治疗讨论？'],
    sources: [
      { label: 'NCI：结肠癌治疗 PDQ（专业版）', url: 'https://www.cancer.gov/types/colorectal/hp/colon-treatment-pdq' },
      { label: 'NCI：直肠癌治疗 PDQ（专业版）', url: 'https://www.cancer.gov/types/colorectal/hp/rectal-treatment-pdq' },
      { label: 'NCI：结直肠癌遗传学 PDQ', url: 'https://www.cancer.gov/types/colorectal/hp/colorectal-genetics-pdq' },
    ],
    updatedAt: '2026-07-13', readingTime: '约 8 分钟',
  },
  {
    slug: 'liver-cancer',
    eyebrow: '癌症知识 · 肝癌',
    title: '肝癌',
    summary: '发生于肝脏的恶性肿瘤，常见类型为肝细胞癌，治疗同时考虑肿瘤范围和肝功能。',
    intro: '原发性肝癌以肝细胞癌最常见。诊疗评估不仅包括肿瘤大小、数量和血管侵犯，还包括肝硬化程度、门静脉高压、病毒性肝炎和整体肝功能。',
    category: '肝癌',
    heroImage: { src: '/images/cancers/liver-anatomy.jpg', alt: '肝脏、胆囊、门静脉与邻近上腹部器官的三维解剖示意，肝右叶显示局限病灶' },
    secondaryImage: { src: '/images/cancers/liver-consultation.jpg', alt: '亚洲成年患者与一名家属在自然光诊室听医生讲解肝脏影像' },
    sections: [
      { heading: '疾病概况和主要类型', paragraphs: ['原发性肝癌包括肝细胞癌、肝内胆管癌及较少见类型，其中肝细胞癌占多数。慢性乙型或丙型肝炎、肝硬化、酒精相关肝病和代谢相关脂肪性肝病会增加风险，但没有已知肝病的人也可能发病。', '肝内胆管癌与肝细胞癌在病理、生物标志物和系统治疗上不同。影像显示“肝占位”并不等同于确诊原发性肝癌，还需排除良性病变和其他肿瘤的肝转移。'] },
      { heading: '常见症状及需要及时就医的情况', paragraphs: ['早期肝癌可能没有明显症状。右上腹持续不适、腹胀、食欲下降、体重减轻、乏力、黄疸、腹水或容易出血可能在疾病进展或肝功能受影响时出现。'], bullets: ['呕血、黑便、意识改变或明显嗜睡可能与消化道出血或肝性脑病有关，需要急诊评估。', '黄疸迅速加重、腹围短期增加、持续发热或剧烈腹痛应尽快就医。', '接受治疗期间出现呼吸困难、大量出血或无法进食饮水，应及时联系医疗团队。'] },
      { heading: '常用检查、病理诊断和分期', paragraphs: ['多期增强 CT 或 MRI 用于观察病灶在动脉期、门静脉期和延迟期的强化特征，并评估肿瘤数量、血管侵犯和肝外病灶。对部分具有肝硬化或高风险背景且影像表现典型的患者，可依据规范影像作出肝细胞癌诊断；影像不典型、无高风险背景或需要区分其他肿瘤时可能需要活检。', 'AFP 可用于辅助评估和随访，但正常不能排除肝癌，升高也不能单独确诊。分期常综合 TNM、BCLC 等系统，并结合 Child-Pugh 分级、胆红素、白蛋白、凝血功能、腹水和体能状态。'], imageAfter: true },
      { heading: '重要生物标志物', paragraphs: ['肝细胞癌目前常用决策仍主要依据肿瘤范围、肝功能和临床状态。AFP 可作为部分治疗选择和随访的参考之一；HBV DNA、HCV RNA 等病毒学结果关系到抗病毒和肝功能管理。', '对肝内胆管癌或病理类型不明确的肿瘤，分子检测可能评估 FGFR2 融合、IDH1 变异、BRAF、HER2、NTRK 及 MMR/MSI 等改变。检测内容需与病理类型和治疗阶段对应。'] },
      { heading: '不同阶段常见治疗方式', paragraphs: ['局限性肝细胞癌可讨论肝切除、肝移植或消融，选择取决于肿瘤大小与数量、位置、门静脉高压和剩余肝功能。部分不可直接手术的肝内病灶可采用经动脉化疗栓塞、放射栓塞或放疗等局部治疗。', '晚期或有血管侵犯、肝外转移时，常以免疫治疗、抗血管生成治疗、靶向药等系统方案为主。治疗期间需同步处理病毒性肝炎、腹水、食管胃静脉曲张和营养问题。'] },
      { heading: '就诊前可整理的资料', bullets: ['历次多期增强 CT 或 MRI 报告和影像，注明是否为肝脏专用检查。', '病理报告及免疫组化；若未活检，保留影像诊断依据。', 'AFP 时间线、肝功能、凝血功能、血常规及肾功能结果。', '乙肝、丙肝检测与抗病毒治疗记录，既往肝硬化、腹水或静脉曲张情况。', '手术、消融、介入、放疗和系统治疗的日期、方案与反应。'] },
    ],
    questions: ['目前属于哪一种原发性肝癌，诊断依据是影像还是病理？', '肿瘤范围、血管侵犯、肝功能和分期分别是什么？', '手术、移植、消融或介入治疗是否适用，主要限制因素是什么？', '开始系统治疗前需要处理哪些肝病、出血或病毒性肝炎问题？', '复查采用哪一种影像和肿瘤标志物，时间如何安排？'],
    sources: [
      { label: 'NCI：成人原发性肝癌治疗 PDQ（患者版）', url: 'https://www.cancer.gov/types/liver/patient/adult-liver-treatment-pdq' },
      { label: 'NCI：成人原发性肝癌治疗 PDQ（专业版）', url: 'https://www.cancer.gov/types/liver/hp/adult-liver-treatment-pdq' },
    ],
    updatedAt: '2026-07-21', readingTime: '约 8 分钟',
  },
  {
    slug: 'gastric-cancer',
    eyebrow: '癌症知识 · 胃癌',
    title: '胃癌',
    summary: '发生于胃黏膜的恶性肿瘤，多数为腺癌，治疗依据病理、分期和生物标志物。',
    intro: '胃癌多数为腺癌。肿瘤位于贲门、胃体或胃窦，是否累及胃食管交界处，以及 HER2、PD-L1、MMR/MSI 和 CLDN18.2 等结果，会影响治疗讨论。',
    category: '胃癌',
    heroImage: { src: '/images/cancers/gastric-anatomy.jpg', alt: '食管、胃、十二指肠、肝脏与胰腺的三维解剖示意，胃壁显示局限病灶' },
    secondaryImage: { src: '/images/cancers/gastric-consultation.jpg', alt: '亚洲成年患者与一名家属在自然光诊室听医生讲解胃镜和腹部影像' },
    sections: [
      { heading: '疾病概况和主要类型', paragraphs: ['胃癌最常见的病理类型是腺癌，起源于胃黏膜。病理还可能描述肠型、弥漫型、印戒细胞成分、分化程度和淋巴血管侵犯。胃淋巴瘤、胃肠道间质瘤和神经内分泌肿瘤属于不同疾病，检查和治疗路径也不同。', '幽门螺杆菌感染、慢性萎缩性胃炎、部分遗传综合征、吸烟和某些饮食因素会增加风险。胃食管交界处肿瘤的分期与治疗需结合病灶中心位置判断。'] },
      { heading: '常见症状及需要及时就医的情况', paragraphs: ['上腹持续不适、早饱、食欲下降、吞咽不适、恶心、呕吐、黑便、贫血、体重下降或乏力都可能出现，也可能由溃疡等良性疾病引起。确诊依赖胃镜活检。'], bullets: ['呕血、黑便伴头晕心悸或晕厥，需要急诊评估。', '持续呕吐、无法进食饮水或腹部明显胀痛，应尽快排查梗阻和脱水。', '治疗期间发热、严重腹泻、出血或进行性乏力应及时联系医疗团队。'] },
      { heading: '常用检查、病理诊断和分期', paragraphs: ['胃镜可直接观察病灶并进行多点活检。胸腹盆增强 CT 常用于分期；超声内镜可评估胃壁浸润和邻近淋巴结，PET-CT、诊断性腹腔镜和腹腔冲洗细胞学在部分患者中用于发现隐匿转移。', '病理报告应写明组织学类型和分化程度。TNM 分期描述胃壁浸润、区域淋巴结和远处转移。对准备根治性治疗的患者，营养状态、体重变化和手术耐受性也是重要评估内容。'], imageAfter: true },
      { heading: '重要生物标志物', paragraphs: ['晚期或复发性胃腺癌常检测 HER2、PD-L1 和 MMR/MSI。HER2 通常先做免疫组化，必要时用原位杂交确认；PD-L1 报告需注明评分方法；dMMR/MSI-H 可能影响免疫治疗讨论并提示遗传评估。', 'CLDN18.2 免疫组化可用于评估特定靶向治疗。部分病例还会进行更广泛的分子检测，包括 NTRK 等少见改变。检测应使用足量且具有代表性的肿瘤组织。'] },
      { heading: '不同阶段常见治疗方式', paragraphs: ['早期胃癌在严格条件下可采用内镜切除；可切除的局部进展期胃癌通常以胃切除和区域淋巴结清扫为核心，并结合围手术期或术后化疗。部分胃食管交界处肿瘤可能采用放化疗与手术组合。', '不可切除或转移性疾病以系统治疗为主，可包括化疗、HER2 靶向治疗、免疫治疗和 CLDN18.2 靶向治疗等组合。营养、贫血、疼痛、梗阻和出血管理贯穿治疗过程。'] },
      { heading: '就诊前可整理的资料', bullets: ['胃镜报告、病灶位置、活检与手术病理。', '胸腹盆 CT、PET-CT、超声内镜和腹腔镜结果。', 'HER2、PD-L1、MMR/MSI、CLDN18.2 及其他分子检测报告。', '手术范围、化疗或放疗方案、时间与主要不良反应。', '近期体重、进食量、贫血指标和营养支持记录。'] },
    ],
    questions: ['病理类型、病灶位置和当前 TNM 分期是什么？', '是否需要腹腔镜或腹腔冲洗细胞学补充分期？', 'HER2、PD-L1、MMR/MSI 和 CLDN18.2 是否已经完成？', '当前方案是根治性治疗还是控制疾病，治疗顺序如何安排？', '胃切除或系统治疗期间的营养、贫血和症状管理怎样安排？'],
    sources: [
      { label: 'NCI：胃癌治疗 PDQ（患者版）', url: 'https://www.cancer.gov/types/stomach/patient/stomach-treatment-pdq' },
      { label: 'NCI：胃癌治疗 PDQ（专业版）', url: 'https://www.cancer.gov/types/stomach/hp/stomach-treatment-pdq' },
    ],
    updatedAt: '2026-07-21', readingTime: '约 8 分钟',
  },
  {
    slug: 'prostate-cancer',
    eyebrow: '癌症知识 · 前列腺癌',
    title: '前列腺癌',
    summary: '发生于前列腺的恶性肿瘤，多数为腺癌，治疗依据风险分层、分期和激素敏感状态。',
    intro: '前列腺癌多数为腺癌。PSA、病理 Grade Group、肿瘤范围、影像和是否发生转移共同决定风险分层；晚期疾病还需区分激素敏感与去势抵抗状态。',
    category: '前列腺癌',
    heroImage: { src: '/images/cancers/prostate-anatomy.jpg', alt: '前列腺、膀胱、尿道、直肠与骨盆结构的三维解剖示意，前列腺内显示局限病灶' },
    secondaryImage: { src: '/images/cancers/prostate-consultation.jpg', alt: '亚洲成年男性患者与一名家属在自然光诊室听医生讲解前列腺影像与病理报告' },
    sections: [
      { heading: '疾病概况和主要类型', paragraphs: ['前列腺癌最常见为腺癌。部分肿瘤生长缓慢，另一些具有较高侵袭性。病理以 Gleason 评分和 Grade Group 描述分化与风险，穿刺阳性针数、每针肿瘤比例和是否存在特殊组织学成分也会影响判断。', '前列腺增生和炎症也会导致排尿症状或 PSA 升高，因此 PSA 异常并不等同于癌症。少见的神经内分泌或小细胞类型需要不同治疗路径。'] },
      { heading: '常见症状及需要及时就医的情况', paragraphs: ['早期前列腺癌常无症状。尿频、夜尿、尿流变弱、排尿困难或血尿更常见于前列腺疾病，但不能区分良恶性。骨痛、乏力、体重下降或下肢水肿可能见于进展期疾病。'], bullets: ['突然无法排尿、血尿伴血块或剧烈疼痛，需要尽快就医。', '新发下肢无力、麻木、行走困难或大小便控制改变，需急诊排查脊髓压迫。', '持续加重的骨痛或病理性骨折风险应及时评估。'] },
      { heading: '常用检查、病理诊断和分期', paragraphs: ['PSA、直肠指检和多参数 MRI 常用于初步评估。确诊通常依赖经会阴或经直肠前列腺穿刺病理；MRI 靶向与系统穿刺可互相补充。胸腹盆影像、骨扫描或 PSMA PET 可用于评估区域和远处病灶，具体取决于风险分层。', '分期结合 TNM、PSA 和 Grade Group。局限性疾病还会按低、中、高风险等分层。已经转移的疾病需记录转移部位、负荷及在雄激素剥夺治疗下的反应。'], imageAfter: true },
      { heading: '重要生物标志物', paragraphs: ['PSA 是诊断评估和随访的重要指标，但应结合前列腺体积、感染、操作影响和变化趋势解释。病理 Grade Group 比单次 PSA 更直接反映肿瘤形态学风险。', '转移性或高风险疾病常讨论胚系与肿瘤检测，包括 BRCA1、BRCA2、ATM 等同源重组修复基因，以及 MMR/MSI。结果可能影响 PARP 抑制剂、免疫治疗、遗传咨询和家族风险管理。'] },
      { heading: '不同阶段常见治疗方式', paragraphs: ['低风险局限性前列腺癌可采用主动监测，并定期复查 PSA、MRI 和必要时重复活检。需要根治性治疗时，可讨论前列腺切除或放疗；选择需考虑肿瘤风险、年龄、基础排尿功能、性功能和治疗副作用。', '局部晚期和转移性疾病常以雄激素剥夺治疗为基础，并根据阶段联合雄激素受体通路药物、化疗、放疗、放射性配体或靶向治疗。骨健康和心血管代谢风险需要持续管理。'] },
      { heading: '就诊前可整理的资料', bullets: ['历次 PSA 数值、检测日期和相关感染或操作情况。', 'MRI、穿刺病理、Gleason 评分、Grade Group 和阳性针数。', 'PSMA PET、CT、骨扫描或其他分期影像。', '胚系和肿瘤分子检测，包括 BRCA、HRR、MMR/MSI。', '排尿、性功能、骨骼、心血管病史及既往治疗记录。'] },
    ],
    questions: ['目前的 PSA、Grade Group、TNM 分期和风险分层是什么？', '主动监测、手术和放疗分别适用于哪些情况？', '是否需要 PSMA PET 或其他影像补充分期？', '是否符合胚系或肿瘤基因检测条件，结果如何影响治疗？', '治疗对排尿、性功能、骨健康和心血管风险有何影响？'],
    sources: [
      { label: 'NCI：前列腺癌治疗 PDQ（患者版）', url: 'https://www.cancer.gov/types/prostate/patient/prostate-treatment-pdq' },
      { label: 'NCI：前列腺癌遗传学 PDQ', url: 'https://www.cancer.gov/types/prostate/hp/prostate-genetics-pdq' },
    ],
    updatedAt: '2026-07-21', readingTime: '约 8 分钟',
  },
  {
    slug: 'thyroid-cancer',
    eyebrow: '癌症知识 · 甲状腺癌',
    title: '甲状腺癌',
    summary: '发生于甲状腺的恶性肿瘤，常见类型包括乳头状癌、滤泡癌、髓样癌和未分化癌。',
    intro: '甲状腺癌包含生物学行为差异很大的多种类型。超声、细针穿刺、病理类型、淋巴结和远处病灶决定主要路径，部分患者还需结合甲状腺球蛋白、降钙素或分子检测。',
    category: '甲状腺癌',
    heroImage: { src: '/images/cancers/thyroid-anatomy.jpg', alt: '甲状腺、气管、喉部、血管与颈部淋巴结的三维解剖示意，甲状腺叶内显示局限病灶' },
    secondaryImage: { src: '/images/cancers/thyroid-consultation.jpg', alt: '亚洲成年患者与一名家属在自然光诊室听医生讲解甲状腺超声与病理报告' },
    sections: [
      { heading: '疾病概况和主要类型', paragraphs: ['分化型甲状腺癌包括乳头状癌和滤泡癌，占大多数，通常进展较慢。髓样癌起源于滤泡旁 C 细胞，与降钙素和部分遗传性 RET 变异有关。未分化癌较少见，但生长迅速，需要尽快完成多学科评估。', '甲状腺结节非常常见，多数为良性。超声风险特征、结节大小、淋巴结和细针穿刺结果共同决定是否需要进一步处理。'] },
      { heading: '常见症状及需要及时就医的情况', paragraphs: ['多数甲状腺癌以无痛性颈部结节发现。声音嘶哑、吞咽不适、颈部淋巴结肿大或结节短期增大需要评估。甲状腺功能检查可正常，不能据此排除甲状腺癌。'], bullets: ['颈部肿块快速增大、呼吸困难、喘鸣或吞咽明显受阻，需要尽快就医。', '持续声音嘶哑伴颈部肿块应评估喉返神经和局部侵犯。', '术后出现口周麻木、手足抽搐或进行性呼吸不适，应及时联系医疗团队。'] },
      { heading: '常用检查、病理诊断和分期', paragraphs: ['颈部超声用于描述结节形态和区域淋巴结。细针穿刺细胞学常按 Bethesda 系统报告；结果不确定时可结合重复取样或分子检测。手术病理进一步确认类型、大小、包膜或血管侵犯、切缘和淋巴结。', '分期依病理类型、年龄、原发灶、淋巴结和远处转移确定。CT、MRI、放射性碘全身显像或 PET-CT 仅在特定场景使用。治疗前后还会记录 TSH 和甲状腺功能。'], imageAfter: true },
      { heading: '重要生物标志物', paragraphs: ['分化型甲状腺癌术后常用甲状腺球蛋白和抗甲状腺球蛋白抗体随访，但结果需结合是否全切、放射性碘治疗和 TSH 状态。髓样癌则关注降钙素和 CEA，并常讨论 RET 胚系检测。', 'BRAF、RET、NTRK、RAS 等分子改变可用于辅助不确定结节分类或晚期治疗选择。未分化癌需要迅速评估 BRAF V600E 等可治疗改变。'] },
      { heading: '不同阶段常见治疗方式', paragraphs: ['局限性分化型甲状腺癌以手术为主，手术范围取决于肿瘤大小、位置、双侧病灶和淋巴结。部分患者术后接受放射性碘，并按风险采用 TSH 抑制和长期随访；并非所有患者都需要放射性碘。', '放射性碘难治或进展性疾病可讨论靶向药。髓样癌不使用放射性碘，晚期可采用针对 RET 或多靶点药物。未分化癌常需要快速组合手术、放疗和系统治疗。'] },
      { heading: '就诊前可整理的资料', bullets: ['甲状腺和颈部淋巴结超声，注明结节大小和风险分级。', '细针穿刺 Bethesda 分类、手术病理和分子检测。', 'TSH、甲状腺球蛋白、抗体；髓样癌补充降钙素和 CEA。', '手术范围、放射性碘剂量和显像、甲状腺激素用药记录。', '声音变化、吞咽、呼吸症状和甲状腺癌家族史。'] },
    ],
    questions: ['病理属于哪一种甲状腺癌，风险分层和分期是什么？', '手术范围怎样确定，是否需要处理颈部淋巴结？', '是否需要放射性碘，判断依据和准备方式是什么？', '甲状腺球蛋白、降钙素或分子检测如何用于随访和治疗？', '甲状腺激素目标、钙水平和长期复查如何安排？'],
    sources: [
      { label: 'NCI：甲状腺癌治疗 PDQ（患者版）', url: 'https://www.cancer.gov/types/thyroid/patient/thyroid-treatment-pdq' },
      { label: 'NCI：甲状腺癌治疗 PDQ（专业版）', url: 'https://www.cancer.gov/types/thyroid/hp/thyroid-treatment-pdq' },
    ],
    updatedAt: '2026-07-21', readingTime: '约 8 分钟',
  },
  {
    slug: 'brain-tumor',
    eyebrow: '癌症知识 · 脑肿瘤',
    title: '脑肿瘤',
    summary: '发生于脑和中枢神经系统的肿瘤，可为良性或恶性，诊疗依据位置、病理和分子分型。',
    intro: '脑肿瘤包括原发于中枢神经系统的多种良性和恶性肿瘤，也要与其他癌症的脑转移区分。肿瘤位置、切除程度、病理和分子特征共同决定后续治疗。',
    category: '脑肿瘤',
    heroImage: { src: '/images/cancers/brain-tumor-anatomy.jpg', alt: '大脑、小脑、脑干与颅骨的三维解剖示意，大脑半球显示局限病灶' },
    secondaryImage: { src: '/images/cancers/brain-tumor-consultation.jpg', alt: '亚洲成年患者与一名家属在自然光诊室听医生讲解脑部磁共振影像' },
    sections: [
      { heading: '疾病概况和主要类型', paragraphs: ['成人原发性脑肿瘤包括胶质瘤、脑膜瘤、垂体肿瘤、神经鞘瘤和中枢神经系统淋巴瘤等。胶质瘤内部又包括星形细胞瘤、少突胶质细胞瘤和胶质母细胞瘤。即使病理为良性，关键部位的肿瘤也可能因压迫造成严重症状。', '其他部位癌症转移到脑内属于脑转移，治疗要结合原发癌种和全身疾病状态。病理报告应尽量采用整合诊断，同时写明组织学和关键分子结果。'] },
      { heading: '常见症状及需要及时就医的情况', paragraphs: ['持续或逐渐加重的头痛、晨起恶心呕吐、癫痫、肢体无力、感觉改变、语言或视力变化、平衡障碍、记忆和性格改变都可能出现。症状与病灶位置、大小、水肿和颅内压有关。'], bullets: ['首次癫痫、持续抽搐、意识下降或突发神经功能缺失，需要急诊处理。', '剧烈头痛伴反复呕吐、嗜睡或视力迅速变化，应尽快排查颅内压升高。', '正在使用激素或接受治疗时出现发热、进行性乏力或伤口问题，应及时联系医疗团队。'] },
      { heading: '常用检查、病理诊断和分期', paragraphs: ['增强脑 MRI 是最常用的结构影像，功能 MRI、弥散、灌注或波谱可在特定场景补充。确诊通常依赖手术切除或立体定向活检；急需减压时，手术兼具诊断和治疗作用。', '多数原发性脑肿瘤不使用传统 I 至 IV 期，而采用 WHO 分级、病理类型、分子分型和切除程度描述风险。术后早期 MRI 用于评估残留，随访影像需与放疗改变、假性进展和复发区分。'], imageAfter: true },
      { heading: '重要生物标志物', paragraphs: ['成人弥漫性胶质瘤常评估 IDH1/IDH2、1p/19q 共缺失、ATRX、TP53 等，整合结果决定具体分类。胶质母细胞瘤会关注 MGMT 启动子甲基化，因为它与烷化剂治疗反应讨论有关。', '中线胶质瘤可能检测 H3 K27 改变，其他肿瘤则按病理类型评估 BRAF、TERT、EGFR、CDKN2A/B 等。分子检测范围需要由神经病理和临床场景决定。'] },
      { heading: '不同阶段常见治疗方式', paragraphs: ['可切除病灶通常争取在保护神经功能前提下最大安全切除。后续可包括放疗、替莫唑胺等系统治疗或观察，取决于类型、分级、分子结果、年龄和残留。部分低级别或良性肿瘤可先观察。', '复发时可讨论再次手术、再放疗、系统治疗、肿瘤电场治疗或临床试验。激素用于减轻脑水肿，抗癫痫药用于有癫痫发作的人群，两者均需按症状和医生安排调整。'] },
      { heading: '就诊前可整理的资料', bullets: ['治疗前、术后早期和随访脑 MRI 原始影像及报告。', '手术记录、病理整合诊断、WHO 分级和分子检测。', '放疗计划摘要、系统治疗名称和周期。', '癫痫、神经功能、认知或性格变化的时间记录。', '激素和抗癫痫药的名称、剂量变化及相关症状。'] },
    ],
    questions: ['这是原发性脑肿瘤还是脑转移，整合病理诊断是什么？', 'IDH、1p/19q、MGMT 等分子结果是否完整？', '手术切除程度如何，哪些区域因功能风险未切除？', '后续放疗和系统治疗的目标、时间及评估标准是什么？', '哪些头痛、癫痫或神经功能变化需要立即就医？'],
    sources: [
      { label: 'NCI：成人中枢神经系统肿瘤治疗 PDQ（患者版）', url: 'https://www.cancer.gov/types/brain/patient/adult-brain-treatment-pdq' },
      { label: 'NCI：脑肿瘤患者信息', url: 'https://www.cancer.gov/types/brain' },
    ],
    updatedAt: '2026-07-21', readingTime: '约 8 分钟',
  },
  {
    slug: 'nasopharyngeal-carcinoma',
    eyebrow: '癌症知识 · 鼻咽癌',
    title: '鼻咽癌',
    summary: '发生于鼻咽部的恶性肿瘤，多数为鳞状细胞癌，诊疗依据病理、EB 病毒和分期影像。',
    intro: '鼻咽癌发生于鼻腔后方、咽部上端的鼻咽。病理类型、颈部淋巴结、颅底或神经侵犯、远处病灶和 EB 病毒相关结果共同构成治疗依据。',
    category: '鼻咽癌',
    heroImage: { src: '/images/cancers/nasopharyngeal-anatomy.jpg', alt: '鼻腔、鼻咽、口咽、颅底与颈部淋巴结的三维解剖示意，鼻咽后壁显示局限病灶' },
    secondaryImage: { src: '/images/cancers/nasopharyngeal-consultation.jpg', alt: '亚洲成年患者与一名家属在自然光诊室听医生讲解头颈部磁共振影像' },
    sections: [
      { heading: '疾病概况和主要类型', paragraphs: ['鼻咽癌多数为鳞状细胞癌，常见非角化型与 EB 病毒相关。它与鼻腔癌、口咽癌、喉癌等头颈部肿瘤在解剖、分期和治疗上不同。颈部淋巴结肿大有时是最先发现的表现。', '遗传背景、EB 病毒、吸烟和某些饮食暴露与风险有关。病理报告应明确取材部位和组织学类型，并结合 EB 病毒相关检测。'] },
      { heading: '常见症状及需要及时就医的情况', paragraphs: ['无痛性颈部肿块、单侧鼻塞或鼻出血、耳闷、听力下降、耳鸣、持续头痛、复视或面部麻木都可能出现。成人单侧中耳积液若持续存在，也需检查鼻咽。'], bullets: ['大量鼻出血、呼吸困难或吞咽明显受阻需要急诊评估。', '新发复视、眼睑下垂、面部麻木、剧烈头痛或其他颅神经症状应尽快就医。', '放化疗期间发热、严重口腔黏膜炎、无法进食饮水或颈部肿胀应及时联系团队。'] },
      { heading: '常用检查、病理诊断和分期', paragraphs: ['鼻咽镜可直接观察并取活检。头颈部增强 MRI 用于评估鼻咽、颅底、神经孔道和颈部淋巴结；CT 可补充骨结构，PET-CT 或胸腹部影像用于远处分期。听力、牙科、营养和吞咽评估常在放疗前完成。', 'TNM 分期关注原发肿瘤局部侵犯、颈部淋巴结大小与位置和远处转移。治疗计划需要精确勾画肿瘤及正常器官，因此应保留高质量影像和病理资料。'], imageAfter: true },
      { heading: '重要生物标志物', paragraphs: ['肿瘤组织中的 EBER 原位杂交可支持 EB 病毒相关鼻咽癌。血浆 EBV DNA 常用于基线风险评估和治疗后监测，但检测方法、单位和实验室之间可能不同，应连续使用可比较的方法。', '复发或转移性疾病还可能检测 PD-L1 或进行更广泛分子分析，但治疗选择仍需结合既往放疗、疾病范围和身体状态。'] },
      { heading: '不同阶段常见治疗方式', paragraphs: ['鼻咽位置深且邻近重要结构，放疗是局部治疗核心。早期疾病可采用放疗；局部进展期通常采用同步放化疗，并根据风险加入诱导或辅助化疗。调强放疗用于提高靶区覆盖并减少正常组织剂量。', '复发或转移性疾病可采用含铂化疗、免疫治疗和其他系统方案；局限复发在严格评估后可能讨论再放疗或手术。长期随访包括听力、吞咽、口腔、甲状腺和颅神经功能。'] },
      { heading: '就诊前可整理的资料', bullets: ['鼻咽镜和活检病理，包括 EBER 结果。', '头颈部 MRI、PET-CT 或其他分期影像。', '血浆 EBV DNA 的实验室、单位和时间线。', '放疗计划摘要、剂量范围、化疗或免疫治疗记录。', '听力、口腔、吞咽、体重和营养变化。'] },
    ],
    questions: ['病理和 EBER 是否支持鼻咽癌，当前 TNM 分期是什么？', 'MRI 是否显示颅底、颅神经或重要血管邻近受累？', '放疗范围和化疗顺序如何确定？', 'EBV DNA 如何用于基线和后续监测？', '治疗前后的听力、牙科、吞咽和甲状腺评估怎样安排？'],
    sources: [
      { label: 'NCI：成人鼻咽癌治疗 PDQ（患者版）', url: 'https://www.cancer.gov/types/head-and-neck/patient/adult/nasopharyngeal-treatment-pdq' },
      { label: 'NCI：成人鼻咽癌治疗 PDQ（专业版）', url: 'https://www.cancer.gov/types/head-and-neck/hp/adult/nasopharyngeal-treatment-pdq' },
    ],
    updatedAt: '2026-07-21', readingTime: '约 8 分钟',
  },
  {
    slug: 'cervical-cancer',
    eyebrow: '癌症知识 · 宫颈癌',
    title: '宫颈癌',
    summary: '发生于子宫颈的恶性肿瘤，多数与高危型 HPV 持续感染有关。',
    intro: '宫颈癌主要包括鳞状细胞癌和腺癌。病理、肿瘤大小、宫旁或邻近器官受累、淋巴结和远处病灶决定 FIGO 分期与治疗路径。',
    category: '宫颈癌',
    heroImage: { src: '/images/cancers/cervical-anatomy.jpg', alt: '子宫、子宫颈、阴道、膀胱与直肠的三维解剖示意，宫颈显示局限病灶' },
    secondaryImage: { src: '/images/cancers/cervical-consultation.jpg', alt: '亚洲成年女性患者与一名家属在自然光诊室听医生讲解盆腔影像与病理报告' },
    sections: [
      { heading: '疾病概况和主要类型', paragraphs: ['绝大多数宫颈癌与高危型 HPV 持续感染有关。鳞状细胞癌最常见，腺癌起源于宫颈腺体，少数为神经内分泌等特殊类型。HPV 感染很常见，多数可自行清除，只有持续感染和癌前病变未被发现或处理时才可能进展。', '筛查可通过 HPV 检测、宫颈细胞学和必要时阴道镜发现癌前病变。确诊浸润性宫颈癌后，重点转为病理确认和分期，而不是仅依赖筛查结果。'] },
      { heading: '常见症状及需要及时就医的情况', paragraphs: ['性交后出血、月经间出血、绝经后出血、水样或血性分泌物、盆腔痛和性交痛都需要检查。进展期可出现腰背痛、下肢肿胀、排尿或排便改变。'], bullets: ['大量阴道出血、头晕晕厥或心跳加快需要急诊评估。', '发热伴盆腔痛、恶臭分泌物或治疗后出血加重应尽快就医。', '新发单侧下肢肿痛、呼吸困难或尿量明显减少应及时评估。'] },
      { heading: '常用检查、病理诊断和分期', paragraphs: ['异常筛查结果通常通过阴道镜和活检评估。确诊后进行妇科检查，并根据阶段使用盆腔 MRI、CT、PET-CT、膀胱镜或直肠镜等评估局部和远处范围。病理需明确鳞癌、腺癌或特殊类型及分化程度。', 'FIGO 分期结合临床检查、影像和病理，描述肿瘤是否局限于宫颈、侵犯宫旁或盆壁、累及淋巴结或远处器官。育龄患者还需在治疗前记录生育计划。'], imageAfter: true },
      { heading: '重要生物标志物', paragraphs: ['HPV 检测用于筛查和部分随访，但确诊癌症后不能替代病理和分期。复发或转移性宫颈癌可能检测 PD-L1、MMR/MSI 或肿瘤突变负荷，以评估部分免疫治疗。', '特殊病理类型或标准治疗后进展时，可讨论更广泛的分子检测。检测结果需要结合具体药物获批条件和既往治疗解释。'] },
      { heading: '不同阶段常见治疗方式', paragraphs: ['极早期病变可采用锥切或手术；希望保留生育力的部分早期患者可讨论保留生育治疗。其他早期宫颈癌常采用根治性手术或放化疗，选择取决于肿瘤大小、淋巴结和预计术后风险。', '局部进展期通常以外照射、同步含铂化疗和近距离放疗组成根治性方案。复发或转移性疾病可使用化疗、抗血管生成治疗、免疫治疗或抗体药物偶联物等系统方案，并结合局部症状处理。'] },
      { heading: '就诊前可整理的资料', bullets: ['HPV、宫颈细胞学、阴道镜、活检和锥切或手术病理。', '盆腔 MRI、CT、PET-CT 与淋巴结评估。', 'PD-L1、MMR/MSI 及其他适用的分子检测。', '手术、外照射、近距离放疗和系统治疗记录。', '出血、疼痛、排尿排便、月经和生育计划。'] },
    ],
    questions: ['病理类型和 FIGO 分期是什么，淋巴结是否受累？', '手术与根治性放化疗各自的适用条件是什么？', '近距离放疗在方案中的作用和时间如何安排？', '是否需要 PD-L1、MMR/MSI 或其他分子检测？', '治疗对卵巢功能、生育、膀胱、肠道和性生活有何影响？'],
    sources: [
      { label: 'NCI：宫颈癌治疗 PDQ（患者版）', url: 'https://www.cancer.gov/types/cervical/patient/cervical-treatment-pdq' },
      { label: 'WHO：宫颈癌事实资料', url: 'https://www.who.int/news-room/fact-sheets/detail/cervical-cancer' },
    ],
    updatedAt: '2026-07-21', readingTime: '约 8 分钟',
  },
  {
    slug: 'endometrial-cancer',
    eyebrow: '癌症知识 · 子宫内膜癌',
    title: '子宫内膜癌',
    summary: '发生于子宫内膜的恶性肿瘤，治疗依据病理类型、分期和分子分型。',
    intro: '子宫内膜癌多数以异常子宫出血发现。病理类型、分级、肌层浸润、淋巴血管侵犯、淋巴结和 MMR、p53、POLE 等分子结果共同影响风险分层。',
    category: '子宫内膜癌',
    heroImage: { src: '/images/cancers/endometrial-anatomy.jpg', alt: '子宫、子宫内膜、卵巢、宫颈与盆腔结构的三维解剖示意，子宫内膜显示局限病灶' },
    secondaryImage: { src: '/images/cancers/endometrial-consultation.jpg', alt: '亚洲成年女性患者与一名家属在自然光诊室听医生讲解子宫和盆腔影像' },
    sections: [
      { heading: '疾病概况和主要类型', paragraphs: ['子宫内膜样癌最常见，此外还有浆液性癌、透明细胞癌、癌肉瘤等较高风险类型。病理分级、肌层浸润、宫颈或附件受累及淋巴血管侵犯用于估计复发风险。', '肥胖、长期无排卵、糖尿病、未受拮抗的雌激素暴露和 Lynch 综合征会增加风险。子宫内膜癌与子宫肉瘤不是同一种疾病。'] },
      { heading: '常见症状及需要及时就医的情况', paragraphs: ['绝经后任何阴道出血都需要评估。未绝经人群若出现经量明显增加、经期延长、月经间出血或持续水样分泌物，也应进行妇科检查。进展期可出现盆腔痛、腹胀、体重下降或排尿排便改变。'], bullets: ['大量阴道出血、头晕晕厥或心跳加快需要急诊评估。', '持续盆腔痛伴发热、恶臭分泌物或术后伤口问题应尽快就医。', '新发下肢肿痛、呼吸困难或胸痛需排查血栓。'] },
      { heading: '常用检查、病理诊断和分期', paragraphs: ['经阴道超声可观察子宫内膜厚度和宫腔情况，但确诊依赖内膜活检、宫腔镜取样或诊刮病理。盆腔 MRI 可评估肌层和宫颈浸润，CT 或 PET-CT 用于较高风险或疑似转移病例。', 'FIGO 分期通常在手术和病理后确定，记录子宫肌层浸润、宫颈间质、附件、淋巴结和远处病灶。病理复核对高级别或特殊类型尤其重要。'], imageAfter: true },
      { heading: '重要生物标志物', paragraphs: ['MMR 蛋白或 MSI 检测常用于识别 dMMR/MSI-H 肿瘤，并筛查可能的 Lynch 综合征。现代分子分型还关注 POLE 变异、p53 异常和无特异分子特征组，这些结果可补充传统病理风险分层。', '复发或晚期疾病还可能评估 ER、PR 和 HER2，特别是在浆液性癌等特定病理中。分子结果会影响免疫、靶向或内分泌治疗讨论。'] },
      { heading: '不同阶段常见治疗方式', paragraphs: ['多数早期患者以全子宫、双侧输卵管卵巢切除和适当的淋巴结评估为主。术后是否需要阴道近距离放疗、盆腔放疗或化疗，取决于分期、病理、分子分型和复发风险。', '希望保留生育力的少数早期、低级别子宫内膜样癌患者，可在严格条件和密切监测下讨论孕激素治疗。复发或转移性疾病可采用化疗、免疫治疗、靶向治疗和内分泌治疗。'] },
      { heading: '就诊前可整理的资料', bullets: ['经阴道超声、宫腔镜、内膜活检和手术病理。', '盆腔 MRI、CT、PET-CT 和淋巴结评估。', 'MMR/MSI、POLE、p53、ER/PR、HER2 等适用结果。', '手术范围、放疗部位和系统治疗记录。', '出血时间线、绝经状态、生育计划和家族肿瘤史。'] },
    ],
    questions: ['病理类型、分级、FIGO 分期和复发风险是什么？', 'MMR/MSI、POLE 和 p53 等分子分型是否完整？', '手术和淋巴结评估范围如何确定？', '术后放疗、化疗或观察的依据是什么？', '是否需要遗传咨询或保留生育力的专门评估？'],
    sources: [
      { label: 'NCI：子宫内膜癌治疗 PDQ（患者版）', url: 'https://www.cancer.gov/types/uterine/patient/endometrial-treatment-pdq' },
      { label: 'NCI：子宫内膜癌治疗 PDQ（专业版）', url: 'https://www.cancer.gov/types/uterine/hp/endometrial-treatment-pdq' },
    ],
    updatedAt: '2026-07-21', readingTime: '约 8 分钟',
  },
  {
    slug: 'pancreatic-cancer',
    eyebrow: '癌症知识 · 胰腺癌',
    title: '胰腺癌',
    summary: '发生于胰腺的恶性肿瘤，多数为胰腺导管腺癌，治疗首先评估可切除性。',
    intro: '胰腺癌包括外分泌肿瘤和神经内分泌肿瘤，其中胰腺导管腺癌最常见。肿瘤与主要血管的关系、是否转移、身体和营养状态决定主要治疗路径。',
    category: '胰腺癌',
    heroImage: { src: '/images/cancers/pancreatic-anatomy.jpg', alt: '胰腺、十二指肠、胆管、胃、肝脏与主要血管的三维解剖示意，胰头显示局限病灶' },
    secondaryImage: { src: '/images/cancers/pancreatic-consultation.jpg', alt: '亚洲成年患者与一名家属在自然光诊室听医生讲解胰腺影像与病理报告' },
    sections: [
      { heading: '疾病概况和主要类型', paragraphs: ['胰腺导管腺癌起源于外分泌系统，占胰腺恶性肿瘤多数。胰腺神经内分泌肿瘤较少见，分级、激素功能和治疗方式与导管腺癌不同。肿瘤位于胰头时较早造成胆道梗阻，胰体尾部病灶可能较晚出现症状。', '家族史、吸烟、慢性胰腺炎、肥胖、糖尿病和 BRCA1、BRCA2、PALB2、ATM 等遗传改变与风险有关，但多数患者没有明确遗传原因。'] },
      { heading: '常见症状及需要及时就医的情况', paragraphs: ['黄疸、尿色加深、灰白便、皮肤瘙痒、上腹或背部疼痛、食欲下降、体重减轻、脂肪便、乏力和新发或突然加重的糖尿病都可能出现。症状不能单独确诊。'], bullets: ['黄疸伴发热、寒战或右上腹痛，需急诊排查胆管感染。', '持续呕吐、无法进食饮水、明显脱水或剧烈腹背痛应尽快就医。', '新发单侧下肢肿痛、胸痛或呼吸困难需排查血栓。'] },
      { heading: '常用检查、病理诊断和分期', paragraphs: ['胰腺协议增强 CT 常用于诊断和评估肿瘤与肠系膜上血管、门静脉等结构的关系。MRI/MRCP、超声内镜和 PET-CT 在特定场景补充。超声内镜引导穿刺常用于取得组织，特别是在系统治疗前。', '临床上常按可切除、临界可切除、局部晚期不可切除和转移性分组。CA19-9 可用于基线和随访，但胆道梗阻会使其升高，部分人也不产生这一标志物，不能单独诊断或判断疗效。'], imageAfter: true },
      { heading: '重要生物标志物', paragraphs: ['胰腺导管腺癌常讨论胚系遗传检测，尤其关注 BRCA1、BRCA2、PALB2、ATM 等。BRCA1/2 或 PALB2 相关同源重组修复缺陷可能影响含铂治疗和部分维持治疗讨论。', '晚期疾病可进行肿瘤分子检测，评估 MSI-H/dMMR、NTRK 融合、BRAF、KRAS G12C、HER2 等较少见但可能可治疗的改变。样本量不足时，可讨论重复取样或液体活检的局限。'] },
      { heading: '不同阶段常见治疗方式', paragraphs: ['可切除疾病以手术为核心，胰头肿瘤常采用胰十二指肠切除，胰体尾部肿瘤可采用远端胰切除。术前或术后系统治疗取决于可切除性、风险和恢复情况。临界可切除或局部晚期疾病常先用化疗，部分患者再接受放疗或重新评估手术。', '转移性疾病以系统治疗和症状控制为主。胆道梗阻可能需要支架，胰腺外分泌不足可使用胰酶替代，疼痛、血糖、营养和血栓风险需要同步管理。'] },
      { heading: '就诊前可整理的资料', bullets: ['胰腺协议 CT、MRI/MRCP、超声内镜和其他分期影像。', '活检或手术病理，注明导管腺癌或神经内分泌肿瘤。', 'CA19-9、胆红素、肝功能、血糖和体重变化。', '胚系遗传及肿瘤分子检测报告。', '胆道支架、手术、化疗、放疗、疼痛和胰酶使用记录。'] },
    ],
    questions: ['病理类型和可切除性分组是什么，主要血管是否受累？', '是否需要先进行系统治疗，再评估手术？', '胚系遗传和肿瘤分子检测是否已经完成？', '胆道梗阻、疼痛、血糖和胰腺外分泌不足如何处理？', '复查影像和 CA19-9 应怎样结合判断治疗反应？'],
    sources: [
      { label: 'NCI：胰腺癌治疗 PDQ（患者版）', url: 'https://www.cancer.gov/types/pancreatic/patient/pancreatic-treatment-pdq' },
      { label: 'NCI：胰腺癌治疗 PDQ（专业版）', url: 'https://www.cancer.gov/types/pancreatic/hp/pancreatic-treatment-pdq' },
    ],
    updatedAt: '2026-07-21', readingTime: '约 8 分钟',
  },
];
