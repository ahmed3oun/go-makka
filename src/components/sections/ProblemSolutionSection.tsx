import FAQAccordion from '../ui/FAQAccordion';

export default function ProblemSolutionSection() {
    return (

        <section className="flex flex-row justify-evenly items-start w-full py-4 px-6 bg-gray-50">
            <div className="max-w-full mx-auto flex flex-row justify-between">
                {/* Left card */}
                <div className="max-w-4/6 min-w-4/6 bg-white rounded-lg shadow p-8">
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">
                        Problémes rencontrées et solutions
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto corporis odio ipsam, minima enim id a sapiente molestiae eligendi quas nobis, quo expedita quam esse illum, fugit voluptas animi labore.{" "}
                        <span className="font-semibold">Nusuk</span>.
                    </p>

                    <h3 className="text-1xl font-bold text-yellow-700 mb-4">
                        Volume important de comptes.. mais conversion imparfaite
                    </h3>
                    <p className="text-gray-700 mb-4">
                        Toutes les inscriptions et tous les packages Hajj passent par ce
                        portail officiel. Les agences saoudiennes agréées y proposent leurs
                        offres, souvent en partenariat avec des agences françaises de
                        confiance comme{" "}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam autem quas, eius tempora mollitia expedita neque fugiat necessitatibus sint nemo incidunt, ducimus libero nesciunt itaque ipsum, laborum ratione totam cumque.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto labore repellat harum error mollitia, ullam corporis maiores officiis laboriosam ipsum corrupti rem dolorem vel explicabo et tenetur deserunt sequi!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, inventore recusandae? Sit consectetur, placeat animi at et delectus itaque quam, ducimus nesciunt minima ab saepe reiciendis eos quis culpa error.
                    </p>

                    <h3 className="text-1xl font-bold text-yellow-700 mb-4">
                        Difficultés techniques et rencontrées
                    </h3>

                    <p className="text-gray-700 mb-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa perspiciatis molestias fugiat aliquid placeat aliquam in repellendus rem. Officia a tempore consequatur? Temporibus a animi odit tenetur voluptas pariatur sapiente.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt laboriosam repudiandae ut quisquam alias ratione praesentium assumenda error nesciunt a suscipit voluptates rem, ipsa magni. Repellat similique autem nostrum!
                        Dignissimos perferendis pariatur facilis eaque placeat! Aspernatur hic cum autem laudantium. Temporibus necessitatibus, obcaecati quam facere accusamus voluptatum iure minima vero doloribus odio earum dolorum asperiores ab nisi. Dolorem, totam?
                        Nobis, neque quam maxime quis aliquam, quibusdam earum ipsum, error perferendis explicabo nemo eum nihil! Nostrum voluptas neque velit quas minus ea corrupti earum sed. Dolorem quae cupiditate placeat maiores!
                        Nesciunt, aliquid necessitatibus harum autem tempore eius possimus placeat qui itaque consequatur perspiciatis hic minus quia doloremque ipsam maiores eum quos! Hic fuga animi aut tempore, magnam nostrum dolores quas?
                        Autem voluptatibus ad porro, quo numquam quasi asperiores magni suscipit sit quidem? Quos, placeat? Ea ratione in architecto esse excepturi maxime, magnam ducimus qui quia voluptatem odio voluptatum repellendus ad.
                        Notre rôle est de vous aider à naviguer dans{" "}
                        <span className="font-semibold">ce système complexe</span>, à
                        choisir le pack qui correspond le mieux à vos attentes, et à{" "}
                        <span className="font-semibold">sécuriser</span> votre inscription
                        dans les meilleures conditions.
                    </p>

                    <h3 className="text-1xl font-bold text-yellow-700 mb-4">
                        Stress généralisé et absence de soutien francophone
                    </h3>

                    <p className="text-gray-700 mb-4">
                        Notre rôle est de vous aider à naviguer dans{" "}
                        <span className="font-semibold">ce système complexe</span>, à
                        choisir le pack qui correspond le mieux à vos attentes, et à{" "}
                        <span className="font-semibold">sécuriser</span> votre inscription
                        dans les meilleures conditions.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Notre rôle est de vous aider à naviguer dans{" "}
                        <span className="font-semibold">ce système complexe</span>, à
                        choisir le pack qui correspond le mieux à vos attentes, et à{" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aut earum animi non similique labore, rerum rem obcaecati cupiditate repudiandae voluptas ab harum commodi quibusdam nihil ex architecto voluptate voluptatem.
                        Itaque reprehenderit voluptatum optio ad corporis sapiente nulla doloremque dolor! Maiores aliquid, enim dolores atque commodi at, laboriosam magni soluta eius, adipisci nam. Dolores quo dolorem animi sed quas sint.
                    </p>
                </div>

                {/* Right card */}
                <div className="max-w-2/6 border-yellow-600 border-1 bg-white text-white rounded-lg shadow max-h-fit p-1.5 m-2">
                    <FAQAccordion/>
                </div>
            </div>
        </section>
    )
}