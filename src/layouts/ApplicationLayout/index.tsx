import { FC, ReactElement } from 'react';
import { Header } from '@/components/widgets/Header';
import { Footer } from '@/components/features/Footer';
import { ApplicationContainer } from '@/components/features/ApplicationContainer';
import { Montserrat } from 'next/font/google';

import cn from 'classnames';

import styles from './styles.module.scss';
import Head from 'next/head';

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
        <>
            <Head>
                <link rel="icon" href="/icons/favicon.ico" sizes="any" />
            </Head>
            <div className={cn(styles.container, montserrat.className)}>
                <div>
                    <Header />
                    <ApplicationContainer slot={children} />
                </div>
                <Footer />
            </div>
        </>
    )
};