document.querySelectorAll('.accordion__trigger').forEach((trigger) => {
  trigger.addEventListener('click', function () {
    // Закрываем все открытые элементы
    document.querySelectorAll('.accordion__content').forEach((content) => {
      content.classList.remove('active');
    });
    document.querySelectorAll('.accordion__trigger').forEach((trig) => {
      trig.classList.remove('active');
    });

    // Открываем текущий элемент
    const content = this.nextElementSibling;
    content.classList.toggle('active');
    this.classList.toggle('active');
  });
});
