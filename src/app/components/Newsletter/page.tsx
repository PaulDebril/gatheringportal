"use client";
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !checked) {
      setMessage('Veuillez entrer un email valide et accepter les conditions.');
      return;
    }
    setMessage('Merci pour votre inscription !');
    setEmail('');
    setChecked(false);
  };

  return (
    <div className="w-full bg-[#1F1F1F] py-10 px-6 md:px-12 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Kdam' }}>
              Nouveautés et mises à jour
            </h2>
            <p className="">
              Appel aux champions ! Inscrivez-vous pour recevoir les actualités des produits, des rappels sur les ventes flash et des annonces sur les événements à venir.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start w-full">
            <form onSubmit={handleSubmit} className="w-full flex flex-col md:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Veuillez saisir votre adresse mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-[#5A3E20]  focus:outline-none"
                style={{ fontFamily: 'Kdam' }}
              />
              <button
                type="submit"
                className="bg-[#E5BA33] hover:bg-[#D4A529] text-black font-bold py-2 px-5 rounded-md transition"
                style={{ fontFamily: 'Kdam' }}
              >
                S&apos;INSCRIRE
              </button>
            </form>
            <div className="mt-3 flex items-start  text-xs">
              <input
                type="checkbox"
                id="accept"
                checked={checked}
                onChange={() => setChecked(!checked)}
                className="w-3.5 h-3.5 mt-0.5 accent-[#E5BA33]"
              />
              <label htmlFor="accept" className="ml-2 leading-5">
                Oui ! GatheringPortal peut m&apos;envoyer des emails promotionnels. En vous inscrivant, vous reconnaissez avoir lu notre{' '}
                <a href="#" className=" underline">
                  Politique de confidentialité
                </a>{' '}
                et nos{' '}
                <a href="#" className=" underline">
                  Conditions générales
                </a>.
              </label>
            </div>
            {message && <p className="mt-3 text-xs text-[#E5BA33]">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
