import Image from 'next/image';
import Link from 'next/link';

import Logo from "@/assets/images/logo.svg";
import HeaderBlue from "@/assets/images/header_blue.svg";
import Phone from "@/assets/images/phone.svg";
import Mail from "@/assets/images/mail.svg";
import Button from "@/assets/images/header_button.svg";
import Megaphone from "@/assets/images/megaphone.svg";
import User from "@/assets/images/user_question.svg";
import Contact from "@/assets/images/contact.svg";
import Expertise from "@/assets/images/tools.svg";

import HeaderPink from "@/assets/images/header_pink.svg";
import PhotoBanner from "@/assets/images/banner_photo.svg";

export default function Header() {
    return (
        <div className=''>
            <div className="w-full bg-white border-b-8 border-customPink h-52 lg:block hidden">
                <div className=''>
                    <Image src={HeaderBlue} alt="Bord bleu"></Image>
                </div>

                <div className='flex flex-row lg:space-x-48 items-center'>
                    <div className="ml-20">
                        <Image src={Logo} alt="Logo UTA SAMG" className='h-32'></Image>
                    </div>


                    <div className="flex flex-col">
                        <div className='flex flex-row space-x-4'>
                            <Image src={Phone} alt="Icône téléphone"></Image>
                            <div className='text-black'>
                                <p className='font-bold'> Téléphone </p>
                                <p> 03 24 52 74 00</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className='flex flex-row space-x-4'>
                            <Image src={Mail} alt="Icône e-mail"></Image>
                            <div className='text-black'>
                                <p className='font-bold'> E-mail </p>
                                <p> uta-samg@utasamg.fr </p>
                            </div>
                        </div>
                    </div>

                    <button className='relative w-56 h-12 drop-shadow-xl'>
                        <Image src={Button} alt="Bouton"></Image>
                        <div className="absolute w-full h-full top-0 left-0 font-bold text-white text-2xl flex justify-center items-center">
                            <Link href="#contact">Contactez-nous !</Link>
                        </div>
                    </button>
                </div>

                <div className='absolute right-0 w-2/3 drop-shadow-lg'>
                    <Image src={HeaderPink} alt="Rectangle rose" className=''></Image>
                    
                    <div className='absolute w-full h-full top-0 left-0 font-bold text-2xl flex justify-center items-center'>
                        <ul className='uppercase space-x-20 text-white'>
                            <Link href="/">Accueil</Link>
                            <Link href="/#qui-sommes-nous">Qui sommes-nous ?</Link>
                            <Link href="/#savoir-faire">Savoir-faire</Link>
                            <Link href="/#actualites">Actualités</Link>
                        </ul>                    
                    </div>
                </div>
            </div>

            <div className="w-full bg-white border-b-8 border-customPink mb-16 h-52 lg:hidden block">
                <div className='h-5 bg-customBlue'></div>
                
                <Image src={PhotoBanner} alt="Bannière UTA"></Image>

                <div className='h-16 bg-customPink flex'>
                    <div className='flex justify-center items-center w-full'>
                        <ul className='flex space-x-8 items-center'>
                            <li><Link href="/#qui-sommes-nous"><Image src={User} alt="Icône qui-sommes-nous" className='w-10'></Image></Link></li>
                            <li><Link href="/#savoir-faire"><Image src={Expertise} alt="Icône savoir-faire" className='w-10'></Image></Link></li>
                            <li><Link href="/#actualites"><Image src={Megaphone} alt="Icône actualités" className='w-12'></Image></Link></li>
                            <li><Link href="/#contact"><Image src={Contact} alt="Icône contact" className='w-10'></Image></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}