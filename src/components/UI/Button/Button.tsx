import { ReactElement, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

type ButtonProps = {
    className?: string;
    children?: ReactElement;
    text?: string;
    onClick: () => any;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, text, onClick, ...props }: ButtonProps) => {
    return (
        <button onClick={onClick} className={cn(styles.button, className)} {...props}>
            {children || text}
        </button>
    );
};
