import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import ProjectsPage from "./components/ProjectsPage.vue";
import SkillsPage from "@/components/SkillsPage.vue";
import ProjectDetailsPage from "@/components/ProjectDetailsPage.vue";
import ContactPage from './components/ContactPage.vue';

const routes = [
    { path: '/', component: HomePage, meta: { title: 'Home', description: '' } },
    { path: '/projects', component: ProjectsPage, meta: { title: 'Projects', description: 'Here are some of my interesting projects:' } },
    { path: '/skills', component: SkillsPage, meta: { title: 'Skills', description: ''  } },
    { path: '/about', component: HomePage, meta: { title: 'About', description: ''  } },
    { path: '/contact', component: ContactPage, meta: { title: 'Contact', description: ''  } },
    { path: '/projects/:id', component: ProjectDetailsPage, props: true },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
router.beforeEach((to, from, next) => {
    //document.title = to.meta.title;
    //document.title = "Portfolio";
    next();
});

export default router;