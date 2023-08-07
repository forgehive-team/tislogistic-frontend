async function routeGuard(to: any) {
    const { appUrl } = useRuntimeConfig();
    if (
        to.fullPath !== '/' &&
        to.fullPath !== '/services' &&
        to.fullPath !== '/containers' &&
        to.fullPath !== '/services/project-logistics' &&
        to.fullPath !== '/services/morskie-gruzoperevozki' &&
        to.fullPath !== '/services/zheleznodorozhnye-perevozki' &&
        to.fullPath !== '/services/avtomobilnye-perevozki' &&
        to.fullPath !== '/services/aviaperevozki' &&
        to.fullPath !== '/googleca0a585e6c7b918c.html' &&
        to.fullPath !== '/services/arenda-konteynerov' &&
        !to.fullPath.startsWith('/news') &&
        !to.fullPath.startsWith('/projects') &&
        to.fullPath !== '/projects' &&
        to.fullPath !== '/presentation.pdf' &&
        to.fullPath !== '/politika-konfidencialnosti' &&
        to.fullPath !== '/politika-konfidencialnosti.pdf' &&
        to.fullPath !== '/eula' &&
        to.fullPath !== '/eula.pdf'
    ) {
        await navigateTo(appUrl + to.fullPath, {
            external: true,
            redirectCode: 302,
        });
        return abortNavigation('/');
    }
}
export default defineNuxtRouteMiddleware(routeGuard);
