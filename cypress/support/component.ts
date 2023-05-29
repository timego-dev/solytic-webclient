import { library } from "@fortawesome/fontawesome-svg-core";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { mount } from "cypress/vue";
import { createPinia } from "pinia";
import { createMemoryHistory, createRouter } from "vue-router";

import { routes } from "../../src/router";

Cypress.Commands.add("mount", (component, options = {}) => {
  // Setup options object
  options.global = options.global || {};
  options.global.plugins = options.global.plugins || [];

  library.add(faUser, faLock);

  options.global.components = {
    ...options.global.components,
    "font-awesome-icon": FontAwesomeIcon,
  };

  if (!options.router) {
    options.router = createRouter({
      routes: routes,
      history: createMemoryHistory(),
    });
  }

  if (!options.pinna) {
    options.pinna = createPinia();
  }

  // Add router plugin
  options.global.plugins.push({
    install(app) {
      app.use(options.router);
    },
  });

  return mount(component, options);
});
