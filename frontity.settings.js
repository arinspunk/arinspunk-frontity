const settings = {
  name: "arinspunk-frontity",
  state: {
    frontity: {
      url: "https://arinspunk.com/",
      title: "Arquivo Arinspunk",
      description: "O arquivo das defuntas Arinspunk, estúdio de design"
    }
  },
  packages: [
    {
      name: "arinspunk-theme"
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://arinspunk.com/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/yoast"
  ]
};

export default settings;