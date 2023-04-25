import { texts } from '../config/texts';
async function routeGuard(to: any) {
    if (to.fullPath === '/services/project-logistics') {
        return abortNavigation('/');
    }
    if (
        to.fullPath !== '/' &&
        to.fullPath !== '/services' &&
        to.fullPath !== '/containers'
    ) {
        await navigateTo(texts.oldDomain + to.fullPath, {
            external: true,
            redirectCode: 302,
        });
        return abortNavigation('/');
    }
}
export default defineNuxtRouteMiddleware(routeGuard);
