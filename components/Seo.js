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
      url: image
    }
  ]
  return (
    <NextSeo
      title={
        seo_title
          ? seo_title
          : "PoweredByPen - Ash x Grntx"
      }
      description={
        seo_meta_description
          ? seo_meta_description
          : "Grow Quickly & Predictably Using 2 Simple Systems"
      }
      openGraph={{
        type,
        title,
        description,
        images,
        url,
        site_name
      }}
      twitter={{
        handle:"@poweredbypen",
        site:"@poweredbypen"
      }}
    />
  );
}
