import React from "react"
import TagsList from "./TagsList"
import RecipeList from "./RecipeList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipeBlog(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
        }
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipeBlog.nodes
  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipeList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
