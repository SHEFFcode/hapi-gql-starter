const { ApolloServer } = require('apollo-server-hapi')
const Hapi = require('hapi')
const typeDefs = require('./schema/schema')
const resolvers = require('./resolvers/resolvers')

async function StartServer() {
  const server = new ApolloServer({ typeDefs, resolvers })

  const app = new Hapi.server({
    port: 4000
  })

  await server.applyMiddleware({
    app
  })

  await server.installSubscriptionHandlers(app.listener)

  await app.start()
}

StartServer().catch(error => console.log(error))
