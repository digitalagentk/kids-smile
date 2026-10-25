import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('../views/HomeView.vue'), meta: { title: 'الرئيسية' } },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue'), meta: { title: 'من نحن' } },
    { path: '/booking', name: 'booking', component: () => import('../views/BookingView.vue'), meta: { title: 'احجز الآن' } },
    { path: '/auth', name: 'auth', component: () => import('../views/AuthView.vue'), meta: { title: 'تسجيل الدخول' } },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior: () => ({ top: 0, behavior: 'smooth' }),
})

router.afterEach((to) => {
  document.title = `${to.meta.title ?? ''} | عيادة ابتسامة الأطفال 🦷`
})

export default router