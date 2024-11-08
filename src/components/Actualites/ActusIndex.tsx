'use client'
import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import Image from 'next/image'; 
import Arrow from '@/assets/images/Actus/arrow.svg'; 
import Link from 'next/link';

interface Actualite {
    id: number;
    date_actu: string;
    titre_actu: string;
    description_actu: string;
    photo: string;
}

const ActusIndex: React.FC = () => {
    const [actualite, setActualite] = useState<Actualite[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://apiuta.comsea.fr/api/actualites").then((response) => response.json()).then((result) => {
            const fetchedActualites: Actualite[] = result['hydra:member'];
            fetchedActualites.sort((a: Actualite, b: Actualite) => (new Date(b.date_actu).getTime() - new Date(a.date_actu).getTime()));
            const limitedActualites = fetchedActualites.slice(0, 3);
            setActualite(limitedActualites);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    const formatDate = (isoDate: string) => {
        const dateObj = new Date(isoDate);
        const day = dateObj.getDate().toString().padStart(2, '0');
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); 
        const year = dateObj.getFullYear().toString();

        return `${day}/${month}/${year}`;
    };

    return (
        <div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-8 mt-8">
                    {isLoading ? 'Chargement en cours' : actualite.map(actu => (
                    <div key={actu.id} className="card bg-customGray drop-shadow-lg w-full max-w-sm">
                        <img src={`https://apiuta.comsea.fr/build/images/${actu.photo}`} alt="Photo actualité" width={400} height={300} />
                        <div className="card-body flex flex-col justify-between">
                            <div>
                                <span className="text-sm lg:text-base">{formatDate(actu.date_actu)}</span>
                                <h2 className="text-xl lg:text-2xl font-bold text-black">{parse(actu.titre_actu)}</h2>
                                <div className="h-22 text-black text-base lg:text-lg text-justify line-clamp-3">{parse(actu.description_actu)}</div>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="bg-customPink justify-center flex items-center p-1 lg:w-12 lg:h-12">
                                    <Link href={`/actualites/${actu.id}`}><Image src={Arrow} alt="Flèche droite" width={24} height={24} /></Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ActusIndex;
