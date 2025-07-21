import * as React from "react"

import { cn } from "@/lib/utils"

import { Secao, BotaoContato } from "./section"

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

export { ReparosGeral }