export const routesList = [
    {
        name: 'home',
        path: '/',
        componentUnAuthorized: () => import('@pages/home-default/home-default.vue'), // компонент для неавторизованного пользователя
        componentAuthorized: () => import('@pages/home-authorized/home-authorized.vue'), // компонент для авторизованного пользователя
    },
    {
        name: 'auth',
        path: '/auth',
        componentUnAuthorized: () => import('@pages/auth/auth.vue'), // компонент для неавторизованного пользователя
        componentAuthorized: () => import('@pages/auth/auth.vue'), // компонент для авторизованного пользователя
        redirectWhenAuthorized: '/',
    },
    {
        name: 'test',
        path: '/test',
        componentUnAuthorized: null, // компонент для неавторизованного пользователя
        componentAuthorized: () => import('@pages/test/test.vue'), // компонент для авторизованного пользователя
    },
    {
        name: 'not-found',
        path: '/:pathMatch(.*)*',
        componentUnAuthorized: '',
        componentAuthorized: '',
    },
];
