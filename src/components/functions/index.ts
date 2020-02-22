import { CategoryType } from '../../types';

/**
 * gcategoryType은 astsby-node.js에서 전달받는 data라 enum이 아닌 string으로 넘어옴
 */
export function getTitleByCategoryType(categoryType: string, label: string) {
  if (categoryType === CategoryType[CategoryType.TAGS]) {
    return `'${label}' Tag로 찾은 목록`;
  }
  if (categoryType === CategoryType[CategoryType.SERIES]) {
    return `'${label}' 시리즈로 찾은 목록`;
  }
}
