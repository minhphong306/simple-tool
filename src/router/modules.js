import {lazyLoadView} from '@utils/router'

const modulesCache = {}
let routeData = [
        {
            path: '/',
            component: () =>
                lazyLoadView(import(/* webpackChunkName: "ohmygod" */ '../components/home')),
        }, {
            path: '/about',
            component: () =>
                lazyLoadView(import(/* webpackChunkName: "ohmygod" */ '../components/about')),
        }
    ]

;(function updateModules() {
    const requireModule = require.context('../components/tools', true, /router.js$/)
    // For every routes module...
    requireModule.keys().forEach((fileName) => {
        const definition = requireModule(fileName)

        // Skip the module during hot reload if it refers to the
        // same module definition as the one we have cached.
        if (
            !definition ||
            !definition.routes ||
            !Array.isArray(definition.routes) ||
            modulesCache[fileName] === definition
        ) {
            return
        }

        routeData = routeData.concat(...definition.routes)
    })
    routeData = routeData.filter((route) => !(route.meta && route.meta.hide))
    // Finally add 404 page when none of about matched
    routeData.push({
        path: '*',
        meta: {
            title: 'Page not found',
        },
        component: () =>
            lazyLoadView(
                import(/* webpackChunkName: "no_access" */ '../components/error')
            ),
    })
})()

export default routeData
