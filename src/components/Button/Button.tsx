import {ReactNode} from 'react';

import {theme} from '@/themes/themes';
import {ButtonContainer, Label, IconContainer, SizesType} from './Button.style';

type ButtonProps = {
  children: ReactNode;
  colors?: keyof typeof theme.colors;
  textColor?: keyof typeof theme.colors;
  iconRight?: ReactNode;
  disabledBoldText?: boolean;
  size?: keyof SizesType;
};

export function Button({
  children,
  colors,
  iconRight,
  textColor,
  disabledBoldText,
  size,
}: ButtonProps) {
  return (
    <ButtonContainer
      size={size!}
      colors={colors || 'main'}
      style={({pressed}) => [{opacity: pressed ? 0.7 : 1}]}>
      <Label
        disabledBoldText={disabledBoldText}
        colorTexts={textColor || 'white'}>
        {children}
      </Label>
      {iconRight && <IconContainer>{iconRight}</IconContainer>}
    </ButtonContainer>
  );
}
