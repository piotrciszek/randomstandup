import React from 'react';
import styles from './Button.module.css';
import { ButtonProps } from '../types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus } from '@fortawesome/free-solid-svg-icons';

const Button: React.FC<ButtonProps> = ({ onClick, children, type, disabled }) => {
  const buttonClass = type === 'remove' ? styles.removeButton : styles.button;

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {type === 'remove' && (
        <span className={styles.removeIcon}>
          <FontAwesomeIcon icon={faUserMinus} />
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;