
const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">FAQ</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Questions fréquentes</h2>
        <div className="space-y-4">
          <details className="p-4 border rounded-lg">
            <summary className="font-semibold cursor-pointer">Comment passer une commande ?</summary>
            <p className="mt-2 text-gray-700">
              Sélectionnez vos articles, ajoutez-les au panier, puis suivez les étapes de paiement sécurisé.
            </p>
          </details>
          
          <details className="p-4 border rounded-lg">
            <summary className="font-semibold cursor-pointer">Quels sont les délais de livraison ?</summary>
            <p className="mt-2 text-gray-700">
              Livraison standard : 3-5 jours ouvrables<br />
              Livraison express : 1-2 jours ouvrables
            </p>
          </details>
          
          <details className="p-4 border rounded-lg">
            <summary className="font-semibold cursor-pointer">Puis-je modifier ma commande après paiement ?</summary>
            <p className="mt-2 text-gray-700">
              Contactez-nous immédiatement par téléphone ou email. Nous ferons de notre mieux pour satisfaire votre demande.
            </p>
          </details>
          
          <details className="p-4 border rounded-lg">
            <summary className="font-semibold cursor-pointer">Comment retourner un article ?</summary>
            <p className="mt-2 text-gray-700">
              Contactez notre service client pour obtenir une autorisation de retour. Vous avez 30 jours pour retourner un article non utilisé.
            </p>
          </details>
          
          <details className="p-4 border rounded-lg">
            <summary className="font-semibold cursor-pointer">Quels modes de paiement acceptez-vous ?</summary>
            <p className="mt-2 text-gray-700">
              Cartes bancaires (Visa, Mastercard, Amex), PayPal, virement bancaire et paiement à la livraison.
            </p>
          </details>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Vous ne trouvez pas votre réponse ?</h2>
        <p className="text-gray-700 mb-4">
          Notre service client est disponible du lundi au vendredi de 9h à 18h pour répondre à toutes vos questions.
        </p>
        <a href="/contact" className="text-blue-600 hover:underline">Contactez-nous</a>
      </section>
    </div>
  );
};

export default FAQ;