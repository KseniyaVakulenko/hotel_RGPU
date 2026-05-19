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
        'hotel-project/brd-srs',      // добавить
        'hotel-project/gost-15288',    // добавить
        'hotel-project/api-spec',      // добавить
      ],
    },
  ],
};

export default sidebars;