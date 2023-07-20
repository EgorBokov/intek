export const Routes = {
  mainPage: '/',
  outsource: '/it-outsource',
  testing: '/testing',
};

export type RouteType = {
    title: string;
    link: string;
};

export const NavigationBarRoutes: Array<RouteType> = [
    { title: 'Главная', link: Routes.mainPage },
    { title: 'IT Аутсорс', link: Routes.outsource },
    { title: 'О нас', link: Routes.testing },
];