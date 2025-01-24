import Image from "next/image";

import { Button } from "@/components/ui/button";
import Search from "@/components/Search";
import FileUploader from "@/components/FileUploader";
import { signOutUser } from "@/lib/actions/user.action";

export default function Header({ 
    userId, 
    accountId 
}: { 
    userId: string, 
    accountId: string 
}) {
    return (
        <header className="header">
            <Search />

            <div className="header-wrapper">
                <FileUploader ownerId={userId} accountId={accountId} />

                <form action={async () => {
                    'use server';

                    await signOutUser();
                }}>
                    <Button type="submit" className="sign-out-button">
                        <Image 
                            src="/icons/logout.svg"
                            alt="Logo"
                            width={24}
                            height={24}
                            className="w-6"
                        />
                    </Button>
                </form>
            </div>
        </header>
    );
}