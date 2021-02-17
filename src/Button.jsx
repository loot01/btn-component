import styled, { css } from 'styled-components';
import Icon from '@material-ui/core/Icon';

//Background colors
const bgColorSchemes = {
  default: {
    normal: '#E0E0E0',
    hover: '#AEAEAE',
  },
  primary: {
    normal: '#2962FF',
    hover: '#0039CB',
  },
  secondary: {
    normal: '#455A64',
    hover: '#1C313A',
  },
  danger: {
    normal: '#D32F2F',
    hover: '#9A0007',
  },
};
//Sizes
const btnSizes = {
  sm: {
    x: '12px',
    y: '6px',
  },
  md: {
    x: '16px',
    y: '8px',
  },
  lg: {
    x: '22px',
    y: '11px',
  },
};

//returns the styling that depends on the chosen color
const getBtnColor = (color) => {
  if (color in bgColorSchemes) {
    return css`
      background-color: ${bgColorSchemes[color].normal};
      ${color === 'default' ? 'color:#3F3F3F;' : null}
      &:hover,
      &:focus {
        background-color: ${bgColorSchemes[color].hover};
      }
    `;
  } else {
    return css`
      background-color: ${bgColorSchemes.default.normal};
      color: #3f3f3f;
      &:hover,
      &:focus {
        background-color: ${bgColorSchemes.default.hover};
      }
    `;
  }
};

const getBtnSize = (size) => {
  if (size in btnSizes) {
    return css`
      padding: ${btnSizes[size].y} ${btnSizes[size].x};
    `;
  } else {
    return css`
      padding: ${btnSizes.md.y} ${btnSizes.md.x};
    `;
  }
};

const getBtnVariant = (variant, color = 'primary') => {
  if (!variant) return;
  else if (variant === 'outline') return getBtnOutlineVariant(color);
  else if (variant === 'text') return getBtnTextVariant(color);
};

const getBtnOutlineVariant = (color) => {
  if (!(color in bgColorSchemes)) color = 'primary';
  return css`
    background: transparent;
    border: solid 1px ${bgColorSchemes[color].normal};
    color: ${bgColorSchemes[color].normal};
    box-shadow: none;
    &:hover,
    &:focus {
      background-color: ${bgColorSchemes[color].normal}10;
    }
  `;
};

const getBtnTextVariant = (color) => {
  if (!(color in bgColorSchemes)) color = 'primary';
  return css`
    background: transparent;
    color: ${bgColorSchemes[color].normal};
    box-shadow: none;
    &:hover,
    &:focus {
      background-color: ${bgColorSchemes[color].normal}10;
    }
  `;
};

const makeBtnDisabled = (variant, color) => {
  if (!(color in bgColorSchemes)) color = 'default';
  if (variant === 'outline') {
    return css`
      border: solid 1px ${bgColorSchemes[color].normal}80;
      color: ${bgColorSchemes[color].normal}50;
      &:hover,
      &:focus {
        background-color: transparent;
      }
      &:hover {
        cursor: not-allowed;
      }
    `;
  } else if (variant === 'text') {
    return css`
      color: ${bgColorSchemes[color].normal}50;
      &:hover,
      &:focus {
        background-color: ${bgColorSchemes[color].normal}05;
        cursor: not-allowed;
      }
    `;
  } else {
    return css`
      background-color: ${bgColorSchemes[color].normal}80;
      box-shadow: none;
      &:hover,
      &:focus {
        background-color: ${bgColorSchemes[color].hover}20;
        cursor: not-allowed;
      }
    `;
  }
};

const StyledButton = styled.button`
  border-radius: 6px;
  border: none;
  font-size: 14px !important;
  font-weight: 500;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  transition: background-color 200ms;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
font-family: 'Noto Sans JP', sans-serif;
    ${({ color = 'default' }) => {
      return getBtnColor(color.toLowerCase());
    }}
    ${({ size = 'md' }) => {
      return getBtnSize(size.toLowerCase());
    }}
    ${({ disableShadow = false }) => {
      return disableShadow
        ? css`
            box-shadow: none;
          `
        : null;
    }}
    ${({ variant = 'default', color = 'primary' }) => {
      return getBtnVariant(variant.toLowerCase(), color.toLowerCase());
    }}
    ${({ variant, color, disabled }) => {
      if (!disabled) return;
      return makeBtnDisabled(variant, color);
    }};
`;

const Button = ({ text, startIcon, endIcon, ...props }) => {
  return (
    <StyledButton {...props}>
      {(startIcon && (
        <Icon
          className="icon-left"
          style={{ fontSize: 'inherit', paddingRight: 5 }}
        >
          {startIcon}
        </Icon>
      )) ||
        null}
      {text}
      {(endIcon && (
        <Icon
          className="icon-right"
          style={{ fontSize: 'inherit', paddingLeft: 5 }}
        >
          {endIcon}
        </Icon>
      )) ||
        null}
    </StyledButton>
  );
};
export default Button;
