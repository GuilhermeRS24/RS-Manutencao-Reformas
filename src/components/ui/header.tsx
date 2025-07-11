import * as React from "react"

import { cn } from "@/lib/utils"

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

export {Header}