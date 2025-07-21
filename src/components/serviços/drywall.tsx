import * as React from "react"

import { cn } from "@/lib/utils"

import { Secao, BotaoContato } from "./section"

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

export { Drywall }