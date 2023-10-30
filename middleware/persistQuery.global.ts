export default defineNuxtRouteMiddleware((to, from) => {
    const router = useRouter();
    const route = router.resolve(to.path);
    if (!route.matched.length) {
        return navigateTo('/');
    }
    if (Object.keys(from.query).length && !Object.keys(to.query).length) {
        return navigateTo({
            path: to.path,
            hash: to.hash,
            params: to.params,
            query: from.query,
        });
    }
});
