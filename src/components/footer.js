import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from '../utils/typography';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          social {
            github
          }
        }
      }
    }
  `)

  return (
    <footer
      style={{
        marginTop: rhythm(2.5),
        paddingTop: rhythm(1),
      }}
    >
      <a
        href={`https://github.com/${data.site.siteMetadata.social.github}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </a>
    </footer>
  );
}

export default Footer;