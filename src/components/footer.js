import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from '../utils/typography';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          social {
            email
            github
          }
        }
      }
    }
  `);

  const { social } = data.site.siteMetadata

  return (
    <footer
      style={{
        marginTop: rhythm(2.5),
        paddingTop: rhythm(1),
      }}
    >
      <a
        href={`https://github.com/${social.github}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </a>
      {' '}
      &bull;{' '}
      <a
        href={`mailto:${social.email}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        email
      </a>{' '}
    </footer>
  );
}

export default Footer;