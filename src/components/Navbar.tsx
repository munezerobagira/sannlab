"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./toggle-icon";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Education",
    href: "/docs/primitives/alert-dialog",
    description:
      "Resources for student, that can help them achieve their career goals",
  },
  {
    title: "Communities map",
    href: "https://map.sancommunity.com/",
    description:
      "You can find most resources that enable provides charity services and goods for refugees and immigratnts",
  },
];
const services: { title: string; href: string; description: string }[] = [
  {
    title: "Project discovery",
    href: "/docs/primitives/alert-dialog",
    description: "https://find.usahello.org/",
  },
  {
    title: "Software design and development",
    href: "https://map.sancommunity.com/",
    description:
      "You can find most resources that enable provides charity services and goods for refugees and immigratnts",
  },
  {
    title: "Third party integrations",
    href: "https://map.sancommunity.com/",
    description:
      "You can find most resources that enable provides charity services and goods for refugees and immigratnts",
  },
];

export function NavBar() {
  return (
    <div className="shadow-sm flex justify-between p-2 z-[9]">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.svg"
          height={500}
          width={500}
          alt="Sangwas logo"
          className="mx-4 w-12"
        />
        <span className="font-bold text-lg">Sangwas</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Explore our projects
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        We very passionate of building techinical solutions that
                        solves different problems around the world.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  target="_blank"
                  href="https://www.sancommunity.com"
                  title="Sancommunity"
                >
                  An app that connect people and communities
                </ListItem>
                <ListItem
                  href=" https://www.bestmaf.com"
                  title="Bestmaf"
                  target="_blank"
                >
                  Generate, share, and vote musics with AI
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {services.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/about-us" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact-us" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Link href="#" legacyBehavior passHref>
        <ModeToggle />
      </Link>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
