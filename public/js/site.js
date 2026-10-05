(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.primary-navigation');

  if (menuToggle && navigation) {
    const closeMenu = () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
      document.body.classList.remove('nav-open');
    };

    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      document.body.classList.toggle('nav-open', !isOpen);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  const switcher = document.querySelector('[data-switcher]');
  if (!switcher || !Array.isArray(window.spacePageData)) return;

  const items = window.spacePageData;
  const buttons = Array.from(switcher.querySelectorAll('[data-index]'));
  const panel = switcher.querySelector('[data-panel]');
  const image = switcher.querySelector('[data-image]');
  const kind = switcher.dataset.switcher;

  function selectItem(index, focusButton = false) {
    const item = items[index];
    if (!item) return;

    buttons.forEach((button, buttonIndex) => {
      const selected = buttonIndex === index;
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
    });

    if (panel) panel.setAttribute('aria-labelledby', buttons[index].id);
    if (image) {
      image.src = kind === 'technology' ? item.images.portrait : item.images.png;
      image.alt = item.name;
    }

    const landscape = switcher.querySelector('[data-landscape]');
    if (landscape) landscape.srcset = item.images.landscape;

    const name = switcher.querySelector('[data-name]');
    const description = switcher.querySelector('[data-description]');
    if (name) name.textContent = item.name;
    if (description) description.textContent = item.description || item.bio;

    const role = switcher.querySelector('[data-role]');
    if (role) role.textContent = item.role;
    const distance = switcher.querySelector('[data-distance]');
    if (distance) distance.textContent = item.distance;
    const travel = switcher.querySelector('[data-travel]');
    if (travel) travel.textContent = item.travel;

    if (focusButton) buttons[index].focus();
  }

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => selectItem(index));
    button.addEventListener('keydown', (event) => {
      let nextIndex;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % buttons.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + buttons.length) % buttons.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = buttons.length - 1;
      if (nextIndex !== undefined) {
        event.preventDefault();
        selectItem(nextIndex, true);
      }
    });
  });
})();
