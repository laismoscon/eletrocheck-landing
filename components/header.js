class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          color: #F7C325;
        }
        .mobile-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }
        .mobile-menu.open {
          max-height: 500px;
        }
      </style>
      <header class="bg-white shadow-md">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center py-4">
            <div class="flex items-center">
              <a href="/" class="flex items-center">
                <img src="logo.png" alt="ElectroCheck Logo" class="w-48 h-auto mr-3">
              </a>
</div>
            
            <nav class="hidden md:flex items-center space-x-8">
              <a href="#home" class="nav-link text-graphite font-medium">Home</a>
              <a href="#features" class="nav-link text-graphite font-medium">Funcionalidades</a>
              <a href="#about" class="nav-link text-graphite font-medium">Sobre</a>
              <a href="#contact" class="bg-primary hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
Contato
              </a>
            </nav>
            
            <button id="mobile-menu-button" class="md:hidden text-graphite">
              <i data-feather="menu" class="w-6 h-6"></i>
            </button>
          </div>
          
          <div id="mobile-menu" class="mobile-menu md:hidden">
            <div class="flex flex-col space-y-3 pb-4">
              <a href="#home" class="nav-link text-graphite font-medium">Home</a>
              <a href="#features" class="nav-link text-graphite font-medium">Funcionalidades</a>
              <a href="#about" class="nav-link text-graphite font-medium">Sobre</a>
              <a href="#contact" class="bg-primary hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 w-full text-center">
Contato
              </a>
            </div>
          </div>
        </div>
      </header>
    `;
    
    const menuButton = this.shadowRoot.getElementById('mobile-menu-button');
    const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
    
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const icon = menuButton.querySelector('i');
      if (mobileMenu.classList.contains('open')) {
        icon.setAttribute('data-feather', 'x');
      } else {
        icon.setAttribute('data-feather', 'menu');
      }
      feather.replace();
    });
  }
}

customElements.define('custom-header', CustomHeader);
