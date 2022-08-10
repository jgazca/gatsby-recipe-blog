import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"
import Layout from "../components/Layout"
import slugify from "slugify"
import SEO from "../components/SEO"

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipeBlog(title: { eq: $title }) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
      }
    }
  }
`

const RecipeTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    content,
    prepTime,
    servings,
    description: { description },
    image,
  } = data.contentfulRecipeBlog
  const pathToImage = getImage(image)
  const { tags, instructions, ingredients, tools } = content
  return (
    <Layout>
      <SEO title={title} description={description} />
      <main className="page">
        <div className="recipe-page">
          {/* <h2>{title}</h2> */}
          <section className="recipe-hero">
            <GatsbyImage
              className="about-img"
              image={pathToImage}
              alt={title}
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>servings</h5>
                  <p>{servings} </p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags:{" "}
                {tags.map((tag, index) => {
                  const slug = slugify(tag, { lower: true })
                  return (
                    <Link to={`/tags/${slug}}`} key={index}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>INSTRUCTIONS</h4>
              {instructions.map((item, index) => {
                return (
                  <div className="single-instruction" key={index}>
                    <header>
                      <p>step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                )
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>INGREDIENTS</h4>
                {ingredients.map((item, index) => {
                  return (
                    <p className="single-ingredient" key={index}>
                      {item}
                    </p>
                  )
                })}
              </div>
            </article>
            <article className="second-column">
              <div>
                <h4>TOOLS</h4>
                {tools.map((item, index) => {
                  return (
                    <p className="single-tool" key={index}>
                      {item}
                    </p>
                  )
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export default RecipeTemplate

{
  /* adding props param connects recipe to page */
}
{
  /* <h2>{props.params.title}</h2> */
}
