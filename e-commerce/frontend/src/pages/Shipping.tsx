
const Shipping = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-left">
      <h1 className="text-3xl font-bold mb-6">Modes de livraison</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Options de livraison</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Livraison standard</strong> - 3-5 jours ouvrables (Gratuite pour les commandes supérieures à 50€)
          </li>
          <li>
            <strong>Livraison express</strong> - 1-2 jours ouvrables (Frais supplémentaires de 9.99€)
          </li>
          <li>
            <strong>Point relais</strong> - Retrait dans un point relais partenaire sous 3-5 jours (Gratuit)
          </li>
          <li>
            <strong>Livraison en magasin</strong> - Disponible pour les magasins participants (Gratuit)
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Délais de livraison</h2>
        <p className="text-gray-700 mb-4">
          Les délais de livraison commencent à compter de la confirmation de votre commande. 
          Les commandes passées avant 14h sont généralement expédiées le jour même.
        </p>
        <p className="text-gray-700">
          En période de forte demande (soldes, fêtes), des délais supplémentaires peuvent s'appliquer.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Suivi de commande</h2>
        <p className="text-gray-700 mb-4">
          Une fois votre commande expédiée, vous recevrez un email avec un numéro de suivi 
          vous permettant de suivre l'acheminement de votre colis.
        </p>
        <p className="text-gray-700">
          Pour toute question concernant votre livraison, notre service client est disponible du lundi au vendredi de 9h à 18h.
        </p>
      </section>
    </div>
  );
};

export default Shipping;