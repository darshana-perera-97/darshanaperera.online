export const seoDefaults = {
  siteName: "Darshana Perera | Portfolio",
  siteUrl: "https://darshanaperera.online",
  title: "Darshana Perera | UI/UX Designer & Full-Stack Engineer",
  description:
    "Portfolio of Darshana Perera showcasing product engineering, UI/UX design, and modern web development projects.",
  image: "/images/home/banner/banner-img.png",
  keywords: [
    "Darshana Perera",
    "Product Engineer",
    "UI/UX Designer",
    "React",
    "MERN",
    "Web Development",
    "Portfolio",
  ],
};

export const buildUrl = (path = "/") => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${seoDefaults.siteUrl}${normalized}`;
};

