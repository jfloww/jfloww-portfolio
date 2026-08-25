import type { SupportedLocale } from '@/app/lib/i18n';
import type { ContentMeta } from './schema';

const PROJECT_DESCRIPTIONS: Record<SupportedLocale, Record<string, string>> = {
  en: {
    'personal-finance-copilot': 'A personal project for learning FastAPI, PostgreSQL, and LLM evaluation while studying real spending patterns.',
    'picking-up': 'A task and routine planner built around atomic commands, versioned writes, and optimistic reconciliation.',
    'jfloww-project': 'A bilingual MDX portfolio with static content routes and a responsive continuous-surface layout.',
    '2022-qatar-world-cup': 'A notebook project that estimates World Cup results from historical matches and FIFA ranking data.',
  },
  ko: {
    'personal-finance-copilot': 'FastAPI, PostgreSQL, LLM evaluation을 공부하며 실제 거래 내역으로 소비 패턴을 살펴본 개인 프로젝트입니다.',
    'picking-up': 'Atomic command, versioned write, optimistic reconciliation을 적용한 task·routine planner입니다.',
    'jfloww-project': '정적 content route와 반응형 continuous-surface layout을 적용한 한·영 MDX 포트폴리오입니다.',
    '2022-qatar-world-cup': '과거 경기 결과와 FIFA 랭킹 데이터로 월드컵 결과를 예측한 노트북 프로젝트입니다.',
  },
};

const POST_SUMMARIES: Record<SupportedLocale, Record<string, string>> = {
  en: {
    'jfloww-portfolio': 'Content loading, localization, MDX rendering, and the continuous-surface UI refactor.',
    'personal-finance-copilot-log4': 'Comparing keyword rules with Claude on labelled spending data and improving the prompt without tuning on the benchmark.',
    'personal-finance-copilot-log3': 'Real bank imports, explicit data identity, and a guarded rules/LLM evaluation path.',
    'personal-finance-copilot-log2': 'The deterministic comparison engine, solvers, derivations, API, and first deployment.',
    'personal-finance-copilot-log1': 'The initial scope and architecture for an auditable relocation and offer decision engine.',
    'picking-up-log6': 'A manual production deployment flow across Vercel, Cloud Run, and Neon.',
    'picking-up-log5': 'Backend refinement across transactions, validation, authentication, and CI.',
    'picking-up-log4': 'How Bucket List and task mutations changed from the initial plan.',
    'picking-up-log3': 'Task sync, Monthly, and Google login.',
    'picking-up-log2': 'Daily and Weekly scheduling, routines, and task details.',
    'picking-up-log1': 'Authentication and the first task calendar structure.',
    'picking-up-overview': 'The current product, architecture, responsive experience, and the reasons it changed from the first plan.',
    'trippinmap-log1': 'The first planning and implementation notes for TripPinMap.',
    'trippinmap-overview': 'An overview of the TripPinMap product idea and its early direction.',
  },
  ko: {
    'jfloww-portfolio': 'Content loader, localization, MDX rendering, continuous-surface UI를 정리한 기록.',
    'personal-finance-copilot-log4': 'Labelled spending data에서 keyword rules와 Claude를 비교하고 prompt를 개선한 기록.',
    'personal-finance-copilot-log3': '실제 bank export, 명시적인 data identity, 안전한 rules/LLM evaluation 작업.',
    'personal-finance-copilot-log2': 'Deterministic comparison engine, solver, derivation, API와 첫 배포 작업.',
    'personal-finance-copilot-log1': '감사 가능한 relocation·offer decision engine의 초기 범위와 architecture.',
    'picking-up-log6': 'Vercel, Cloud Run, Neon으로 정리한 수동 프로덕션 배포 기록.',
    'picking-up-log5': 'Transaction, domain validation, authentication, CI를 다시 점검한 backend refining 기록.',
    'picking-up-log4': 'Bucket List와 task mutation이 최초 계획에서 달라진 과정.',
    'picking-up-log3': '할 일 동기화, Monthly, Google 로그인 작업.',
    'picking-up-log2': 'Daily·Weekly 일정, 루틴, 할 일 상세 작업.',
    'picking-up-log1': '인증과 첫 할 일 캘린더 구조 작업.',
    'picking-up-overview': 'Picking Up의 현재 제품과 구조, 모바일 경험, 최초 계획에서 달라진 이유를 정리한 글입니다.',
    'trippinmap-log1': 'TripPinMap의 첫 기획과 구현 기록입니다.',
    'trippinmap-overview': 'TripPinMap 아이디어와 초기 방향을 정리한 글입니다.',
  },
};

export function getProjectDescription(project: ContentMeta, locale: SupportedLocale) {
  return PROJECT_DESCRIPTIONS[locale][project.id] ?? project.techStack ?? '';
}

export function getPostSummary(post: ContentMeta, locale: SupportedLocale) {
  return POST_SUMMARIES[locale][post.id] ?? post.techStack ?? '';
}
