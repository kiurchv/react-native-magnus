import { StyleSheet } from 'react-native';

import {
  getThemeProperty,
  createSpacingStyles,
  createBorderRadiusStyles,
} from '../../theme/theme.service';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: any, props: any) => {
  const computedStyle: any = {};

  computedStyle.button = {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    position: props.position,
    backgroundColor: getThemeProperty(theme.colors, props.bg, 'transparent'),
    ...createSpacingStyles(props, theme.spacing),
  };

  computedStyle.text = {
    color: getThemeProperty(theme.colors, props.color, 'black'),
    textAlign: 'right',
    fontSize: getThemeProperty(theme.fontSize, props.fontSize, 16),
  };

  computedStyle.container = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  if (props.shadow) {
    computedStyle.button = {
      ...computedStyle.button,
      ...theme.shadow[props.shadow],
      shadowColor: getThemeProperty(theme.colors, props.shadowColor, 'white'),
    };
  }

  if (props.block) {
    computedStyle.container = {
      ...computedStyle.container,
      width: '100%',
    };
  }

  if (props.w) {
    computedStyle.button = {
      ...computedStyle.button,
      width: props.w,
    };
  }

  if (props.h) {
    computedStyle.button = {
      ...computedStyle.button,
      height: props.h,
    };
  }

  if (props.top) {
    computedStyle.button = {
      ...computedStyle.button,
      top: props.top,
    };
  }

  if (props.right) {
    computedStyle.button = {
      ...computedStyle.button,
      right: props.right,
    };
  }

  if (props.bottom) {
    computedStyle.button = {
      ...computedStyle.button,
      bottom: props.bottom,
    };
  }

  if (props.left) {
    computedStyle.button = {
      ...computedStyle.button,
      left: props.left,
    };
  }

  if (props.borderColor) {
    computedStyle.button = {
      ...computedStyle.button,
      borderColor: getThemeProperty(
        theme.colors,
        props.borderColor,
        'transparent'
      ),
    };
  }

  if (props.borderWidth) {
    computedStyle.button = {
      ...computedStyle.button,
      borderWidth: props.borderWidth,
    };
  }

  if (props.rounded) {
    computedStyle.button = {
      ...computedStyle.button,
      ...createBorderRadiusStyles(props.rounded, theme.borderRadius),
    };
  }

  if (props.disabled) {
    computedStyle.button = {
      ...computedStyle.button,
      opacity: 0.5,
    };
  }

  // merging style props to computed style
  if (props.style) {
    computedStyle.container = {
      ...computedStyle.container,
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
