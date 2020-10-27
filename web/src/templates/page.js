import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Project from '../components/project'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    sampleProject: sanitySampleProject(id: {eq: $id}) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      title
      slug {
        current
      }
      _rawBody
      
    }
  }
`

const PageTemplate = props => {
  const {data, errors} = props
  const project = data && data.sampleProject
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {project && <SEO title={project.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4">Hello, world!</h1>
        </div>
      </div>
    </Layout>
  )
}

export default PageTemplate
