import * as React from 'react';
import { useContext } from 'react';
import color from 'color';
import {
  Animated as RNAnimated,
  Text as RNText,
  View as RNView,
  Platform as RNPlatform,
  TouchableHighlight as RNButton,
  ActivityIndicator as RNActivityIndicator,
  TouchableNativeFeedback as RNTouchableNativeFeedback,
} from 'react-native';

import { getStyle } from './button.style';
import { ThemeContext } from '../../theme';
import { ButtonProps } from './button.type';
import { getThemeProperty } from '../../theme/theme.service';

const ANDROID_VERSION_PIE = 28;
const ANDROID_VERSION_LOLLIPOP = 21;
const canSupportRipple =
  RNPlatform.OS === 'android' && RNPlatform.Version >= ANDROID_VERSION_LOLLIPOP;

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const {
    m,
    mt,
    mr,
    mb,
    ml,
    ms,
    p,
    pr,
    pt,
    pb,
    pl,
    h,
    w,
    bg,
    minW,
    minH,
    suffix,
    style,
    fontSize,
    fontWeight,
    prefix,
    rounded,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    color: colorProp,
    loading,
    disabled,
    loaderColor,
    loaderSize,
    children,
    borderColor,
    borderBottomColor,
    borderLeftColor,
    borderTopColor,
    borderRightColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderBottomWidth,
    borderTopWidth,
    borderEndWidth,
    shadow,
    borderless,
    rippleColor,
    shadowColor,
    onPress,
    block,
    ripple,
    alignSelf,
    ...rest
  } = props;

  const { theme } = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);
  const underlayColor = getThemeProperty(
    theme.colors,
    props.underlayColor,
    color(getThemeProperty(theme.colors, props.bg, '#e1e1e1'))
      .darken(0.1)
      .rgb()
      .string()
  );

  /**
   * renders children based on type
   */
  const renderChildren = () => {
    if (typeof children === 'string') {
      return <RNText style={computedStyle.text}>{children}</RNText>;
    }

    return children;
  };

  /**
   * renders container based on props
   */
  const renderContainer = () => {
    if (canSupportRipple === true && ripple === true) {
      const useForeground =
        RNPlatform.OS === 'android' &&
        RNPlatform.Version >= ANDROID_VERSION_PIE;

      const calculatedRippleColor = color(
        getThemeProperty(theme.colors, rippleColor, 'white')
      )
        .alpha(disabled ? 0 : 0.2)
        .rgb()
        .string();

      return (
        <RNTouchableNativeFeedback
          {...rest}
          onPress={disabled || loading ? undefined : onPress}
          useForeground={useForeground}
          background={RNTouchableNativeFeedback.Ripple(
            calculatedRippleColor,
            borderless
          )}
        >
          <RNView style={computedStyle.button}>
            {loading === true ? (
              <RNView style={computedStyle.container}>
                <RNView style={computedStyle.loadingContainer}>
                  <RNActivityIndicator
                    size={getThemeProperty(theme.fontSize, loaderSize, 16)}
                    color={getThemeProperty(
                      theme.colors,
                      loaderColor,
                      '#e1e1e1'
                    )}
                  />
                </RNView>
              </RNView>
            ) : (
              <RNView style={computedStyle.container}>
                {prefix}
                {renderChildren()}
                {suffix}
              </RNView>
            )}
          </RNView>
        </RNTouchableNativeFeedback>
      );
    }

    return (
      <RNButton
        {...rest}
        onPress={disabled || loading ? undefined : onPress}
        style={computedStyle.button}
        underlayColor={underlayColor}
      >
        {loading === true ? (
          <RNView style={computedStyle.container}>
            <RNView style={computedStyle.loadingContainer}>
              <RNActivityIndicator
                size={getThemeProperty(theme.fontSize, loaderSize, 16)}
                color={getThemeProperty(theme.colors, loaderColor, '#e1e1e1')}
              />
            </RNView>
          </RNView>
        ) : (
          <RNAnimated.View style={computedStyle.container}>
            {prefix}
            {renderChildren()}
            {suffix}
          </RNAnimated.View>
        )}
      </RNButton>
    );
  };

  /**
   * if the platform supports ripple, then use TouchableNativeFeedback
   */

  return <>{renderContainer()}</>;
};

Button.defaultProps = {
  bg: 'blue600',
  p: 'md',
  color: 'white',
  rounded: 'md',
  loading: false,
  disabled: false,
  loaderSize: 'text400',
  loaderColor: 'gray400',
  block: false,
  position: 'relative',
  shadowColor: 'gray800',
  shadow: 0,
  fontSize: 'text400',
  rippleColor: 'white',
  ripple: true,
  borderless: false,
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'flex-start',
  onPress: () => {},
  flexDir: 'row',
};

export { Button };
