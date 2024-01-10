import { PropsWithChildren } from "react";
import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Balancer } from "react-wrap-balancer"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Shell } from "@/components/shell"
import { SlideShow } from "@/components/slideshow";
import { ContentWrapper } from "@/components/ContentWrapper";

export default async function HomePage() {
  // See the unstable_cache API docs: https://nextjs.org/docs/app/api-reference/functions/unstable_cache
 
  return (
    <div>
      <SlideShow />
      <ContentWrapper>
        ghfghfghfghfghf
      </ContentWrapper>
    </div>
  )
}


const HomePageLayout = (
  props: React.PropsWithChildren<{
    heading: React.ReactNode;
    subheading: React.ReactNode;
  }>
) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 text-center mb-12 pt-2">
        {props.heading}
        <div className="text-slate-600">{props.subheading}</div>
      </div>
      {props.children}
    </>
  );
};
