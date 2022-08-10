import React from "react"
import { graphql } from "gatsby"
import RecipeList from "../components/RecipeList"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipeBlog(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipeBlog.nodes
  return (
    <Layout>
      <SEO title={pageContext.tag} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipeList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export default TagTemplate
