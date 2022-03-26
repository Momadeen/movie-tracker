import { v4 as uuid } from 'uuid';

export const movies = [
  {
    title: 'The Batman (2022)',
    releaseYear: 2021,
    rating: 5,
    imgUrl: 'https://alwafd.news/images/images/thebatman-newbutton-1643232430643.jpeg',
    description:
      "With Spider-Man' s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    createdAt: 10,
    id: uuid()
  },
  {
    title: 'Scream',
    releaseYear: 2021,
    rating: 3,
    imgUrl: 'https://flxt.tmsimg.com/assets/p18852_p_v10_al.jpg',
    description:
      "With Spider-Man' s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    createdAt: 10,
    id: uuid()
  },
  {
    title: 'Spider-Man: No Way Home',
    releaseYear: 2021,
    rating: 5,
    imgUrl:
      'https://etbilarabi.com/sites/default/files/styles/article_landing/public/2021-11/WhatsApp%20Image%202021-11-29%20at%2012.jpeg?itok=SgKc9fcR',
    description:
      "With Spider-Man' s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    createdAt: 10,
    id: uuid()
  }
];
