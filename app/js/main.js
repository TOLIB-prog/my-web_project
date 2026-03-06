console.log('Js connected');

/* ===== BURGER ===== */
// const burger = document.getElementById('burger');
// const nav = document.getElementById('nav');

// burger.onclick = () => nav.classList.toggle('active');

/* ===== SCROLL ANIMATION ===== */
// const animated = document.querySelectorAll('.animate');

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('active');
//       }
//     });
//   },
//   { threshold: 0.2 },
// );

// animated.forEach((el) => observer.observe(el));

/* ===== LAZY LOAD ===== */
// const lazyImages = document.querySelectorAll('.lazy');

// const imgObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       const img = entry.target;
//       img.src = img.dataset.src;
//       imgObserver.unobserve(img);
//     }
//   });
// });

// lazyImages.forEach((img) => imgObserver.observe(img));

// ==========dialog==========
// document.addEventListener('DOMContentLoaded', () => {
//   const openBtn = document.querySelector('.dialog-demo__open');
//   const dialog = document.querySelector('.dialog');
//   const closeBtn = dialog.querySelector('.dialog__close');

//   openBtn.addEventListener('click', () => {
//     dialog.show();
//     requestAnimationFrame(() => {
//       dialog.classList.add('dialog--open');
//     });
//   });

//   closeBtn.addEventListener('click', () => {
//     dialog.classList.remove('dialog--open');

//     dialog.addEventListener(
//       'transitionend',
//       function handler() {
//         dialog.close();
//         dialog.removeEventListener('transitionend', handler);
//       },
//       { once: true },
//     );
//   });
// });

// Ждём загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  // ===== BURGER MENU для header =====
  const burger = document.querySelector('.nav__burger');
  const navMenu = document.querySelector('.nav__menu');
  const navActions = document.querySelector('.nav__actions');

  if (burger && navMenu && navActions) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      navMenu.classList.toggle('active');
      navActions.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });

    // Закрытие по клику вне меню
    document.addEventListener('click', (e) => {
      if (!burger.contains(e.target) && !navMenu.contains(e.target) && !navActions.contains(e.target)) {
        burger.classList.remove('active');
        navMenu.classList.remove('active');
        navActions.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });

    // Закрытие по ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        burger.classList.remove('active');
        navMenu.classList.remove('active');
        navActions.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });
  }

  // ===== МОДАЛКИ (Вход/Регистрация) =====
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registerModal');
  const closeLogin = document.getElementById('closeLoginModal');
  const closeRegister = document.getElementById('closeRegisterModal');
  const switchToRegister = document.getElementById('switchToRegister');

  // Открыть модалку входа
  if (loginBtn && loginModal) {
    loginBtn.addEventListener('click', () => {
      loginModal.classList.add('active');
      document.body.classList.add('no-scroll');
    });
  }

  // Открыть модалку регистрации
  if (registerBtn && registerModal) {
    registerBtn.addEventListener('click', () => {
      registerModal.classList.add('active');
      document.body.classList.add('no-scroll');
    });
  }

  // Закрыть модалку входа
  if (closeLogin && loginModal) {
    closeLogin.addEventListener('click', () => {
      loginModal.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  }

  // Закрыть модалку регистрации
  if (closeRegister && registerModal) {
    closeRegister.addEventListener('click', () => {
      registerModal.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  }

  // Переключение с входа на регистрацию
  if (switchToRegister && loginModal && registerModal) {
    switchToRegister.addEventListener('click', () => {
      loginModal.classList.remove('active');
      registerModal.classList.add('active');
    });
  }

  // Закрытие по клику на оверлей
  document.querySelectorAll('.modal__overlay').forEach((overlay) => {
    overlay.addEventListener('click', () => {
      if (loginModal) loginModal.classList.remove('active');
      if (registerModal) registerModal.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });

  // Закрытие по ESC (единый обработчик)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (loginModal) loginModal.classList.remove('active');
      if (registerModal) registerModal.classList.remove('active');
      if (burger) {
        burger.classList.remove('active');
        navMenu?.classList.remove('active');
        navActions?.classList.remove('active');
      }
      document.body.classList.remove('no-scroll');
    }
  });

  // ===== FAB DIALOG (если нужно) =====
  const feedbackBtn = document.querySelector('.fab--feedback');
  const socialBtn = document.querySelector('.fab--social');
  const feedbackDialog = document.querySelector('.dialog--feedback');
  const socialDialog = document.querySelector('.dialog--social');

  function openDialog(dialog) {
    if (dialog) {
      dialog.show();
      dialog.classList.remove('dialog--closing');
      dialog.classList.add('dialog--open');
    }
  }

  function closeDialog(dialog) {
    if (dialog) {
      dialog.classList.remove('dialog--open');
      dialog.classList.add('dialog--closing');
      dialog.addEventListener('animationend', function handler() {
        dialog.close();
        dialog.classList.remove('dialog--closing');
        dialog.removeEventListener('animationend', handler);
      });
    }
  }

  if (feedbackBtn && feedbackDialog) {
    feedbackBtn.addEventListener('click', () => openDialog(feedbackDialog));
  }

  if (socialBtn && socialDialog) {
    socialBtn.addEventListener('click', () => openDialog(socialDialog));
  }

  // Кнопки закрытия в диалогах
  document.querySelectorAll('.dialog button').forEach((button) => {
    button.addEventListener('click', () => {
      const dialog = button.closest('dialog');
      if (dialog) closeDialog(dialog);
    });
  });

  // Закрытие по клику на фон
  [feedbackDialog, socialDialog].forEach((dialog) => {
    if (dialog) {
      dialog.addEventListener('click', (e) => {
        if (e.target === dialog) closeDialog(dialog);
      });
    }
  });
});

// Проверка бургера (только для отладки)
const burgerTest = document.querySelector('.nav__burger');
if (burgerTest) {
  console.log('burger styles:', window.getComputedStyle(burgerTest).display);
  console.log('burger classes:', burgerTest.classList);
}
