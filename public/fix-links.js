// Global script to fix topic links
document.addEventListener('DOMContentLoaded', function() {
  // Define the specific topic links that need special handling
  const topicLinks = [
    { path: '/topics/programming', label: 'Programming Section' },
    { path: '/topics/design', label: 'Design Section' },
    { path: '/topics/writing', label: 'Writing Section' },
    { path: '/topics', label: 'Topics Overview' }
  ];
  
  // Find all links in the sidebar
  const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
  
  // Process each link
  sidebarLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // If this is a topic link that doesn't end with index.html, intercept the click
    if (href && topicLinks.some(topic => href.includes(topic.path)) && !href.includes('index.html')) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Redirect to the correct URL with index.html
        let newUrl = href;
        if (newUrl.endsWith('/')) {
          newUrl += 'index.html';
        } else {
          newUrl += '/index.html';
        }
        
        // Navigate to the correct URL
        window.location.href = newUrl;
      });
    }
  });
  
  // If we're on a topic page, highlight the current link
  const currentPath = window.location.pathname;
  for (const topic of topicLinks) {
    if (currentPath.includes(topic.path)) {
      // Find and highlight the corresponding link
      sidebarLinks.forEach(link => {
        const linkText = link.textContent.trim();
        if (linkText === topic.label) {
          link.classList.add('current');
          
          // If this link is in a dropdown, expand it
          const parentDetails = link.closest('details');
          if (parentDetails) {
            parentDetails.setAttribute('open', 'true');
          }
        }
      });
      break;
    }
  }
}); 