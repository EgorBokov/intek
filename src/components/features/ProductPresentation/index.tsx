import Image  from 'next/image';
import router from 'next/router';
import { ProvidingServices } from '@/components/widgets/ProvidingServices';

import styles from './styles.module.scss';

export const ProductPresentation = () => {
    const handleRedirect = () => router.replace('https://2gis.ru');

    return (
        <div className={styles.container}>
            <div className={styles.headerWrapper}>
                <Image src={'/img/1c.png'} width={230} height={100} alt="1С Логотип" />
                <div className={styles.titles}>
                    <div className={styles.titleWrapper}>
                        Продажа, сопровождение и доработка 1С
                    </div>
                    <div className={styles.titleWrapper}>
                        Официальный франчайзи 1С в Чите
                    </div>
                    <p className={styles.subTitle}>Профессиональное внедрение, поддержка, доработка и обновление 1С в г. Чита.
                        У нас вы можете как купить 1С, так и взять ее в аренду в облаке. Большой опыт внедрения 1С
                        профессиональными программистами. Обновляем любые базы 1С и заключаем договора на ИТС.</p>
                    <div className={styles.doubleGis} onClick={handleRedirect}>
                        <img src="/img/doublegis.png" alt="2Gis Изображение"/>
                        <span>
                      Читать отзывы о нас на 2GIS
                  </span>
                    </div>
                </div>
            </div>
            <div className={styles.infoContainer}>
                <h3>
                    Всегда на связи. Огромный опыт. Свои 1С программисты в штате
                </h3>
                <p>Сэкономьте время! Расскажите о вашей задаче!</p>
                <p>Подготовим решение, рассчитаем стоимость и проведем демонстрацию.</p>
            </div>
            <ProvidingServices />
        </div>
    );
};