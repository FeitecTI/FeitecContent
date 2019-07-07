import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'


const DeleteList = ({ data }) => (
  <div>
    <ul>
      {data.allStrapiDeletearticle.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.tittle}</Link>
          </h2>
          <p>{document.node.content}</p>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default DeleteList


