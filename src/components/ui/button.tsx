import { cn } from "@/lib/utils";
import React from "react";

interface LinkProps {
  className?: string;
  children?: React.ReactNode;
}

const BotaoTelefone = ({children = "Entrar em Contato", className, ...props}: LinkProps ) => {
    return(
        <a
            href="https://wa.me/5547999746021?text=Ola"
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
                "bg-blue-700 text-white text-2xl w-90 h-13 rounded flex justify-center items-center font-semibold hover:bg-blue-800 hover:text-gray-300 hover:w-88",
                className
            )}
            {...props}
        >
            {children}
        </a>
    );
}

export{
    BotaoTelefone
}