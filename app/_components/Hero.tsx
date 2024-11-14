import { Section } from './Section';
import Image from "next/image";
import BlurFade from "@/components/ui/blur-fade";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start">
      <div className="flex-[2] w-full flex flex-col gap-2">
        <BlurFade delay={0.1} inView><h2 className="font-satoshi_bold text-9xl text-primary leading-tight ml-0">Lucas Marty</h2></BlurFade>
        <BlurFade delay={0.1*2} inView><h3 className="font-satoshi text-5xl leading-tight ml-1.5">Etudiant en Informatique</h3></BlurFade>
        <BlurFade delay={0.1*3} inView>
          <p className="font-roboto ml-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo mollitia totam esse perferendis iste iure voluptas expedita 
          impedit consequatur assumenda nihil hic enim, asperiores cum repellat suscipit. Saepe, distinctio impedit.</p>
        </BlurFade>
    </div>

      <div className="flex-1 max-md:m-auto ml-auto">         
        <BlurFade delay={0.1*4} inView>
          <Image 
                  src="./assets/logo.png"
                  width={200}   
                  height={200}                  
                  className="w-full h-auto max-w-xs max-md:w-56 rounded-full" 
                  alt = "lucas marty logo"
              />      
        </BlurFade>  
      </div>
    </Section>
  );
};