async function guard(to: any) {
    if (
        to.fullPath !== '/' &&
        to.fullPath !== '/services' &&
        to.fullPath !== '/containers'
    ) {
        await navigateTo('https://tislogistic.ru' + to.fullPath, {
            // replace: true,
            external: true,
            redirectCode: 302,
        });
        return abortNavigation('s');
    }
}

export default defineNuxtRouteMiddleware(guard);
