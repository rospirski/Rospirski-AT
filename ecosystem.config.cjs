module.exports = {
  apps: [
    {
      name: 'rospirski.com',
    },
  ],

  deploy: {
    prod: {
      user: 'ubuntu',
      host: ['server01.rospirski.com'],
      ref: 'origin/main',
      repo: 'git@github.com:rospirski/Rospirski-AT.git',
      path: '/var/www/rospirski/site',
      'post-deploy': 'pnpm update; pnpm build',
    },
  },
}
