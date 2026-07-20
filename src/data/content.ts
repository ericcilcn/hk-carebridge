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

export const drugArticles: Article[] = [
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
      { label: '通用名', value: '帕博利珠单抗' },
      { label: '英文名', value: 'Pembrolizumab' },
      { label: '商品名', value: 'KEYTRUDA' },
      { label: '药厂', value: '默沙东（Merck Sharp & Dohme）' },
      { label: '药物类型', value: 'PD-1 免疫检查点抑制剂' },
      { label: '剂型与图示规格', value: '静脉注射用溶液；100 mg/4 mL' },
      { label: '给药途径', value: '静脉输注' },
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
      { label: '通用名', value: '奥希替尼' },
      { label: '英文名', value: 'Osimertinib' },
      { label: '商品名', value: 'TAGRISSO' },
      { label: '药厂', value: '阿斯利康（AstraZeneca）' },
      { label: '药物类型', value: '第三代 EGFR 酪氨酸激酶抑制剂' },
      { label: '剂型与图示规格', value: '口服片剂；80 mg' },
      { label: '给药途径', value: '口服' },
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
    title: '安道生（Endoxan）与环磷酰胺',
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
      { label: '通用名', value: '环磷酰胺' },
      { label: '英文名', value: 'Cyclophosphamide' },
      { label: '商品名', value: 'Endoxan（安道生）' },
      { label: '药厂', value: '百特（Baxter；图示包装）' },
      { label: '药物类型', value: '烷化剂类前药' },
      { label: '剂型与图示规格', value: '口服及静脉剂型；图示为 50 mg 片剂' },
      { label: '给药途径', value: '口服或静脉给药，依制剂与方案确定' },
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
      { label: '通用名', value: '他莫昔芬' },
      { label: '英文名', value: 'Tamoxifen' },
      { label: '商品名', value: 'NOLVADEX' },
      { label: '药厂', value: '阿斯利康（AstraZeneca；图示包装）' },
      { label: '药物类型', value: '选择性雌激素受体调节剂（SERM）' },
      { label: '剂型与图示规格', value: '口服片剂；图示为 20 mg' },
      { label: '给药途径', value: '口服' },
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
    title: '阿那曲唑（Arimidex）',
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
      { label: '通用名', value: '阿那曲唑' },
      { label: '英文名', value: 'Anastrozole' },
      { label: '商品名', value: 'Arimidex（瑞宁得）' },
      { label: '药厂', value: '阿斯利康（AstraZeneca；图示包装）' },
      { label: '药物类型', value: '非甾体芳香化酶抑制剂' },
      { label: '剂型与图示规格', value: '口服片剂；1 mg' },
      { label: '给药途径', value: '口服' },
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
      { label: '通用名', value: '卡帕塞替尼' },
      { label: '英文名', value: 'Capivasertib' },
      { label: '商品名', value: 'TRUQAP' },
      { label: '药厂', value: '阿斯利康（AstraZeneca）' },
      { label: '药物类型', value: 'AKT1、AKT2 和 AKT3 抑制剂' },
      { label: '剂型与图示规格', value: '口服薄膜衣片；图示为 200 mg' },
      { label: '给药途径', value: '口服，采用间歇给药安排' },
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
      { label: '通用名', value: '佐妥昔单抗' },
      { label: '英文名', value: 'Zolbetuximab' },
      { label: '商品名', value: 'VYLOY（威络益）' },
      { label: '药厂', value: '安斯泰来（Astellas）' },
      { label: '药物类型', value: '靶向 CLDN18.2 的嵌合 IgG1 单克隆抗体' },
      { label: '剂型与图示规格', value: '注射用冻干粉末；100 mg/瓶' },
      { label: '给药途径', value: '复溶并稀释后静脉输注' },
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
];
