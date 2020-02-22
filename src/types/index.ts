export enum CategoryType {
  TAGS,
  SERIES
}

export enum Theme {
  Life,
  Developer,
  CivicHacker
}

export const THEME_LABEL: Array<{ KR: string; EN: string }> = [];
THEME_LABEL[Theme.Life] = {
  KR: '일상',
  EN: 'Life'
};
THEME_LABEL[Theme.Developer] = {
  KR: '개발',
  EN: 'Developer'
};
THEME_LABEL[Theme.CivicHacker] = {
  KR: '시빅해킹',
  EN: 'CivicHacker'
};
