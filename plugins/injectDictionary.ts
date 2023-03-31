import { texts } from './../texts';
export default defineNuxtPlugin(() => {
    return {
        provide: {
            texts,
        },
    };
});
