---
title: Design
description: Design principles, practices, and resources
sidebar:
  label: Design
  order: 2
head:
  - tag: script
    content: |
      // Enhanced script for fixing routing issues
      document.addEventListener('DOMContentLoaded', () => {
        // Fix for direct URL access
        if (window.location.pathname.endsWith('/') && !window.location.pathname.endsWith('/index.html')) {
          const newPath = window.location.pathname + 'index.html' + window.location.search + window.location.hash;
          window.history.replaceState(null, '', newPath);
        }
        
        // Fix for navigation from sidebar
        if (window.location.pathname.includes('/topics/design') && document.querySelector('.sidebar-nav')) {
          const designLink = document.querySelector('.sidebar-nav a[href*="/topics/design"]');
          if (designLink) {
            designLink.classList.add('current');
          }
        }
      });
---

# Design

Welcome to the design section of the digital garden. Here you'll find notes about:

- UX/UI Design
- Visual Design
- Design Systems
- Typography
- Color Theory

Feel free to explore the notes below or use the sidebar to navigate to specific topics. 