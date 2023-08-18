import Image from 'next/image';
import { ContactInfo } from '@/shared/utils/ContactInfo';
import { Navbar } from '@/components/features/Navbar';
import { FiPhoneCall } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';

import styles from './styles.module.scss';

export const Header = () => {

    return (
        <header className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.imageContainer}>
                    <img src="/img/soft-logo.png" alt={'testing'} />
                </div>
                <div className={styles.contactInfo}>{ ContactInfo.locationAddress }</div>
                <div>
                    <div className={styles.contactItem}>
                        <MdEmail />
                        <a href={`mailto:${ContactInfo.email}`}>{ ContactInfo.email }</a>
                    </div>
                    <div className={styles.contactItem}>
                        <FiPhoneCall />
                        <a href={`tel:${ContactInfo.phone}`}>{ContactInfo.phone}</a>
                    </div>
                </div>
            </div>
            <div className={styles.navbarContainer}>
                <Navbar addClass={styles.navbar} />
            </div>
        </header>
    );
};