import { Section } from "@/components/sections";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { IconArticle, IconBrandGithub, IconExternalLink, IconDatabase } from "@tabler/icons-react";


export interface Project {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    tags?: string[];
    time?: string;
    links: {
        icon: JSX.Element;
        text: string;
        url: string;
    }[];
    details: {
        sections?: Section[];
    };
}

export const projects: Project[] = [


    // Distributed File Server

    {
        id: "1",
        title: "Distributed File Server",
        description: "A distributed content-addressable file storage server using Go.",
        thumbnail: "/dfs_in_go_thumbnail.png",
        tags: ["Go", "Distributed Systems"],
        links: [
            {
                icon: <IconBrandGithub />,
                text: "Github",
                url: "https://github.com/NathanZlion/distrubuted_go_file_server-",
            }
        ],
        details: {
            sections: [
                {
                    type: "text",
                    title: "",
                    content: `Developed a distributed file storage system using Go, ensuring efficient and reliable data storage and retrieval. Improved system performance by leveraging Go's concurrency capabilities. Contributed to build automation using Makefile.`
                },
                {
                    type: "bullet",
                    title: "Key Features",
                    items: [
                        "Distributed file storage",
                        "Content-addressable storage",
                        "Concurrent data retrieval",
                        "Build automation"
                    ]
                },
                {
                    type: "carousel",
                    title: "Images",
                    items: [
                        {
                            caption: "Terminal",
                            image: "/dfs_photo_1.png"
                        },
                        {
                            caption: "File Upload",
                            image: "/dfs_photo_2.png"
                        },
                        {
                            caption: "Encrypted Files",
                            image: "/dfs_photo_3.png"
                        },
                    ]
                }
            ]
        }

    },

    // tetris
    {
        id: "2",
        title: "Tetris Game",
        description: "Developed a fully functional Tetris game using Java",
        time: "April 22, 2023 - November 1, 2023.",
        thumbnail: "/tetris-thumbnail.png",
        tags: ["Java", "Game Development", "OOP"],
        links: [
            {
                icon: <IconBrandGithub />,
                text: "Source Code",
                url: "https://github.com/NathanZlion/tetris-in-java",
            }
        ],
        details: {
            sections: [
                {
                    type: "text",
                    title: "Project Overview",
                    content: `The game includes core mechanics such as piece spawning, rotation, collision detection, and row clearing. The game also features a high score system and sound effects to enhance user experience. Implemented using OOP principles, the game is designed to be easily extensible.`
                },
                {
                    type: "bullet",
                    title: "Key Features",
                    items: [
                        "- **Core Mechanics**: Piece spawning, rotation, collision detection, Row clearing.",
                        "- **High Score System**: Persistent highscore across gameplays.",
                        "- **Sound Effects**: Enhancing user experience.",
                    ]
                },
                {
                    type: "carousel",
                    title: "Screens",
                    items: [
                        {
                            caption: "Homepage",
                            image: "/tetris-homepage.png"
                        },
                        {
                            caption: "Game Play",
                            image: "/tetris-gameplay.png"
                        },
                    ]
                }
            ]
        },
    },

    // Workout Warriors
    {
        id: "3",
        title: "Workout Warriors",
        description: "A workout app that helps users to track their workout progress.",
        thumbnail: "/workout_warriors_thumbnail.png",
        links: [
            {
                icon: <IconBrandGithub />,
                text: "Github",
                url: "https://github.com/theOneNd/Mobile-App",
            }
        ],
        time: "March 2023 - June 2023",
        tags: ["Flutter", "NestJS", "TypeScript"],
        details: {
            sections: [
                {
                    type: "text",
                    title: "Project Overview",
                    content: `Workout Warrior is a mobile application designed for fitness management and tracking for gym members, personal trainers, and gym managers. The app enables trainees to access their training plans from personal trainers, track their progress, schedule workouts, and communicate efficiently.`
                },
                {
                    type: "bullet",
                    title: "Key Features",
                    items: [
                        "**User Roles**: Three distinct user roles - trainee, personal trainer, and gym manager.",
                        "**Training Plans**: Personal trainers create and manage training plans for trainees.",
                        "**Tracking**: Progress tracking for trainees.",
                        "**Scheduling**: Workout scheduling for efficient planning.",
                        "**Communication**: In-app communication between trainees and personal trainers."
                    ]
                },
                {
                    type: "bullet",
                    title: "Tech Stacks",
                    items: [
                        "**Mobile App**: `Dart`, `Flutter`, `fl_chart`, `go_router`, `flutter_bloc`, `sqflite`",
                        "**Backend**: TypeScript, NestJS, Prisma for database migrations"
                    ],
                },
            ]
        }
    },

    // Kirare Music App
    {
        id: "4",
        title: "Kirare App",
        description: "Ethiopian Kignit(ቅኝት) classifier app using an RNN model.",
        thumbnail: "/kirare_thumbnail.png",
        links: [
            {
                icon: <IconDatabase />,
                text: "Dataset",
                url: "https://github.com/Ethio2021/EMIR_Dataset_V1"
            }
        ],
        tags: ["CNN", "Flask", "Flutter"],
        details: {
            sections: [
                {
                    type: "text",
                    title: "Project Overview",
                    content: `Developed a mobile application that <ins>classifies</ins> Ethiopian traditional music, Kignit (ቅኝት), using an RNN model. The app allows users to record music samples and classify them into different Kignit categories. The model is trained using a dataset of Ethiopian traditional music.
                    Read different papers in the subject matter: special one is [Kiñit classification in Ethiopian chants paper, Azmaris and modern music.](https://doi.org/10.1371/journal.pone.0284560)`
                },
                {
                    type: "bullet",
                    title: "Kignits Categories",
                    items: [
                        "-> Tizita",
                        "-> Ambassel",
                        "-> Anchi Hoye",
                        "-> Bati",
                    ]
                },
                {
                    type: "text",
                    title: "Dataset & Challenges",
                    content: `**Initial dataset**: EMIR1 with 600 songs and Church Mezmurs, problem with is was it had *45%* redundancy and *20%* mislabeled data,
                        So we removed redundant data, corrected mislabeled data with the consultance of Dr. Ezra Abate (Ph.D.). Added additional 30-second audio clips collected from Ethiopian music on YouTube.`
                },
                {
                    type: "bullet",
                    title: "Audio Data Processing",
                    items: [
                        "• Used librosa for visualization",
                        "• Time-frequency and magnitude graphs were unreliable",
                        "• MFCC (*Mel-frequency cepstral coefficients*) chosen for feature extraction (2D-image-like representation)"
                    ]
                },
                {
                    type: "bullet",
                    title: "Data Labeling",
                    items: [
                        "Labeled by team members",
                        " and Yared Music School experts",
                        "New YouTube data was also labeled"
                    ]
                },
                {
                    type: "bullet",
                    title: "Feature Selection",
                    items: [
                        "Explored MFCC and Chroma",
                        "MFCC chosen for CNN-based classification"
                    ]
                },
                {
                    type: "bullet",
                    title: "Model Selection",
                    items: [
                        "Compared RNN (LSTM) and CNN",
                        "RNN: 50% accuracy, CNN: 89% accuracy",
                        "CNN selected for final model"
                    ]
                },
                {
                    type: "bullet",
                    title: "Backend Development",
                    items: ["Built using Flask", "Handles requests, predictions, and dataset expansion"]
                },
                {
                    type: "bullet",
                    title: "Mobile App Features",
                    items: [
                        "Built with Flutter",
                        "Audio recording (manual stop or auto after 30s)",
                        "Audio transmission to backend",
                        "Loading screen during processing",
                        "Results: Identified scale, description, torrets ring, YouTube audio"
                    ]
                }
            ]
        }
    },

    // AlgoEspresso
    {
        id: "5",
        thumbnail: "/algoespresso_thumbnail.png",
        title: "AlgoEspresso",
        description: "Leetcode like platform for practicing algorithms and data structures, built with learning resources in mind.",
        tags: ["Go", "NextJS", "TypeScript"],
        time: "February 2023 - Present [ongoing]",
        links: [
            {
                icon: <IconBrandGithub />,
                text: "Github",
                url: "https://github.com/NathanZlion/AlgoEspresso/",
            },
            {
                icon: <IconArticle />,
                text: "Blog",
                url: "https://nathanzlion.github.io/categories/algoespresso/"
            }
        ],
        details: {
            sections: [
                {
                    type: "carousel",
                    items: [
                        {
                            caption: "Landing Page",
                            image: "/algoespresso_ 1.png"
                        },
                        {
                            caption: "Landing Page",
                            image: "/algoespresso_ 2.png"
                        },
                        {
                            caption: "Landing Page",
                            image: "/algoespresso_ 4.png"
                        }
                    ]
                },
                {
                    type: "custom",
                    title: " ... ",
                    content: (
                        <>

                            <DotLottieReact
                                src="https://lottie.host/babedb64-9204-41b2-8cbf-d44def7d110a/HkgNfExmli.lottie"
                                loop
                                autoplay
                            />

                            <p className="text-center">Work in progress...</p>
                        </>
                    )
                }
            ]
        }
    },
    {
        id: "6",
        thumbnail: "/qismati_thumbnail.png",
        title: "Qismati",
        description: "A Muslim dating app that helps users find their life partners.",
        tags: ["Flutter", "Firebase", "Payment Integration"],
        time: "January 2023 - Present [ongoing]",
        links: [],
        details: {}
    },
    {
        id: "7",
        thumbnail: "/ai_humanizer_thumbnail.png",
        title: "AI humanizer",
        description: "A web app that converts ai generated text into human like text, to avoid ai detection.",
        tags: ["React", "React Query", "NodeJS", "Express", "MongoDB"],
        links: [],
        details: { sections: [] }
    },

    {
        id: "8",
        title: "Hacks Datavis",
        description: "A visualization site for A2SV 2024 Hackathon data, syncing Google Sheets with db using AppScript.",
        thumbnail: "/infoblender_thumbnail.png",
        links: [
            {
                icon: <IconBrandGithub />,
                text: "Source Code",
                url: "https://github.com/NathanZlion/hacks-datavis/"
            },
            {
                icon: <IconExternalLink />,
                text: "Site",
                url: "https://hacks-datavis.vercel.app/"
            }
        ],
        tags: ["Google AppScript", "React", "CronJob"],
        details: { sections: [] }
    },

    // {
    //     id: "8",
    //     title: "Pocker Game",
    //     description: "A web application that aggregates news from multiple sources.",
    //     thumbnail: "/infoblender_thumbnail.png",
    //     links: [
    //         {
    //             icon: <IconBrandGithub />,
    //             text: "Github",
    //             url: "https://github.com/NathanZlion/Info_Blend"
    //         }
    //     ],
    //     tags: ["React", "NodeJS", "Express", "MongoDB"],
    // details: { sections: [ ] }
    // },
]