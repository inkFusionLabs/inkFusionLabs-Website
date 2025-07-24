// inkFusionLabs - Black and Red Theme Script

document.addEventListener('DOMContentLoaded', function () {
  // Set body background and text color
  document.body.style.background = '#000';
  document.body.style.color = '#fff';
  document.body.style.fontFamily = 'Inter, Arial, sans-serif';

  // Style all headings red
  document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(el => {
    el.style.color = '#e11d48'; // Red-600
  });

  // Style all links red
  document.querySelectorAll('a').forEach(el => {
    el.style.color = '#ef4444'; // Red-500
    el.style.textDecoration = 'underline';
  });

  // Style all footers dark red
  document.querySelectorAll('footer').forEach(el => {
    el.style.color = '#b91c1c'; // Red-700
  });

  // Optionally update main content if needed
  const main = document.querySelector('main');
  if (main) {
    main.style.minHeight = '100vh';
    main.style.display = 'flex';
    main.style.flexDirection = 'column';
    main.style.alignItems = 'center';
    main.style.justifyContent = 'center';
    main.style.background = '#000';
    main.style.color = '#fff';
  }
}); 