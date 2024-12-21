import Chance from 'chance';
import AM from '../img/amber-edition.png';
import BL from '../img/blue-edition.png';
import CC from '../img/coconut-edition.png';
import EG from '../img/enrgy-drink.jpg';
import GR from '../img/green-edition.png';
import PC from '../img/peach-edition.png';
import RD from "../img/red-edition.png";
import SB from '../img/seablue-edition.png';
import SF from "../img/sugar-free.png";
import WN from "../img/winter-edition.png";
import YL from "../img/yellow-edition.png";
import WM from "../img/white-monster.png";
import ZR from "../img/zero.png"
import UV from "../img/violet-moster.jpg"
import FV from "../img/flavors-monster.png"
import SM from "../img/summer-edition.png"

const chance = new Chance();

const cards = [
  {
    name: "amber edition",
    description: "Энергия и стиль в каждом глотке! Идеально для активных людей.",
    color: "Оранжевый",
    category: "Efition",
    image: AM,
    brand: "Red Bull"
  },
  {
    name: "summer edition",
    description: "Летний заряд энергии! Обновите свой стиль и увеличьте продуктивность.",
    color: "Зеленый",
    category: "Efition",
    image: SM,
    brand: "Red Bull"
  },
  {
    name: "flavors",
    description: "Разнообразие вкусов для активного образа жизни. Каждый глоток приносит заряд энергии.",
    color: "Красный",
    category: "Ultra",
    image: FV,
    brand: "Monster"
  },
  {
    name: "violet",
    description: "Яркий вкус и мощная энергия. Идеально для тех, кто хочет быть в тонусе.",
    color: "Фиолетовый",
    category: "Ultra",
    image: UV,
    brand: "Monster"
  },
  {
    name: "Zero ",
    description: "Сохраняет вкус, убирая сахар. Идеальный выбор для энергичных дней.",
    color: "Белый/Серый",
    category: "Sugar-free",
    image: ZR,
    brand: "Red Bull"
  },
  {
    name: "White Monster",
    description: "Свежий и освежающий вкус для активных людей, которые ценят качество.",
    color: "Белый",
    category: "Sugar-free",
    image: WM,
    brand: "Monster"
  },
  {
    name: "blue edition",
    description: "Энергия и стиль в каждом глотке! Идеально для активных людей.",

    color: "Синий",
    category: "Efition",
    image: BL,
    brand: "Red Bull"
  },
  {
    name: "coconut edition",
    description: "Просто луший. S-тир",
    color: "Белый",
    category: "Efition",
    image: CC,
    brand: "Red Bull"
  },
  {
    name: "enrgy drink",
    description: "Энергия на каждый день! Содержит натуральные ингредиенты для улучшения выносливости.",
    color: "Белый/Синий",
    category: "Classic",
    image: EG,
    brand: "Red Bull"
  },
  {
    name: "green edition",
    description: "Свежий и освежающий вкус для активных людей, которые ценят качество.",
    color: "Зеленый",
    category: "Efition",
    image: GR,
    brand: "Red Bull"
  },
  {
    name: "peach edition",
    description: "Энергия и стиль в каждом глотке! Идеально для активных людей.",

    color: "Красный",
    category: "Efition",
    image: PC,
    brand: "Red Bull"
  },
  {
    name: "red edition",
    description: "Свежий и освежающий вкус для активных людей, которые ценят качество.",
    color: "Красный",
    category: "Efition",
    image: RD,
    brand: "Red Bull"
  },
  {
    name: "seablue edition",
    description: "Морской заряд энергии! Обновите свой стиль и увеличьте продуктивность.",
    color: "Голубой",
    category: "Efition",
    image: SB,
    brand: "Red Bull"
  },
  {
    name: "sugar-free",
    description: "Свежий и освежающий вкус для активных людей, которые ценят качество.",
    color: "Голубой/Белый",
    category: "Sugar-free",
    image: SF,
    brand: "Red Bull"
  },
  {
    name: "winter edition",
    description: "Морозный заряд энергии! Обновите свой стиль и увеличьте продуктивность.",
    color: "Белый",
    category: "Efition",
    image: WN,
    brand: "Red Bull"
  },
  {
    name: "yellow edition",
    description: "Энергия и стиль в каждом глотке! Идеально для активных людей.",

    color: "Желтый",
    category: "Efition",
    image: YL,
    brand: "Red Bull"
  }
];

export const generateCards = (count) => {
  const newCards = Array.from({ length: count }, () => {
    const card = chance.pickone(cards);
    return {
      image: card.image,
      id: chance.guid(),
      name: card.name,
      description: card.description,
      price: chance.integer({ min: 5000, max: 100000 }),
      rating: chance.integer({ min: 0, max: 100 }),
      color: card.color,
      category: card.category,
      brand: card.brand 
    };
  });

  
  return CardsArray(newCards);
};


const CardsArray = (array) => { return array; };
