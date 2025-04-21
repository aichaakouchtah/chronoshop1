
const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-left">
      <h1 className="text-3xl font-bold mb-6">Qui sommes-nous</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Notre histoire</h2>
        <p className="text-gray-700 mb-4">
          Fondée en 2010, notre entreprise est née d'une passion commune pour la technologie et l'innovation. 
          Nous avons commencé comme un petit magasin local et avons grandi pour devenir une référence 
          dans le commerce électronique de produits technologiques.
        </p>
        <p className="text-gray-700">
          Notre mission est de rendre la technologie accessible à tous, avec des produits de qualité 
          et un service client exceptionnel.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Nos valeurs</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Qualité des produits</li>
          <li>Service client irréprochable</li>
          <li>Innovation constante</li>
          <li>Transparence et honnêteté</li>
          <li>Engagement environnemental</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Notre équipe</h2>
        <p className="text-gray-700">
          Nous sommes une équipe de 50 passionnés répartis entre notre siège social à Paris 
          et nos centres de distribution à Lyon et Marseille. Chaque membre de notre équipe 
          partage notre engagement envers l'excellence et la satisfaction client.
        </p>
      </section>
    </div>
  );
};

export default About;