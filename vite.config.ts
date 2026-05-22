import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueRouter from "vue-router/vite";

export default defineConfig({
    plugins: [
        VueRouter(),
        Vue()
    ]
});