
const Policies = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-left">
      <h1 className="text-3xl font-bold mb-6">Politiques</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Politique de confidentialité</h2>
        <p className="text-gray-700 mb-4">
          Nous nous engageons à protéger vos données personnelles. Toutes les informations collectées 
          sont utilisées uniquement pour traiter vos commandes et améliorer votre expérience client.
        </p>
        <p className="text-gray-700">
          Nous ne partageons jamais vos données avec des tiers sans votre consentement explicite.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Politique de cookies</h2>
        <p className="text-gray-700">
          Notre site utilise des cookies pour améliorer votre navigation. Vous pouvez configurer 
          vos préférences de cookies à tout moment dans les paramètres de votre navigateur.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Politique de retour</h2>
        <p className="text-gray-700 mb-4">
          Vous disposez de 30 jours pour retourner un produit non utilisé et dans son emballage d'origine. 
          Les frais de retour sont à votre charge sauf en cas d'erreur de notre part.
        </p>
        <p className="text-gray-700">
          Pour initier un retour, veuillez contacter notre service client.
        </p>
      </section>
    </div>
  );
};

export default Policies;