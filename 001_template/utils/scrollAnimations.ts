'use client';

import { useEffect } from 'react';

/**
 * Initialize intersection observer for scroll-triggered animations
 * Adds 'visible' class to elements with 'animate-in' when they enter viewport
 */
export function useScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with animate-in class
    const elements = document.querySelectorAll('.animate-in');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}

/**
 * Initialize parallax scrolling effects
 * Applies transform based on scroll position to create depth
 */
export function useParallaxScroll(elementId: string, speed: number = 0.3) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const element = document.getElementById(elementId);

      if (element) {
        element.style.transform = `translateY(${scrollY * speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [elementId, speed]);
}

/**
 * Initialize hero content fade and blur on scroll
 * Creates immersive scroll effect for hero sections
 */
export function useHeroScrollEffect(contentId: string, imageId?: string) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const content = document.getElementById(contentId);
      const image = imageId ? document.getElementById(imageId) : null;

      if (content) {
        const opacity = Math.max(1 - scrollY / 500, 0);
        content.style.opacity = opacity.toString();
      }

      if (image) {
        const blurAmount = Math.min(scrollY / 50, 10);
        image.style.filter = `blur(${blurAmount}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [contentId, imageId]);
}
