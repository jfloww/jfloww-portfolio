import type { SupportedLocale } from '@/app/lib/i18n';
import type { ContentMeta } from './schema';

const PROJECT_DESCRIPTIONS: Record<SupportedLocale, Record<string, string>> = {
  en: {
    'picking-up': 'A task and routine planner built around atomic commands, versioned writes, and optimistic reconciliation.',
    'jfloww-project': 'A bilingual MDX portfolio with static content routes and a responsive continuous-surface layout.',
    '2022-qatar-world-cup': 'A notebook project that estimates World Cup results from historical matches and FIFA ranking data.',
  },
  ko: {
    'picking-up': 'Atomic command, versioned write, optimistic reconciliation을 적용한 task·routine planner입니다.',
    'jfloww-project': '정적 content route와 반응형 continuous-surface layout을 적용한 한·영 MDX 포트폴리오입니다.',
    '2022-qatar-world-cup': '과거 경기 결과와 FIFA 랭킹 데이터로 월드컵 결과를 예측한 노트북 프로젝트입니다.',
  },
};

const POST_SUMMARIES: Record<SupportedLocale, Record<string, string>> = {
  en: {
    'jfloww-portfolio': 'Content loading, localization, MDX rendering, and the continuous-surface UI refactor.',
    'picking-up-log5': 'Backend refinement across transactions, validation, authentication, and CI.',
    'picking-up-log4': 'How Bucket List and task mutations changed from the initial plan.',
    'picking-up-log3': 'Task sync, Monthly, and Google login.',
    'picking-up-log2': 'Daily and Weekly scheduling, routines, and task details.',
    'picking-up-log1': 'Authentication and the first task calendar structure.',
    'picking-up-overview': 'The product goal, initial scope, and planning notes for Picking Up.',
    'trippinmap-log1': 'The first planning and implementation notes for TripPinMap.',
    'trippinmap-overview': 'An overview of the TripPinMap product idea and its early direction.',
  },
  ko: {
    'jfloww-portfolio': 'Content loader, localization, MDX rendering, continuous-surface UI를 정리한 기록.',
    'picking-up-log5': 'Transaction, domain validation, authentication, CI를 다시 점검한 backend refining 기록.',
    'picking-up-log4': 'Bucket List와 task mutation이 최초 계획에서 달라진 과정.',
    'picking-up-log3': '할 일 동기화, Monthly, Google 로그인 작업.',
    'picking-up-log2': 'Daily·Weekly 일정, 루틴, 할 일 상세 작업.',
    'picking-up-log1': '인증과 첫 할 일 캘린더 구조 작업.',
    'picking-up-overview': 'Picking Up의 목적, 초기 범위, 기획을 정리한 글입니다.',
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
