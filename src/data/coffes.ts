import { v4 } from "uuid";

export interface Coffee {
  id?: string;
  name?: string;
  tags?: string[];
  description?: string;
  price?: number;
  image?: string;
}

const avaibleCoffees: Coffee[] = [
  {
    id: v4(),
    name: "Expresso Tradicional",
    image: "Image.png",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    tags: ["Tradicional"],
  },
  {
    id: v4(),
    name: "Expresso Americano",
    image: "Image-1.png",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    tags: ["Tradicional"],
  },
  {
    id: v4(),
    name: "Expresso Cremoso",
    image: "Image-2.png",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    tags: ["Tradicional"],
  },
  {
    id: v4(),
    name: "Expresso Gelado",
    image: "Image-3.png",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    tags: ["Tradicional", "Gelado"],
  },
  {
    id: v4(),
    name: "Café com Leite",
    image: "Image-4.png",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    tags: ["Tradicional", "Com Leite"],
  },
  {
    id: v4(),
    name: "Latte",
    image: "Image-5.png",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    tags: ["Tradicional", "Com Leite"],
  },
  {
    id: v4(),
    name: "Capuccino",
    image: "Image-6.png",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    tags: ["Tradicional", "Com Leite"],
  },
  {
    id: v4(),
    name: "Macchiato",
    image: "Image-7.png",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    tags: ["Tradicional", "Com Leite"],
  },
  {
    id: v4(),
    name: "Mocaccino",
    image: "Image-8.png",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    tags: ["Tradicional", "Com Leite"],
  },
  {
    id: v4(),
    name: "Chocolate Quente",
    image: "Image-9.png",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    tags: ["Especial", "Com Leite"],
  },
  {
    id: v4(),
    name: "Cubano",
    image: "Image-10.png",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    tags: ["Especial", "Alcoólico", "Gelado"],
  },
  {
    id: v4(),
    name: "Havaiano",
    image: "Image-11.png",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    tags: ["Especial"],
  },
  {
    id: v4(),
    name: "Árabe",
    image: "Image-12.png",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    tags: ["Especial"],
  },
  {
    id: v4(),
    name: "Irlandês",
    image: "Image-13.png",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    tags: ["Especial", "Acoólico"],
  },
];
export { avaibleCoffees };
