import PageGeneric from './page-generic'
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo'

class Page2 extends PageGeneric {

	constructor(props) {
		super(props);
		this.setState({ pageId: '2' });
		console.log('page id:', this.state.pageId);
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
					brand
					description
			    	SAPProductTitle
			    	digitalAssets {
			    	  URL
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

export default withApollo(Page2)
