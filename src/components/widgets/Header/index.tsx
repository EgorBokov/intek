import Image from 'next/image';
import { ContactInfo } from '@/shared/utils/ContactInfo';
import { Navbar } from '@/components/features/Navbar';
import { FiPhoneCall } from 'react-icons/fi';

import styles from './styles.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.contactInfo}>
                <Image src="/img/1c.png" alt={'testing'} width={100} height={60} />
                <p>{ ContactInfo.locationAddress }</p>
                <p>{ ContactInfo.email }</p>
            </div>
            <Navbar />
            <div>
                <a className={styles.contacts} href={`tel:${ContactInfo.phone}`}>
                    { ContactInfo.phone }
                </a>
                <div></div>
                <FiPhoneCall className={styles.phoneIcons}/>
            </div>
        </header>
    );
};