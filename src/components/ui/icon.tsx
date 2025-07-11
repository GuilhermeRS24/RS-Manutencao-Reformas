import { cn } from "@/lib/utils";
import React from "react";

interface IconProps {
  href: string;
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
    />
  )
}

const Icon = ({ href, className, ...props }: IconProps) => {

  return (
    <a
      href={href}
      className={cn(
        "flex flex-col items-center  hover:h-22 m-5",
        className
      )}
      {...props}
    >
      
    </a>
  );
};

    const Alvenaria = ({...props }: IconProps) => { 

      return (
        <Icon
          {...props}
        >
          <img src="/imagens/alvenaria_icon.png"/><h2>Alvenaria</h2>
        </Icon>
      )
    }

    const Eletrica = ({...props }: IconProps) => { 

      return (
        <Icon
          {...props}
        >
          <img src="/imagens/eletrica_icon.png"/><h2>Elétrica</h2>
        </Icon>
      )
    }

    const Encanamento = ({...props }: IconProps) => { 

      return (
        <Icon
          {...props}
        >
          <img src="/imagens/encanamento_icon.png"/><h2>Encanamento</h2>
        </Icon>
      )
    }

    const Drywall = ({...props }: IconProps) => { 

      return (
        <Icon
          {...props}
        >
          <img src="/imagens/drywall_icon.png"/><h2>Drywall</h2>
        </Icon>
      )
    }

    const Ar = ({...props }: IconProps) => { 

      return (
        <Icon
          {...props}
        >
          <img src="/imagens/ar_icon.png"/><h2>Ar-Condicionado</h2>
        </Icon>
      )
    }

    const Reparos = ({...props }: IconProps) => { 

      return (
        <Icon
          {...props}
        >
          <img src="/imagens/reparos_icon.png"/><h2>Reparos em Geral</h2>
        </Icon>
      )
    }

export {Icons, Icon, Alvenaria, Eletrica, Encanamento, Drywall, Ar, Reparos, }
