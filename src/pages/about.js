import React from "react"
//import styled from "styled-components"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipeList"
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

const About = ({
  data: {
    allContentfulRecipeBlog: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" description="website about page" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Title </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vero
              cupiditate et velit, aliquid voluptatibus quibusdam. Aliquid
              officia corrupti rem molestiae dicta at nam cum libero.
              Praesentium nisi atque autem?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut
              excepturi porro repudiandae maiores quibusdam aliquid, reiciendis
              atque architecto, accusantium quaerat, tenetur rerum debitis
              libero doloremque perspiciatis? Possimus, eveniet corrupti.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="cooking"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section>
          <section className="featured-recipes">
            <h5>Check out some recipes!</h5>
            <RecipesList recipes={recipes} />
          </section>
        </section>
      </main>
    </Layout>
  )
}

export default About

// const Wrapper = styled.section`
//   margin: 0 auto;

//   img {
//     border-radius: 1rem;
//     height: 350px;
//   }
//   @media (min-width: 992px) {
//     img {
//       height: 500px;
//     }
//   }
// `
