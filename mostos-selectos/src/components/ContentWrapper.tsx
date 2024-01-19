import { cn } from "@/lib/utils";
import { type PropsWithChildren } from "react";

export const ContentWrapper = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={cn(`max-w-[1400px] m-auto  xl:px-20  md:px-10sm:px-2 px-4`, className)}>{children}</div>
  );
}; 