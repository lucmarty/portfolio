import { Section } from "./Section";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 bg-background z-50">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">
         
        </h1>
        <div className="flex-1"/>
        <ul className="flex items-center gap-2">
            <Link 
              href="https://github.com/lucmarty"
              className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
            >
                <GithubIcon size={12} className="text-foreground"/>
            </Link>     
            <Link 
              href="https://www.linkedin.com/in/lmarty33/"
              className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
            >
                <LinkedinIcon size={12} className="text-foreground"/>
            </Link>          
        </ul>
      </Section>
    </header>
  );
};
