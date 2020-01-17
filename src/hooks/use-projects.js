import { graphql, useStaticQuery } from "gatsby"

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 600, maxHeight: 320) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `)

  return data.allMdx.nodes.map(({ frontmatter, excerpt }) => ({
    title: frontmatter.title,
    slug: frontmatter.slug,
    image: frontmatter.image,
    excerpt: excerpt,
  }))
}

export default useProjects
