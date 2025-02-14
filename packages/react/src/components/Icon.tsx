import { useMemo, type SVGAttributes } from "react";
import { cn } from "../lib/utils";

const IconPack = {
  'account-user': (
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 14.2211 3.80461 16.2544 5.13826 17.8241C6.0547 16.7109 7.44368 16 9 16H15C16.5563 16 17.9453 16.7109 18.8617 17.8241C20.1954 16.2544 21 14.2211 21 12C21 7.02944 16.9706 3 12 3ZM19.3702 20.1659C21.5992 18.1528 23 15.24 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 15.24 2.40079 18.1528 4.62979 20.1659C4.64139 20.1769 4.65328 20.1875 4.66545 20.198C6.6117 21.9404 9.18211 23 12 23C14.8179 23 17.3883 21.9404 19.3345 20.198C19.3467 20.1875 19.3586 20.1769 19.3702 20.1659ZM17.4006 19.2002C16.8527 18.4706 15.9806 18 15 18H9C8.01943 18 7.14734 18.4706 6.59938 19.2002C8.10368 20.3303 9.97363 21 12 21C14.0264 21 15.8963 20.3303 17.4006 19.2002ZM12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 11.1569 10.3431 12.5 12 12.5C13.6569 12.5 15 11.1569 15 9.5C15 7.84315 13.6569 6.5 12 6.5ZM7 9.5C7 6.73858 9.23858 4.5 12 4.5C14.7614 4.5 17 6.73858 17 9.5C17 12.2614 14.7614 14.5 12 14.5C9.23858 14.5 7 12.2614 7 9.5Z" />
  ),
  'chevron-down': (
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.46026 6.46026C2.07394 5.84658 3.06892 5.84658 3.6826 6.46026L12 14.7777L20.3174 6.46026C20.9311 5.84658 21.9261 5.84658 22.5397 6.46026C23.1534 7.07394 23.1534 8.06892 22.5397 8.6826L13.1112 18.1112C12.4975 18.7248 11.5025 18.7248 10.8888 18.1112L1.46026 8.6826C0.84658 8.06892 0.84658 7.07394 1.46026 6.46026Z" />
  ) 
}

export type IconOptions = keyof typeof IconPack;

interface IconProps extends SVGAttributes<SVGElement> {
  icon: IconOptions;
  size?: number;
}

export function Icon({ icon, size = 24, ...rest }: IconProps) {
  const SelectedIcon = useMemo(() => {
    return IconPack[icon];
  }, [icon]);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('fill-white', rest.className)}
      {...rest}
    >
      {SelectedIcon}
    </svg>
  )
}