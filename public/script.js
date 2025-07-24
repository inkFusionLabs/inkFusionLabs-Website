document.addEventListener('DOMContentLoaded', function () {
  // Modal logic for Explore Our Apps
  const openModalBtn = document.getElementById('open-apps-modal');
  const modal = document.getElementById('apps-modal');
  const closeModalBtn = document.getElementById('close-apps-modal');

  if (openModalBtn && modal && closeModalBtn) {
    openModalBtn.addEventListener('click', function () {
      modal.classList.add('show');
    });
    closeModalBtn.addEventListener('click', function () {
      modal.classList.remove('show');
    });
    // Close modal when clicking outside content
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  }
});
