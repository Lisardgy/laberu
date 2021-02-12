const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
    },
    {
        path: '/index',
        component: () =>
            import ('pages/Index.vue')
    },
    {
        path: '/example',
        component: () =>
            import ('pages/Example.vue')
    },
    {
        path: '/history',
        component: () =>
            import ('pages/History.vue')
    },
    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    }

]

export default routes