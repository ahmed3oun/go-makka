export default function HajjSection() {
  return (
    <section className="flex flex-row justify-evenly items-start w-full py-4 px-6 bg-gray-50">
      <div className="max-w-full mx-auto flex flex-row justify-between">
        {/* Left card */}
        <div className="max-w-4/6 bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Le contexte du Hajj aujourd’hui
          </h2>
          <p className="text-gray-700 mb-4">
            Depuis plusieurs années, l’Arabie Saoudite a mis en place un système
            centralisé de gestion du Hajj appelé{" "}
            <span className="font-semibold">Nusuk</span>.
          </p>
          <p className="text-gray-700 mb-4">
            Toutes les inscriptions et tous les packages Hajj passent par ce
            portail officiel. Les agences saoudiennes agréées y proposent leurs
            offres, souvent en partenariat avec des agences françaises de
            confiance comme{" "}
            <span className="font-bold text-black">GO-MAKKAH</span>.
          </p>
          <p className="text-gray-700">
            Notre rôle est de vous aider à naviguer dans{" "}
            <span className="font-semibold">ce système complexe</span>, à
            choisir le pack qui correspond le mieux à vos attentes, et à{" "}
            <span className="font-semibold">sécuriser</span> votre inscription
            dans les meilleures conditions.
          </p>
        </div>

        {/* Right card */}
        <div className="max-w-2/6 bg-yellow-600 text-white rounded-lg shadow p-8">
          <h3 className="text-lg font-bold mb-2">Support téléphonique</h3>
          <p className="mb-4">GO-MAKKAH vous offre hotline support NUSUK</p>
          <p className="text-2xl font-bold mb-2">01 49 87 70 21</p>
          <p className="text-sm">Ligne ouverte 24h/24</p>
          <p className="text-sm">Avec la langue Arabe et Français</p>
        </div>
      </div>
    </section>
  );
}
