import { defineConfig } from "vuepress/config";

export default defineConfig({
  title: "솔리디티 핸드북",
  description: "솔리디티를 쉽고 빠르게 배우는 방법",
  head: [["meta", { name: "theme-color", content: "#656565" }]],
  base: "/solidity/",
  /**
   * Type is `DefaultThemeConfig`
   */
  themeConfig: {
    sidebar: [
      {
        title: "handbook",
        path: "/handbook/",
        collapsable: false,
        children: ["/handbook/테스트/개요"],
      },
    ],
    // repo: "vuejs/vuepress",
    editLinks: true,
    docsDir: "packages/docs/docs",
    nav: [
      {
        text: "📓 HandBook",
        link: "/handbook/",
      },
      // {
      //   text: "VuePress",
      //   link: "https://v1.vuepress.vuejs.org",
      // },
    ],
  },
});
