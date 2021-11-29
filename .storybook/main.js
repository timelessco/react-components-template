module.exports = {
  framework: "@storybook/react",
  core: { builder: "webpack5" },
  features: { storyStoreV7: true, babelModeV7: true },
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
