---
title: Programming
description: Programming-related notes and resources
sidebar:
  label: Programming
  order: 1
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
        if (window.location.pathname.includes('/topics/programming') && document.querySelector('.sidebar-nav')) {
          const programLink = document.querySelector('.sidebar-nav a[href*="/topics/programming"]');
          if (programLink) {
            programLink.classList.add('current');
          }
        }
      });
---

# Programming

Welcome to the programming section of the digital garden. Here you'll find notes about:

- Web Development
- Software Engineering
- Programming Languages
- Best Practices
- Tools and Technologies

Feel free to explore the notes below or use the sidebar to navigate to specific topics. 