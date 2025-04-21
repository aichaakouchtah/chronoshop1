import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ProductCard } from './ProductCard';
import { Produit } from '../types';

interface ProductSwiperProps {
  produits: Produit[];
  title: string;
  onAddToFavorite?: (produitId: number) => void;
}

export function ProductSwiper({ produits, title, onAddToFavorite }: ProductSwiperProps) {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-right animate-fade-in">{title}</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={800}
          effect="slide"
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 4, spaceBetween: 30 }
          }}
          className="product-swiper">
          {produits.map((produit) => (
            <SwiperSlide key={produit.id_produit}>
              <ProductCard produit={produit} onAddToFavorite={onAddToFavorite} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}