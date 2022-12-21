import { RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import NotePage from '../views/NotePage.vue'

export const routes: RouteRecordRaw[] = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/note/:noteId', component: NotePage, name: 'note', props: true },
]
