// components/AccompanimentSection.tsx
import React from 'react';

// Define the service items with potential icons
const services = [
    {
        title: "Des formations pratiques",
        description: "en ligne et parfois en présentiel",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        )
    },
    {
        title: "Des webinars et réunions",
        description: "pour suivre l'actualité du Hajj",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: "Un groupe WhatsApp",
        description: "pour rester en contact permanent avec notre équipe",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        )
    },
    {
        title: "Réponses personnalisées",
        description: "à toutes vos questions par téléphone / WhatsApp",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        )
    },
    {
        title: "Accompagnement religieux et médical",
        description: "séminaires avec imams, médecins et experts du Hajj",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        )
    }
];

const AccompanimentSection: React.FC = () => {
    return (
        <section className="py-16 px-8 bg-white">
            <div className="min-w-full mx-auto">
                {/* Header */}
                <div className="text-left mb-12">
                    <h2 className="text-2xl font-bold text-blue-700 mb-8">
                        L'accompagnement GO Makkah : bien plus qu'une simple inscription
                    </h2>
                    <p className="text-lg text-black max-w-3xl">
                        Chez GO Makkah, nous croyons que le Hajj doit se préparer avec autant de rigueur spirituelle que logistique.
                        C'est pourquoi nous mettons à votre disposition, gratuitement :
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className='flex flex-row justify-between items-center mb-4'>
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-full bg-white-100 flex items-center justify-center text-yellow-600 mb-1">
                                    {service.icon}
                                </div>


                                {/* Content */}

                                <h3 className="text-xl font-semibold text-yellow-600 mb-2">{service.title}</h3>

                            </div>
                            <p className="text-black">{service.description}</p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-left mt-12">
                    <p className="text-lg text-gray-700 mb-6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore atque ratione esse, minima aspernatur, ut earum illo deleniti amet sapiente nostrum modi, quis aperiam hic! Provident similique iure necessitatibus rerum??
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AccompanimentSection;