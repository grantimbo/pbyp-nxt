import { NextSeo } from "next-seo";

export default function SearchEngineOptimization(props) {
  const {
    seo_title,
    seo_meta_description,
    og_type: type,
    og_title: title,
    og_description: description,
    og_image: image,
    og_url: url,
    og_site_name: site_name,
  } = props;
  let images = [
    {
      url: image,
    },
  ];

  return (
    <NextSeo
      title={seo_title ? seo_title : "Powered by Pen — ASH x GRANT"}
      description={
        seo_meta_description
          ? seo_meta_description
          : "Powered by Pen is an art and design studio that provides concept design, illustration, 3D modeling, product design, graphic design, logo and branding services.We pride ourselves on providing superior quality work, client satisfaction, and outstanding art and design services for our clients throughout the years of service."
      }
      openGraph={{
        type,
        title,
        description,
        images,
        url,
        site_name,
      }}
    />
  );
}
