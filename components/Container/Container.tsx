import React from 'react';
import { composeClasses } from '../../utils';
import styles from './Container.module.css';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
const Container = ({ children, className }: ContainerProps) => {
  return (
    <section className={composeClasses(styles.container, className)}>{children}</section>
  );
};

export default Container;
