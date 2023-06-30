import { FC } from 'react';
import Link from 'next/link';
import { NavigationBarRoutes } from '@/shared/routes';

type INavbarProps = {
    addClass?: string;
}


export const Navbar: FC<INavbarProps> = ({ addClass }) => {
    return (
        <nav className={addClass || ''}>
            { NavigationBarRoutes.map(route =>
                <Link href={route.link}>{ route.title }</Link>
            )}
        </nav>
    )
};