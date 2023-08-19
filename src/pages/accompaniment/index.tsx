import Head from 'next/head';
import { Button } from '@/components/UI/Button/Button';
import styles from './styles.module.scss';
import { DoubleTitleContainer } from '@/components/features/DoubleTitleContainter/DoubleTitleContainer';
import { Routes } from '@/shared/routes';
import { useRouter } from 'next/router';

export default function Accompaniment() {
    const router = useRouter();

    const handleRedirectIts = () => router.push(Routes.its);

    return (
        <>
            <Head>
                <title>Сопровождение 1С</title>
            </Head>
            <div>
                <div className={styles.titleContainer}>
                    <h3 className={styles.title}>Доверьте свою 1С профессионалам с многолетним опытом разработки и поддержки самых сложных конфигураций 1С.</h3>
                    <p>У нас свои 1С программисты в штате и в отличии от фрилансеров, наши специалисты всегда доступны и компетентны и несут ответственность за свои действия.</p>
                    <p className={styles.quote}>
                        Сопровождение 1С — одна из популярных услуг в сфере 1С,
                        которая заключается в обслуживании и поддержке различных конфигураций 1С и решении возникающих в процессе его использования проблем.
                        Доверив сопровождение квалифицированным специалистам компании СОФТ МАСТЕР,
                        вы можете быть уверены в эффективной и бесперебойной работе программы.
                    </p>
                </div>
                <DoubleTitleContainer />
                <div className={styles.mainContainer}>
                    <h3 className={styles.infoTitle}>Заключая договор ИТС в компании СОФТ МАСТЕР вы гарантированно получаете</h3>
                    <div className={styles.subInfo}>
                        <p>Легальные обновления</p>
                        <p>Профессиональную информационную систему 1С:ИТС, интегрированную с программой</p>
                        <p>Сервисные и консультационные услуги фирмы «1С»</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button onClick={handleRedirectIts} className={styles.button} text="Подробнее об 1С ИТС" />
                    </div>
                </div>
            </div>
        </>
    );
};