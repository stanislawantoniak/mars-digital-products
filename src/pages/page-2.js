import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"



export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        productApi {
          product(id:"1002") {
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
  }
        
}`
  )
  
  return (
    <Layout>
    <SEO title="Home" />    
    <h1>Welcome to Mars Digital Product Experience - Static Query Example</h1>
    <p>Welcome to your Mars Digital Product Experience Application.</p>
    <h3>Product Details.</h3>

    <table>
    <thead>
            <tr>
              <th>ProductId</th>
              <th>SystemId</th>              
              <th>SAPProductTitle</th>              
              <th>Retail Price</th>    
            </tr>
          </thead>
      <tr>
    <td> {data.productApi.product.id}</td>
    <td>{data.productApi.product.systemId}</td>
    <td>{data.productApi.product.SAPProductTitle}</td>
    <td>{data.productApi.product.retailPrice}</td>
    </tr>
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
            {data.productApi.product.digitalAssets.map(( index) => (              
              <tr key={index}>
                <td>{index.name}</td>
                <td>
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
                </td>              
              </tr>
            ))}
          </tbody>
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