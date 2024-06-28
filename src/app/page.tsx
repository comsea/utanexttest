import { Metadata } from "next";
import React, { useState } from "react"

import Image from 'next/image';

import Header from "../components/Header/Header";
import PhotoBanner from "@/assets/images/banner_photo.svg";
import Logo from "@/assets/images/logo.svg";

import Phone from "@/assets/images/phone.svg";
import Mail from "@/assets/images/mail.svg";
import Building from "@/assets/images/building.svg";
import Machine from "@/assets/images/machine.svg";
import Piece from "@/assets/images/piece.svg";
import AboutusBanner from "@/assets/images/aboutus_banner.svg";
import PinkLine from "@/assets/images/pink_line.svg";
import MachineBanner from "@/assets/images/banner_machine.svg";
import WhiteLine from "@/assets/images/white_line.svg";
import NewsBanner from "@/assets/images/banner_news.svg";
import Arrow from "@/assets/images/actus/arrow.svg";

import ActusIndex from "../components/Actualites/ActusIndex";
import Photo1 from "@/assets/images/Actus/photo1.svg";
import Photo2 from "@/assets/images/Actus/photo2.svg";
import Photo3 from "@/assets/images/Actus/photo3.svg";

import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "UTA SAMG",
  description: "Site internet de l'entreprise UTA SAMG spécialisée dans la sous-traitance en mécanique générale et l'usinage en commande numérique",
};

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Header />

      <div className="lg:block hidden" id="accueil">
        <Image src={PhotoBanner} alt="Photo bannière"></Image>
      </div>

      <div className="flex lg:flex-row lg:my-20 lg:gap-10 justify-center">
        <div className="flex mx-8 mb-4 lg:mb-0 lg:mx-4 lg:flex-col lg:ml-40 lg:w-5/12">
          <Image src={Logo} alt="Logo UTA SAMG" className="lg:block hidden mb-4 w-80"></Image>

          <div className="font-medium text-black text-base lg:text-lg text-justify space-y-4 leading-5">
            <p>Implantée dans les Ardennes depuis <span className="font-bold">plus de trois décennies</span>, notre entreprise spécialisée dans <span className="font-bold">la sous-traitance en mécanique générale et l&apos;usinage en commande numérique se distingue par son expertise</span>. </p>
            <p className="lg:block hidden">Au fil des ans, nous avons <span className="font-bold">forgé notre réputation en offrant à nos clients une gamme complète de services</span>, allant de la fabrication de pièces unitaires, de petites et moyennes séries, avec des dimensions allant de Ø 30 à Ø 700 et des longueurs pouvant atteindre jusqu&apos;à 3 mètres.</p>
            <p className="lg:block hidden"><span className="font-bold">Faites-nous confiance pour faire de votre projet une réalité</span>, et découvrez la différence que notre expertise peut apporter à votre entreprise.</p>
          </div>
        </div>

        <div className="lg:block hidden items-center">
          <Image src={Piece} alt="Logo UTA SAMG" className="h-96"></Image>
        </div>
      </div>

      <div className="relative" id="qui-sommes-nous">
        <div className="bg-customPink w-full lg:hidden block">
          <div className="h-full text-white justify-center mx-8 py-4">
              <h1 className="text-2xl lg:text-3xl font-bold"> Qui sommes-nous ? </h1>
              <div className="flex justify-start">
                <Image src={WhiteLine} alt="Ligne blanche"></Image>
              </div>

              <div className="text-justify text-base lg:text-lg font-medium my-6 space-y-4 leading-7">
                <p>L&apos;origine de UTA SAMG remonte à la fusion en 2002 de la Sté SAMG, créée en 1991, et de la Société UTA, créée en 1995. Fondées par Mr et Mme CLAPAREDE, ces deux entreprises se sont spécialisées dans la sous-traitance industrielle. En 2015, Mr GELHAY Dominique a repris l&apos;entité UTA/SAMG, perpétuant l&apos;excellence et l&apos;innovation qui nous caractérisent.</p>
                <p>Notre petite équipe, dynamique et motivée, se distingue par de nombreuses années d&apos;expérience. Nous mettons tout en œuvre pour garantir la satisfaction de nos clients à travers une approche personnalisée et réactive.</p>
                
                <Image src={Building} alt="Photo bâtiment UTA" className="drop-shadow-lg"></Image>
                <p>Située à Vrigne aux Bois dans les Ardennes, UTA SAMG a déménagé à deux reprises pour s&apos;installer en 2008 dans des locaux fonctionnels et spacieux de 1000 m². Cet espace moderne nous permet d&apos;optimiser notre production et de répondre efficacement aux demandes de nos clients.</p>
              </div>
          </div>
        </div>

        <div className="lg:block hidden">
          <Image src={AboutusBanner} alt="Photo bâtiment UTA" className="w-full"></Image>

            <div className="absolute w-1/3 h-full text-white top-0 ml-[55%] mt-32 justify-center">
              <h1 className="text-2xl lg:text-3xl font-bold"> Qui sommes-nous ? </h1>
              <div className="flex justify-start">
                <Image src={WhiteLine} alt="Ligne blanche"></Image>
              </div>

              <div className="text-justify text-lg font-medium my-6 space-y-4 leading-7">
                <p>L&apos;origine de UTA SAMG remonte à la fusion en 2002 de la Sté SAMG, créée en 1991, et de la Société UTA, créée en 1995. Fondées par Mr et Mme CLAPAREDE, ces deux entreprises se sont spécialisées dans la sous-traitance industrielle. En 2015, Mr GELHAY Dominique a repris l&apos;entité UTA/SAMG, perpétuant l&apos;excellence et l&apos;innovation qui nous caractérisent.</p>
                <p>Notre petite équipe, dynamique et motivée, se distingue par de nombreuses années d&apos;expérience. Nous mettons tout en œuvre pour garantir la satisfaction de nos clients à travers une approche personnalisée et réactive.</p>
                <p>Située à Vrigne aux Bois dans les Ardennes, UTA SAMG a déménagé à deux reprises pour s&apos;installer en 2008 dans des locaux fonctionnels et spacieux de 1000 m². Cet espace moderne nous permet d&apos;optimiser notre production et de répondre efficacement aux demandes de nos clients.</p>
              </div>
            </div>   
        </div>
      </div>

      <div className="w-full text-black" id="savoir-faire">
        <div className="flex justify-center my-10">
          <div className="text-center">
            <h1 className="text-customBlue uppercase text-xl lg:text-2xl font-bold">Notre savoir-faire</h1>
            <Image src={PinkLine} alt="Ligne rose" className="mx-auto"/>
          </div>
        </div>

        <div className="mx-8 lg:mx-32 text-justify font-medium text-base lg:text-lg justify-center space-y-4 leading-7">
          <p>Notre savoir-faire éprouvé et notre expérience solide sont mis au service de nos clients pour répondre à leurs besoins les plus exigeants. Que ce soit à partir de plans détaillés ou de fichiers numériques, nous nous engageons à fournir des solutions sur mesure, adaptées à chaque projet.</p>
          <p>Nos moyens de production nous donnent une grande souplesse de travail et d&apos;organisation nous permettant d&apos;optimiser au mieux les délais de fabrication et les impératifs de nos clients.</p>
          <p>Notre personnel qualifié est garant de notre qualité et de la conformité de nos fabrications. L&apos;expertise et le savoir-faire que nous mettons à disposition de nos clients sont enrichis par notre approche personnalisée, exhaustive et réactive.</p>
          <p>Mais notre engagement ne s&apos;arrête pas là. Nous comprenons que chaque demande est unique, c&apos;est pourquoi nous adoptons une approche individualisée, complète et réactive pour garantir la satisfaction de nos clients.</p>
        </div>
      </div>

      <div className="mx-8 lg:mx-32">
          <div className="flex flex-col mt-10">
              <h1 className="text-customBlue text-xl lg:text-2xl font-bold"> Nos techniques </h1>
                <Image src={PinkLine} alt="Ligne rose"></Image>
          </div>          

          <p className="text-black text-justify text-medium my-4">En plus de notre offre principale, nous proposons une gamme de services complémentaires pour répondre à tous les aspects de vos projets :</p>
      </div>

      <div className="">
        <h2 className="text-customPink text-xl lg:text-2xl font-bold ml-8 lg:ml-32"> En gestion interne </h2>
        
          <div className="grid grid-rows mx-8 lg:mx-0 lg:grid-cols-[25%,25%,25%] gap-4 justify-center my-4">
            <div className="bg-customGray p-4">
              <h3 className="text-lg lg:text-2xl font-bold text-customBlue">Essais non destructifs :</h3>
              <p className="text-base lg:text-lg text-justify font-medium text-black leading-6">Avec l&apos;appui d&apos;un consultant extérieur qualifié COFREN II, nous sommes en mesure de réaliser des essais non destructifs tels que magnétoscopie, ressuage et ultrasons, garantissant ainsi la qualité et la fiabilité de vos pièces.</p>
            </div>

            <div className="bg-customGray p-4">
              <h3 className="text-lg lg:text-2xl font-bold text-customBlue">Marquage et gravure :</h3>
              <p className="text-base lg:text-lg text-justify font-medium text-black leading-6">Nous offrons des services de marquage par micro-percussion pour assurer la traçabilité et l&apos;identification de vos pièces.</p>
            </div>

            <div className="bg-customGray p-4">
              <h3 className="text-lg lg:text-2xl font-bold text-customBlue">Montage et assemblage :</h3>
              <p className="text-base lg:text-lg text-justify font-medium text-black leading-6">Nous pouvons également prendre en charge le montage d&apos;ensembles et de sous-ensembles, offrant ainsi une solution clé en main pour vos projets les plus complexes.</p>
            </div>
          </div>
      </div>

      <div className="mt-8">
        <h2 className="text-customPink text-xl lg:text-2xl font-bold ml-8 lg:ml-32"> En gestion externe </h2>
        <p className="text-black text-medium mx-8 lg:ml-32 my-4 text-justify">Nous collaborons avec des partenaires de confiance pour offrir un service le plus complet possible.</p>

        <div className="grid grid-rows mx-8 lg:mx-0 lg:grid-cols-[25%,15%,25%,15%] gap-4 justify-center my-4">
          <div className="bg-customGray p-4">
            <h3 className="text-lg lg:text-2xl font-bold text-customBlue">Achats de matières premières :</h3>
            <p className="text-base lg:text-lg text-justify font-medium text-black leading-6">Nous pouvons nous charger de l&apos;approvisionnement en matière première selon vos spécifications et exigences, garantissant ainsi la qualité et la conformité de vos produits finis.</p>
          </div>

          <div className="bg-customGray p-4">
            <h3 className="text-lg lg:text-2xl font-bold text-customBlue">Traitements chimiques :</h3>
            <p className="text-base font-medium text-justify text-black leading-6">Trempe, Trempe HF, Cémentation, Nitruration ...</p>
          </div>

          <div className="bg-customGray p-4">
            <h3 className="text-lg lg:text-2xl font-bold text-customBlue">Traitements de surface :</h3>
            <p className="text-base font-medium text-justify text-black leading-6">De même, nous pouvons vous proposer différents traitements de surface comme le sablage, la phosphatation, l&apos;Epoxy, Galvanisation, zingage, ainsi que des services de peinture pour répondre à vos besoins spécifiques en matière de finition.</p>
          </div>

          <div className="bg-customGray p-4">
            <h3 className="text-lg lg:text-2xl font-bold text-customBlue">Sous-traitance diverse :</h3>
            <p className="text-base font-medium text-justify text-black leading-6">Taillage, engrenages, clavetage, frettage...</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="bg-customPink w-full lg:hidden block">
          <div className="h-full text-white py-4 mx-8 justify-center">
            <h1 className="text-2xl font-bold"> Nos machines </h1>
            <div className="flex justify-start">
              <Image src={WhiteLine} alt="Ligne rose"></Image>
            </div>

            <div className="">
              <div className="mt-4 space-y-2">
                  <p className="font-bold text-sm">· 1 centre d&apos;usinage Mazak Horizontal FH 880</p>
                  <span className="text-sm">Course 1300 x 1100 x 1100</span>

                  <p className="font-bold text-sm">· 1 centre usinage Mazak VTC 200/C</p>
                  <span className="text-sm">Course 1600 x 560 x 560</span>

                  <p className="font-bold text-sm">· 1 centre usinage Mazak VTC 300/C</p>
                  <span className="text-sm">Course 1760x760x660</span>
              
                  <p className="font-bold text-sm">· 1 Tour Mazak QT 25</p>
                  <span className="text-sm">Ø maxi 400 entre pointe 1000</span>

                  <p className="font-bold text-sm">· 1 Tour Mazak QT 35</p>
                  <span className="text-sm">Ø maxi 400 entre pointe 1500</span>
              </div>

              <div className="my-4 drop-shadow-lg">
                  <Image src={Machine} alt="Photo machine"></Image>
              </div>

              <div className="mt-4 space-y-2">
                  <p className="font-bold text-sm"> · 1 centre tournage Mazak SQT 30 Axe C </p>
                  <span className="text-sm">Outils tournants, Ø max 500 lg 1500</span>

                  <p className="font-bold text-sm"> · 1 Tour Mazak Slant Turn 50 N </p>
                  <span className="text-sm">Ø maxi 780 entre pointe 2000</span>

                  <p className="font-bold text-sm"> · 1 Tour Mazak Slant Turn 50 N </p>
                  <span className="text-sm">Ø maxi 780 entre pointe 3000</span>

                  <p className="font-bold text-sm"> · 1 tour Mazak Nexus 550 M </p>
                  <span className="text-sm">Ø maxi 900 entre pointe 3000 avec axe fraisage</span>

                  <p className="font-bold text-sm"> · 1 scie Kasto Ø 400 </p>
              </div>
            </div>
          </div> 
        </div>
        <div className="lg:block hidden">
        <Image src={MachineBanner} alt="Photo machine UTA" className="w-full lg:block hidden"></Image>

          <div className="absolute w-3/6 h-full text-white top-0 ml-[12%] mt-28 justify-center">
            <h1 className="text-3xl font-bold"> Nos machines </h1>
            <div className="flex justify-start">
              <Image src={WhiteLine} alt="Ligne rose"></Image>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="mt-4 space-y-2">
                  <p className="font-bold lg:text-lg">· 1 centre d&apos;usinage Mazak Horizontal FH 880</p>
                  <span className="text-md">Course 1300 x 1100 x 1100</span>

                  <p className="font-bold text-lg">· 1 centre usinage Mazak VTC 200/C</p>
                  <span className="text-md">Course 1600 x 560 x 560</span>

                  <p className="font-bold text-lg">· 1 centre usinage Mazak VTC 300/C</p>
                  <span className="text-md">Course 1760x760x660</span>
              
                  <p className="font-bold text-lg">· 1 Tour Mazak QT 25</p>
                  <span className="text-md">Ø maxi 400 entre pointe 1000</span>

                  <p className="font-bold text-lg">· 1 Tour Mazak QT 35</p>
                  <span className="text-md">Ø maxi 400 entre pointe 1500</span>
              </div>

              <div className="mt-4 space-y-2">
                  <p className="font-bold text-lg"> · 1 centre tournage Mazak SQT 30 Axe C </p>
                  <span className="text-md">Outils tournants, Ø max 500 lg 1500</span>

                  <p className="font-bold text-lg"> · 1 Tour Mazak Slant Turn 50 N </p>
                  <span className="text-md">Ø maxi 780 entre pointe 2000</span>

                  <p className="font-bold text-lg"> · 1 Tour Mazak Slant Turn 50 N </p>
                  <span className="text-md">Ø maxi 780 entre pointe 3000</span>

                  <p className="font-bold text-lg"> · 1 tour Mazak Nexus 550 M </p>
                  <span className="text-md">Ø maxi 900 entre pointe 3000 avec axe fraisage</span>

                  <p className="font-bold text-lg"> · 1 scie Kasto Ø 400 </p>
              </div>
            </div>
          </div>   
        </div>
      </div>

      <div className="mx-8 lg:ml-32">
          <div className="flex flex-col mt-10">
              <h1 className="text-customBlue text-xl lg:text-2xl font-bold"> Nos secteurs d&apos;activité </h1>
                <Image src={PinkLine} alt="Ligne rose"></Image>
          </div>          

          <div className="text-black text-base lg:text-lg space-y-4 text-justify my-4">
            <p>Nous opérons au sein d&apos;une diversité de secteurs industriels, englobant les domaines clés tels que les poids lourds, la manutention lourde, la sidérurgie, le ferroviaire, les exploitations minières, la transmission mécanique et les freins industriels, ainsi que les travaux publics.</p>
            <p>Cette portée étendue démontre notre capacité à répondre aux besoins variés et spécifiques de chaque secteur, grâce à notre expertise polyvalente et à notre approche adaptative.</p>
            <p>Que ce soit pour fournir des pièces sur mesure pour les véhicules lourds, des solutions d&apos;usinage pour les équipements de manutention, des composants essentiels pour les infrastructures ferroviaires ou des pièces de rechange pour les machines industrielles, nous sommes équipés pour relever les défis propres à chaque secteur et offrir des solutions de qualité supérieure.</p>
          </div>
      </div>

      <div className="mx-8 lg:ml-32 mb-10">
          <div className="flex flex-col mt-10 items-end">
              <h1 className="text-customBlue text-xl lg:text-2xl font-bold"> Matières travaillées </h1>
                <Image src={PinkLine} alt="Ligne rose" className=""></Image>
          </div>          

          <div className="text-black text-base lg:text-lg space-y-4 text-right my-4">
            <p>Nous sommes compétents dans le travail des super alliages tels que l&apos;inconel et le titane, offrant des performances exceptionnelles dans des conditions extrêmes, que ce soit dans l&apos;aérospatiale, l&apos;industrie pétrolière ou d&apos;autres domaines exigeants.</p>
          </div>
      </div>

      <div className="">
        <div className="relative" id="actualites">
          <Image src={NewsBanner} alt="Bannière actualités" className="" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="uppercase text-xl lg:text-2xl font-bold">Nos actualités</h1>
            <Image src={PinkLine} alt="Ligne rose" className="" />
          </div>
        </div>
      </div>

      <ActusIndex />

      <div className="flex justify-center my-8 lg:my-10" id="contact">
        <div className="text-center">
          <h1 className="text-customBlue uppercase text-xl lg:text-2xl font-bold">Contactez-nous !</h1>
          <Image src={PinkLine} alt="Ligne rose" className="mx-auto" />
        </div>
      </div>

      <div className="flex justify-center drop-shadow-lg">
        <div className="bg-customGray w-[90%] lg:w-[45%] justify-center flex py-4 lg:py-8">
            <form action="assets/mail/mail.php" method="post"
              className="lg:w-[85%] flex flex-col justify-center items-center space-y-4 mt-6 mx-6 lg:ml-11">
              
              <div className="w-full grid grid-cols-2 lg:gap-x-4 gap-x-4 gap-y-4">
                  <div>
                      <input type="text" name="nom" id="nom" className="text-sm lg:text-base bg-customLightGray w-full rounded py-1 px-2" 
                          placeholder="Nom*"></input>
                  </div>

                  <div>
                      <input type="text" name="mail" id="mail" className="text-sm lg:text-base bg-customLightGray w-full rounded py-1 px-2"
                          placeholder="Adresse mail*"></input>
                  </div>

                  <div>
                      <input type="text" name="phone" id="phone" className="text-sm lg:text-base bg-customLightGray w-full rounded py-1 px-2"
                          placeholder="Téléphone"></input>
                  </div>

                  <div>
                      <input type="text" name="sujet" id="sujet" className="text-sm lg:text-base bg-customLightGray w-full rounded py-1 px-2"
                          placeholder="Sujet*"></input>
                  </div>
              </div>

              <div className="w-full">
                  <textarea name="message" id="message" className="text-sm lg:text-base bg-customLightGray w-full h-32 rounded py-1 px-2"
                      placeholder="Message*"></textarea>
              </div>

              <div className="w-full flex flex-row space-x-4 items-start font-semibold">
                  <input type="checkbox" name="validate" id="validate" className="bg-customGray mt-2"></input>
                  <label className="text-black text-sm lg:text-base text-justify">En soumettant ce formulaire, j&apos;accepte que les informations
                  saisies soient exploitées dans le cadre de la demande de contact et de la relation commerciale qui peut en découler.
                  *Champs obligatoires </label>
                  <input type="hidden" name="recaptcha-response" id="recaptchaResponse"></input>
              </div>

              <div className="flex flex-col">
                <span className="text-black underline  text-sm lg:text-base text-justify">Ce site est protégé par reCAPTCHA et la Politique de Confidentialité et les Conditions d&apos;Utilisation de Google.</span>
                <div className="flex justify-center">
                  <input type="submit" value="Envoyer" className="w-32 p-2 my-4 bg-customPink text-white cursor-pointer"></input>
                </div>
              </div>
            </form>
          </div>  
      </div>

      <Footer/>
    </main>
  );
}
