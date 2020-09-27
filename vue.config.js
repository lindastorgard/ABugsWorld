module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/scss/_global.scss";
            @import "@/scss/_mixins.scss";
          `,
      },
    },
  },
};
