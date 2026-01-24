import { cn } from "@/lib/utils";
import { forwardRef, type TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
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
        <textarea
          id={id}
          ref={ref}
          className={cn(
            "w-full bg-transparent resize-none",
            "border-b-3 border-white",
            "py-grid-2 px-0",
            "font-body text-body-md text-white",
            "placeholder:text-foreground-subtle",
            "focus:outline-none focus:border-foreground-muted",
            "transition-colors duration-200",
            "min-h-[120px]",
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

Textarea.displayName = "Textarea";

export { Textarea };
