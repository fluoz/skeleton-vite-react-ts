import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { UseFormReturn } from "react-hook-form";
import { cn } from "@/lib/utils/utils";

interface Props {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  placeholder: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  replaceRegex?: RegExp | string;
  type?: string;
  description?: React.ReactNode | string;
  descriptionDirection?: "left" | "right";
  inputClassName?: string;
  startAdornment?: React.ReactNode | string;
  endAdornment?: React.ReactNode | string;
}

const TextInput = ({
  form,
  label,
  name,
  placeholder,
  required = true,
  disabled,
  replaceRegex,
  type = "text",
  description,
  descriptionDirection = "left",
  className,
  inputClassName,
  endAdornment,
  startAdornment,
}: Props) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>
            {label}{" "}
            {!required && (
              <span className="ml-1 font-normal text-gray-2">(Opsional)</span>
            )}
          </FormLabel>
          <FormControl>
            <Input
              startAdornment={startAdornment}
              endAdornment={endAdornment}
              placeholder={placeholder}
              disabled={disabled}
              type={type}
              onWheel={(e) => e.currentTarget.blur()}
              className={inputClassName}
              {...field}
              onChange={(e) => {
                if (replaceRegex) {
                  field.onChange(e.target.value.replace(replaceRegex, ""));
                } else {
                  field.onChange(e.target.value);
                }
                form.trigger(name);
              }}
            />
          </FormControl>
          {description && (
            <FormDescription
              className={cn(
                "",
                descriptionDirection === "right" && "float-right",
              )}
            >
              {description}
            </FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextInput;
