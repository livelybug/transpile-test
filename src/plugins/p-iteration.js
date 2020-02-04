// import something here
import * as iteration from 'p-iteration';

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  // something to do
  Vue.prototype.$iteration = iteration;
  app.$iteration = iteration;
  router.$iteration = iteration;
};
