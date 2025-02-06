export async function loadLayoutMiddleware(route) {
    try {
        const { layout } = route.meta;
        const layoutComponent = await import(`@/layouts/${layout}.vue`);
        route.meta.layoutComponent = layoutComponent.default;
    } catch (e) {
        console.error('Error occurred in processing of layouts: ', e);
        console.log('Mounted default layout AppLayoutDefault');
        const layout = 'DefaultLayout';
        const layoutComponent = await import(`@/layouts/${layout}.vue`);
        route.meta.layoutComponent = layoutComponent.default;
    }
}
