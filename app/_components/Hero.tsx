import { Section } from './Section';
import Image from "next/image";
import BlurFade from "@/components/ui/blur-fade";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start">
      <div className="flex-[2] w-full flex flex-col gap-2">
        <BlurFade delay={0.1} inView><h2 className="font-satoshi_bold text-9xl text-primary leading-tight ml-0">Lucas Marty</h2></BlurFade>
        <BlurFade delay={0.1*2} inView><h3 className="font-satoshi text-5xl leading-tight ml-1.5">Apprenti Data Science & IA </h3></BlurFade>
        <BlurFade delay={0.1*3} inView>
          <p className="font-roboto ml-2">
           
          </p>
        </BlurFade>
    </div>
    </Section>
  );
};