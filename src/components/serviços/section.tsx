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

export {Secao, BotaoContato}