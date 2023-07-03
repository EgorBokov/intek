import { ContactInfo } from '@/shared/utils/ContactInfo';

import styles from './styles.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.infoBlock}>
                <p>ООО "ИНТЭК"</p>
                <span>{ ContactInfo.locationAddress }</span>
                <span>{ ContactInfo.email }</span>
            </div>
            <div className={styles.infoBlock}>
                <p>Контакты</p>
                <span>ПН-ПТ 09:00 - 18:00</span>
                <span>СБ-ВС выходной</span>
            </div>
        </footer>
    );
};