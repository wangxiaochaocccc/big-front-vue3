import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueRouter from 'unplugin-vue-router/vite'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({}), //一定要在vue()之前
    vue(),
    vueJsx(),
    UnoCSS(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      // global imports to register
      imports: [
        // presets
        'vue',
        VueRouterAutoImports,
        '@vueuse/core'
      ]
    }),
    Components({
      directoryAsNamespace: true, //允许拼接文件名
      collapseSamePrefixes:true
    }),
    Layouts({
      layoutsDirs: 'src/layout',
      defaultLayout: 'default'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
