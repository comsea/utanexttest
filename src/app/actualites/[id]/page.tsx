'use client'

import { useParams } from 'next/navigation';
import { useState, useEffect } from "react";
import Image from 'next/image'; 
import HeaderActu from "../HeaderActu";
import parse from 'html-react-parser';

export default function Actus() {

    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [postState, setPostState] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/api/actualites/${id}`)
            .then((response) => response.json())
            .then((result) => {
                setPostState(result);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des données", error);
                setIsLoading(false);
            });
    }, [id]);

    useEffect(() => {
        fetch(`http://localhost:8000/api/images`)
            .then((response) => response.json())
            .then((result) => {
                const fetchedImages = result['hydra:member'];
                setImages(fetchedImages);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    console.log(images);

    const formatDate = (isoDate) => {
        const dateObj = new Date(isoDate);
        const day = dateObj.getDate().toString().padStart(2, '0');
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
        const year = dateObj.getFullYear().toString();
    
        return `${day}/${month}/${year}`;
    };
    
    return (
        <div className='bg-gray-100 min-h-screen flex flex-col items-center'>
            {isLoading ? (
                <div>Chargement en cours</div>
            ) : (
                <div className='w-full flex flex-col items-center'>
                    <HeaderActu />
    
                    <div className="my-24 w-full flex flex-col items-center">
                        <div className='flex justify-center mb-8'>
                            {postState.photo && (
                                <Image
                                    src={`http://localhost:8000/build/images/${postState.photo}`}
                                    alt="Photo actu"
                                    width={400}
                                    height={400}
                                    className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                                />
                            )}
                        </div>
    
                        <div className='mx-auto p-6 bg-white rounded-xl border border-gray-300 w-1/2'>
                            <h1 className='uppercase font-extrabold text-[#0B2241] underline underline-offset-4 decoration-[#F83545] text-4xl mb-6'>
                                {parse(String(postState.titre_actu))}
                            </h1>
                            <span className="italic text-lg text-gray-500 block mb-6">
                                {parse(formatDate(postState.date_actu))}
                            </span>
                            <div className=''>
                                <p className='text-xl text-gray-800 leading-relaxed'>
                                    {parse(String(postState.description_actu))}
                                </p>
                            </div>
                        </div>
                    

                        <div className='w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-8'>
                            {postState.image && Array.isArray(postState.image) && postState.image.map((imagesPost) => (
                                images.map((image) => (
                                    "/api/images/" + image.id === imagesPost && (
                                        <div key={image.id} className='relative w-full h-64 overflow-hidden rounded-lg transition-shadow duration-300'>
                                            <Image
                                                src={`http://localhost:8000/build/images/${image.lien}`}
                                                alt="Photo actu"
                                                layout='fill'
                                                objectFit='contain'
                                                className='rounded-lg hover:scale-105 transition-transform duration-300'
                                            />
                                        </div>
                                    )
                                ))
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}