/**
 * 한국영상대학교 영상자율전공학과 입학 홍보
 * 소스: 자율전공리플렛,팜플렛_424_301_2_양면(완OL).pdf
 */

export const siteConfig = {
  brand: "영상자율전공학과",
  school: "한국영상대학교",
  yearLabel: "2027",
  englishTitle: "AUTONOMOUS MAJOR IN MEDIA ARTS",
  tagline: "너의 미래를 자유롭게 그려봐!",
  description:
    "입학 후 전공학과 선택과 교과목 설계가 자유로운 3년제. 1학년 1학기를 탐색한 뒤, 희망 학과로 배치됩니다.",
  slogan: "스무살의 프로!",
  phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "044-850-9031~4",
  phoneTel: "0448509031",
  deptPhone: "044-850-9410 / 044-850-9414",
  deptPhoneTel: "0448509410",
  address:
    process.env.NEXT_PUBLIC_ADDRESS ??
    "세종특별자치시 장군면 대학길 300",
  postalCode: "30056",
  admissionsUrl:
    process.env.NEXT_PUBLIC_ADMISSIONS_URL ?? "https://ipsi.pro.ac.kr",
  applyUrl: process.env.NEXT_PUBLIC_APPLY_URL ?? "https://ipsi.pro.ac.kr",
  kakaoOpenChatUrl:
    process.env.NEXT_PUBLIC_KAKAO_OPENCHAT_URL ??
    "https://open.kakao.com/o/gH4QtsRh",
};

export const heroStats = [
  { label: "전형 방법", value: 100, suffix: "%", note: "교과 학생부 전형" },
  { label: "수업 연한", value: 3, suffix: "년제", note: "자유로운 전공 설계" },
  { label: "학과 변경", value: 2, suffix: "회", note: "유일한 학과 변경 기회" },
];

export const marqueeItems = [
  "교과 100%",
  "면접 없음",
  "실기 없음",
  "1학년 1학기 탐색",
  "희망 학과 배치",
  "친해지길바라",
  "새내기 연합 콘텐츠 동아리",
  "소솜제",
  "해단식",
  "진로설계",
  "영상직무의 이해",
];

export const deptIntro = {
  title: "영상자율전공학과는?",
  eyebrow: "자유로운 수업 설계로 전공을 결정하는 3년제",
  body: "영상자율전공학과는 입학 시기에 세부 전공을 정하지 않고 1학년 1학기 이수 후 학생이 희망하는 전공학과로 배치되는 학과입니다. 자유로운 분위기의 학과로 대학생활 적응을 도우며, 자기주도적인 수업 설계를 통해 진정한 진로를 찾을 수 있는 학과입니다.",
  admissionNote: "100% 교과 학생부 전형 (5학기 중 가장 우수한 2학기 반영)",
};

export const onlyPoints = [
  {
    title: "2번의 학과 변경이 가능한 유일한 학과!",
    note: "1학년 1학기 이수 후 학과배치, 희망 시 1학년 2학기 전과 가능",
  },
  {
    title: "원하는 학과, 원하는 수업을 자유롭게 설계할 수 있는 유일한 학과",
    note: "탐색 학기를 거친 뒤 나에게 맞는 전공을 고릅니다.",
  },
];

export const placementMajors = [
  "영상연출학과",
  "영상촬영조명학과",
  "영상편집제작학과",
  "음향제작학과",
  "영화영상학과",
  "영상디자인학과",
  "방송영상미디어학과",
];

export const curriculumSteps = [
  {
    step: "Step 1",
    term: "1학년 1학기",
    title: "탐색과 설계",
    body: "영상자율전공학과 과목 수강: 진로설계, 영상직무의 이해",
    extra: "다양한 직무 탐색 + 관심 학과 수업 일부 선택 가능",
  },
  {
    step: "Step 2",
    term: "1학년 2학기",
    title: "희망 학과로 배치",
    body: "본격적인 전공 심화 수업 시작",
    extra: placementMajors.join(", "),
  },
];

export const specials = [
  {
    no: "1",
    title: "친해지길바라",
    body: "타 학과 학생들과 교류하는 ‘친해지길바라’ 프로그램은 배치학과 선택 후 학과 적응에 도움이 됩니다.",
  },
  {
    no: "2",
    title: "새내기 연합 콘텐츠 동아리",
    body: "다양한 학과 학생들과 콘텐츠를 제작하는 프로그램. 여러 학과의 1학년들이 원하는 콘텐츠를 제작함으로 폭넓은 대인관계 형성과 직무능력향상을 돕습니다.",
  },
  {
    no: "3",
    title: "대학생활과 진로 선택, 성장 기반을 제공하는 밀착 지도",
    body: "학생 맞춤 밀착 지도로 교수자와 학생의 친밀감 형성, 개인 맞춤형 상담 수업 및 수업설계 지도. 배치 후에도 지속적인 후속 상담을 진행합니다.",
  },
  {
    no: "4",
    title: "한 학기, 찰나의 소중함을 기억하는 ‘소솜제 + 해단식’",
    body: "한 학기 과제물을 서로 공유하며 교류와 소통의 시간. 해단식을 통해 자율전공 학기를 마무리합니다.",
  },
];

export const awards = [
  "2021년 전문대학 마이스터대 시범운영 대학 선정",
  "2020년 전문대학 혁신지원사업 자율협약형 연차평가 ‘A’등급 획득",
  "제 2주기 전문대학기관평가 인증",
  "대학기본역량진단 자율개선대학 선정",
  "2020년 파란사다리 대학 선정",
  "2020년 세종학당 선정(전문대학 중 유일)",
  "WCC 세계적 수준의 전문대학 선정",
  "교육국제화역량 인증대학 선정",
  "정부초청 외국인 장학생 수학대학(GKS) 선정",
  "2020년 후진학 선도전문대학 선정",
  "LINC+사회맞춤형 산학협력 선도전문대학 육성사업 선정",
  "실감형콘텐츠 전문인력 양성 하이브 사업 선정",
  "LINC+3.0 수요맞춤성장형 선정",
];

export const quickLinks = [
  {
    id: "ipsi",
    label: "입시 홈페이지",
    hint: "ipsi.pro.ac.kr",
    url: "https://ipsi.pro.ac.kr",
    tone: "rose" as const,
  },
  {
    id: "apply",
    label: "원서 접수",
    hint: "2027 신입생 모집",
    url: "https://ipsi.pro.ac.kr",
    tone: "sky" as const,
  },
  {
    id: "kakao",
    label: "카카오톡 입시상담",
    hint: "오픈채팅 바로 열기",
    url: "https://open.kakao.com/o/gH4QtsRh",
    tone: "mint" as const,
  },
];

export const campusPhotos = [
  { src: "/assets/life-01.png", alt: "친해지길바라 · 새내기 교류 현장" },
  { src: "/assets/life-set.png", alt: "학과 캐릭터" },
];
