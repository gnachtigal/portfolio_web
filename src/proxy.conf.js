const PROXY_CONFIG = [
  {
    context: [
      "/resume",
    ],
    target: "https://localhost:5001",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
