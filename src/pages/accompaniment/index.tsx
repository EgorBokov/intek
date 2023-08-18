import Head from 'next/head';
import { Button } from '@/components/UI/Button/Button';
import styles from './styles.module.scss';
import Link from 'next/link';
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
                <div>
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