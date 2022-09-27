import {ReactNode} from 'react';
import {Pressable, PressableProps} from 'react-native';

type CleanButtonProps = PressableProps & {
  children: ReactNode;
};

export function CleanButton({children, ...rest}: CleanButtonProps) {
  return (
    <Pressable
      style={({pressed}) => [
        {
          opacity: pressed ? 0.7 : 1,
        },
      ]}
      {...rest}>
      {children}
    </Pressable>
  );
}
