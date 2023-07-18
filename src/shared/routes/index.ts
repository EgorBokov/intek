export const Routes = {
  mainPage: '/',
  anotherPage: '/another-page',
  testing: '/testing',
};

export type RouteType = {
    title: string;
    link: string;
};

export const NavigationBarRoutes: Array<RouteType> = [
    { title: 'Главная', link: Routes.mainPage },
    { title: 'Другая', link: Routes.anotherPage },
    { title: 'О нас', link: Routes.testing },
];