import * as React from "react"

import { cn } from "@/lib/utils"

import { Secao, BotaoContato } from "./section"

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

export {Alvenaria}