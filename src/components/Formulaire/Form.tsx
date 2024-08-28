"use client";

import { useState , ChangeEvent, FormEvent } from 'react';
import axios from "axios";

export default function Form() {
  const [formData, setFormData] = useState({
    nom: '',
    mail: '',
    phone: '',
    sujet: 'Demande de contact',
    message: '',
    validate: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true)
    try {
      await axios.post('https://apiuta.comsea.fr/contact', formData);
      console.log(formData)
      setResponseMessage('Message envoyé avec succès !');
    } catch (error) {
        setResponseMessage('Erreur lors de l\'envoi du message');
    } finally {
        setIsSubmitting(false)
    }
  };

  return (
    <div className="flex justify-center drop-shadow-lg">
      <div className="bg-customGray w-[90%] lg:w-[45%] justify-center flex py-4 lg:py-8">
        <form onSubmit={handleSubmit} className="lg:w-[85%] flex flex-col justify-center items-center space-y-4 mt-6 mx-6 lg:ml-11">
          <div className="w-full grid grid-cols-2 lg:gap-x-4 gap-x-4 gap-y-4">
            <div>
              <input required type="text" name="nom" id="nom" value={formData.nom} onChange={handleChange} className="text-sm lg:text-base bg-customLightGray w-full rounded py-1 px-2" placeholder="Nom*" />
            </div>

            <div>
              <input required type="text" name="mail" id="mail" value={formData.mail} onChange={handleChange} className="text-sm lg:text-base bg-customLightGray w-full rounded py-1 px-2" placeholder="Adresse mail*" />
            </div>

            <div>
              <input type="text" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="text-sm lg:text-base bg-customLightGray w-full rounded py-1 px-2" placeholder="Téléphone" />
            </div>
          </div>

          <div className="w-full">
            <textarea required name="message" id="message" value={formData.message} onChange={handleChange} className="text-sm lg:text-base bg-customLightGray w-full h-32 rounded py-1 px-2" placeholder="Message*" />
          </div>

          <div className="w-full flex flex-row space-x-4 items-start font-semibold">
            <input type="checkbox" name="validate" id="validate" checked={formData.validate} onChange={handleChange} className="bg-customGray mt-2" />

            <label htmlFor="validate" className="text-black text-sm lg:text-base text-justify">
              En soumettant ce formulaire, j&apos;accepte que les informations
              saisies soient exploitées dans le cadre de la demande de contact
              et de la relation commerciale qui peut en découler. *Champs obligatoires
            </label>

            <input type="hidden" name="recaptcha-response" id="recaptchaResponse" />
          </div>

          <div className="flex flex-col">
            <span className="text-black underline text-sm lg:text-base text-justify">
              Ce site est protégé par reCAPTCHA et la Politique de
              Confidentialité et les Conditions d&apos;Utilisation de Google.
            </span>

            <div className="flex justify-center">
              <button type="submit" className="w-40 p-2 my-4 bg-customPink text-white cursor-pointer" disabled={isSubmitting}>
                {isSubmitting ? "Envoi en cours..." : "Envoyer"}
              </button>
            </div>
            {responseMessage && <p>{responseMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}