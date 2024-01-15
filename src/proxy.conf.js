var defaultTarget = 'https://localhost:5001/api';
const PROXY_CONFIG = [
  {
    context: [
      "api/**",
    ],
    target: defaultTarget,
    secure: false,
    changeOrigin: true,
    logLevel: "debug",
    pathRewrite: {
      "^/api": ""
    }
  }
]

module.exports = PROXY_CONFIG;
