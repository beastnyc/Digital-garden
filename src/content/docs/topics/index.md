---
title: Topics
description: Browse topic areas in my digital garden
sidebar:
  label: Topics Overview
  order: 1
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
        
        // If we're on the main topics page
        if (currentPath.includes('/topics') && !currentPath.includes('/topics/programming') && !currentPath.includes('/topics/design') && !currentPath.includes('/topics/writing')) {
          // Ensure proper path format
          if (currentPath.endsWith('/') && !currentPath.endsWith('/index.html')) {
            const newPath = currentPath + 'index.html' + window.location.search + window.location.hash;
            window.history.replaceState(null, '', newPath);
          }
          
          // Fix topic links to ensure they have index.html
          const topicLinks = document.querySelectorAll('a[href*="/topics/"]');
          topicLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes('/topics/') && !href.includes('index.html')) {
              if (href.endsWith('/')) {
                link.setAttribute('href', href + 'index.html');
              } else {
                link.setAttribute('href', href + '/index.html');
              }
            }
          });
          
          // Find and highlight the current link in the sidebar
          const allLinks = document.querySelectorAll('.sidebar-nav a');
          allLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href === '/topics/index.html') {
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

# Topics

Browse through the different topic areas in my digital garden. Each topic contains a collection of notes, thoughts, and resources related to that subject.

## Main Topic Areas

<div class="topic-grid">

### Programming

<a href="/topics/programming/index.html" class="button">View Programming Topics →</a>

Exploring programming languages, software development, web technologies, and coding best practices.

### Design

<a href="/topics/design/index.html" class="button">View Design Topics →</a>

Notes on design principles, user experience, user interfaces, visual design, and design systems.

### Writing

<a href="/topics/writing/index.html" class="button">View Writing Topics →</a>

Thoughts on writing techniques, content creation, documentation, blogging, and technical writing.

</div>

## Other Topic Areas

These are currently being developed:

- Creative Technology
- Personal Knowledge Management
- Motion Design
- Digital Gardens

Feel free to explore any of the topic areas that interest you. Each section contains various notes and resources that I've collected and created over time. 