import { texts } from '../config/texts';
async function routeGuard(to: any) {
    if (
        to.fullPath !== '/' &&
        to.fullPath !== '/services' &&
        to.fullPath !== '/containers' &&
        to.fullPath !== '/services/project-logistics'
    ) {
        await navigateTo(texts.oldDomain + to.fullPath, {
            external: true,
            redirectCode: 302,
        });
        return abortNavigation('/');
    }
}
export default defineNuxtRouteMiddleware(routeGuard);
