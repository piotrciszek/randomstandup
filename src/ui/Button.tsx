import React from 'react';
import styles from './Button.module.css';
import { ButtonProps } from '../types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Button: React.FC<ButtonProps> = ({ onClick, children, type, disabled }) => {
    const buttonClass = type === 'remove' ? styles.removeButton : styles.button;
  
    return (
      <button className={buttonClass} onClick={onClick} disabled={disabled}>
        {type === 'remove' ? <FontAwesomeIcon icon={faTimes} /> : null}
        {children}
      </button>
    );
  };
  
  export default Button;