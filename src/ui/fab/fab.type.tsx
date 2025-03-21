import { TouchableHighlightProps as RNButtonProps } from 'react-native';
import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
} from '../../theme';

export interface FabProps
  extends RNButtonProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType {
  h?: number;
  w?: number;
  bg?: string;
  position?: 'absolute' | 'relative';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  flexDir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  top?: number;
  flex?: number;
  left?: number;
  right?: number;
  bottom?: number;
  color?: string;
  loading?: boolean;
  disabled?: boolean;
  loaderColor?: string;
  minW?: number | string;
  minH?: number | string;
  fontSize?: string;
  loaderSize?: number | string;
  block?: boolean;
  shadow?: number;
  borderless?: boolean;
  rippleColor?: string;
  shadowColor?: string;
  center?: boolean;
  ripple?: boolean;
  icon: string | React.ReactNode;
  activeIcon: string | React.ReactNode;
  showBackground?: boolean;
  openOnMount?: boolean;
  onClose?: () => void;
  onPressBackdrop?: () => void;
  animated?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  onOpen?: () => void;
  useNativeDriver?: boolean;
  children?: React.ReactElement[] | React.ReactElement;
}
