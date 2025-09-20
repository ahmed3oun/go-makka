import Link from "next/link";
import { CircleUserRound } from 'lucide-react';
import { MessageCircleQuestionMark } from 'lucide-react';

export default function Navigation() {
    return (
        <>
            <nav className="bg-white text-black">
                <div className="flex justify-between items-center px-6">
                    {/* Menu links */}
                    <ul className="flex space-x-6 font-medium">
                        <li>
                            <Link href="/" className="hover:text-red-700">
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link href="/omra" className="hover:text-red-700">
                                Omra
                            </Link>
                        </li>
                        <li>
                            <Link href="/omra-combinee" className="hover:text-red-700">
                                Omra combinée
                            </Link>
                        </li>
                        <li>
                            <Link href="/hajj" className="hover:text-red-700">
                                Hajj
                            </Link>
                        </li>
                        <li>
                            <Link href="/voyages" className="hover:text-red-700">
                                Voyages Monde
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-red-700">
                                Nos services
                            </Link>
                        </li>
                    </ul>

                    {/* Right links */}
                    <div className="flex space-x-4 text-sm">
                        <Link href="/compte" className="hover:text-red-700">
                            Mon compte
                            <CircleUserRound className="inline-block ml-1 mb-1" size={16} />
                        </Link>
                        <Link href="/espace-client" className="hover:text-red-700">
                            Espace client
                            <MessageCircleQuestionMark className="inline-block ml-1 mb-1" size={16} />
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}