import { PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './DoubleTitleContainer.module.scss';

type DoubleTitleContainer = {
    className?: string;
} & Omit<PropsWithChildren, 'children'>

export const DoubleTitleContainer = ({ className }: DoubleTitleContainer) => {
    return (
        <div className={cn(styles.contractsInfo, className)}>
            <div>
                Заключаем договора на 1С ИТС
            </div>
            <div>
                Информационно-технологическое сопровождение (1С:ИТС) – это комплексная поддержка пользователей 1С по всем направлениям, которую оказывают официальные партнеры фирмы «1С»
            </div>
        </div>
    );
};