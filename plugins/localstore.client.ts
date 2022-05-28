import { Plugin } from '@nuxt/types'

declare module '@nuxt/types' {
    interface Context {
        $localStore: {
            key: string;
            data: { [key: string]: any };
            dataReady: boolean;
            init: () => void;
            save: <T>(key: string, value: T) => void;
            get: <T>(key: string, defaultVal: T) => T;
        }
    }
}

const LocalStore: Plugin = (context) => {
    context.$localStore = {
        key: 'erellsworth',
        data: {},
        dataReady: false,
        init: () => {
            if (context.$localStore.dataReady) {
                return;
            }

            const localData = localStorage.getItem(context.$localStore.key);

            if (localData) {
                context.$localStore.data = JSON.parse(localData);
            }
        },
        save: <T>(key: string, value: T) => {
            context.$localStore.init();
            context.$localStore.data[key] = value;
            context.$localStore.data[key] = value;

            //if (process.client) {
            localStorage.setItem(context.$localStore.key, JSON.stringify(context.$localStore.data));
            //}            
        },
        get: <T>(key: string, defaultVal: T) => {
            context.$localStore.init();
            if (!context.$localStore.data.hasOwnProperty(key) && defaultVal) {
                return defaultVal;
            }

            return context.$localStore.data[key];
        }
    }
}

export default LocalStore;