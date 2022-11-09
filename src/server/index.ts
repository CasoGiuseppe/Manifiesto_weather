import { Server } from 'miragejs';
import USERS from "./__mocks__/users";


const mockServer = new Server({
  seeds(server) {
    server.db.loadData({
      users: USERS,
    });
  },

  routes() {
    this.namespace = import.meta.env.VITE_APP_API_NAMESPACE;

    // get users info
    this.get(`${import.meta.env.VITE_APP_API_PORT}${import.meta.env.VITE_APP_API_ENDPOINT}`, (schema) => schema.db.users);

    this.passthrough('https://api.brightsky.dev/current_weather');
  },
});

export { mockServer };
