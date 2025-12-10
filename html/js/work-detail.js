const deriveRoot = () => (window.location.pathname.includes("/work/") ? "../../" : "./");

const deriveSlug = () => {
  const parts = window.location.pathname.split("/").filter(Boolean);
  const last = parts[parts.length - 1] || "";
  return last.toLowerCase() === "index.html" ? parts[parts.length - 2] : last;
};

const fetchWorkData = async (rootPath) => {
  const res = await fetch(`${rootPath}data/work-data.json`);
  if (!res.ok) throw new Error("Unable to load work data");
  return res.json();
};

const initCursor = () => {
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  if (!dot || !ring) return;

  window.addEventListener("mousemove", (e) => {
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    ring.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 160, fill: "forwards" });
  });
};

const initResumeDownload = (rootPath) => {
  const btn = document.getElementById("download-resume");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = `${rootPath}Darshana-Perera-Resume.pdf`;
    link.download = "Darshana-Perera-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
};

const renderWork = (work, workData, rootPath) => {
  const heroImg = document.getElementById("work-hero");
  const titleEl = document.getElementById("work-title");
  const clientEl = document.getElementById("work-client");
  const yearEl = document.getElementById("work-year");
  const descEl = document.getElementById("work-description");
  const techWrap = document.getElementById("work-technologies");
  const featureWrap = document.getElementById("work-features");
  const otherWrap = document.getElementById("other-works");

  if (heroImg) heroImg.src = `${rootPath.replace("./", "")}${work.image}`;
  if (titleEl) titleEl.textContent = work.title;
  if (clientEl) clientEl.textContent = work.client;
  if (yearEl) yearEl.textContent = work.year || "";
  if (descEl) descEl.textContent = work.description || "";

  if (techWrap && Array.isArray(work.technologies)) {
    techWrap.innerHTML = work.technologies
      .map((tech) => `<span class="bg-softGray py-2 px-4 rounded-full text-sm border border-mistGray">${tech}</span>`)
      .join("");
  }

  if (featureWrap && Array.isArray(work.features)) {
    featureWrap.innerHTML = work.features
      .map(
        (item) =>
          `<li class="flex items-start gap-3 text-secondary"><span class="text-primary mt-1">•</span><span>${item}</span></li>`
      )
      .join("");
  }

  if (otherWrap) {
    const others = workData.filter((w) => w.slug !== work.slug).slice(0, 2);
    otherWrap.innerHTML = others
      .map(
        (item) => `
        <a href="../${item.slug}/" class="group flex flex-col gap-3">
          <div class="relative w-full h-64 rounded-xl overflow-hidden">
            <img src="${rootPath.replace("./", "")}${item.image}" alt="${item.title}" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div>
            <h5 class="group-hover:text-primary transition-colors text-lg sm:text-xl">${item.title}</h5>
            <p class="text-sm text-secondary">${item.client}</p>
          </div>
        </a>
      `
      )
      .join("");
  }
};

const initWorkPage = async () => {
  const rootPath = deriveRoot();
  const slug = deriveSlug();
  try {
    const data = await fetchWorkData(rootPath);
    const work = data.workData.find((item) => item.slug === slug);
    if (!work) {
      const container = document.getElementById("work-content");
      if (container) {
        container.innerHTML = `<p class="text-secondary">Work not found.</p>`;
      }
      return;
    }
    renderWork(work, data.workData, rootPath);
  } catch (error) {
    console.error("Failed to load work page", error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const rootPath = deriveRoot();
  initCursor();
  initResumeDownload(rootPath);
  initWorkPage();
});
