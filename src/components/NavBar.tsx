import { image } from "@nextui-org/react";
import Link from "next/link";

interface NavBarProps {
    active: "dashboard" | "movimentacoes" | "categorias"
}

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const classActive = "border-red-800 border-b-4 pb-2"

    return (
        <nav className="flex w-full justify-between items-center px-4 py-2 ">
            <h1 className="text-4xl font-bold">Anns's money minder</h1>
            <ul className="flex gap-16">
                <li className={active == "dashboard" ? classActive: ""}><Link href="/">dashboard</Link></li>
                <li className={active == "movimentacoes" ? classActive: ""}><Link href="/movimentacoes">movimentações</Link></li>
                <li className={active == "categorias" ? classActive: ""}><Link href="/categorias">categorias</Link></li>
            </ul>
            <div className="w-14 h-14 rounded-full overflow-hidden">
                        <img src="https://i.pravatar.cc/300" alt="avatar" />
                    </div>
        </nav>
    )
}