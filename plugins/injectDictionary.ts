import { texts } from '../config/texts';
import { useLanguage } from './../composables/state';
export default defineNuxtPlugin(() => {
    const lang = useLanguage();
    const dictionaryProxy = new Proxy(texts, {
        get: function (target, key) {
            return target[lang.value][key];
        },
    });
    return {
        provide: {
            texts: dictionaryProxy,
        },
    };
});
