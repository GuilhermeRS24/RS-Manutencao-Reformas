import * as React from "react"

import { cn } from "@/lib/utils"

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

export {Secao}