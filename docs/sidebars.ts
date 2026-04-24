import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Гостиница РГПУ',
      items: [
        'hotel-project/plan',
        'hotel-project/users',
        'hotel-project/architecture',
      ],
    },
  ],
};

export default sidebars;