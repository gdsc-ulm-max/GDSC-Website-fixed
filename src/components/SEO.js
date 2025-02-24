import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ seo }) => (
  <Helmet>
    <title>{seo.title}</title>
    <meta name="description" content={seo.description} />
    <meta property="og:title" content={seo.title} />
    <meta property="og:description" content={seo.description} />
    <meta name="twitter:title" content={seo.title} />
    <meta name="twitter:description" content={seo.description} />
  </Helmet>
);

export default SEO;
