import { Link } from 'react-router-dom';

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
              <li><Link to="/servicos" className="hover:text-gray-900">Consultoria Fiscal</Link></li>
              <li><Link to="/servicos" className="hover:text-gray-900">Análise Financeira</Link></li>
              <li><Link to="/servicos" className="hover:text-gray-900">Gestão de Folha</Link></li>
              <li><Link to="/abrir-empresa" className="hover:text-gray-900">Abertura de Empresa</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900">
              Empresa
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/sobre-nos" className="hover:text-gray-900">Sobre Nós</Link></li>
              <li><Link to="/contatos" className="hover:text-gray-900">Contato</Link></li>
            </ul>
          </div>
            <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900">
              Contatos
            </h4>
            <ul className="space-y-2 text-gray-600 break-words">
              <li>
              <a href="tel:+5561996333545" className="hover:text-gray-900 block">
                (61) 99633-3545
              </a>
              </li>
              <li>
              <a href="tel:+5591991144551" className="hover:text-gray-900 block">
                (91) 99114-4551
              </a>
              </li>
              <li>
              <a href="mailto:atendimento@comtatocontabilidade.com.br" className="hover:text-gray-900 block break-all">
                atendimento@comtatocontabilidade.com.br
              </a>
              </li>
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