"use client"

import {
    Atom,
    Bird,
    Eclipse,
    Frame,
    HandCoins,
    History,
    House,
    LayoutDashboard,
    LifeBuoy,
    Rabbit,
    Send,
    Settings2,
    Star,
    Turtle,
} from "lucide-react"

import {NavMain} from "@/components/nav-main"
import {NavProjects} from "@/components/nav-projects"
import {NavSecondary} from "@/components/nav-secondary"
import {NavUser} from "@/components/nav-user"
import {TeamSwitcher} from "@/components/team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarItem,
    SidebarLabel,
} from "@/components/ui/sidebar"

const data = {
    teams: [
        {
            name: "Investor",
            logo: Atom,
            plan: "Pro",
        },
        {
            name: "Test 1",
            logo: Eclipse,
            plan: "Basic",
        },
    ],
    user: {
        name: "Erik",
        email: "erik@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "#",
            icon: LayoutDashboard,
            isActive: true,
            items: [
                {
                    title: "History",
                    url: "#",
                    icon: History,
                    description: "View your recent prompts",
                },
                {
                    title: "Starred",
                    url: "#",
                    icon: Star,
                    description: "Browse your starred prompts",
                },
            ],
        },
        {
            title: "Pond",
            url: "#",
            icon: House,
            items: [
                {
                    title: "Map",
                    url: "#",
                    icon: Rabbit,
                    description: "Our fastest model for general use cases.",
                },
                {
                    title: "Explorer",
                    url: "#",
                    icon: Bird,
                    description: "Performance and speed for efficiency.",
                },
                {
                    title: "Profitability",
                    url: "#",
                    icon: Turtle,
                    description: "The most powerful model for complex computations.",
                },
            ],
        },
        {
            title: "Cabin",
            url: "#",
            icon: HandCoins,
            items: [
                {
                    title: "Validations",
                    url: "#",
                },
                {
                    title: "Oikos",
                    url: "#",
                },
                {
                    title: "Tutorials",
                    url: "#",
                },
                {
                    title: "Changelog",
                    url: "#",
                },
            ],
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
    ],

    navSecondary: [
        {
            title: "Support",
            url: "#",
            icon: LifeBuoy,
        },
        {
            title: "Feedback",
            url: "#",
            icon: Send,
        },
    ],
    projects: [
        {
            name: "Oikos 1 Rental",
            url: "#",
            icon: Frame,
        },
    ],
    searchResults: [
        {
            title: "Routing Fundamentals",
            teaser:
                "The skeleton of every application is routing. This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Next.js.",
            url: "#",
        },
        {
            title: "Layouts and Templates",
            teaser:
                "The special files layout.js and template.js allow you to create UI that is shared between routes. This page will guide you through how and when to use these special files.",
            url: "#",
        },
        {
            title: "Data Fetching, Caching, and Revalidating",
            teaser:
                "Data fetching is a core part of any application. This page goes through how you can fetch, cache, and revalidate data in React and Next.js.",
            url: "#",
        },
        {
            title: "Server and Client Composition Patterns",
            teaser:
                "When building React applications, you will need to consider what parts of your application should be rendered on the server or the client. ",
            url: "#",
        },
        {
            title: "Server Actions and Mutations",
            teaser:
                "Server Actions are asynchronous functions that are executed on the server. They can be used in Server and Client Components to handle form submissions and data mutations in Next.js applications.",
            url: "#",
        },
    ],
}

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams}/>
            </SidebarHeader>
            <SidebarContent>
                <SidebarItem>
                    <SidebarLabel>Platform</SidebarLabel>
                    <NavMain items={data.navMain} searchResults={data.searchResults}/>
                </SidebarItem>
                <SidebarItem>
                    <SidebarLabel>Projects</SidebarLabel>
                    <NavProjects projects={data.projects}/>
                </SidebarItem>
                <SidebarItem className="mt-auto">
                    <SidebarLabel>Help</SidebarLabel>
                    <NavSecondary items={data.navSecondary}/>
                </SidebarItem>

            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user}/>
            </SidebarFooter>
        </Sidebar>
    )
}
