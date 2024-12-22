/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    readonly NEXT_PUBLIC_WEATHER_API_KEY: string;
    readonly CONTENTFUL_SPACE_ID: string;
    readonly CONTENTFUL_MANAGEMENT_TOKEN: string;
    readonly CONTENTFUL_ACCESS_TOKEN: string;
    readonly CONTENTFUL_PREVIEW_ACCESS_TOKEN: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
