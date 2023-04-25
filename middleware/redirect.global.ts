export default defineNuxtRouteMiddleware((to) => {
    if (
        to.fullPath !== '/' &&
        to.fullPath !== '/services' &&
        to.fullPath !== '/containers'
    ) {
        return navigateTo('https://tislogistic.ru' + to.fullPath, {
            replace: true,
            external: true,
            redirectCode: 302,
        });
    }
});
