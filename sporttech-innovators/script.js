// FAQ Accordion Functionality
document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    const isOpen = faqItem.classList.contains('open');

    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach((item) => item.classList.remove('open'));

    // Toggle current FAQ item
    if (!isOpen) faqItem.classList.add('open');
  });
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
