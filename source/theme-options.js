const navConfig = {
  'Core Concepts': {
    url: '/exercises/recap-core-concepts',
    description:
      'The Lego blocks everyone talks about.'
  },
  'Cheatsheet': {
    url: 'https://linuxacademy.com/site-content/uploads/2019/04/Kubernetes-Cheat-Sheet_07182019.pdf',
    description:
      'Command incantations to perform common operations.'
  },
  'Setting up a local dev cluster': {
    url: 'https://kind.sigs.k8s.io/docs/user/quick-start/',
    description:
      "The quickest way I've found so far to get a cluster up and running."
  },
};

const footerNavConfig = {
  Docs: {
    href: 'https://kubernetes.io/',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  Contribute: {
    href: 'https://github.com/ciriarte/pank8s'
  },
};

module.exports = {
  siteName: 'Pank8s',
  menuTitle: 'Yummy Pank8s',
  segmentApiKey: 'wgrIo8Bul0Ujl8USETG3DB6hONdy4kTg',
  algoliaApiKey: '768e823959d35bbd51e4b2439be13fb7',
  algoliaIndexName: 'pank8sdata',
  baseUrl: 'https://pank8s.dev',
  twitterHandle: 'ciriarte',
  logoLink: 'https://pank8s.dev/',
  defaultVersion: 'default',
  navConfig,
  footerNavConfig
};
