'use client'
import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import Image from 'next/image'; 
import Arrow from '@/assets/images/Actus/arrow.svg'; 
import Link from 'next/link';

const ActusIndex: React.FC = () => {
    const [actualite, setActualite] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        fetch("http://localhost:8000/api/actualites").then((response) => response.json()).then((result) => {
            const fetchedActualites = result['hydra:member'];
            fetchedActualites.sort((a, b) => (new Date(b.date_actu).getTime() - new Date(a.date_actu).getTime()));
            const limitedActualites = fetchedActualites.slice(0, 3);
            setActualite(limitedActualites);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error(error);
        });
    }, [])

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
                        <Image src={`http://localhost:8000/build/images/${actu.photo}`} alt="Photo actualité" width={400} height={300} />
                        <div className="card-body">
                            <span className="text-sm lg:text-base">{formatDate(actu.date_actu)}</span>
                            <h2 className="text-xl lg:text-2xl font-bold text-black">{parse(actu.titre_actu)}</h2>
                            <p className="line-clamp-3 h-22 text-black text-base lg:text-lg text-justify">{parse(actu.description_actu)}</p>
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