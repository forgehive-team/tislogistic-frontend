async function routeGuard(to: any) {
    const { apiBase } = useRuntimeConfig();
    if (
        to.fullPath !== '/' &&
        to.fullPath !== '/services' &&
        to.fullPath !== '/containers' &&
        to.fullPath !== '/services/project-logistics' &&
        to.fullPath !== '/services/morskie-gruzoperevozki' &&
        // to.fullPath !== '/services/zheleznodorozhnye-perevozki' &&
        to.fullPath !== '/presentation.pdf'
    ) {
        await navigateTo(apiBase + to.fullPath, {
            external: true,
            redirectCode: 302,
        });
        return abortNavigation('/');
    }
}
export default defineNuxtRouteMiddleware(routeGuard);
