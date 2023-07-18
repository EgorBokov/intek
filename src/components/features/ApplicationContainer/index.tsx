import { ReactElement } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

type ApplicationContainerProps = {
    children?: ReactElement;
    slot?: ReactElement;
    addClass?: string;
};

export const ApplicationContainer = ({ children, addClass, slot }: ApplicationContainerProps) => {
    return (
        <div className={cn(styles.container, addClass)}>
            <div className={styles.contentWrapper}>
                { children || slot }
            </div>
        </div>
    );
};