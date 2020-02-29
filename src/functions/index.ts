import { CategoryType } from '../types';

/**
 * categoryType에 따라 postList의 제목을 반환한다.
 */
export function getTitleByCategoryType(categoryType: any, label: string) {
  // categoryType은 astsby-node.js에서 전달받는 data라 enum이 아닌 string으로 넘어오므로 변환 필요.
  categoryType = getCategoryTypeFromSring(categoryType);

  if (categoryType === CategoryType.TAGS) {
    return `'${label}' Tag로 찾은 목록`;
  }
  if (categoryType === CategoryType.SERIES) {
    return `'${label}' 시리즈로 찾은 목록`;
  }
}

/**
 * categoryType이 string으로 올 경우 ENUM으로 바꿔준다.
 */
export function getCategoryTypeFromSring(categoryType: string): CategoryType {
  if (categoryType === CategoryType[CategoryType.TAGS]) {
    return CategoryType.TAGS;
  }
  if (categoryType === CategoryType[CategoryType.SERIES]) {
    return CategoryType.SERIES;
  }
  return null as any;
}
