import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import router from './router/routes';
import Aos from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

app.use(router);
app.mount('#app');
Aos.init({
    duration: 1200,
  })