import { Section } from './Section';
import { Card } from '@/components/ui/card';
import { LucideIcon, Globe, Cctv } from 'lucide-react';
import { SymfonyIcon } from './icons/SymfonyIcon';
import { JavaScriptIcon } from './icons/JavaScriptIcon'
import { CSSIcon } from './icons/CSSIcon';
import { HtmlIcon } from './icons/HtmlIcon';
import { PythonIcon } from './icons/PythonIcon';
import Link from 'next/link';
import Image from "next/image";
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import BlurFade from '@/components/ui/blur-fade';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { ReactNode } from 'react';

export const Status = () => {
    const PROJECTS: ProjectsProps[] = [
        {
            Logo: Globe,
            title: "Not Enought Series",
            shortDescription: "Site web développé sous Symfony, semblable à AlloCiné, permettant de consulter un catalogue de séries et d'y déposer des critiques.",
            description: "Dans le cadre de ce projet, nous avons appliqué la méthode agile SCRUM avec des itérations de trois jours, favorisant une évolution continue et l’intégration des retours du product owner. En tant que développeur fullstack, j'ai pris en charge le front-end, le design, et une partie du back-end pour répondre aux attentes fonctionnelles, en veillant particulièrement à l’interaction avec la base de données. Celle-ci permettait de stocker et de récupérer en temps réel des informations clés, comme les séries suivies, les préférences utilisateur, les notes et les commentaires, garantissant ainsi une expérience utilisateur dynamique et personnalisée.",
            imgs: ["nes/nes1.png", "nes/nes2.png", "nes/nes3.png", "nes/nes4.png", "nes/nes5.png", "nes/nes6.png"],
            icons: [<HtmlIcon key="html" style={{ width: '42', height: '78'}} />,
                <CSSIcon key="css" style={{ width: '42', height: '78'}} />,                
                <SymfonyIcon key="symfony" size={42} />,
                <JavaScriptIcon key="javascript" size={42} />
                ]
        },
        {
            Logo: Cctv,
            title: "Reconnaissance d'Images",
            shortDescription: "Programme Python, capable de reconnaître automatiquement les chiffres inscrits sur des images.",
            description: "Ce projet de reconnaissance d'image m'a permis de renforcer mes compétences en traitement d'images et en apprentissage automatique. En travaillant sur la classification de chiffres, j'ai appris à préparer les données de manière efficace. Ce projet m'a aussi fait prendre conscience des défis liés à la précision des modèles et m’a donné des pistes pour améliorer un modèle en ajustant les étapes de traitement et en diversifiant les données. En somme, cette expérience a été précieuse pour approfondir mes compétences en intelligence artificielle appliquée.",
            imgs: ["reco/basededonnées.png", "reco/matrice_Confusion.png", "reco/schéma.png", "reco/traitement.png"],
            icons: [<PythonIcon key="python" size={42} />]
        }
    ]

    const WORKS: WorksProps[] = [
        {
            image: "https://media.licdn.com/dms/image/v2/C4E0BAQGNfeTPCu6Z-w/company-logo_100_100/company-logo_100_100/0/1631312208065?e=1737590400&v=beta&t=3cjBMwLhAPbiLn7BqhUd5I_hS__L-KteLkfQKNPGuVY",
            title: "Schneider Electric",
            role: "Stage Développeur Fullstack",
            date: "Avril 2024 - Juin 2024",
            url: "https://www.linkedin.com/company/2329/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BFPv8z692SCmduIkABpNJCA%3D%3D"
        },
        {
            image: "https://media.licdn.com/dms/image/v2/C4D0BAQHqjJ4jvF3MOQ/company-logo_100_100/company-logo_100_100/0/1635141033555/la_poste_logo?e=1737590400&v=beta&t=hekiRqW36DBq7Xqg8vYCkHq7g1AlTOohbO57gZglY8c",
            title: "La Poste",
            role: "Chargé de Clientèle",
            date: "Septembre 2022 - Janvier 2024",
            url: "https://www.laposte.fr/"
        }
    ]

    type ProjectsProps = {
        Logo: LucideIcon;
        title: string;
        shortDescription: string;
        description: string;
        imgs: string[];
        icons: ReactNode[];
    };

    const Projects = (props: ProjectsProps) => {
        return (
            <Dialog>
                <DialogTrigger className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded">
                    <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                        <props.Logo size={16} />
                    </span>
                    <div className="text-left">
                        <p className="text-lg font-semibold">{props.title}</p>
                        <p className="text-sm text-muted-foreground">{props.shortDescription}</p>
                    </div>
                </DialogTrigger>

                <DialogContent className="min-w-[80vw]  flex items-center max-md:flex-col">
                    <div className="flex-1 w-fit h-fit m-6">
                        <div className="mb-8"><h2 className="text-4xl text-center font-semibold">{props.title}</h2></div>

                        <div className="m-2">
                            <p className="text-3xl">Outils Utilisés</p>
                            <ul className="flex h-fit mb-6">
                                {props.icons.map((icon, index) => (
                                    <li key={index} className="m-2 flex items-end">{icon}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="m-2">
                            <p className="text-3xl">Description</p>
                            <p className="text-lg text-muted-foreground mt-6">{props.description}</p>
                        </div>
                    </div>

                    <Carousel className="flex-1 m-8">
                        <CarouselContent>
                            {props.imgs && props.imgs.length > 0 ? (
                                props.imgs.map((img, index) => (
                                    <CarouselItem key={index}>
                                        <Image
                                            src={`./assets/${img}`}
                                            layout="responsive"
                                            width={1800}
                                            height={1800}
                                            className="object-contain max-h-[40vh] bg-white"
                                            alt={`image-${index}`}
                                            priority
                                        />
                                    </CarouselItem>
                                ))
                            ) : (
                                <p>No images available</p>
                            )}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </DialogContent>
            </Dialog>
        );
    };

    type WorksProps = {
        image: string;
        title: string;
        role: string;
        date: string;
        url: string;
    };

    const Works = (props: WorksProps) => {
        return (
            <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded">
                <img
                    src={props.image}
                    alt={props.title}
                    className="w-10 h-10 object-contain rounded-md"
                />
                <div className="text-left">
                    <p className="text-lg font-semibold">{props.title}</p>
                    <p className="text-sm text-muted-foreground">{props.role}</p>
                </div>
                <div className="ml-auto">
                    <p className="text-sm text-muted-foreground">{props.date}</p>
                </div>
            </Link>
        )
    };

    return (
        <BlurFade delay={0.1 * 5} inView>
            <Section className="flex max-md:flex-col items-start gap-4">
                <div className="flex-[3] w-full">
                    <Card className="w-full p-4 flex flex-col gap-2 w-ful">
                        <p className="text-lg text-muted-foreground">Projets</p>
                        <div className="flex flex-col gap-4">
                            {PROJECTS.map((project, index) => (
                                <Projects
                                    key={index}
                                    Logo={project.Logo}
                                    title={project.title}
                                    shortDescription={project.shortDescription}
                                    description={project.description}
                                    imgs={project.imgs}
                                    icons={project.icons}
                                />
                            ))}
                        </div>
                    </Card>
                </div>

                <div className="flex-[2] w-full flex flex-col gap-4">
                    <Card className="p-4">
                        <p className="text-lg text-muted-foreground">Work</p>
                        <div className="flex flex-col gap-4">
                            {WORKS.map((work, index) => (
                                <Works
                                    key={index}
                                    image={work.image}
                                    title={work.title}
                                    role={work.role}
                                    date={work.date}
                                    url={work.url}
                                />
                            ))}
                        </div>
                    </Card>
                </div>
            </Section>

        </BlurFade>
    );
}