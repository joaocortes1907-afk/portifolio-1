window.tailwind = window.tailwind || {};

window.tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          },
          colors: {
            abyss: '#04060B',
            midnight: '#070B14',
            navy: '#0A1226',
            navyLight: '#0E1A38',
            royal: '#1D4ED8',
            electric: '#2563EB',
            skyAccent: '#3B82F6',
            iceBlue: '#60A5FA',
          }
        }
      }
    };

(function () {
      'use strict';

      function openLightbox(src, captionText) {
        const lightbox = document.getElementById('photoLightbox');
        const image = document.getElementById('lightboxImg');
        const caption = document.getElementById('lightboxCaption');
        if (!lightbox || !image || !src) return;

        image.src = src;
        image.alt = captionText || 'Registro ampliado';
        if (caption) caption.textContent = captionText || '';
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }

      function closeLightbox() {
        const lightbox = document.getElementById('photoLightbox');
        if (!lightbox) return;
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
        document.body.style.overflow = '';
      }

      document.addEventListener('DOMContentLoaded', function () {
        // As fotos continuam abrindo ampliadas; os slots sem src são ignorados.
        document.querySelectorAll('.slot-img[src]').forEach(function (img) {
          img.addEventListener('click', function () {
            const src = img.getAttribute('src');
            if (!src) return;
            openLightbox(src, img.getAttribute('data-caption') || img.alt);
          });
        });

        const closeButton = document.getElementById('btnCloseLightbox');
        const lightbox = document.getElementById('photoLightbox');
        if (closeButton) closeButton.addEventListener('click', closeLightbox);
        if (lightbox) {
          lightbox.addEventListener('click', function (event) {
            if (event.target === lightbox) closeLightbox();
          });
        }
        document.addEventListener('keydown', function (event) {
          if (event.key === 'Escape') closeLightbox();
        });

        const filterButtons = document.querySelectorAll('.parody-filter-btn');
        const stanzaCards = document.querySelectorAll('.stanza-card');
        filterButtons.forEach(function (button) {
          button.addEventListener('click', function () {
            const selectedFilter = button.getAttribute('data-filter');
            filterButtons.forEach(function (item) {
              item.classList.remove('active', 'bg-[#2563EB]', 'text-white', 'border-blue-400/40', 'shadow-[0_0_16px_rgba(37,99,235,0.35)]');
              item.classList.add('bg-[#0A1226]', 'text-[#CBD5E1]', 'border-blue-500/25');
            });
            button.classList.add('active', 'bg-[#2563EB]', 'text-white', 'border-blue-400/40', 'shadow-[0_0_16px_rgba(37,99,235,0.35)]');
            button.classList.remove('bg-[#0A1226]', 'text-[#CBD5E1]', 'border-blue-500/25');

            stanzaCards.forEach(function (card) {
              const category = card.getAttribute('data-category');
              card.classList.toggle('hidden', selectedFilter !== 'all' && category !== selectedFilter);
            });
          });
        });

        const mobileButton = document.getElementById('btnMobileMenu');
        const mobileDrawer = document.getElementById('mobileNavDrawer');
        if (mobileButton && mobileDrawer) {
          mobileButton.addEventListener('click', function () {
            mobileDrawer.classList.toggle('hidden');
          });
          document.querySelectorAll('.mobile-nav-link').forEach(function (link) {
            link.addEventListener('click', function () {
              mobileDrawer.classList.add('hidden');
            });
          });
        }
      });
    })();
