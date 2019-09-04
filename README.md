Introdução ao React

Crie uma aplicação do zero utilizando Webpack, Babel, Webpack Dev Server e ReactJS.

Nessa aplicação você irá desenvolver uma interface semelhante com a do Facebook utilizando React.

As informações contidas na interface são estáticas e não precisam refletir nenhuma API REST ou back-end.

Componentes

Header: Responsável por exibir a logo e o link para acessar o perfil;

PostList: Responsável por armazenar os dados da listagem de post, esses dados devem ficar dentro do state do componente e não em uma variável comum, por exemplo:

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'http://url-da-imagem.com/imagem.jpg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'http://url-da-imagem.com/imagem.jpg'
            },
            content: "Conteúdo do comentário"
          }
        ],
      },
      {
        id: 2,
        // Restante dos dados de um novo post
      }
    ]
  };
}
Post: Responsável por exibir os dados do post, esses dados devem vir através de uma propriedade recebida do componente PostList, ou seja, lá no PostList você terá algo assim:

posts.map(post => <Post key={post.id} data={post} />)
Comment: Responsável por exibir um comentário. Os dados do comentário virão por uma propriedade do componente. Dentro do componente Post você terá um novo .map para listar os comentários do post:

data.comments.map(comment => <Comment key={comment.id} data={comment} />)
