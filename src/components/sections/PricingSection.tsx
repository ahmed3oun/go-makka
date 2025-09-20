// components/PricingSection.tsx
import Link from 'next/link';
import React from 'react';

const PricingSection: React.FC = () => {
    return (
        <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50 w-full">
            <div className="min-w-full mx-auto">
                {/* Header */}
                <div className="text-left mb-12">
                    <h1 className="text-2xl font-bold text-blue-700 mb-8 w-full">
                        Deux formules adaptées à vos besoins
                    </h1>
                </div>

                <div className="flex flex-row gap-8 mx-2">
                    {/* Free Pack */}
                    <div className="h-fit bg-white rounded-xl shadow-lg py-8 w-xl border border-blue-500">
                        <div className="flex flex-row items-center justify-around text-left mb-6">
                            <span className=" bg-green-800 text-white text-sm font-semibold px-4 py-5 rounded-md mb-2">
                                Pack Gratuit
                            </span>
                            <h2 className="text-2xl font-bold text-blue-800 mb-2">
                                Hajj Assistance
                                <span className='mx-2 text-2xl font-bold text-black'>GO-Makkah</span>
                            </h2>
                        </div>

                        <div className="text-center mb-6 py-6 bg-green-800">
                            <p className="text-sm text-white">7% de nos clients ont choisi cette option</p>
                        </div>

                        <div className="mb-6 mx-2">
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Nous vous inscrivons sur notre groupe WhatsApp d'information & assistance</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Nous vous envoyons nos formules Hajj 2026</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Vous créez par vous-même votre compte Nusuk</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Vous réservez une de nos formules</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Vous nous envoyez votre passeport et la formule confirmée</span>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center mt-6">
                            <Link href="/form" className="mt-8 bg-blue-800 hover:bg-blue-700 text-white font-semibold py-3 px-8 transition duration-300 w-2/3">
                                Inscrivez-vous vite !
                            </Link>
                        </div>
                    </div>

                    {/* Premium Pack */}
                    <div className="h-fit bg-white rounded-xl shadow-lg py-8 w-xl border border-yellow-600">
                        {/* Popular badge */}

                        <div className="flex flex-row items-center justify-around text-left mb-6">
                            <span className="flex flex-col items-end bg-yellow-600 text-white text-sm font-semibold px-4 py-5 rounded-md mb-2">
                                <span className="text-2xl">250</span>
                                <span className="text-sm font-small">EUR</span>
                            </span>
                            <h2 className="text-2xl font-bold text-yellow-600 mb-2">
                                Hajj Serénité
                                <span className='mx-2 text-2xl text-black'>GO-Makkah</span>
                            </h2>
                        </div>

                        <div className="text-center mb-6 py-6 bg-yellow-600">
                            <p className="text-sm text-white">7% de nos clients ont choisi cette option</p>
                        </div>

                        <div className="mb-6">
                            <ul className="space-y-3 mx-2">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Nous vous inscrivons sur notre groupe WhatsApp d'information & assistance</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Nous créons et gérons pour vous votre compte NUSUK</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Nous payons votre hajj pour vous si vous le demandez. Vous payez votre hajj chez nous</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Nous vous envoyons nos formules Hajj 2026</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Nous gérons la réservation de votre hajj jusqu'au bout</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Et vous partez au hajj avec nos équipes accompagnateurs très expérimentés</span>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center mt-6">
                            <Link href="/form" className="mt-8 bg-yellow-600 hover:bg-yellow-700 cursor text-white font-semibold py-3 px-8 transition duration-300 w-2/3">
                                Inscrivez-vous vite !
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;