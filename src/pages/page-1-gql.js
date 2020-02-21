import PageGeneric from './page-generic'
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo'
import Renderer from './renderer';

class Page4 extends PageGeneric {

	render() {
		const renderer = new Renderer();
		const data = this.state.filterData;
		return renderer.produce(data, _executeSearch)
	}

	_executeSearch = async () => {

		const { id } = this.state;
		const FEED_SEARCH_QUERY = gql`

 query {
    product(id:${id}) {
   	id
	systemId
    name
    retailPrice
    SAPProductTitle
    digitalAssets {
      url
      name
    }
  }  
}`

		console.log("page-4 id", id);
		console.log("page-4 FEED_SEARCH_QUERY", FEED_SEARCH_QUERY);

		const result = await this.props.client.query({
			query: FEED_SEARCH_QUERY,
			variables: { id },
		})
		const links = result.data;
		console.log("Data::: ", links);

		this.setState({ filterData: links });


	}

}

export default withApollo(Page4)
