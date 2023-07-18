import { ContactInfo } from '@/shared/utils/ContactInfo';

import styles from './styles.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.infoBlock}>
                    <p>ООО "ИНТЭК"</p>
                    <span>
                    Официальный франчайзи 1С
                </span>
                </div>
                <div className={styles.infoBlock}>
                    <p>Контакты</p>
                    <span>{ ContactInfo.locationAddress }</span>
                    <span>{ ContactInfo.email }</span>
                </div>
                <div className={styles.infoBlock}>
                    <p>График работы</p>
                    <span>ПН-ПТ 09:00 - 18:00</span>
                    <span>СБ-ВС выходной</span>
                </div>
            </div>
            <div className={styles.copyRight}>© ООО "ИНТЭК" 2023</div>
        </footer>
    );
};