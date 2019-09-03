module.exports = {
  apps: [{
    name: 'module-nav-search-bar',
    script: 'server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-217-183-33.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/FEC-first-key.pem',
      ref: 'origin/master',
      repo: 'git@github.com:shazamazon/module-nav-search-bar.git',
      path: '/home/ubuntu/',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};