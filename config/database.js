module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 49153),
        database: env('DATABASE_NAME', 'guigames'),
        username: env('DATABASE_USERNAME', 'guigames'),
        password: env('DATABASE_PASSWORD', 'guigamespw'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
