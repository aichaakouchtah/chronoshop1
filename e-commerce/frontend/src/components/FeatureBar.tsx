import { Truck, Award, CreditCard, HeadphonesIcon } from 'lucide-react';

export  function FeatureBar() {
  const features = [
    {
      icon: <HeadphonesIcon className="h-8 w-8" />,
      title: "Service Client",
      subtitle: "06XX"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Meilleure Qualité",
      subtitle: "du Marché"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Paiement à",
      subtitle: "la Livraison"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Garantie Retour",
      subtitle: "et Échange"
    }
  ];

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-red-600 mb-2">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}