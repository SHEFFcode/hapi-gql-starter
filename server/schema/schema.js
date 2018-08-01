const { gql } = require('apollo-server-hapi')

module.exports = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`
