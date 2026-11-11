// Однакові для всіх мов дані проєктів. Тексти (опис, тип, теги) лежать у словниках
// src/i18n/*.ts → portfolio.projects під тим самим id.
export interface Project {
  id: string;
  title: string;
  url: string;
  image?: string;
  /** тривалість прокрутки скриншота при наведенні, сек */
  scroll?: number;
  /** великий кейс угорі; решта йдуть сіткою */
  featured?: boolean;
}

export const projects: Project[] = [
  { id: 'revival', title: 'REVIVAL', url: 'https://revival-judo.com', image: '/portfolio/judo-full.webp', scroll: 12, featured: true },
  { id: 'barbershop', title: 'Premium Barbershop', url: 'https://premiumbarbershop.com', image: '/portfolio/premiumbarbershop.webp', scroll: 11 },
  { id: 'skincenter', title: 'Skin Center NYC', url: 'https://skincenter.nyc', image: '/portfolio/skincenter.webp', scroll: 9 },
  { id: 'carwrapping', title: 'Car Wrapping Studio', url: 'https://carwrapping.studio', image: '/portfolio/carwrapping.webp', scroll: 8 },
  { id: 'pawn', title: 'Dallas Super Pawn', url: 'https://dallassuperpawn.com', image: '/portfolio/dallassuperpawn.webp', scroll: 13 },
];
