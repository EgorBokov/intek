import { FC } from 'react';
import Link from 'next/link';
import { NavigationBarRoutes } from '@/shared/routes';
import cn from 'classnames';

import styles from './styles.module.scss';
import {useRouter} from 'next/router';

type INavbarProps = {
    addClass?: string;
}


export const Navbar: FC<INavbarProps> = ({ addClass }) => {
    const router = useRouter();
    return (
        <nav className={cn(styles.container, addClass || '')}>
            { NavigationBarRoutes.map(route =>
                <Link
                    href={route.link}
                    key={route.title}
                    className={cn({[styles.activeLink]: router.pathname === route.link })}
                >
                    { route.title }
                </Link>
            )}
        </nav>
    )
};