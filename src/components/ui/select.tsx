import { cn } from "@/lib/utils";
import { forwardRef, type SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, options, ...props }, ref) => {
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
        <div className="relative">
          <select
            id={id}
            ref={ref}
            className={cn(
              "w-full bg-transparent appearance-none cursor-pointer",
              "border-b-3 border-white",
              "py-grid-2 px-0 pr-8",
              "font-body text-body-md text-white",
              "focus:outline-none focus:border-foreground-muted",
              "transition-colors duration-200",
              error && "border-red-500",
              className
            )}
            {...props}
          >
            {options.map((option) => (
              <option
                className="m-2"
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
            <svg
              className="h-4 w-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {error && (
          <p className="text-red-500 text-body-sm mt-grid-1">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
