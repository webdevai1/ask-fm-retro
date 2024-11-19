import { BoxProps } from 'legos';
import { ColorType } from 'utils';

export interface SelectProps {
  label?: string;
  placeholder?: any;
  color?: ColorType;
  value?: any;
  items: any[];
  type?: 'underline' | 'outline';
  onChange: any;
  styleContainer?: BoxProps;
  isCenterAlignText?: boolean;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  error?: string;
}

export interface SelectPropsItems {
  label: string;
  value: string;
}
