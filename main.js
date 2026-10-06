(function () {
  const S = window.SITE, $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const media = (img, label) => img ? `<img src="${esc(img)}" alt="${esc(label)}" loading="lazy">` : `<div class="ph">${esc(label)}</div>`;

  /* ---------- Render sections from data.js ---------- */
  $("aboutGrid").innerHTML = S.about.map((a) =>
    `<article class="card reveal"><h3>${esc(a.title)}</h3><p>${esc(a.text)}</p></article>`).join("");

  $("skillGrid").innerHTML = S.skills.map((g) =>
    `<article class="card skill-group reveal"><h3>${esc(g.group)}</h3><div class="chips">${
      g.items.map(([n, d]) => `<div class="skill" tabindex="0">${esc(n)}<small>${esc(d)}</small></div>`).join("")
    }</div></article>`).join("");

  $("projectGrid").innerHTML = S.projects.map((p) =>
    `<article class="card project reveal"><div class="shot">${media(p.image, p.name + " screenshot")}</div>
     <div class="body"><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p>
     <div class="tags">${p.tech.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
     <div class="actions"><a class="btn primary sm" href="${esc(p.demo)}" target="_blank" rel="noopener">Live Demo</a>
     <a class="btn ghost sm" href="${esc(p.github)}" target="_blank" rel="noopener">GitHub</a></div></div></article>`).join("");

  $("serviceGrid").innerHTML = S.services.map(([t, d]) =>
    `<div class="card reveal"><h4>${esc(t)}</h4><p>${esc(d)}</p></div>`).join("");

  $("masonry").innerHTML = S.gallery.map((g) =>
    `<figure class="tile reveal" style="height:${+g.h || 260}px">${g.image ? media(g.image, g.label) : ""}<span>${esc(g.label)}</span></figure>`).join("");

  $("timeline").innerHTML = S.journey.map((j) =>
    `<li class="reveal"><time>${esc(j.when)}</time><h3>${esc(j.title)}</h3><p>${esc(j.text)}</p></li>`).join("");

  $("socials").innerHTML = S.socials.map((s) =>
    `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("");

  /* ---------- Showcase tabs ---------- */
  const names = Object.keys(S.showcase), panel = $("tabPanel");
  const showTab = (name) => {
    document.querySelectorAll(".tab").forEach((b) => b.setAttribute("aria-selected", b.dataset.t === name));
    panel.innerHTML = S.showcase[name].map((i) =>
      `<figure class="tile">${i.image ? media(i.image, i.label) : ""}<span>${esc(i.label)}</span></figure>`).join("");
  };
  $("tabs").innerHTML = names.map((n) => `<button class="tab" role="tab" data-t="${esc(n)}">${esc(n)}</button>`).join("");
  $("tabs").addEventListener("click", (e) => { const b = e.target.closest(".tab"); if (b) showTab(b.dataset.t); });
  showTab(names[0]);

  /* ---------- Nav: sticky style, mobile menu, active link ---------- */
  const nav = $("nav"), burger = $("burger"), links = $("links");
  const setMenu = (open) => { links.classList.toggle("open", open); burger.setAttribute("aria-expanded", open); };
  burger.addEventListener("click", () => setMenu(!links.classList.contains("open")));
  links.addEventListener("click", (e) => e.target.tagName === "A" && setMenu(false));
  document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));
  addEventListener("scroll", () => nav.classList.toggle("stuck", scrollY > 24), { passive: true });

  const navLinks = [...links.querySelectorAll("a:not(.pill)")];
  const spy = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

  /* ---------- Scroll reveal ---------- */
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + "ms"; io.observe(el); });

  /* ---------- Contact form (opens the visitor's email app; swap for Formspree/EmailJS later) ---------- */
  $("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.target, st = $("status"); let ok = true;
    ["name", "email", "message"].forEach((k) => {
      const bad = !f[k].value.trim() || (k === "email" && !f[k].validity.valid);
      f[k].classList.toggle("bad", bad); if (bad) ok = false;
    });
    if (!ok) { st.textContent = "Please fill in your name, a valid email and a message."; return; }
    const body = `${f.message.value}\n\nFrom: ${f.name.value} (${f.email.value})`;
    location.href = `mailto:${S.email}?subject=${encodeURIComponent("Project enquiry: " + f.type.value)}&body=${encodeURIComponent(body)}`;
    st.textContent = "Thanks! Your email app should open with the message ready to send.";
    f.reset();
  });

  $("year").textContent = new Date().getFullYear();
})();
