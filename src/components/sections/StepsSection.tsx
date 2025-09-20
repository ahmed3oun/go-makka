// components/ProcessSteps.tsx
import React from 'react';

// Reusable Card Component
interface CardProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ number, title, description, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg border-t-6 border-t-yellow-600 p-6 flex flex-col items-center text-center ${className}`}>
      <div className="w-12 h-12 rounded-full bg-yellow-600 flex items-center justify-center text-white font-bold text-xl mb-4">
        {number}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Process Steps Section
const StepsSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Choisir l'agence et le type de pack",
      description: "MP, confort ou économique"
    },
    {
      number: 2,
      title: "Créer un compte Nusuk",
      description: "Soit vous-même avec notre assistance gratuite, soit nous le faisons pour vous avec notre pack Sérénité"
    },
    {
      number: 3,
      title: "Découvrir les offres",
      description: "Officielles annoncées par les autorités saoudiennes"
    },
    {
      number: 4,
      title: "Sélectionner votre package",
      description: "Choisissez celui qui correspond à vos besoins et budget"
    },
    {
      number: 5,
      title: "Finaliser l'inscription",
      description: "Remplissez tous les documents nécessaires"
    },
    {
      number: 6,
      title: "Paiement sécurisé",
      description: "Effectuez le paiement via notre plateforme sécurisée"
    },
    {
      number: 7,
      title: "Confirmation",
      description: "Recevez votre confirmation et préparatifs"
    },
    {
      number: 8,
      title: "Préparation au voyage",
      description: "Briefing et documentation avant le départ"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-700 mb-8">
          Comment ça se passe concrètement ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              className={index >= 4 ? "md:col-span-2 lg:col-span-1" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;