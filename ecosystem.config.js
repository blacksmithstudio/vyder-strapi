module.exports = {
  apps: [
    {
      name: "vyder-strapi", // Your project name
      cwd: "/home/ubuntu/vyder-strapi", // Path to your project
      script: "npm", // For this example we're using npm, could also be yarn
      args: "start:prod", // Script to start the Strapi server, `start` by default
      env: {
        NODE_ENV: "production",
        DATABASE_HOST: process.env.DATABASE_HOST, // database Endpoint under 'Connectivity & Security' tab
        DATABASE_PORT: process.env.DATABASE_PORT,
        DATABASE_NAME: process.env.DATABASE_NAME, // DB name under 'Configuration' tab
        DATABASE_USERNAME: process.env.DATABASE_USERNAME, // default username
        DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_ACCESS_SECRET: process.env.AWS_ACCESS_SECRET, // Find it in Amazon S3 Dashboard
        AWS_REGION: process.env.AWS_REGION,
        AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
      },
    },
  ],
};
