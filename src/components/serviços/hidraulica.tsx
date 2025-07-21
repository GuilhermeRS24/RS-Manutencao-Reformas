import * as React from "react"

import { cn } from "@/lib/utils"

import { Secao, BotaoContato } from "./section"

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

export { Hidraulica }