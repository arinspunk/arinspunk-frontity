const settings = {
  "name": "arinspunk-frontity",
  "state": {
    "frontity": {
      "url": "http://frontity-ak:8888/",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      name: "arinspunk-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://frontity-ak:8888/",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/yoast"
  ]
};

export default settings;
