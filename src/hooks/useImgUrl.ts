import uuid from 'react-native-uuid';
import {imagesUrl} from '@/common/img';

const highlights = imagesUrl.highligh_banners.map((imgs, _, arr) => {
  if (arr.length <= 6) {
    return {
      id: String(uuid.v4()),
      url: imgs,
    };
  }
});

const categories = imagesUrl.category.map(imgs => {
  return {
    id: String(uuid.v4()),
    url: imgs,
  };
});

export function useImageUrl() {
  return {
    highlights,
    categories,
  };
}
