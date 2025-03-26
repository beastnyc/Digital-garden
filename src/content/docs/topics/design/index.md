---
title: Design
description: Design principles, practices, and resources
sidebar:
  label: Design
  order: 2
head:
  - tag: script
    attrs:
      src: /fix-links.js
  - tag: script
    content: |
      // Enhanced script for fixing routing issues
      document.addEventListener('DOMContentLoaded', () => {
        // Current page path handling
        const currentPath = window.location.pathname;
        
        // If we're on a topics page, ensure proper path format
        if (currentPath.includes('/topics/design')) {
          // Ensure we have index.html in the URL for consistency
          if (currentPath.endsWith('/') && !currentPath.endsWith('/index.html')) {
            const newPath = currentPath + 'index.html' + window.location.search + window.location.hash;
            window.history.replaceState(null, '', newPath);
          }
          
          // Find and highlight the current link in the sidebar
          const allLinks = document.querySelectorAll('.sidebar-nav a');
          allLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes('/topics/design')) {
              link.classList.add('current');
              
              // If this link is inside a collapsible section, expand it
              const parentDetails = link.closest('details');
              if (parentDetails) {
                parentDetails.setAttribute('open', 'true');
              }
            }
          });
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