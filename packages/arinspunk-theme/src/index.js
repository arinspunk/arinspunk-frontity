import Root from "./components";
import link from "@frontity/html2react/processors/link";
import image from "@frontity/html2react/processors/image";
import menuHandler from "./components/handlers/menu-handler";

const arinspunkTheme = {
  name: "arinspunk-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      menuUrlMain: "main",
      menuUrlFooter: "footer",
      isMobileMenuOpen: false,
      isUrlVisible: false,
    }
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      },
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      beforeSSR: async ({ state, actions }) => {
        await actions.source.fetch(`/menu/${state.theme.menuUrlMain}/`);
        await actions.source.fetch(`/menu/${state.theme.menuUrlFooter}/`);
      },
    }
  },
  libraries: {
    html2react: {
      processors: [image, link],
    },
    source: {
      handlers: [menuHandler],
    },
  }
};

export default arinspunkTheme;
