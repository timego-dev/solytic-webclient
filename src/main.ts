import apolloClient from "@/apollo.client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./styles/index.scss";

library.add(faUser, faLock);

const pinia = createPinia();

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .provide(DefaultApolloClient, apolloClient)
  .use(pinia)
  .use(router)
  .mount("#app");
