
const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-left">
      <h1 className="text-3xl font-bold mb-6">Contactez-nous</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Coordonnées</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div>
            <h3 className="font-semibold">Adresse</h3>
            <p>123 Rue de la Technologie</p>
            <p>75015 Paris, France</p>
          </div>
          <div>
            <h3 className="font-semibold">Téléphone</h3>
            <p>+33 1 23 45 67 89</p>
            <p>Lundi-Vendredi: 9h-18h</p>
          </div>
          <div>
            <h3 className="font-semibold">Email</h3>
            <p>contact@monsite.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Réseaux sociaux</h3>
            <p>Facebook / Twitter / Instagram</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Formulaire de contact</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Nom complet</label>
            <input type="text" id="name" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input type="email" id="email" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-1 font-medium">Sujet</label>
            <input type="text" id="subject" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">Message</label>
            <textarea id="message" rows={4} className="w-full p-2 border rounded"></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Envoyer
          </button>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">FAQ rapide</h2>
        <div className="space-y-2">
          <details className="p-2 border rounded">
            <summary className="font-medium cursor-pointer">Quels sont vos horaires d'ouverture ?</summary>
            <p className="mt-2 text-gray-700">Notre service client est disponible du lundi au vendredi de 9h à 18h.</p>
          </details>
          <details className="p-2 border rounded">
            <summary className="font-medium cursor-pointer">Comment suivre ma commande ?</summary>
            <p className="mt-2 text-gray-700">Vous recevrez un email avec un numéro de suivi une fois votre commande expédiée.</p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default Contact;