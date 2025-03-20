export function Footer() {
    return ( 
      <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              COMTATO
            </h3>
            <p className="text-gray-600">Sua contabilidade inteligente</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900">
              Serviços
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>Consultoria Fiscal</li>
              <li>Análise Financeira</li>
              <li>Gestão de Folha</li>
              <li>Abertura de Empresa</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900">
              Empresa
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>Sobre Nós</li>
              <li>Carreiras</li>
              <li>Blog</li>
              <li>Contato</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900">
              Legal
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>Termos de Uso</li>
              <li>Privacidade</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
          © {new Date().getFullYear()} COMTATO. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
     );
}

export default Footer;