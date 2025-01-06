import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import ProjectsPage from "./components/ProjectsPage.vue";
import SkillsPage from "@/components/SkillsPage.vue";
import ProjectDetailsPage from "@/components/ProjectDetailsPage.vue";
import ContactPage from './components/ContactPage.vue';
import AboutPage from './components/AboutPage.vue';

const routes = [
    { path: '/', component: HomePage, meta: { title: 'Home' } },
    { path: '/projects', component: ProjectsPage, meta: { title: 'Projects' } },
    { path: '/skills', component: SkillsPage, meta: { title: 'Skills' } },
    { path: '/about', component: AboutPage, meta: { title: 'About'  } },
    { path: '/contact', component: ContactPage, meta: { title: 'Contact' } },
    { path: '/projects/:id', component: ProjectDetailsPage, props: true },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});
router.beforeEach((to, from, next) => {
    //document.title = to.meta.title;
    //document.title = "Portfolio";
    next();
});

export default router;