import { texts } from '../config/texts';
export default defineNuxtPlugin(() => {
    return {
        provide: {
            texts,
        },
    };
});
