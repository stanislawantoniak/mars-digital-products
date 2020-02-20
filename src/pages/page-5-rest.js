import React, {Component} from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { withApollo } from 'react-apollo'

class Page5 extends Component {
  
    state={
        id:'',
        salsifyResponse:[]
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
    const data= this.state.salsifyResponse;
    console.log("Data from Back end1",data);
    console.log("Data from Back end2",data['salsify:id']);
        return (
        <Layout>
        <SEO title="Home" />
        <h1>Welcome to Mars Digital Product Experience - REST Integration</h1>
       
          <label>Enter Product ID </label>
          <input type="text" name="searchText" onChange={this.handleChange}/>
          user entered text {this.state.id}
        <h3>Product Details.</h3>
        <button
            onClick={() => this._executeSearch_Rest()}
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
          {data ?
             <tr key={data['salsify:id']}>
                    <td>{data['salsify:id']}</td>
                    <td>{data['salsify:system_id']}</td>
                    <td>{data['SAP Product Title']}</td>
                    <td>{data['Retail Price']}</td>              
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
              {data['salsify:id'] ?
              <tbody id={data['salsify:id']}>
                {data['salsify:digital_assets'].map(( index) => (              
                  <tr key={index}>
                    <td>{index['salsify:name']}</td>
                    <td>
					{ !index['salsify:url'].endsWith('jpg') ?
                    <iframe
                      src={index['salsify:url'].replace('http','https')}
                      title="Salsify Viedo"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      frameBorder="5"
                      width="500"
                      height="500"
                      webkitallowfullscreen="false"
                      mozallowfullscreen="false"
                      
                    />
					: <img src={index['salsify:url'].replace('http','https')}></img> 
					}
                    </td>              
                  </tr>
                ))}
              </tbody> 
              :null}
            </table>
          </div>

        <table>
      <tr>
        <td>
    <Link to="/page-2-static/">Static Graph QL Example</Link></td>
    <td><Link to="/page-1-gql/">Dynamic Graph QL Example</Link></td>
    <td><Link to="/page-5-rest/">Normal Rest Example</Link></td>
    </tr>
    </table>
      </Layout>
      )
  }

  _executeSearch_Rest = () => {

    const {id}=this.state;  
    let currentComponent=this;
    
    try
    {
      	const salsifyUrl='https://dev.api.effem.com/salsify-product-proxy-poc/product/'+id;
			//'https://app.salsify.com/api/v1/orgs/s-81e351da-195f-412c-8fd8-f011973f6ab1/products/'+id+'/';
      	console.log("Salsify URL",salsifyUrl);
      	return fetch(salsifyUrl, {
        	method: 'get',
        	credentials: 'omit'
    	}).then( (response) => {
        	console.log("Response from End point1",response)
        	return response.text();
    	}).then( (responseBody) => {
     	   try {
				const jsonResponse = JSON.parse(responseBody);
        	  	console.log("Response from End point2",jsonResponse)          
          		currentComponent.setState({ salsifyResponse:  jsonResponse})
          		return jsonResponse;

        	} catch (error) {
    
	      		console.log("Response from End point3",error)
            	return responseBody;
        	
			}
    	});
        
  }
  catch(error)
  {
    console.log("Error********",error);
  }
    
   
  }

   
}
export default withApollo(Page5)
