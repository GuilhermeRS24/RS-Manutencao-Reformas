import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface IconProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

function Icons({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-blue-800 h-40 min-w-230 rounded p-2 text-xl text-white flex items-center justify-around",
        className
      )}
      {...props}
    >
      <Icon href="#alvenaria"><Image width={60} height={60} className="w-13 h-auto" alt="botao para área de alvenaria" src="/imagens/alvenaria_icon.png"/><h2>Alvenaria</h2></Icon>

      <Icon href="#eletrica"><Image width={60} height={60} className="w-13 h-auto" alt="botao para área de Elétrica" src="/imagens/eletrica_icon.png"/><h2>Elétrica</h2></Icon>

      <Icon href="#hidraulica"><Image width={60} height={60} className="w-13 h-auto" alt="botao para área de encanamento" src="/imagens/encanamento_icon.png"/><h2>Hidráulica</h2></Icon>

      <Icon href="#drywall"><Image width={60} height={60} className="w-13 h-auto" alt="botao para área de drywall" src="/imagens/drywall_icon.png"/><h2>Drywall</h2></Icon>

      <Icon href="#ar"><Image width={60} height={60} className="w-13 h-auto" alt="botao para área de Ar-Condicionado" src="/imagens/ar_icon.png"/><h2>Ar-Condicionado</h2></Icon>

      <Icon href="#reparos"> <Image width={60} height={60} className="w-13 h-auto" alt="botao para área de Reparos em Geral" src="/imagens/reparos_icon.png"/><h2>Reparos em Geral</h2></Icon>

    </div>
  )
}

const Icon = ({children, href, className, ...props }: IconProps) => {

  return (
    <a
      href={href}
      className={cn(
        "flex flex-col items-center  hover:scale-110 m-5",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};



export {Icons, Icon}
