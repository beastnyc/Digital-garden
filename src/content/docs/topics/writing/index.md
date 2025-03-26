---
title: Writing
description: Writing techniques, tips, and resources
sidebar:
  label: Writing
  order: 3
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
        if (window.location.pathname.includes('/topics/writing') && document.querySelector('.sidebar-nav')) {
          const writingLink = document.querySelector('.sidebar-nav a[href*="/topics/writing"]');
          if (writingLink) {
            writingLink.classList.add('current');
          }
        }
      });
---

# Writing

Welcome to the writing section of the digital garden. Here you'll find notes about:

- Content Creation
- Technical Writing
- Blogging
- Documentation
- Storytelling

Feel free to explore the notes below or use the sidebar to navigate to specific topics. 