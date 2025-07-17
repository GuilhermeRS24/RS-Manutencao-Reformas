import * as React from "react"

import { cn } from "@/lib/utils"

function BotaoContato() {
  return(
    <a
        href="https://wa.me/5547999746021?text=Olá, estou interessado em fazer um orçamento de Elétrica" target="_blank" rel="noopener noreferrer"
        className="w-80 h-12 border hover:bg-blue-600 text-3xl font-medium rounded flex items-center justify-center m-5"
    >
     Solicitar orçamento
  </a>
  )
}

function Secao({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "p-15 text-2xl bg-blue-700 rounded w-290 text-white flex flex-col items-center space-y-3",
        className
      )}
      {...props}
    />
  )
}

function Alvenaria({className, ...props}: React.ComponentProps<"div">) {
  return(
    <div
      className={cn(
        "flex flex-col items-center",
        className
      )}{...props}
      id="alvenaria"
    >
        <h2 className="mb-10 mt-20">Alvenaria</h2>
        <Secao>
          <h3 className="text-4xl mb-10">Fazemos:</h3>
              <h1 className="font-semibold">Construção de Paredes</h1>
              <ul>
                <li>Levantamento de paredes internas e externas</li>
                <li>Divisórias em tijolos cerâmicos ou blocos de concreto</li>
                <li>Impermeabilização de paredes</li>
              </ul>

              <h1 className="font-semibold">Reboco e Chapisco</h1>
              <ul>
                <li>Chapisco: aplicação de camada áspera para aderência</li>
                <li>Emboço: camada intermediária de regularização </li>
                <li>Reboco: acabamento final antes da pintura</li>
              </ul>

              <h1 className="font-semibold">Assentamento de Pisos e Revestimentos</h1>
              <ul>
                <li>Instalação de pisos cerâmicos, porcelanatos, lajotas etc.</li>
                <li>Impermeabilização de pisos, paredes e lajes</li>
              </ul>

              <h1 className="font-semibold">Aberturas e Fechamentos</h1>
              <ul>
                <li>Abertura de vãos para portas e janelas</li>
                <li>Fechamento de ambientes ou salas</li>
              </ul>

              <h1 className="font-semibold">Reformas e Manutenções</h1>
              <ul>
                <li>Reparo em paredes com trincas ou infiltrações</li>
                <li>impermibilizaçãode pisos paredes e lajes</li>
              </ul>
              <BotaoContato/>
        </Secao>
    </div>
  )
}

function Eletrica({className, ...props}: React.ComponentProps<"div">) {
  return(
    <div
      className={cn(
        "flex flex-col items-center",
        className
      )}{...props}
      id="eletrica"
    >
      <h1 className="mb-10 mt-20">Elétrica</h1>
        <Secao id="eletrica">
          
          <h3 className="text-4xl mb-10">Fazemos:</h3>
            <h1 className="font-semibold">Planejamento Elétrico</h1>
            <ul>
              <li>Leitura e interpretação de projetos elétricos</li>
              <li>Definição de carga elétrica da residência ou prédio</li>
              <li>Escolha dos materiais adequados (bitolas de fios, disjuntores, conduítes)</li>
            </ul>

            <h1 className="font-semibold">Infraestrutura</h1>
            <ul>
              <li>Corte e abertura de canaletas em paredes e lajes para embutir conduítes</li>
              <li>Instalação de eletrodutos (conduítes) e caixas de passagem e de tomadas</li>
              <li>Passagem de cabos e fios elétricos</li>
            </ul>

            <h1 className="font-semibold">Instalação de componentes</h1>
            <ul>
              <li>Tomadas</li>
              <li>Interruptores</li>
              <li>Luminárias</li>
              <li>Ventiladores de teto</li>
              <li>Quadros de distribuição (quadro de disjuntores)</li>
            </ul>

            <h1 className="font-semibold">Proteção e segurança</h1>
            <ul>
              <li>Instalação de disjuntores e DPS (dispositivo de proteção contra surtos)</li>
              <li>Ligação do fio terra (aterramento)</li>
              <li>Instalação de DR (diferencial residual) para proteção contra choques</li>
            </ul>

            <h1 className="font-semibold">Iluminação</h1>
            <ul>
              <li>Distribuição de pontos de luz no projeto</li>
              <li>Instalação de luminárias internas e externas</li>
              <li>Configuração de sistemas com sensor de presença, dimerização, etc.</li>
            </ul>
            
            <h1 className="font-semibold">Testes e manutenção</h1>
            <ul>
              <li>Testes de:
                <ul className="m-5">
                  <li>Continuidade elétrica</li>
                  <li>Isolamento dos cabos</li>
                  <li>Funcionamento dos circuitos</li>
                </ul>
              </li>
              <li>Correção de curto-circuitos e sobrecargas</li>
              <li>Revisão de instalações</li>
            </ul>

            <h1 className="font-semibold">Ligação à rede pública</h1>
            <ul>
              <li>Preparação do padrão de entrada de energia</li>
              <li>Instalação de medidor de energia (em parceria com a concessionária)</li>
              <li>Solicitação de vistoria e ligação oficial</li>
            </ul>
            
            <BotaoContato/>
        </Secao>
  </div>
)}

function Hidraulica ({className, ...props}: React.ComponentProps<"div">){
  return(
    <div
      className={cn(
          "flex flex-col items-center",
          className
        )}{...props}
        id="hidraulica"
    > 
      <h1 className="mb-10 mt-20">Hidráulica </h1>
          <Secao>
            <h3 className="text-4xl mb-10">Trabalhamos com:</h3 >

              <h1 className="font-semibold">Planejamento hidráulico</h1>
              <ul>
                <li>Leitura de plantas hidráulicas</li>
                <li>Planejamento de pressão e fluxo de água</li>
                <li>Definição de:
                  <ul className="m-5">
                    <li>Pontos de consumo (chuveiro, torneira, caixa acoplada, etc.)</li>
                    <li>Diâmetro e tipo de tubulação (PVC, PEX, CPVC, cobre)</li>
                  </ul>
                </li>
              </ul>

              <h1 className="font-semibold">Instalação de água fria</h1>
              <ul>
                <li>Instalação de:
                  <ul className="m-5">
                    <li>Tubulações de entrada de água</li>
                    <li>Caixas d’água (com boia e registros)</li>
                    <li>Válvulas de retenção</li>
                  </ul>
                </li>
                <li>Passagem de tubos de PVC ou PPR por paredes e pisos</li>
              </ul>

              <h1 className="font-semibold">Instalação de água quente (quando necessário)</h1>
              <ul>
                <li>Instalação de:
                  <ul className="m-5">
                    <li>Tubulações específicas para água quente (CPVC, cobre ou PPR)</li>
                    <li>Misturadores e aquecedores (a gás ou elétricos)</li>
                  </ul>
                </li>
                <li>Ligação com sistemas de aquecimento solar (se houver)</li>
              </ul>

              <h1 className="font-semibold">Instalações sanitárias</h1>
              <ul>
                <li>Instalação de:
                  <ul className="m-5">
                    <li>Vasos sanitários</li>
                    <li>Caixas acopladas</li>
                    <li>Ralos, sifões e lavatórios</li>
                    <li>Pias e tanques</li>
                  </ul>
                </li>
                <li>Conexão com a rede de esgoto e respiro</li>
              </ul>

              <h1 className="font-semibold">Rede de esgoto e águas pluviais</h1>
              <ul>
                <li>Instalação de tubulações para:
                  <ul className="m-5">
                    <li>Esgoto sanitário</li>
                    <li>Águas pluviais (chuva)</li>
                  </ul>
                </li>
                <li>Caimento correto para evitar entupimentos</li>
                <li>Ligação a fossa séptica, sumidouro ou rede pública</li>
              </ul>

              <h1 className="font-semibold">Testes e vedação</h1>
              <ul>
                <li>Teste de estanqueidade (para verificar vazamentos)</li>
                <li>Verificação de pressão da água</li>
                <li>Vistoria da vedação de conexões</li>
              </ul>

              <h1 className="font-semibold">Manutenção e ajustes</h1>
              <ul>
                <li>Troca de:
                  <ul className="m-5">
                    <li>Registros, torneiras e válvulas</li>
                    <li>Canos danificados</li>
                  </ul>
                </li>
                <li>Desentupimentos e limpeza de caixas de gordura</li>
              </ul>
              <BotaoContato/>
          </Secao>
    </div>
  )
}

function Drywall({className, ...props}: React.ComponentProps<"div">){
  return(
    <div
      className={cn(
        "flex flex-col items-center",
        className
      )}{...props}
      id="drywall"
    >
      <h1 className="mb-10 mt-20">Drywall</h1>
        <Secao 
      >

          <h3 className="text-4xl mb-10">Trabalhamos com:</h3>

            <h1 className="font-semibold">Montagem da estrutura metálica</h1>
            <ul>
              <li>Fixação de guias no piso e teto</li>
              <li>Colocação dos montantes verticais (geralmente a cada 40 ou 60 cm)</li>
              <li>Reforços estruturais para portas, janelas ou suportes de TV</li>
            </ul>

            <h1 className="font-semibold"> Instalação das placas de gesso</h1>
            <ul>
              <li>Parafusamento das placas nos perfis metálicos</li>
              <li>Cortes personalizados para tomadas, interruptores e tubdivações</li>
              <li>Fechamento da primeira face, passagem da fiação hidrádivica/elétrica, e então fechamento da segunda face</li>
            </ul>

            <h1 className="font-semibold">Tratamento de juntas</h1>
            <ul>
              <li>Aplicação de fita de papel ou tela nas juntas</li>
              <li>Aplicação de massa para drywall (3 demãos normalmente)</li>
              <li>Lixamento para nivelar</li>
            </ul>

            <h1 className="font-semibold">Acabamento final</h1>
            <ul>
              <li>Preparação para pintura ou revestimento</li>
              <li>Instalação de rodapés, sancas ou molduras (se necessário)</li>
            </ul>

            <h1 className="font-semibold">Forros de drywall</h1>
            <ul>
              <li>Fixação de estrutura suspensa</li>
              <li>Placas para o teto</li>
              <li>Criação de rebaixos, sancas abertas/fechadas ou iluminação embutida</li>
            </ul>

            <h1 className="font-semibold"> Manutenção e modificações</h1>
            <ul>
              <li>Abertura para instalar ou acessar tubdivação, fiação</li>
              <li>Reparo de trincas ou furos</li>
              <li>Substituição de placas danificadas</li>
            </ul>

            <h2 className="text-3xl">Vantagens do Drywall:</h2>
            <ul>
              <li>Rápida instalação</li>
              <li>Menos entdivho e sujeira</li>
              <li>Facilidade de manutenção</li>
              <li>Isolamento acústico (quando combinado com lã de rocha ou vidro)</li>
            </ul>

            <h2 className="text-3xl">Cuidados:</h2>
            <ul>
              <li>Não pode ser usado em áreas externas ou com muita umidade, exceto com placas especiais (placa verde para áreas úmidas)</li>
              <li>Requer reforços internos para suportar peso (como armários suspensos)</li>
            </ul>

            <BotaoContato/>
        </Secao>
    </div>
  )
}

function ArCondicionado({className, ...props}: React.ComponentProps<"div">){
  return(
    <div
      className={cn(
        "flex flex-col items-center",
        className
      )}{...props}
      id="ar"
    >
      <h1 className="mb-10 mt-20">Ar-Condicionado</h1>
        <Secao >
          
          <h3 className="text-4xl mb-10">Trabalhamos com:</h3>

          <h1 className="font-semibold">Planejamento</h1>
            <ul>
              <li>Definir tipo e capacidade do equipamento (BTUs) conforme o tamanho e uso do ambiente</li>
              <li>Escolher a melhor posição para a unidade interna (evaporadora) e externa (condensadora)</li>
              <li>Verificar distância entre as unidades (quanto menor, melhor para eficiência)</li>
            </ul>

            <h1 className="font-semibold">Infraestrutura (feita durante a obra)</h1>
            <ul>
              <li>Abertura de caminhos para tubdivações na parede ou laje</li>
              <li>Instalação de:
                <ul className="m-5">
                  <li>Tubo de cobre para refrigeração (líquido e gás)</li>
                  <li>Tubo dreno para saída da água da evaporadora</li>
                  <li>Cabo elétrico de interligação entre as unidades</li>
                  <li>Tomada exclusiva com disjuntor para o ar-condicionado</li>
                </ul>
              </li>
              <li>Em muitos casos, essas tubdivações ficam embutidas no drywall ou na parede</li>
            </ul>

            <h1 className="font-semibold"> Instalação do equipamento</h1>
            <ul>
              <li>Fixação da evaporadora (interna) na parede ou teto</li>
              <li>Fixação da condensadora (externa) em base de concreto, suporte metálico ou piso</li>
              <li>Conexão das linhas de cobre, dreno e elétrica</li>
              <li>Vácuo nas tubdivações com bomba de vácuo (para evitar umidade e garantir eficiência)</li>
            </ul>

            <h1 className="font-semibold">Testes e funcionamento</h1>
            <ul>
              <li>Verificação de vazamentos com teste de pressão</li>
              <li>Teste de isolamento elétrico</li>
              <li>Liberação do gás refrigerante</li>
              <li>Ligação do equipamento e teste de operação (frio, ventilação, quente, se for inverter quente/frio)</li>
            </ul>

            <h1 className="font-semibold">Manutenção</h1>
            <ul>
              <li>Limpeza de filtros regdivarmente</li>
              <li>Higienização da evaporadora</li>
              <li>Verificação de gás refrigerante (vazamentos ou recarga)</li>
              <li>Limpeza de dreno entupido</li>
              <li>Verificação de ruídos e vibrações anormais</li>
            </ul>

            <h2 className="text-4xl"> Cuidados importantes:</h2>
            <ul>
              <li>Não instalar evaporadora em cima de tomadas ou eletrônicos (por causa do dreno)</li>
              <li>Condensadora precisa de ventilação e acesso para manutenção</li>
              <li>Usar profissionais certificados, pois erros causam perda de eficiência ou danos</li>
            </ul>

          <BotaoContato/>
        </Secao>
    </div>
  )
}

function ReparosGeral({className,...props}: React.ComponentProps<"div">){
  return(
    <div
      className={cn(
        "flex flex-col items-center",
        className
      )}{...props}
      id="reparos"
    >
      <h1 className="mb-10 mt-20">Reparos em Geral</h1>
        <Secao >

          <BotaoContato/>
        </Secao>
    </div>
  )
}

export { Alvenaria, Eletrica, Hidraulica , Drywall, ArCondicionado, ReparosGeral}

