import { defineConfig } from 'histoire';
import { HstVue } from '@histoire/plugin-vue';

export default defineConfig({
    setupFile: 'src/histoire.ts',
    plugins: [HstVue()],
    vite: {
        base: '/components/',
    },
});
