
export default function KnowAllSection() {
    return (
        <>
            <div className="flex flex-col items-start bg-trans text-white p-8 w-full">
                <h3 className="text-2xl font-bold text-blue-700 mb-8 w-full">
                    Tout savoir sur nos formules Hajj Go-Makkah
                </h3>

                <div className="space-y-6">
                    {/* VIP Formula */}
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="text-lg font-semibold text-yellow-600 mb-2">Notre formule Hajj VIP</h4>
                        <p className="text-black border-l-yellow-600 border-l-4 pl-4">
                            Profitez d'un <span className="font-semibold">hébergement 5+ à Abraj Al Beit</span> ou Jabal Omar,
                            avec <span className="font-semibold">transferts en TGV</span> pour un confort optimal. Votre séjour
                            inclut aussi un campement à Minâ (<span className="font-semibold">Al Kabch</span>), pour vivre
                            pleinement les rites du Hajj dans les meilleures conditions.
                        </p>
                    </div>

                    {/* Comfort Formula */}
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="text-lg font-semibold text-yellow-600 mb-2">Notre formule Hajj CONFORT</h4>
                        <p className="text-black border-l-yellow-600 border-l-4 pl-4">
                            Séjournez dans des <span className="font-semibold">hôtels 5+ à Jabal Omar</span>, profitez
                            de <span className="font-semibold">transferts en TGV</span> rapides et confortables, et vivez
                            les rites du Hajj avec un campement à Minâ, dans la zone <span className="font-semibold">d'Al Kabch</span>
                            ou <span className="font-semibold">Mouayssem</span>, pour une expérience spirituelle inoubliable.
                        </p>
                    </div>

                    {/* Economic Formula */}
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="text-lg font-semibold text-yellow-600 mb-2">Notre formule Hajj ECONOMIQUE</h4>
                        <p className="text-black border-l-yellow-600 border-l-4 pl-4">
                            Séjour en <span className="font-semibold">hôtels 4 ou 5+ situés à seulement 1-2 km du Haram</span>,
                            avec <span className="font-semibold">transferts en TGV</span> ou en bus pour plus de confort. Le programme
                            inclut également un campement à Minâ, dans la zone <span className="font-semibold">d'Al Mouayssem</span>,
                            afin de vivre pleinement les rites du Hajj.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}