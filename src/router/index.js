import Vue from 'vue'
import Router from 'vue-router'
import modules from './modules'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

let vueBaseRoute = '/'

const router = new Router({
    modules,
    mode: 'history',
    base: vueBaseRoute,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
            }
        }

        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
})

// Overwrie router push function to handle NavigationDuplicated error
if (router.push) {
    const temp = router.push
    router.push = function(...args) {
        return new Promise((resolve, reject) => {
            if (args.length === 1) {
                // On Complete handler
                args.push(() => {})
            }
            if (args.length === 2) {
                // On Abort handler
                args.push((error) => {
                    if (error && error.name !== 'NavigationDuplicated') {
                        reject(error)
                    }
                })
            }
            resolve(temp.call(this, ...args))
        })
    }
}

// Overwrie router replace function to handle NavigationDuplicated error
if (router.replace) {
    const temp = router.replace
    router.replace = function(...args) {
        return new Promise((resolve, reject) => {
            if (args.length === 1) {
                // On Complete handler
                args.push(() => {})
            }
            if (args.length === 2) {
                // On Abort handler
                args.push((error) => {
                    if (error && error.name !== 'NavigationDuplicated') {
                        reject(error)
                    }
                })
            }
            resolve(temp.call(this, ...args))
        })
    }
}

// beforeResolve hook
router.beforeResolve(async (routeTo, routeFrom, next) => {
    try {
        for (const route of routeTo.matched) {
            await new Promise((resolve, reject) => {
                if (route.meta && route.meta.beforeResolve) {
                    route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
                        if (args.length) {
                            next(...args)
                            reject(new Error('Redirected'))
                        } else {
                            resolve()
                        }
                    })
                } else {
                    resolve()
                }
            })
        }
    } catch (error) {
        return
    }

    next()
})

// eslint-disable-next-line no-prototype-builtins
if (!Vue.prototype.hasOwnProperty('$replaceRoute')) {
    Vue.prototype.$replaceRoute = function() {
        router.replace(...arguments)
    }
}

export default router
