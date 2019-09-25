import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"


const Introduction = () => {
  const data = useStaticQuery(graphql`
    query IntroductionQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        My name is Scott Miles and I'm a software engineer living in Houston and working in the energy industry.
        My passions in software lie at the intersection of scalability and elegance.  I
        strive to make projects and systems robust and stable, and at the same time easy
        to create, use, and maintain.
        <br /><br />
        I find that writing is a great way to express my thoughts and feelings about
        almost any subject, and while generally the musings on this site will be
        centered around technology, math, and science, they may also dip into other
        things.  The content here should feel more like a stream of consciousness than
        anything else.  Just random thoughts about random things.
      </p>
    </div>
  );
};

export default Introduction;
