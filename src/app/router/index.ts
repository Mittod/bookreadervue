import {createRouter, createWebHistory } from "vue-router";
import UploadBookView from '../../pages/UploadBookView.vue';
import ReaderBookView from "../../pages/UploadBookView.vue";



const routes = [
    {
        path: '/',
        name: 'upload',
        component: UploadBookView
    },
    {
        path: '/read:id',
        name: "reader",
        component: ReaderBookView
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;