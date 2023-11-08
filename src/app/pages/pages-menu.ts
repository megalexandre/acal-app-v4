import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Início',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Cadastros',
    icon: 'file-text-outline',
    children: [
      {
        title: 'Clientes',
        link: '/pages/registration/customer',
      },
      {
        title: 'Categorias',
        link: '/pages/registration/category',
      },
      {
        title: 'Áreas',
        link: '/pages/registration/area',
      },
      {
        title: 'Endereços',
        link: '/pages/registration/address',
      },
    ]
  },

  {
    title: 'Financeiro',
    icon: 'book-open-outline', 
    children: [
      {
        title: 'Faturas',
        link: '/pages/financial',
      },
      {
        title: 'Ligações',
        link: '/pages/registration/link',
      },
    ]
  },

  {
    title: 'Água',
    icon: 'droplet-outline', 
    children: [
      {
        title: 'Qualidade',
        link: '/pages/quality/quality',
      },
      {
        title: 'Hidrômetro',
        link: '/pages/quality/hydrometer',
      },
    ]
  },

 
];
