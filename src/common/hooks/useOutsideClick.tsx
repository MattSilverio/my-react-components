import { useEffect } from "react";

export function useOutsideClick(ref: any, onClickOut: (e: any) => void) {
  useEffect(() => {
    const onClick = ({ target }: any) => {
      if (ref && !ref.contains(target)) {
        onClickOut?.(target);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [ref, onClickOut]);
}
