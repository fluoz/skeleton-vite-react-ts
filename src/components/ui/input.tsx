import * as React from "react";

import { cn } from "@/lib/utils/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startAdornment?: React.ReactNode | string;
  endAdornment?: React.ReactNode | string;
  wrapperClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      startAdornment,
      wrapperClassName,
      endAdornment,
      ...props
    },
    ref,
  ) => {
    const hasAdornment = Boolean(startAdornment) || Boolean(endAdornment);
    return (
      <>
        {hasAdornment ? (
          <div
            className={cn(
              "ring-offset-background flex h-10 items-center justify-center gap-2 rounded-md border border-input bg-transparent px-3 transition-all duration-300 ease-in-out focus-within:ring-1 focus-within:ring-primary focus-within:ring-offset-1 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50",
              wrapperClassName,
            )}
            data-disabled={props.disabled}
          >
            {startAdornment && (
              <div
                className={cn(
                  "!text-muted-foreground",
                  typeof startAdornment === "string" &&
                    "bg-muted/70 border-input border-r pr-3 text-sm",
                )}
              >
                {startAdornment}
              </div>
            )}
            <input
              type={type}
              className={cn(
                "flex h-full w-full rounded-md border-none bg-transparent py-2 text-sm shadow-none outline-none file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:border-none focus-visible:shadow-none focus-visible:outline-none",
                className,
              )}
              ref={ref}
              {...props}
            />
            {endAdornment && (
              <div className={cn("text-muted-foreground")}>{endAdornment}</div>
            )}
          </div>
        ) : (
          <input
            type={type}
            data-slot="input"
            ref={ref}
            className={cn(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              className,
            )}
            {...props}
          />
        )}
      </>
    );
  },
);

export { Input };
