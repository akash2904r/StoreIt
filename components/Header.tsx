import Image from "next/image";

import { Button } from "@/components/ui/button";
import Search from "@/components/Search";
import FileUploader from "@/components/FileUploader";

export default function Header() {
    return (
        <header className="header">
            <Search />

            <div className="header-wrapper">
                <FileUploader />

                <form>
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