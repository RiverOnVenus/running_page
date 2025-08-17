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

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://run.zhui.dev',
  logo: 'https://image.zhui.dev/file/1738643020712_haiji_602.jpg',
  description: 'Running Page',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://zhui.dev',
    },
    {
      name: 'About',
      url: 'https://zhui.dev/about.html',
    },
  ],
};

export default data;
