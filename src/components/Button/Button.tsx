import { forwardRef, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, forwardedRef) => {
  return (
    <button
      ref={forwardedRef}
      className="inline-flex justify-center items-center bg-sky-3 text-sky-11 font-regular text-base-lg leading-base-lg py-4 px-8"
    >
      {props.children}
    </button>
  );
});
