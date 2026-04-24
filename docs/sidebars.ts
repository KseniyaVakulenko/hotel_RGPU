import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Гостиница РГПУ',
      items: [
        'docs/hotel-project/plan',
        'docs/hotel-project/users',
        'docs/hotel-project/architecture',
      ],
    },
  ],
};

export default sidebars;