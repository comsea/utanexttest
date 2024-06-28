import Image from 'next/image';
import Logo from '@/assets/images/Footer/Logo.svg';
import Mail from "@/assets/images/footer/mail.svg";
import Phone from "@/assets/images/footer/phone.svg";
import Clock from "@/assets/images/footer/clock.svg";
import Location from "@/assets/images/footer/location.svg";
import Map from "@/assets/images/footer/map.svg";

export default function Footer() {
    return (
        <div className="w-full bg-customBlue mt-8" id="contact">
            <div className='flex p-8 lg:p-20 lg:mx-[10%]'>
                <div className='flex flex-col'>
                    <Image src={Logo} alt="Logo UTA" className='w-[50%] lg:w-[50%] mb-4'></Image>

                    <div className="flex flex-col space-y-4 text-sm lg:text-base">
                        <div className="flex flex-col">
                            <div className='flex flex-row space-x-4'>
                                <Image src={Mail} alt="Icône e-mail" className='lg:w-14 w-8'></Image>
                                <div className='text-white'>
                                    <p className='font-bold'> E-mail </p>
                                    <p> uta-samg@utasamg.fr </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className='flex flex-row space-x-4'>
                                <Image src={Phone} alt="Icône e-mail" className='lg:w-14 w-8'></Image>
                                <div className='text-white'>
                                    <p className='font-bold'> Téléphone </p>
                                    <p> 03 24 52 74 00 </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className='flex flex-row space-x-4'>
                                <Image src={Clock} alt="Icône e-mail" className='lg:w-14 w-8'></Image>
                                <div className='text-white'>
                                    <p className='font-bold'> Horaires d&apos;ouverture </p>
                                    <p> Du lundi au jeudi : 7h-12h   13h30-17h </p>
                                    <p> Le vendredi : 7h-12h </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className='flex flex-row space-x-4'>
                                <Image src={Location} alt="Icône e-mail" className='lg:w-14 w-8'></Image>
                                <div className='text-white'>
                                    <p className='font-bold'> Adresse </p>
                                    <p> Zone Industrielle </p>
                                    <p> 413 rue des Ourliquettes </p>
                                    <p> 08330 VRIGNE-AUX-BOIS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-col lg:block hidden'>
                    <Image src={Map} alt="Map emplacement UTA"></Image>
                </div>
            </div>

            <div className='flex flex-col lg:hidden'>
                    <Image src={Map} alt="Map emplacement UTA"></Image>
            </div>
            
            <div className='flex justify-center items-center w-full bg-customPink p-4'>
                <p className='text-xs lg:text-lg text-white'>Tous droits réservés @ 2024 Copyright: COMSEA </p>
            </div>

        </div>
    );
} 