import React, { Component } from 'react';
import Post from './Post';

import Profile from '../assets/profile.jpg'
import ProfileRafael from '../assets/profileRafael.jpg'

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Rafael Martins Rodrigues',
          avatar: ProfileRafael
        },
        date: '04 Set 2019',
        content: 'Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Pra lá , depois divoltis porris, paradis. ',
        comments: [
          {
            id: 1,
            author: {
              name: 'Arthur Henrique',
              avatar: Profile
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 2,
            author: {
              name: 'Rafael Martins Rodrigues',
              avatar: ProfileRafael
            },
            content: "Suco de cevadiss deixa as pessoas mais interessantis. Paisis, filhis, espiritis santis."
          },
          {
            id: 3,
            author: {
              name: 'Arthur Henrique',
              avatar: Profile
            },
            content: "Pra lá , depois divoltis porris, paradis. Suco de cevadiss deixa as pessoas mais interessantis. Paisis, filhis, espiritis santis."
          }
        ],
      },
      {
        id: 2,
        author: {
          name: 'Arthur Henrique',
          avatar: Profile
        },
        date: '04 Set 2019',
        content: 'Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Cevadis im ampola pa arma uma pindureta.',
        comments: [
          {
            id: 4,
            author: {
              name: 'Rafael Martins Rodrigues',
              avatar: ProfileRafael
            },
            content: "Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. A ordem dos tratores não altera o pão duris."
          }
        ],
      },
      {
        id: 3,
        author: {
          name: 'Rafael Martins Rodrigues',
          avatar: ProfileRafael
        },
        date: '04 Set 2019',
        content: 'Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Cevadis im ampola pa arma uma pindureta.',
        comments: [
          {
            id: 5,
            author: {
              name: 'Rafael Martins Rodrigues',
              avatar: ProfileRafael
            },
            content: "Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. A ordem dos tratores não altera o pão duris."
          }
        ],
      }
    ]
  };
  
  render() {
    const { posts } = this.state;
    return (
      <>
        <ul className="ContainerPostList">
          { posts.map(post => <Post key={String(post.id)} post={post} />) }
        </ul>
      </>
    );
  }
}
