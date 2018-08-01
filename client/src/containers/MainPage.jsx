import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Mainpage from '../components/MainPage'

const FeedQuery = gql`
  query {
    hello
  }
`

export default graphql(FeedQuery)(Mainpage)
