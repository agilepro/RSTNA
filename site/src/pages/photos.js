import * as React from "react"

import Layout from "../components/layout"
import {Seo} from "../components/seo"
import DonateButton from "../components/donateButton"
import { graphql } from "gatsby"
import {getImage, GatsbyImage} from "gatsby-plugin-image"

const PhotoPage = ({data}) => (
  <Layout>
    <div className="container  my-5">
      <div className="container">
        <h1>Photo Gallery</h1>
        {data.photoList.edges.map(file => {
          const image = getImage(file.node.childImageSharp.fluid);
          return (
            <div key="{file.node.id}" class="thumbHolder">
              <p><a href={file.node.publicURL}>
              <GatsbyImage 
                class="thumbnail"
                image={file.node.childImageSharp.gatsbyImageData}
                alt={file.node.relativePath}
                />
              </a></p>
            </div>
          );
        })}
        <div class="stupidFloatEnder"></div>
        <DonateButton/>
      </div>
    </div>
  </Layout>
)

export default PhotoPage

export const photoQuery = graphql`
query {
  photoList: allFile(
      filter: {dir: {regex: "/photos.2025/"}, 
               extension: {eq: "jpg"}}) {
    edges {
      node {
        id
        base
        relativePath
        publicURL
        childImageSharp {
          gatsbyImageData(height:600, width:900)
        }
        extension
      }
    }
  }
}
`