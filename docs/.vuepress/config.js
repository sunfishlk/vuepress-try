module.exports = {
  title: '全国旅游攻略',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '开发者主页', link: 'https://sunfishlk.github.io' },
      // {
      //   text: 'Language',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese/' },
      //     { text: 'Japanese', link: '/language/japanese/' }
      //   ]
      // }
    ],
    sidebar: [
      '/',
      ['/about','关于'],
      ['/config','配置'],
      ['/support','支持'],
      ['help','帮助'],
      ['/contact','联系我们'],
    ],
    // sidebar:'auto',
    displayAllHeaders: true ,
    activeHeaderLinks: false,
    smoothScroll:true,
  }
}