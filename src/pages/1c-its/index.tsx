import Head from 'next/head';

import styles from './styles.module.scss';
import Image from 'next/image';

export default function ItsPage() {
    const campaignItems = [
        { id: 1, title: 'Обновление 1С' },
        { id: 1, title: 'Доработка 1С' },
        { id: 1, title: 'Сопровождение 1С' },
    ];

    return (
        <>
            <Head>1С ИТС</Head>
            <div>
                <div className={styles.container}>
                    <p className={styles.description}>Заключем договора на ИТС в Чите</p>
                </div>
                <p className={styles.title}>Заключая договор ИТС в компании ИНТЭК в Чите вы гарантированно получаете:</p>
                <ul className={styles.goodsList}>
                    <li>Более 25 сервисов, которые расширят возможности вашей программы и облегчат работу. Мы поможем подключить, настроить и научим пользоваться ими.</li>
                    <li>У вас будет всегда актуальная база и доступ к легальным обновлениям от фирмы 1С. Вы никогда не пропустите изменения в программе и новые отчеты!</li>
                    <li>Вы сможете обратится на линию консультаций, чтобы получить помощь по вопросам ведения учета в программе. Наши специалисты прошли обучение и подтвердили свою квалификацию в фирме 1С.</li>
                    <li>Вы будете сдавать отчетность в корректных формах. Наши сервис-инженеры отслеживают выпуск обновлений и дистанционно устанавливают их.</li>
                </ul>
                <div className={styles.controlSoftContainer}>
                    <Image src={'/img/1c.png'} width={230} height={100} alt="1С Логотип" className={styles.image} />
                    <div className={styles.controlSoft}>
                       Возьмем Вашу 1С на сопровождение
                    </div>
                    <div className={styles.textInfoContainer}>
                        <p>Поможем подобрать и настроить 1С, подключим и интегрируем торговое оборудование.</p>
                        <p>Возьмем на обслуживание, чтобы все работало без сбоев. Закажите выезд или удаленное подключение программиста для консультации</p>
                    </div>
                </div>
                <div className={styles.campaignContainer}>
                    {campaignItems.map(({ id, title}) => (
                        <div key={id} className={styles.campaignItem}>
                            {title}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};