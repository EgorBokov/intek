import styles from './styles.module.scss';

export const ProvidingServices = () => {
    const servicesToProvide = [
        {
            id: 1,
            title: 'Быстрый запуск без вложений',
            content: 'Ничего не нужно устанавливать на компьютер, регистрируйтесь и сразу начинайте работать в 1С. Даже ключ электронной подписи для электронного документооборота храним в «облаке». Вызывать программиста тоже не потребуется.',
            img: 'cloud.png',
        },
        {
            id: 2,
            title: 'Работайте в 1С откуда угодно',
            content: '1С доступна всегда и везде. Достаточно подключения к Интернету и браузера, работать можно хоть из дома, хоть в командировке.',
            img: 'map-point.png',
        },
        {
            id: 3,
            title: 'Без огромных затрат',
            content: 'Больше не нужно покупать и обслуживать программы и оборудование. Не нужно покупать «коробочную» версию программы и лицензии. Вы платите только регулярные платежи за использование сервиса.',
            img: 'check.png',
        },
        {
            id: 4,
            title: 'Автоматические обновления 1С',
            content: 'У вас всегда последняя версия программы. Не нужно нанимать специалиста для обновления программ – в сервисе у вас всегда последняя версия.',
            img: 'guard-shield.png',
        },
    ];

    return (
        <div className={styles.container}>
            <img
                src="/img/1c-cloud.png"
                alt="Облачный логотип 1С"
                className={styles.mainLogo}
                width={220}
                height={150}
            />
            <div className={styles.titleContainer}>
                <h3>Предоставляем 1С в облаке. Минимум затрат на старте</h3>
                <p className={styles.subscription}>
                    В компании СОФТ МАСТЕР в Чите вы можете взять 1С в аренду в облаке.
                    Ведите бухгалтерский и налоговый учет, контролируйте бизнес и управляйте им,
                    сдавайте отчетность с помощью популярных программ 1С через Интернет и с минимальными вложениями.
                </p>
            </div>
            <div className={styles.productList}>
                {servicesToProvide.map((product) => (
                    <div className={styles.productItem} key={product.id}>
                        <img src={`/icons/product-icons/${product.img}`} alt="Изображение типа товара"/>
                        <h3>{product.title}</h3>
                        <p>{product.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};