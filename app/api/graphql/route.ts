// // export async function GET (request: Request) {
// //     return new Response ("Hello, from API")
// // }

// // export async function GET(request: Request) {
// //   return new Response("Hello, from API", {
// //     status: 200,
// //   });
// // }


// import { startServerAndCreateNextHandler } from '@as-integrations/next';
// import { ApolloServer } from '@apollo/server';
// import { gql } from 'graphql-tag';

// const resolvers = {
//   Query: {
//     hello: () => 'world',
//     getArticles: () => {
//       return[]
//     }
//   },
// };

// const typeDefs = gql`

//    type Article {
//       title: String
//    }
//   type Query {
//     hello: String
//     getArticles: [Article]
//   }
// `;

// const server = new ApolloServer({
//   resolvers,
//   typeDefs,
// });

// const handler = startServerAndCreateNextHandler(server);

// export { handler as GET, handler as POST };


// export async function GET (request: Request) {
//     return new Response ("Hello, from API")
// }

// export async function GET(request: Request) {
//   return new Response("Hello, from API", {
//     status: 200,
//   });
// }


import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';

const resolvers = {
  Query: {
    hello: () => 'world',
    getArticles: () => {
      return[]
    }
  },
};

const typeDefs = gql`

   type Article {
      title: String
   }
  type Query {
    hello: String
    getArticles: [Article]
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
