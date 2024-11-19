import { User } from './mockTypes';

export const users: User[] = [
  {
    id: '1',
    name: 'Oleg',
    username: 'dumik29',
    email: 'dumik.adev@gmail.com',
    avatar: 'https://picsum.photos/id/258/500/900',
    bgPhoto: 'https://picsum.photos/id/200/150',
    followers: 0,
    gifts: 0,
    likes: 0,
    questions: [
      {
        question: 'question',
        author: 'Oleg',
        date: new Date('2023-12-9').toISOString(),
      },
      {
        question: 'How sre you',
        author: null,
        date: new Date('2023-12-2').toISOString(),
      },
    ],
    posts: [
      {
        id: '29',
        question: {
          question: 'Were are you from?',
          author: 'Oleg',
          date: new Date('2023-12-9').toISOString(),
        },
        answer: 'Lviv, best city',
        photo: 'https://picsum.photos/id/670/150',
        likes: [
          {
            postId: '29',
            userId: '2',
          },
          {
            postId: '29',
            userId: '3',
          },
        ],
        date: new Date('2023-9-29').toISOString(),
      },
      {
        id: '2',
        question: {
          question: 'question',
          author: 'Oleg',
          date: new Date('2023-12-9').toISOString(),
        },
        answer: 'text text text text text text text text text text',
        photo: '',
        likes: [],
        date: new Date('2023-9-29').toISOString(),
      },
    ],
    following: [
      {
        id: '2',
        username: 'sonic',
        avatar: '',
      },
    ],
  },

  {
    id: '2',
    name: 'Taras',
    username: 'sonic',
    email: 'pes@dog.com',
    avatar: 'https://picsum.photos/id/50/500/900',
    bgPhoto: 'https://picsum.photos/id/259/500/900',
    followers: 0,
    gifts: 0,
    likes: 0,
    questions: [
      {
        question: 'How sre you, dude?',
        author: null,
        date: new Date('2023-12-2').toISOString(),
      },
    ],
    posts: [
      {
        id: '21',
        question: {
          question: 'question',
          author: 'Oleg',
          date: new Date('2023-10-9').toISOString(),
        },
        answer: 'text',
        photo: 'https://picsum.photos/id/659/500/900',
        likes: [],
        date: new Date('2023-9-29').toISOString(),
      },
    ],
    following: [
      {
        id: '1',
        username: 'dumik',
        avatar: 'https://picsum.photos/id/258/500/900',
      },
    ],
  },
  {
    id: '3',
    name: 'lyoha',
    username: 'lyoha',
    email: 'lyoha@gmail.com',
    avatar: 'https://picsum.photos/id/158/500/900',
    bgPhoto: 'https://picsum.photos/id/218/500/900',
    followers: 0,
    gifts: 0,
    likes: 0,
    questions: [
      {
        question: 'How sre you',
        author: null,
        date: new Date('2023-12-2').toISOString(),
      },
    ],
    posts: [
      {
        id: '20',

        question: {
          question: 'Что тебя неизменно радует?',
          author: 'Oleg',
          date: new Date('2023-12-9').toISOString(),
        },
        answer:
          'Всё, что происходит сейчас, когда-нибудь пройдет. Любые жизненные катаклизмы, омрачающие сегодняшний день, когда-нибудь останутся только блеклым воспоминанием в пучине нашей памяти. Катастрофа сегодня — жизненный опыт завтра. Эмоции утихнут, боль пройдет, пустота заполнится. Мы всегда найдем выход из ситуации, какой бы сложной она не была. Мы так устроены. Так устроена наша психика — искать свет среди тьмы. Мы, как цветы, тянемся к солнцу. Верим в лучшее, часто без всяких на то оснований, и живем, неизменно живем…  Этот свет внутри нас, эта яркая искра, тлеющая даже в самые темные времена, — свидетельство того, что мы созданы для чего-то незыблемого и вечного, для необъятного счастья. Ты понимаешь это, как, наверное, и каждый из нас, хоть иногда и боишься себе в этом признаться. Думаешь, это слишком грандиозно, слишком прекрасно, чтобы быть правдой. Боишься вопросов и еще больше ответов на них. Но они есть. И они всё объясняют. С необычайной точностью и естественностью, оставляя страх и сомнения позади. Даря радость и уверенность в будущем, смысл сегодняшнему дню. …Впереди прекрасное время — время, когда люди «насладятся обилием мира» и «дети, которые у них родятся, не будут страдать». Когда «немой будет радостно восклицать», а «хромой будет скакать, как олень». Когда никто из живущих «не будет трудиться напрасно». Время, когда «то, что было прежде, больше не вспомнится и не будет тяготить сердце».',
        photo:
          'https://cpad.ask.fm/b9f/c0411/73db/4ddc/b961/1888b8aa8735/large/229728.jpg',
        likes: [
          {
            userId: '1',
            postId: '20',
          },
        ],
        date: new Date('2023-9-3').toISOString(),
      },
    ],
    following: [
      {
        id: '',
        username: '',
        avatar: '',
      },
      {
        id: '1',
        username: 'dumik',
        avatar: 'https://picsum.photos/id/258/500/900',
      },
    ],
  },
];
