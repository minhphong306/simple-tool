export const lazyLoadView = (AsyncView) => {
    const AsyncHandler = () => ({
        component: AsyncView,
        delay: 400,
        timeout: 10000,
    })

    return Promise.resolve({
        functional: true,
        render(h, { data, children }) {
            // Transparently pass any props or children
            // to the view component.
            return h(AsyncHandler, data, children)
        },
    })
}