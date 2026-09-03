/*
 * Yusuf Aristokrat — Portfolio
 * Vanilla JS. No build step, no dependencies.
 */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Mobile nav ---------------- */
  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- Active link highlighting ---------------- */
  var sections = document.querySelectorAll("main section[id]");
  var navAnchors = document.querySelectorAll(".nav-links a[href^='#']");

  if (sections.length && navAnchors.length && "IntersectionObserver" in window) {
    var byId = {};
    navAnchors.forEach(function (a) {
      byId[a.getAttribute("href").slice(1)] = a;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = byId[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            navAnchors.forEach(function (a) {
              a.classList.remove("active");
            });
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (s) {
      observer.observe(s);
    });
  }

  /* ---------------- Scroll reveal ---------------- */
  var revealEls = document.querySelectorAll(".reveal");

  if (revealEls.length) {
    if ("IntersectionObserver" in window && !reduceMotion) {
      var revealObserver = new IntersectionObserver(
        function (entries, obs) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      revealEls.forEach(function (el) {
        revealObserver.observe(el);
      });
    } else {
      revealEls.forEach(function (el) {
        el.classList.add("is-visible");
      });
    }
  }

  /* ---------------- Copy email to clipboard ---------------- */
  var copyBtn = document.querySelector("[data-copy-email]");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var email = copyBtn.getAttribute("data-copy-email");
      var feedback = document.querySelector(".copy-feedback");
      if (navigator.clipboard && email) {
        navigator.clipboard
          .writeText(email)
          .then(function () {
            if (feedback) feedback.textContent = "Copied " + email + " to clipboard.";
          })
          .catch(function () {
            if (feedback) feedback.textContent = email;
          });
      } else if (feedback) {
        feedback.textContent = email;
      }
    });
  }

  /* ---------------- Starfield canvas ---------------- */
  var canvas = document.getElementById("starfield");
  if (!canvas || !canvas.getContext) return;

  var ctx = canvas.getContext("2d");
  var stars = [];
  var STAR_COUNT = 160;
  var width, height, dpr;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seedStars();
  }

  function seedStars() {
    stars = [];
    for (var i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.35,
        twinkleSpeed: Math.random() * 0.015 + 0.004,
        phase: Math.random() * Math.PI * 2,
        color: Math.random() > 0.85 ? "77,238,234" : "255,255,255"
      });
    }
  }

  function drawStatic() {
    ctx.clearRect(0, 0, width, height);
    stars.forEach(function (s) {
      ctx.beginPath();
      ctx.fillStyle = "rgba(" + s.color + "," + s.baseAlpha + ")";
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  var frame = 0;
  var rafId;

  function animate() {
    frame++;
    ctx.clearRect(0, 0, width, height);
    stars.forEach(function (s) {
      var alpha = s.baseAlpha + Math.sin(frame * s.twinkleSpeed + s.phase) * 0.3;
      ctx.beginPath();
      ctx.fillStyle = "rgba(" + s.color + "," + Math.max(0, Math.min(1, alpha)) + ")";
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });
    rafId = requestAnimationFrame(animate);
  }

  resize();
  window.addEventListener("resize", resize);

  if (reduceMotion) {
    drawStatic();
  } else {
    animate();
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        rafId = requestAnimationFrame(animate);
      }
    });
  }
})();
