interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://running.zhui.dev',
  logo: 'https://zhui.dev/assets/img/avatar.jpg',
  description: 'Running Page',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://zhui.dev',
    },
    {
      name: 'About',
      url: 'https://zhui.dev/about',
    },
  ],
};

export default data;
