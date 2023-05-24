import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./styles/index.scss";

library.add(faUser, faLock);

const apolloClient = new ApolloClient({
  uri: "https://solytic-login.free.beeceptor.com/api/graphql",
  cache: new InMemoryCache(),
});

createApp(App)
  .provide(DefaultApolloClient, apolloClient)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
