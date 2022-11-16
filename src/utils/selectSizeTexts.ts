import {DefaultTheme} from 'styled-components/native';

export type SizesTitleType = 'large';

export function SelectSizeTitle(params: SizesTitleType, theme: DefaultTheme) {
  const sizes = {
    large: theme.screen?.rem(1.35),
  };

  return sizes[params] || theme.screen?.rem(1.1);
}

type SelectedSizeFactoryType<T> = {
  sizes: T;
  size: keyof T;
  defaultSize?: number;
};

export function SelectedSizeFactory<T>({
  sizes,
  size,
  defaultSize,
}: SelectedSizeFactoryType<T>) {
  return sizes[size] || defaultSize!;
}
