import { Server, Response } from 'miragejs';
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
    this.get(`${import.meta.env.VITE_APP_API_ENDPOINT}`, (schema, request) => {
      const result = schema.db.users.where({ email: request?.queryParams?.email, password: request?.queryParams?.password })
      return result.length > 0 ? result[0] : new Response(400, { some: 'header' }, { errors: '400' })
    });

    this.passthrough(import.meta.env.VITE_APP_WEATHER_API_ENDPOINT);
  },
});

export { mockServer };
