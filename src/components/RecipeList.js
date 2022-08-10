import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

// empty array below to prevent error
const RecipeList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const { id, title, image, prepTime, cookTime } = recipe
        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true })
        return (
          <Link className="recipe" key={id} to={`/${slug}`}>
            {recipe.title}
            <GatsbyImage
              className="recipe-img"
              alt={title}
              image={pathToImage}
            />
            <h5>{title}</h5>
            <p>
              Prep : {prepTime}min | Cook: {cookTime}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipeList
