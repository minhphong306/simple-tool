import {lazyLoadView} from '@utils/router'

let routes = []
routes = [
    {
        path: '/tools/api-gen',
        name: 'api-gen',
        meta: {},
        component: () =>
            lazyLoadView(import(/* webpackChunkName: "ohmygod" */ './views/index')),
    }
]

routes.forEach((route) => {
    if (!route.meta) {
        route.meta = {}
    }
})

export {routes}
