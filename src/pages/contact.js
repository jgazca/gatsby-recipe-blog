import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipeList from "../components/RecipeList"
import SEO from "../components/SEO"

export const query = graphql`
  {
    allContentfulRecipeBlog(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
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

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipeBlog.nodes
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            repellat corrupti corporis quam voluptatum, totam ex recusandae
            molestiae cupiditate odio soluta magnam dignissimos id voluptate
            quaerat itaque? Obcaecati, ab voluptas!
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xayvbygz"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
                <button type="submit" className="btn block">
                  Submit
                </button>
              </div>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Check out some recipes!</h5>
          <RecipeList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export default Contact
