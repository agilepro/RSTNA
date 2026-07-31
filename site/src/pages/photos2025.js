import * as React from "react"
import Layout from "../components/layout"
import {Seo} from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Gallery, Item } from "react-photoswipe-gallery"
import "photoswipe/dist/photoswipe.css"
import captions2025 from "../photos/2025/captions.json"

const captionMap = Object.fromEntries(
  captions2025.map(entry => [entry.file.toLowerCase(), entry])
)

const PhotoPage = ({ data }) => (
  <Layout>
    <div className="container my-5">
      <h1>Photo Gallery 2025</h1>
      <Gallery>
        <div className="photo-grid">
          {data.photoList.edges.map(({ node }) => {
            const meta = captionMap[node.base.toLowerCase()] || {}
            const caption = [meta.date, meta.caption].filter(Boolean).join(" — ")
            const imgData = getImage(node.childImageSharp)
            const { width, height } = node.childImageSharp.original

            return (
              <Item
                key={node.id}
                original={node.publicURL}
                thumbnail={node.publicURL}
                width={width}
                height={height}
                caption={caption || node.base}
              >
                {({ ref, open }) => (
                  <div className="photo-thumb-wrapper" onClick={open} ref={ref}>
                    <GatsbyImage
                      image={imgData}
                      alt={meta.caption || node.base}
                      className="photo-thumb"
                    />
                    {(meta.caption || meta.date) && (
                      <div className="photo-thumb-caption">
                        {meta.date && <span className="photo-thumb-date">{meta.date}</span>}
                        {meta.caption && <span>{meta.caption}</span>}
                      </div>
                    )}
                  </div>
                )}
              </Item>
            )
          })}
        </div>
      </Gallery>
    </div>
  </Layout>
)

export default PhotoPage

export const photoQuery = graphql`
  query {
    photoList: allFile(
      filter: {
        dir: { regex: "/photos.2025/" }
        extension: { regex: "/jpg/i" }
      }
      sort: { base: ASC }
    ) {
      edges {
        node {
          id
          base
          publicURL
          childImageSharp {
            gatsbyImageData(width: 300, height: 300, layout: FIXED, transformOptions: { cropFocus: CENTER })
            original {
              width
              height
            }
          }
        }
      }
    }
  }
`
