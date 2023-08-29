module.exports = {
  reactStrictMode: false,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/developer-portfolio' : '',
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};
