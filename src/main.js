import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Menubar from 'primevue/menubar';
import Fieldset from 'primevue/fieldset';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


const app = createApp(App);

app.use(PrimeVue, { ripple: true });
app.use(ToastService);
app.use(router);

app.component('InputText', InputText);
app.component('Button', Button);
app.component('Toast', Toast);
app.component('Menubar', Menubar);
app.component('Fieldset', Fieldset);

app.mount('#app')
