import { FC, ReactElement } from 'react';
import { Navbar } from '@/components/features/Navbar';
import { ContactInfo } from '@/shared/utils/ContactInfo';
import Image from 'next/image';
import styles from './styles.module.scss';

interface IApplicationLayoutProps {
    children: ReactElement;
}

export const ApplicationLayout: FC<IApplicationLayoutProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.contactInfo}>
                    <Image src="/img/1c.png" alt={'testing'} width={100} height={60} />
                    <p>{ ContactInfo.locationAddress }</p>
                    <p>{ ContactInfo.phone }</p>
                    <p>{ ContactInfo.email }</p>
                </div>
                <Navbar />
            </header>
            <div>
                { children }
            </div>
        </div>
    )
};