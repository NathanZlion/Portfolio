"use client";

import HomeApp from "@/app/(Desktop)/(apps)/home/home_app";
import { ApplicationState, SizingState } from "./state/applications/interfaces";
import EducationApp from "@/app/(Desktop)/(apps)/education/education_app";
import ExperienceApp from "@/app/(Desktop)/(apps)/experience/slack_app";
import XCodeApp from "@/app/(Desktop)/(apps)/projects/github_app";
import ContactApp from "@/app/(Desktop)/(apps)/contact/contact_app";
import MusicApp from "@/app/(Desktop)/(apps)/hobbies/music_app";
import PreviewApp from "@/app/(Desktop)/(apps)/resume/preview_app";
import GithubApp from "@/app/(Desktop)/(apps)/github/github_app";
import JournalApp from "@/app/(Desktop)/(apps)/blog/journal_app";
import TerminalApp from "@/app/(Desktop)/(apps)/terminal/terminal_app";


export type AppWindowStateInterface = Omit<AppWindowStateConfig, "with">;

export interface AppInfo {
    id: string;
    title: string;
    icon: {
        uri: string;
        color: string;
        alt: string;
    },
    appComponent: React.FC<AppWindowStateInterface>;
    // q: how do you modify the above if you want everything but the method with in the React.FC
    // a: you can use the Omit utility type to remove the method from the type here
    windowState: ApplicationState;
}

export class AppWindowStateConfig implements ApplicationState {
    constructor(
        public id: string,
        public x: number,
        public y: number,
        public width: number,
        public height: number,
        public sizingState: SizingState,
        public zIndex: number,
        public active: boolean,
        public open: boolean
    ) { }


    static default({ id }: { id: string }): AppWindowStateConfig {
        return new AppWindowStateConfig(
            id,
            100,
            400,
            800,
            600,
            SizingState.FULL_SCREEN,
            1,
            false,
            false
        );
    }

    with(changes: Partial<AppWindowStateConfig>): AppWindowStateConfig {
        return new AppWindowStateConfig(
            changes.id ?? this.id,
            changes.x ?? this.x,
            changes.y ?? this.y,
            changes.width ?? this.width,
            changes.height ?? this.height,
            changes.sizingState ?? this.sizingState,
            changes.zIndex ?? this.zIndex,
            changes.active ?? this.active,
            changes.open ?? this.open
        );
    }
}

// TODO: Find an application for the finder app, the icon looks really cool
// {
//     id: "finder",
//     title: "Finder",
//     imageUri: "/img/finder.png",
// },

// INITIAL APP STATES
const HomeApplication: AppInfo = {
    id: "home",
    title: "Home",
    icon: {
        uri: "img/home.png",
        color: "#000000",
        alt: "Home",
    },
    appComponent: HomeApp,
    windowState: AppWindowStateConfig
        .default({ id: "home" })

        // home is open by default
        .with({ open: true, active: true }),
};

const EducationApplication: AppInfo = {
    id: "education",
    title: "Education",
    icon: {
        uri: "img/minecraft_education.png",
        color: "#000000",
        alt: "Education",
    },
    appComponent: EducationApp,
    windowState: AppWindowStateConfig
        .default({ id: "education" }),
};

const ExperienceApplication: AppInfo = {
    id: "experience",
    title: "Work Experience",
    icon: {
        uri: "img/slack.png",
        color: "#000000",
        alt: "Work Experience",
    },
    appComponent: ExperienceApp,
    windowState: AppWindowStateConfig
        .default({ id: "experience" }),
};

const ProjectsApplication: AppInfo = {
    id: "projects",
    title: "Projects",
    icon: {
        uri: "img/xcode.png",
        color: "#000000",
        alt: "Projects",
    },
    appComponent: XCodeApp,
    windowState: AppWindowStateConfig
        .default({ id: "projects" }),
};

const ContactApplication: AppInfo = {
    id: "contact",
    title: "Contact Me",
    icon: {
        uri: "img/contacts.png",
        color: "#000000",
        alt: "Contact",
    },
    appComponent: ContactApp,
    windowState: AppWindowStateConfig
        .default({ id: "contact" }),
};

const HobbyApplication: AppInfo = {
    id: "hobby",
    title: "Hobby",
    icon: {
        uri: "img/music.png",
        color: "#000000",
        alt: "Hobby",
    },
    appComponent: MusicApp,
    windowState: AppWindowStateConfig
        .default({ id: "hobby" }),
};

const PreviewApplication: AppInfo = {
    id: "resume",
    title: "My Resume",
    icon: {
        uri: "img/preview.png",
        color: "#000000",
        alt: "Resume Preview",
    },
    appComponent: PreviewApp,
    windowState: AppWindowStateConfig
        .default({ id: "resume" }),
};


const GithubApplication: AppInfo = {
    id: "github",
    title: "Github",
    icon: {
        uri: "img/github_desktop.png",
        color: "#000000",
        alt: "Github",
    },
    appComponent: GithubApp,
    windowState: AppWindowStateConfig
        .default({ id: "github" }),
};


const BlogApplication: AppInfo = {
    id: "blog",
    title: "Blog",
    icon: {
        uri: "img/journal.png",
        color: "#000000",
        alt: "Blog",
    },
    appComponent: JournalApp,
    windowState: AppWindowStateConfig
        .default({ id: "blog" }),
};


const TerminalApplication: AppInfo = {
    id: "terminal",
    title: "Terminal Easter Egg",
    icon: {
        uri: "img/terminal.png",
        color: "#000000",
        alt: "Terminal",
    },
    appComponent: TerminalApp,
    windowState: AppWindowStateConfig
        .default({ id: "terminal" }),
};


export const AllApps: {
    [key: string]: AppInfo;
} = {
    "home": HomeApplication,
    "education": EducationApplication,
    "work_experience": ExperienceApplication,
    "projects": ProjectsApplication,
    "contact": ContactApplication,
    "hobby": HobbyApplication,
    "resume_preview": PreviewApplication,
    "github": GithubApplication,
    "blog": BlogApplication,
    "terminal": TerminalApplication,
}