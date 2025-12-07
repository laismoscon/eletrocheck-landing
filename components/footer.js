class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .social-icon:hover {
          transform: translateY(-3px);
        }
      </style>
      <footer class="bg-graphite text-white py-12">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-3 gap-8">
            <div>
              <h3 class="text-xl font-bold mb-4 flex items-center">
                <img src="logo.png" alt="ElectroCheck Logo" class="w-40 h-auto mr-3">
ElectroCheck
              </h3>
<p class="text-gray-300 mb-4">
                Plataforma web inteligente para gerenciamento de garantias, manutenções e histórico de equipamentos elétricos.
              </p>
              <div class="flex space-x-4">
                <a href="#" class="social-icon transition duration-300">
                  <i data-feather="facebook" class="w-5 h-5 text-gray-300 hover:text-white"></i>
                </a>
                <a href="#" class="social-icon transition duration-300">
                  <i data-feather="instagram" class="w-5 h-5 text-gray-300 hover:text-white"></i>
                </a>
                <a href="#" class="social-icon transition duration-300">
                  <i data-feather="linkedin" class="w-5 h-5 text-gray-300 hover:text-white"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 class="text-xl font-bold mb-4">Links Úteis</h3>
              <ul class="space-y-2">
                <li><a href="#features" class="text-gray-300 hover:text-white transition duration-300">Funcionalidades</a></li>
                <li><a href="#about" class="text-gray-300 hover:text-white transition duration-300">Sobre o Projeto</a></li>
                <li><a href="#contact" class="text-gray-300 hover:text-white transition duration-300">Contato</a></li>
              </ul>
</div>
            
            <div>
              <h3 class="text-xl font-bold mb-4">Contato</h3>
              <ul class="space-y-2">
                <li class="flex items-center text-gray-300">
                  <i data-feather="mail" class="w-4 h-4 mr-2"></i>
                  contato@eletrocheck.com.br
                </li>
                <li class="flex items-center text-gray-300">
                  <i data-feather="map-pin" class="w-4 h-4 mr-2"></i>
                  São Paulo, Brasil
                </li>
              </ul>
            </div>
          </div>
          
          <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 ElectroCheck. Todos os direitos reservados.</p>
            <p class="mt-2">Desenvolvido com ❤️ para o TCC</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);