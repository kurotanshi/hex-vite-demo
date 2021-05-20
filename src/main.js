import { createApp } from 'vue';
import routers from './routes';
import store from './store';
import App from './App.vue';

//import 'virtual:windi.css';

createApp(App)
  .use(routers)
  .use(store)
  .mount('#app');
