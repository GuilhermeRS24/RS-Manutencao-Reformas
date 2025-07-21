import * as React from "react"

import { cn } from "@/lib/utils"

import { Secao, BotaoContato } from "./section"

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

export { Eletrica }