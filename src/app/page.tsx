//import Image from "next/image";

export default function Home() {

  return (
    <div  id="menu" className="text-stone-900 flex flex-col items-center m-2">

      <a //Botão menu
       href="#menu" className="fixed bottom-4 right-4 bg-blue-900 text-white px-4 py-2 rounded hover:bg-gray-900 transition">↑ Início 
      </a>

      <div //Cabeçalho
        className="relative bg-blue-800 text-green-50 rounded w-335 h-35 flex items-center justify-evenly">
        <img src="/imagens/logo.png" alt="Logo da empresa" className="
          w-30 h-auto absolute left-3
        "/>
        <div className="absolute left-50">
          <h1 className="text-4xl">RS Manutenção e Reformas</h1>
          <p className="text-xl">Contatos: 41 9890-4364 | Email:rs.ManutençãoReformas | Instagram: @RS_ManutençãoReformas</p>
        </div>
      </div>

      <h3 className="font-semibold mt-15 mb-2 text-3xl">Trabalhamos com:</h3>
      <div //Icons
        className="bg-blue-800 h-40 min-w-230 rounded p-2 text-xl text-white flex items-center justify-around">
        <a href="#alvenaria"  className="flex flex-col items-center  hover:h-22"><img src="/imagens/alvenaria_icon.png"/><h2>Alvenaria</h2></a>

        <a href="#eletrica" className="flex flex-col items-center  hover:h-22"><img src="/imagens/eletrica_icon.png"/><h2>Elétrica</h2></a>

        <a href="#encanamento" className="flex flex-col items-center  hover:h-22"><img src="/imagens/encanamento_icon.png"/><h2>Encanamento</h2></a>

        <a href="#drywall" className="flex flex-col items-center  hover:h-22"><img src="/imagens/drywall_icon.png"/>Drywall</a>

        <a href="#ar" className="flex flex-col items-center  hover:h-22"><img src="/imagens/ar_icon.png"/>Ar-Condicionado</a>

        <a href="#reparos" className="flex flex-col items-center  hover:h-22"><img src="/imagens/reparos_icon.png"/>Reparos em Geral</a>

      </div>

      <div //Frase
      className="font-bold text-4xl flex flex-col items-center m-15">
        <h2>Precisando de ajuda com a reforma de sua residência?</h2>
        <h2 className="text-blue-700">Chama que eu resolvo</h2>
      </div>
      <a //Botão de contato
       href="https://wa.me/5547999746021?text=Estou interessado na Alvenaria" target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white text-2xl w-90 h-13 rounded flex justify-center items-center font-semibold hover:bg-blue-800 hover:text-gray-300 hover:w-88">Entrar em Contato
      </a>

      <div //Forma de trabalho
      className="m-20 flex flex-col space-y-2 text-xl">
        <h2 className="text-3xl font-medium">RS Manutenção e Reformas</h2>

        <p>&nbsp;Na RS Manutenção e Reformas, trabalhamos com projetos em diferentes tipos de imóveis, sempre buscando oferecer soluções práticas e eficientes para nossos clientes. Atendemos tanto residências quanto prédios e comércios, adaptando nossos serviços às necessidades de cada tipo de espaço.
        </p>
        <h1 className="font-semibold">Casas:</h1>
        <li>
        - Nossa equipe está preparada para realizar reformas, manutenções e até construções, sempre focando em melhorar o conforto e a funcionalidade do ambiente, com o cuidado de respeitar as preferências de quem mora no local.
        </li>

        <h1 className="font-semibold">Prédios:</h1>
        <li>
        - Oferecemos serviços de manutenção, reformas e adaptações para condomínios ou empreendimentos maiores. Nosso objetivo é entregar resultados que garantam segurança e qualidade, com respeito aos prazos e orçamentos.
        </li>

        <h1 className="font-semibold">Comércio:</h1>
        <li>
        - Sabemos da importância de um ambiente bem estruturado para os negócios. Trabalhamos em reformas e adequações de espaços comerciais, sempre buscando otimizar a funcionalidade e criar um ambiente que atenda às necessidades dos nossos clientes e de seus consumidores.
        </li>

        <p>     
        &nbsp;Nossa empresa se dedica a entregar um serviço de qualidade, com atenção ao detalhe e sempre dentro do que foi combinado. Estamos prontos para ajudar em qualquer tipo de obra, seja em casa, em prédios ou no comércio.
        </p>
      </div>

      <div className="text-5xl flex flex-col items-center">
        
        <h1 className="m-10">Alvenaria</h1>
        <section id="alvenaria" className="p-15 text-2xl bg-blue-700 rounded w-290 text-white flex flex-col items-center space-y-3">
          <h3 className="text-4xl mb-10">Fazemos:</h3>
            <h1 className="font-semibold">Construção de Paredes</h1>
            <div>
              <li>Levantamento de paredes internas e externas</li>
              <li>Divisórias em tijolos cerâmicos ou blocos de concreto</li>
              <li>Impermeabilização de paredes</li>
            </div>

            <h1 className="font-semibold">Reboco e Chapisco</h1>
            <div>
              <li>Chapisco: aplicação de camada áspera para aderência</li>
              <li>Emboço: camada intermediária de regularização </li>
              <li>Reboco: acabamento final antes da pintura</li>
            </div>

            <h1 className="font-semibold">Assentamento de Pisos e Revestimentos</h1>
            <div>
              <li>Instalação de pisos cerâmicos, porcelanatos, lajotas etc.</li>
              <li>Impermeabilização de pisos, paredes e lajes</li>
            </div>

            <h1 className="font-semibold">Aberturas e Fechamentos</h1>
            <div>
              <li>Abertura de vãos para portas e janelas</li>
              <li>Fechamento de ambientes ou salas</li>
            </div>

            <h1 className="font-semibold">Reformas e Manutenções</h1>
            <div>
              <li>Reparo em paredes com trincas ou infiltrações</li>
              <li>impermibilizaçãode pisos paredes e lajes</li>
            </div>
            
            <a
            href="https://wa.me/5547999746021?text=Olá, estou interessado em fazer um orçamento sobre Alvenaria" target="_blank" rel="noopener noreferrer"
            className="w-80 h-12 border hover:bg-blue-600 text-3xl font-medium rounded flex items-center justify-center m-5"
            >
             Solicitar orçamento
            </a>
        </section>
        
        <h1 className="m-10">Elétrica</h1>
        <section id="eletrica" className="p-15 text-2xl bg-blue-700 rounded w-290 text-white flex flex-col items-center space-y-3">
          
          <h3 className="text-4xl mb-10">Fazemos:</h3>
            <h1 className="font-semibold">Planejamento Elétrico</h1>
            <div>
              <li>Leitura e interpretação de projetos elétricos</li>
              <li>Definição de carga elétrica da residência ou prédio</li>
              <li>Escolha dos materiais adequados (bitolas de fios, disjuntores, conduítes)</li>
            </div>

            <h1 className="font-semibold">Infraestrutura</h1>
            <div>
              <li>Corte e abertura de canaletas em paredes e lajes para embutir conduítes</li>
              <li>Instalação de eletrodutos (conduítes) e caixas de passagem e de tomadas</li>
              <li>Passagem de cabos e fios elétricos</li>
            </div>

            <h1 className="font-semibold">Instalação de componentes</h1>
            <div>
              <li>Tomadas</li>
              <li>Interruptores</li>
              <li>Luminárias</li>
              <li>Ventiladores de teto</li>
              <li>Quadros de distribuição (quadro de disjuntores)</li>
            </div>

            <h1 className="font-semibold">Proteção e segurança</h1>
            <div>
              <li>Instalação de disjuntores e DPS (dispositivo de proteção contra surtos)</li>
              <li>Ligação do fio terra (aterramento)</li>
              <li>Instalação de DR (diferencial residual) para proteção contra choques</li>
            </div>

            <h1 className="font-semibold">Iluminação</h1>
            <div>
              <li>Distribuição de pontos de luz no projeto</li>
              <li>Instalação de luminárias internas e externas</li>
              <li>Configuração de sistemas com sensor de presença, dimerização, etc.</li>
            </div>
            
            <h1 className="font-semibold">Testes e manutenção</h1>
            <div>
              <li>Testes de:
                <div className="m-5">
                  <li>Continuidade elétrica</li>
                  <li>Isolamento dos cabos</li>
                  <li>Funcionamento dos circuitos</li>
                </div>
              </li>
              <li>Correção de curto-circuitos e sobrecargas</li>
              <li>Revisão de instalações</li>
            </div>

            <h1 className="font-semibold">Ligação à rede pública</h1>
            <div>
              <li>Preparação do padrão de entrada de energia</li>
              <li>Instalação de medidor de energia (em parceria com a concessionária)</li>
              <li>Solicitação de vistoria e ligação oficial</li>
            </div>
            <a
            href="https://wa.me/5547999746021?text=Olá, estou interessado em fazer um orçamento de Elétrica" target="_blank" rel="noopener noreferrer"
            className="w-80 h-12 border hover:bg-blue-600 text-3xl font-medium rounded flex items-center justify-center m-5"
            >
             Solicitar orçamento
            </a>
        </section>

        <h1 className="m-10">Encanamento</h1>
        <section id="encanamento" className="p-15 text-2xl bg-blue-700 rounded w-290 text-white flex flex-col items-center space-y-3">
          <h3 className="text-4xl mb-10">Trabalhamos com:</h3 >

            <h1 className="font-semibold">Planejamento hidráulico</h1>
            <div>
              <li>Leitura de plantas hidráulicas</li>
              <li>Planejamento de pressão e fluxo de água</li>
              <li>Definição de:
                <div className="m-5">
                  <li>Pontos de consumo (chuveiro, torneira, caixa acoplada, etc.)</li>
                  <li>Diâmetro e tipo de tubulação (PVC, PEX, CPVC, cobre)</li>
                </div>
              </li>
            </div>

            <h1 className="font-semibold">Instalação de água fria</h1>
            <div>
              <li>Instalação de:
                <div className="m-5">
                  <li>Tubulações de entrada de água</li>
                  <li>Caixas d’água (com boia e registros)</li>
                  <li>Válvulas de retenção</li>
                </div>
              </li>
              <li>Passagem de tubos de PVC ou PPR por paredes e pisos</li>
            </div>

            <h1 className="font-semibold">Instalação de água quente (quando necessário)</h1>
            <div>
              <li>Instalação de:
                <div className="m-5">
                  <li>Tubulações específicas para água quente (CPVC, cobre ou PPR)</li>
                  <li>Misturadores e aquecedores (a gás ou elétricos)</li>
                </div>
              </li>
              <li>Ligação com sistemas de aquecimento solar (se houver)</li>
            </div>

            <h1 className="font-semibold">Instalações sanitárias</h1>
            <div>
              <li>Instalação de:
                <div className="m-5">
                  <li>Vasos sanitários</li>
                  <li>Caixas acopladas</li>
                  <li>Ralos, sifões e lavatórios</li>
                  <li>Pias e tanques</li>
                </div>
              </li>
              <li>Conexão com a rede de esgoto e respiro</li>
            </div>

            <h1 className="font-semibold">Rede de esgoto e águas pluviais</h1>
            <div>
              <li>Instalação de tubulações para:
                <div className="m-5">
                  <li>Esgoto sanitário</li>
                  <li>Águas pluviais (chuva)</li>
                </div>
              </li>
              <li>Caimento correto para evitar entupimentos</li>
              <li>Ligação a fossa séptica, sumidouro ou rede pública</li>
            </div>

            <h1 className="font-semibold">Testes e vedação</h1>
            <div>
              <li>Teste de estanqueidade (para verificar vazamentos)</li>
              <li>Verificação de pressão da água</li>
              <li>Vistoria da vedação de conexões</li>
            </div>

            <h1 className="font-semibold">Manutenção e ajustes</h1>
            <div>
              <li>Troca de:
                <div className="m-5">
                  <li>Registros, torneiras e válvulas</li>
                  <li>Canos danificados</li>
                </div>
              </li>
              <li>Desentupimentos e limpeza de caixas de gordura</li>
            </div>
            <a href="https://wa.me/5547999746021?text=Olá, estou interessado em fazer um orçamento de Encanamento" target="_blank" rel="noopener noreferrer"
            className="w-80 h-12 border hover:bg-blue-600 text-3xl font-medium rounded flex items-center justify-center m-5"
            >
             Solicitar orçamento
            </a>
        </section>

        <h1 className="m-10">Drywall</h1>
        <section id="drywall"
        className="p-15 text-2xl bg-blue-700 rounded w-290 text-white flex flex-col items-center space-y-3">

          <h3 className="text-4xl mb-10">Trabalhamos com:</h3>

            <h1 className="font-semibold">Montagem da estrutura metálica</h1>
            <div>
              <li>Fixação de guias no piso e teto</li>
              <li>Colocação dos montantes verticais (geralmente a cada 40 ou 60 cm)</li>
              <li>Reforços estruturais para portas, janelas ou suportes de TV</li>
            </div>

            <h1 className="font-semibold"> Instalação das placas de gesso</h1>
            <div>
              <li>Parafusamento das placas nos perfis metálicos</li>
              <li>Cortes personalizados para tomadas, interruptores e tubdivações</li>
              <li>Fechamento da primeira face, passagem da fiação hidrádivica/elétrica, e então fechamento da segunda face</li>
            </div>

            <h1 className="font-semibold">Tratamento de juntas</h1>
            <div>
              <li>Aplicação de fita de papel ou tela nas juntas</li>
              <li>Aplicação de massa para drywall (3 demãos normalmente)</li>
              <li>Lixamento para nivelar</li>
            </div>

            <h1 className="font-semibold">Acabamento final</h1>
            <div>
              <li>Preparação para pintura ou revestimento</li>
              <li>Instalação de rodapés, sancas ou molduras (se necessário)</li>
            </div>

            <h1 className="font-semibold">Forros de drywall</h1>
            <div>
              <li>Fixação de estrutura suspensa</li>
              <li>Placas para o teto</li>
              <li>Criação de rebaixos, sancas abertas/fechadas ou iluminação embutida</li>
            </div>

            <h1 className="font-semibold"> Manutenção e modificações</h1>
            <div>
              <li>Abertura para instalar ou acessar tubdivação, fiação</li>
              <li>Reparo de trincas ou furos</li>
              <li>Substituição de placas danificadas</li>
            </div>

            <h2 className="text-3xl">Vantagens do Drywall:</h2>
            <div>
              <li>Rápida instalação</li>
              <li>Menos entdivho e sujeira</li>
              <li>Facilidade de manutenção</li>
              <li>Isolamento acústico (quando combinado com lã de rocha ou vidro)</li>
            </div>

            <h2 className="text-3xl">Cuidados:</h2>
            <div>
              <li>Não pode ser usado em áreas externas ou com muita umidade, exceto com placas especiais (placa verde para áreas úmidas)</li>
              <li>Requer reforços internos para suportar peso (como armários suspensos)</li>
            </div>

            <a href="https://wa.me/5547999746021?text=Olá, estou interessado em fazer um orçamento sobre Drywall" target="_blank" rel="noopener noreferrer"
            className="w-80 h-12 border hover:bg-blue-600 text-3xl font-medium rounded flex items-center justify-center m-5"
            >
             Solicitar orçamento
            </a>
        </section>

        <h1 className="m-10">Ar-Condicionado</h1>
        <section id="ar" className="p-15 text-2xl bg-blue-700 rounded w-290 text-white flex flex-col items-center space-y-3">
          
          <h3 className="text-4xl mb-10">Trabalhamos com:</h3>

          <h1 className="font-semibold">Planejamento</h1>
            <div>
              <li>Definir tipo e capacidade do equipamento (BTUs) conforme o tamanho e uso do ambiente</li>
              <li>Escolher a melhor posição para a unidade interna (evaporadora) e externa (condensadora)</li>
              <li>Verificar distância entre as unidades (quanto menor, melhor para eficiência)</li>
            </div>

            <h1 className="font-semibold">Infraestrutura (feita durante a obra)</h1>
            <div>
              <li>Abertura de caminhos para tubdivações na parede ou laje</li>
              <li>Instalação de:
                <div className="m-5">
                  <li>Tubo de cobre para refrigeração (líquido e gás)</li>
                  <li>Tubo dreno para saída da água da evaporadora</li>
                  <li>Cabo elétrico de interligação entre as unidades</li>
                  <li>Tomada exclusiva com disjuntor para o ar-condicionado</li>
                </div>
              </li>
              <li>Em muitos casos, essas tubdivações ficam embutidas no drywall ou na parede</li>
            </div>

            <h1 className="font-semibold"> Instalação do equipamento</h1>
            <div>
              <li>Fixação da evaporadora (interna) na parede ou teto</li>
              <li>Fixação da condensadora (externa) em base de concreto, suporte metálico ou piso</li>
              <li>Conexão das linhas de cobre, dreno e elétrica</li>
              <li>Vácuo nas tubdivações com bomba de vácuo (para evitar umidade e garantir eficiência)</li>
            </div>

            <h1 className="font-semibold">Testes e funcionamento</h1>
            <div>
              <li>Verificação de vazamentos com teste de pressão</li>
              <li>Teste de isolamento elétrico</li>
              <li>Liberação do gás refrigerante</li>
              <li>Ligação do equipamento e teste de operação (frio, ventilação, quente, se for inverter quente/frio)</li>
            </div>

            <h1 className="font-semibold">Manutenção</h1>
            <div>
              <li>Limpeza de filtros regdivarmente</li>
              <li>Higienização da evaporadora</li>
              <li>Verificação de gás refrigerante (vazamentos ou recarga)</li>
              <li>Limpeza de dreno entupido</li>
              <li>Verificação de ruídos e vibrações anormais</li>
            </div>

            <h2 className="text-4xl"> Cuidados importantes:</h2>
            <div>
              <li>Não instalar evaporadora em cima de tomadas ou eletrônicos (por causa do dreno)</li>
              <li>Condensadora precisa de ventilação e acesso para manutenção</li>
              <li>Usar profissionais certificados, pois erros causam perda de eficiência ou danos</li>
            </div>

          <a href="https://wa.me/5547999746021?text=Olá, estou interessado em fazer um orçamento sobre Ar-Condicionado" target="_blank" rel="noopener noreferrer"
            className="w-80 h-12 border hover:bg-blue-600 text-3xl font-medium rounded flex items-center justify-center m-5"
            >
             Solicitar orçamento
            </a>
        </section>

        <h1 className="m-10">Reparos em Geral</h1>
        <section id="reparos" className="p-15 text-2xl bg-blue-700 rounded w-290 text-white flex flex-col items-center space-y-3">

          <a href="https://wa.me/5547999746021?text=Olá, estou interessado em fazer um orçamento sobre Reparos em Geral" target="_blank" rel="noopener noreferrer"
            className="w-80 h-12 border hover:bg-blue-600 text-3xl font-medium rounded flex items-center justify-center m-5"
            >
             Solicitar orçamento
            </a>
        </section>
      </div>
    </div>
  );
}
