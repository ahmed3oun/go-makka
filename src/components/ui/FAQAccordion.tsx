"use client"
import { useState } from 'react';
import { ArrowDown, ArrowUp } from "lucide-react";

export default function FAQAccordion() {
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);
    const [items] = useState([
        {
            title: "Compte Nusuk bloqué à la création ?",
            content: `Si votre compte Nusuk est bloqué lors de la création, veuillez vérifier vos informations et réessayer.
             Si le problème persiste, contactez le support technique.
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repudiandae harum neque quod unde, vero non perferendis corrupti. Quidem excepturi cum quo architecto mollitia tenetur quod animi distinctio ex expedita!
             Beatae voluptas magnam velit, et hic quas dolorem quae ea alias fuga voluptate, odit debitis assumenda porro id esse tempora praesentium sapiente, aspernatur autem dolorum accusantium atque harum nihil! Expedita?
             A rem, quis ex laboriosam, voluptate non dolores alias sapiente nisi hic fuga illum temporibus, delectus saepe enim voluptatum veritatis numquam pariatur deleniti dolore minus. A neque repellendus possimus sed.
             `
        },
        {
            title: "Problèmes de paiement",
            content: `Pour les problèmes de paiement, assurez-vous que votre carte est valide et dispose de fonds suffisants.
             Essayez également un autre mode de paiement.
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repudiandae harum neque quod unde, vero non perferendis corrupti. Quidem excepturi cum quo architecto mollitia tenetur quod animi distinctio ex expedita!
             Beatae voluptas magnam velit, et hic quas dolorem quae ea alias fuga voluptate, odit debitis assumenda porro id esse tempora praesentium sapiente, aspernatur autem dolorum accusantium atque harum nihil! Expedita?
             A rem, quis ex laboriosam, voluptate non dolores alias sapiente nisi hic fuga illum temporibus,`
        },
        {
            title: "Validation de documents",
            content: "Assurez-vous que vos documents sont clairs et lisibles. Les formats acceptés sont PDF, JPG et PNG."
        }
    ]);

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <>
            {/* Right card with interactive accordions */}
            <div className="max-w-full bg-white">
                {items.map((item, index) => (
                    <div key={index} className="mb-1 w-full">
                        <div
                            className="flex justify-between items-center cursor-pointer bg-white-700 p-3 rounded-t-lg"
                            onClick={() => toggleAccordion(index)}
                        >
                            <h4 className="font-semibold text-black">{item.title}</h4>
                            <span className="text-lg text-black"> {openAccordion === index ? <ArrowUp /> : <ArrowDown />} </span>
                        </div>
                        <div className={`bg-gray-50 text-black p-0.5 rounded-b-lg ${openAccordion === index ? 'block' : 'hidden'}`}>
                            {item.content}
                        </div>
                    </div>
                ))}

            </div>
        </>
    );
}