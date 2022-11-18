import React from 'react';
import { composeClasses } from '../../utils';
import styles from './Button.module.css';

type ButtonProps = {
  buttonText: string;
  buttonType: 'outline' | 'solid';
  buttonSize: 'lg' | 'md';
  className?: string;
}
const Button = ({ buttonText, buttonType, buttonSize, className }: ButtonProps) => {
  return (
    <button className={composeClasses(styles.button,styles[buttonType], styles[buttonSize], className )}>{buttonText}</button>
  )
}

export default Button