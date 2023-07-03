import { FC, ReactElement } from 'react';
import { Header } from '@/components/widgets/Header';
import { Footer } from '@/components/features/Footer';
import { Montserrat } from 'next/font/google';

import cn from 'classnames';

import styles from './styles.module.scss';

const montserrat = Montserrat({
    subsets: ['cyrillic', 'latin'],
    weight: ['300', '400', '700'],
    style: ['normal', 'italic'],
});

interface IApplicationLayoutProps {
    children: ReactElement;
}

export const ApplicationLayout: FC<IApplicationLayoutProps> = ({ children }) => {
    return (
        <div className={cn(styles.container, montserrat.className)}>
            <div>
                <Header />
                <div>
                    { children }
                </div>
            </div>
            <Footer />
        </div>
    )
};