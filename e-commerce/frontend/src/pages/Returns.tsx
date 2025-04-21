
const Returns = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-left">
      <h1 className="text-3xl font-bold mb-6">Retours et échanges</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Politique de retour</h2>
        <p className="text-gray-700 mb-4">
          Nous acceptons les retours sous 30 jours suivant la réception de votre commande. 
          Les articles doivent être dans leur état d'origine, non utilisés et dans leur emballage d'origine.
        </p>
        <p className="text-gray-700">
          Pour initier un retour, veuillez contacter notre service client avec votre numéro de commande.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Processus de retour</h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>Contactez notre service client pour obtenir une autorisation de retour</li>
          <li>Recevez l'étiquette de retour par email</li>
          <li>Emballez soigneusement votre article</li>
          <li>Déposez le colis dans un point relais ou bureau de poste</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Remboursements</h2>
        <p className="text-gray-700 mb-4">
          Une fois le retour reçu et inspecté, nous procéderons au remboursement sous 5 jours ouvrables. 
          Le remboursement sera effectué selon votre méthode de paiement initiale.
        </p>
        <p className="text-gray-700">
          Les frais de retour sont à la charge du client, sauf en cas d'erreur de notre part.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Échanges</h2>
        <p className="text-gray-700">
          Pour échanger un article, veuillez suivre la procédure de retour standard et passer une nouvelle commande 
          pour l'article souhaité. Nous ne proposons pas d'échange direct.
        </p>
      </section>
    </div>
  );
};

export default Returns;