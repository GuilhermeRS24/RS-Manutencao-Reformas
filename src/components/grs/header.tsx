import * as React from "react"

import { cn } from "@/lib/utils"
import Image from "next/image"

function Header({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        " relative bg-blue-800 text-green-50 rounded w-335 h-35 flex items-center justify-evenly",
        className
      )}
      {...props}
    />
      
  )
}

function MainHeader(){
  return(
    <Header>
      <Image width={100} height={100} src="/imagens/logo.png" alt="Logo da empresa" className="
            w-30 h-auto absolute left-3
          "/>
          <div className="absolute left-50">
            <h1 className="text-4xl">RS Manutenção e Reformas</h1>
            <p className="text-xl">Contatos: 41 9890-4364 | Email:rs.ManutençãoReformas | Instagram: @RS_ManutençãoReformas</p>
          </div>
    </Header>
  )
}

export { Header, MainHeader}