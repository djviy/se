import { graphql, useStaticQuery } from "gatsby"

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            description
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 600, maxHeight: 320) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          # excerpt
        }
      }
    }
  `)

  return data.allMdx.nodes.map(({ frontmatter }) => ({
    title: frontmatter.title,
    slug: frontmatter.slug,
    description: frontmatter.description,
    image: frontmatter.image,
  }))
}

export default useProjects
