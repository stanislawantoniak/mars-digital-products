import React, {Component} from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo'

class Page4 extends Component {
  
    state={
        id:'',
        filterData:[]
    }
    constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }

  handleChange(event) {
    this.setState({id: event.target.value});
    console.log("user Input",event.target.value);
  }
 
  render(){
    const data=this.state.filterData;
    console.log("Data from Back end",data.product)
        return (
        <Layout>
        <SEO title="Home" />
        <h1>Welcome to Mars Digital Product Experience - GraphQL API</h1>
       
          <label>Enter Product ID </label>
          <input type="text" name="searchText" onChange={this.handleChange}/>
          user entered text {this.state.id}
        <h3>Product Details.</h3>
        <button
            onClick={() => this._executeSearch()}
          >
            Search Product
          </button>
          
        <table>
        <thead>
                <tr>
                  <th>ProductId</th>
                  <th>SystemId</th>              
                  <th>SAPProductTitle</th>              
                  <th>Retail Price</th>    
                </tr>
          </thead>
          <tbody>
          {data.product ?
             <tr key={data.product.id}>
                    <td>{data.product.id}</td>
                    <td>{data.product.systemId}</td>
                    <td>{data.product.SAPProductTitle}</td>
                    <td>{data.product.retailPrice}</td>              
            </tr> 
            :<tr><td>"Product details Not Found"</td></tr>}
          </tbody>
    </table>
    <div>
            <h1>Digital Assets</h1>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Video</th>              
                </tr>
              </thead>
              <tbody>
             
              </tbody>
              {data.product ?
              <tbody id={data.product.systemId}>
                {data.product.digitalAssets.map(( index) => (              
                  <tr key={index}>
                    <td>{index.name}</td>
                    <td>
					{ !index.url.endsWith('jpg') ?
                    <iframe
                      src={index.URL}
                      title="Salsify Viedo"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      frameBorder="5"
                      width="500"
                      height="500"
                      webkitallowfullscreen="false"
                      mozallowfullscreen="false"
                      
                    />
					: <img src={index.URL}></img> 
					}
                    </td>              
                  </tr>
                ))}
              </tbody> 
              :null}
            </table>
          </div>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <table>
      <tr>
        <td>
    <Link to="/page-2/">Static Graph QL Example</Link></td>
    <td><Link to="/page-4/">Dynamic Graph QL Example</Link></td>
    <td><Link to="/page-5/">Normal Rest Example</Link></td>
    </tr>
    </table>
      </Layout>
      )
  }

  _executeSearch = async () => {

    const {id}=this.state;  
    const FEED_SEARCH_QUERY =gql`
 query {
     product(id:${id}) {
     systemId
     id
     SAPProductTitle
     retailPrice
     digitalAssets {
       id
       URL
       status
       name        
}
}   
}`

    try
    {
      
     
    console.log("heerrr",id);
    console.log("heerrr",FEED_SEARCH_QUERY);
    const result = await this.props.client.query({
      query: FEED_SEARCH_QUERY,
      variables: {id},      
    })
    const links = result.data;
    console.log("Data::: ",links);
    this.setState({filterData: links});
  }
  catch(error)
  {
    console.log("Error********",error);
  }
    
   
  }

   
}
export default withApollo(Page4)
