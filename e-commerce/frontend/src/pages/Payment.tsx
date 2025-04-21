
const Payment = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-left">
      <h1 className="text-3xl font-bold mb-6">Modes de paiement</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Options de paiement</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Carte bancaire</strong> - Visa, Mastercard, American Express (Paiement sécurisé)
          </li>
          <li>
            <strong>PayPal</strong> - Paiement via votre compte PayPal
          </li>
          <li>
            <strong>Virement bancaire</strong> - IBAN fourni après commande
          </li>
          <li>
            <strong>Paiement à la livraison</strong> - Disponible pour certaines destinations (Frais supplémentaires)
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sécurité des paiements</h2>
        <p className="text-gray-700 mb-4">
          Tous les paiements sont traités de manière sécurisée via notre plateforme certifiée PCI DSS.
        </p>
        <p className="text-gray-700">
          Nous ne stockons jamais vos informations de paiement sur nos serveurs.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Facturation</h2>
        <p className="text-gray-700">
          Une facture détaillée vous sera envoyée par email après confirmation de votre paiement.
          Pour toute demande de facture supplémentaire, contactez notre service client.
        </p>
      </section>
    </div>
  );
};

export default Payment;