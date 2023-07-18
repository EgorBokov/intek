import Image from 'next/image';
import { ContactInfo } from '@/shared/utils/ContactInfo';
import { Navbar } from '@/components/features/Navbar';
import { FiPhoneCall } from 'react-icons/fi';

import styles from './styles.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Image src="/img/soft-logo.png" alt={'testing'} width={300} height={60} />
            <Navbar />
            <div className={styles.contactInfo}>
                <p>{ ContactInfo.locationAddress }</p>
                <p>{ ContactInfo.email }</p>
            </div>
            <div className={styles.phoneContainer}>
                <a className={styles.contacts} href={`tel:${ContactInfo.phone}`}>
                    { ContactInfo.phone }
                </a>
                <FiPhoneCall className={styles.phoneIcons}/>
            </div>
        </header>
    );
};