export const Routes = {
    mainPage: '/',
    outsource: '/it-outsource',
    accompaniment: '/accompaniment',
    its: '/1c-its',
};

export type RouteType = {
    title: string;
    link: string;
};

export const NavigationBarRoutes: Array<RouteType> = [
    { title: 'Главная', link: Routes.mainPage },
    { title: 'IT Аутсорс', link: Routes.outsource },
    { title: 'Сопровождение 1С', link: Routes.accompaniment },
    { title: '1С ИТС', link: Routes.its },
];