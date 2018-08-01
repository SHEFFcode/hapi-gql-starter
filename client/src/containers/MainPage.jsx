import { graphql } from 'react-apollo'
import Mainpage from '../components/MainPage'
import query from '../graphql/queries/query'

export default graphql(query)(Mainpage)
