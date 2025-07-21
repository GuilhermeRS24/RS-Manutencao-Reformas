import * as React from "react"

import { cn } from "@/lib/utils"

import { Secao, BotaoContato } from "./section"

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

export { ArCondicionado }