import { FC } from 'react';
import Link from 'next/link';
import { NavigationBarRoutes } from '@/shared/routes';
import cn from 'classnames';

import styles from './styles.module.scss';

type INavbarProps = {
    addClass?: string;
}


export const Navbar: FC<INavbarProps> = ({ addClass }) => {
    return (
        <nav className={cn(styles.container, addClass || '')}>
            { NavigationBarRoutes.map(route =>
                <Link href={route.link}>{ route.title }</Link>
            )}
        </nav>
    )
};