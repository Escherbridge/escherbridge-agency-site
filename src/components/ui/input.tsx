import { cn } from "@/lib/utils";
import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="space-y-grid-1">
        {label && (
          <label
            htmlFor={id}
            className="block font-heading text-body-sm uppercase tracking-wider text-foreground-muted"
          >
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(
            "w-full bg-transparent",
            "border-b-3 border-white",
            "py-grid-2 px-0",
            "font-body text-body-md text-white",
            "placeholder:text-foreground-subtle",
            "focus:outline-none focus:border-foreground-muted",
            "transition-colors duration-200",
            error && "border-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-red-500 text-body-sm mt-grid-1">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
