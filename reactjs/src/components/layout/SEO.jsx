import { useEffect } from "react";

const ensureMeta = ({ name, property, content }) => {
  if (!content) return;
  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    if (name) tag.setAttribute("name", name);
    if (property) tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const ensureLink = ({ rel, href }) => {
  if (!href) return;
  const selector = `link[rel="${rel}"]`;
  let link = document.head.querySelector(selector);

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
};

const SEO = ({
  title,
  description,
  url,
  image,
  type = "website",
  keywords,
  siteName,
}) => {
  useEffect(() => {
    if (title) document.title = title;

    ensureMeta({ name: "description", content: description });
    ensureMeta({ name: "keywords", content: Array.isArray(keywords) ? keywords.join(", ") : keywords });

    // Open Graph
    ensureMeta({ property: "og:title", content: title });
    ensureMeta({ property: "og:description", content: description });
    ensureMeta({ property: "og:type", content: type });
    ensureMeta({ property: "og:url", content: url });
    ensureMeta({ property: "og:image", content: image });
    ensureMeta({ property: "og:site_name", content: siteName });

    // Twitter
    ensureMeta({ name: "twitter:card", content: "summary_large_image" });
    ensureMeta({ name: "twitter:title", content: title });
    ensureMeta({ name: "twitter:description", content: description });
    ensureMeta({ name: "twitter:image", content: image });

    // Canonical
    ensureLink({ rel: "canonical", href: url });
  }, [description, image, keywords, siteName, title, type, url]);

  return null;
};

export default SEO;

