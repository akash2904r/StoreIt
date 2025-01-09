"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { avatarPlaceholderUrl, navItems } from "@/constants";
import { cn } from "@/lib/utils";

interface Props {
    fullName: string;
    avatar: string;
    email: string;
}

export default function Sidebar({ fullName, avatar, email }: Props) {
    const pathname = usePathname();

    return (
        <aside className="sidebar">
            <Link href="/">
                <Image 
                    src="/icons/logo-full-brand.svg"
                    alt="logo"
                    width={140}
                    height={50}
                    className="hidden h-auto lg:block"
                />

                <Image 
                    src="/icons/logo-brand.svg"
                    alt="logo"
                    width={52}
                    height={52}
                    className="lg:hidden"
                />
            </Link>

            <nav className="sidebar-nav">
                <ul className="flex flex-1 flex-col gap-4">
                    {navItems.map(({ url, name, icon }) => (
                        <Link 
                            key={name} 
                            href={url}
                            className="lg:w-full"
                        >
                            <li
                                className={cn(
                                    "sidebar-nav-item",
                                    pathname === url && "shad-active"
                                )}
                            >
                                <Image 
                                    src={icon}
                                    alt={name}
                                    width={24}
                                    height={24}
                                    className={cn(
                                        "nav-icon",
                                        pathname === url && "nav-icon-active"
                                    )}
                                />
                                <p className="hidden lg:block">{name}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>

            <Image 
                src="/imgs/files-2.png"
                alt="logo"
                width={450}
                height={372}
                className="w-full"
            />

            <div className="sidebar-user-info">
                <Image 
                    src={avatarPlaceholderUrl}
                    alt="Avatar"
                    width={44}
                    height={44}
                    className="sidebar-user-avatar"
                />

                <div className="hidden lg:block">
                    <p className="subtitle-2 capitalize">{fullName}</p>
                    <p className="caption">{email}</p>
                </div>
            </div>
        </aside>
    );
}