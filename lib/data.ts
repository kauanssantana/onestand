// lib/data.ts

export const siteData = {
  company: {
    name: "One Stand Hamburgueria",
    description: "Hambúrguer Artesanal grelhado no fogo como churrasco.",
    address: "R. Jequirituba, 1510 - Parque America, São Paulo - SP, 04822-000",
    phone: "5511966582313", // Formatado para o link do WhatsApp
    menuLink: "https://shop.beetech.com.br/oneburger/", // Link atualizado da loja Beetech
    logoUrl: "/logo.png", // Sugiro salvar a imagem do logo na pasta public com esse nome
  },

  highlights: [
    {
      icon: "🤖",
      title: "1° Robô Garçom",
      description:
        "O 1º de uma hamburgueria em SP! Vem ser atendido por um robôzinho.",
    },
    {
      icon: "🔥",
      title: "Grelhado no Fogo",
      description: "Sabor de churrasco de verdade em cada mordida.",
    },
    {
      icon: "🛝",
      title: "Espaço Kids",
      description: "Diversão garantida para a criançada todos os dias.",
    },
    {
      icon: "🏍️",
      title: "Entrega Rápida",
      description: "O lanche chega quente e rápido na sua casa.",
    },
  ],

  hours: [
    { day: "Segunda a Sexta", time: "17:00 – 23:30" },
    { day: "Sábado", time: "17:30 – 23:30" },
    { day: "Domingo", time: "17:00 – 23:25 (Exceto último domingo do mês)" },
  ],
};

// --- LISTA DE CATEGORIAS (USADO PELO COMPONENTE DE CARDÁPIO) ---
export const categories = [
  { id: "destaques", name: "Destaques", icon: "/img/icon-destaques.png" },
  {
    id: "combos-caixa",
    name: "Combos na Caixa",
    icon: "/img/icon-combos.png",
  },
  {
    id: "combos-burger",
    name: "Combos Burger",
    icon: "/img/icon-combos.png",
  },
  {
    id: "burgers-avulsos",
    name: "Burgers Avulsos",
    icon: "/img/icon-burgers-avulsos.png",
  },
  { id: "sobremesas", name: "Sobremesas", icon: "/img/icon-sobremesas.png" },
  {
    id: "acompanhamentos",
    name: "Acompanhamentos",
    icon: "/img/icon-acompanhamentos.png",
  },
  { id: "milk-shakes", name: "Milk Shakes", icon: "/img/icon-milk-shakes.png" },
  { id: "bebidas", name: "Bebidas", icon: "/img/icon-bebidas.png" },
  { id: "molhos", name: "Molhos Adicionais", icon: "/img/icon-molhos.png" },
];

// --- LISTA DE PRODUTOS (USADO PELO COMPONENTE DE CARDÁPIO) ---
export const menuItems = [
  // --- DESTAQUES ---
  {
    id: "dest-1",
    categoryId: "destaques",
    name: "Nova One Box Dupla",
    description:
      "Combo para duas pessoas com dois hambúrgueres, duas porções e duas bebidas + 3x molhos grátis.",
    price: "A partir de R$ 76,90",
    image: "/img/nova-one-box-dupla.jpg",
    link: "https://shop.beetech.com.br/oneburger/nova-one-box-dupla/",
  },
  {
    id: "dest-2",
    categoryId: "destaques",
    name: "Crispy BBQ (Combo)",
    description:
      "Pão preto com gergelim, carne 100g, queijo cheddar, molho barbecue, fatias de bacon, anéis de cebola empanada e maionese grill + Acompanhamento + Bebida.",
    price: "A partir de R$ 41,90",
    image: "/img/crispy-bbq-combo.jpg",
    link: "https://shop.beetech.com.br/oneburger/crispy-bbq-(combo)/",
  },

  // --- COMBOS NA CAIXA ---
  {
    id: "caixa-1",
    categoryId: "combos-caixa",
    name: "Nova One Box Dupla",
    description:
      "Combo para duas pessoas com dois hambúrgueres, duas porções e duas bebidas + 3x molhos grátis.",
    price: "A partir de R$ 76,90",
    image: "/img/nova-one-box-dupla.jpg",
    link: "https://shop.beetech.com.br/oneburger/nova-one-box-dupla/",
  },

  // --- COMBOS BURGER ---
  {
    id: "cb-1",
    categoryId: "combos-burger",
    name: "One Burger (Combo)",
    description:
      "Pão brioche, fatias de queijo cheddar, carne de 100g e maionese verde + Acompanhamento + Bebida.",
    price: "A partir de R$ 35,90",
    image: "/img/one-burger-combo.jpg",
    link: "https://shop.beetech.com.br/oneburger/one-burger-(combo)/",
  },
  {
    id: "cb-2",
    categoryId: "combos-burger",
    name: "Supreme (Combo)",
    description:
      "Pão de brioche com gergelim mesclado, carne 100g, queijo cheddar, alface, tomate, queijo mussarela empanada e maionese verde + Acompanhamento + Bebida.",
    price: "A partir de R$ 46,90",
    image: "/img/supreme-combo.jpg",
    link: "https://shop.beetech.com.br/oneburger/supreme-(combo)/",
  },
  {
    id: "cb-3",
    categoryId: "combos-burger",
    name: "Chicken Deluxe (Combo)",
    description:
      "Pão brioche com gergelim mesclado, frango empanado, queijo prato fatiado, alface americana, tomate e maionese grill (molho tasty) + Acompanhamento + Bebida.",
    price: "A partir de R$ 38,90",
    image: "/img/chicken-deluxe-combo.jpg",
    link: "https://shop.beetech.com.br/oneburger/chicken-deluxe-(combo)/",
  },
  {
    id: "cb-4",
    categoryId: "combos-burger",
    name: "Crispy BBQ (Combo)",
    description:
      "Pão preto com gergelim, carne 100g, queijo cheddar, molho barbecue, bacon, anéis de cebola e maionese grill + Acompanhamento + Bebida.",
    price: "A partir de R$ 41,90",
    image: "/img/crispy-bbq-combo.jpg",
    link: "https://shop.beetech.com.br/oneburger/crispy-bbq-(combo)/",
  },
  {
    id: "cb-5",
    categoryId: "combos-burger",
    name: "Original Burger (Combo)",
    description:
      "Pão brioche, carne 100g, ketchup, mostarda, cebola roxa, picles e queijo cheddar + Acompanhamento + Bebida.",
    price: "A partir de R$ 36,90",
    image: "/img/original-burger-combo.jpg",
    link: "https://shop.beetech.com.br/oneburger/original-burger-(combo)/",
  },
  {
    id: "cb-6",
    categoryId: "combos-burger",
    name: "One Cheddar (Combo)",
    description:
      "Pão preto com gergelim, carne 100g, molho cheddar e cebola caramelizada + Acompanhamento + Bebida.",
    price: "A partir de R$ 36,90",
    image: "/img/one-cheddar-combo.jpg",
    link: "https://shop.beetech.com.br/oneburger/one-cheddar-(combo)/",
  },

  // --- BURGERS AVULSOS ---
  {
    id: "av-1",
    categoryId: "burgers-avulsos",
    name: "One Burger",
    description:
      "Pão brioche, carne de 100g, fatias de queijo cheddar e maionese verde temperada da casa.",
    price: "R$ 24,00",
    image: "/img/one-burger.jpg",
    link: "https://shop.beetech.com.br/oneburger/one-burger/",
  },
  {
    id: "av-2",
    categoryId: "burgers-avulsos",
    name: "One Cheddar",
    description:
      "Pão preto com gergelim, carne 100g, molho cheddar cremoso e cebola caramelizada.",
    price: "R$ 25,00",
    image: "/img/one-cheddar.jpg",
    link: "https://shop.beetech.com.br/oneburger/one-cheddar/",
  },
  {
    id: "av-3",
    categoryId: "burgers-avulsos",
    name: "Original Burger",
    description:
      "Pão brioche, carne 100g, ketchup, mostarda, cebola roxa, picles artesanal e queijo cheddar fatiado.",
    price: "R$ 25,00",
    image: "/img/original-burger.jpg",
    link: "https://shop.beetech.com.br/oneburger/original-burger/",
  },
  {
    id: "av-4",
    categoryId: "burgers-avulsos",
    name: "One Classic",
    description:
      "Pão brioche, carne de 100g, queijo prato fatiado, alface americana, tomate, cebola roxa e maionese verde.",
    price: "R$ 26,00",
    image: "/img/one-classic.jpg",
    link: "https://shop.beetech.com.br/oneburger/one-classic/",
  },

  // --- SOBREMESAS ---
  {
    id: "sob-1",
    categoryId: "sobremesas",
    name: "Brownie",
    description:
      "Brownie tradicional de chocolate com casquinha leve e textura densa e macia (60g).",
    price: "R$ 10,90",
    image: "/img/brownie.jpg",
    link: "https://shop.beetech.com.br/oneburger/brownie/",
  },
  {
    id: "sob-2",
    categoryId: "sobremesas",
    name: "Pudim - Brigadeiro",
    description: "Copo de pudim de brigadeiro no copo americano de 150ml.",
    price: "R$ 15,90",
    image: "/img/pudim-brigadeiro.jpg",
    link: "https://shop.beetech.com.br/oneburger/pudim---brigadeiro/",
  },
  {
    id: "sob-3",
    categoryId: "sobremesas",
    name: "Pudim - Leite Condensado",
    description:
      "Copo de pudim tradicional no copo americano de 150ml da Fabrica do Pudim.",
    price: "R$ 15,90",
    image: "/img/pudim-leite.jpg",
    link: "https://shop.beetech.com.br/oneburger/pudim---leite-condensado/",
  },

  // --- ACOMPANHAMENTOS ---
  {
    id: "ac-1",
    categoryId: "acompanhamentos",
    name: "Batata Frita",
    description: "Porção com 150g de batata frita.",
    price: "R$ 11,00",
    image: "/img/batata-frita.jpg",
    link: "https://shop.beetech.com.br/oneburger/batata-frita/",
  },
  {
    id: "ac-2",
    categoryId: "acompanhamentos",
    name: "Cebola Empanada",
    description: "Porção com 08 unidades de cebola empanada.",
    price: "R$ 12,00",
    image: "/img/cebola-empanada.jpg",
    link: "https://shop.beetech.com.br/oneburger/",
  },
  {
    id: "ac-3",
    categoryId: "acompanhamentos",
    name: "Mozza Sticks",
    description:
      "Com 06 unidades de sticks de mussarela empanada, você ainda ganha um molho especial para mergulhar.",
    price: "R$ 32,00",
    image: "/img/mozza-sticks.jpg",
    link: "https://shop.beetech.com.br/oneburger/mozza-sticks---palitos-de-mussarela/",
  },
  {
    id: "ac-4",
    categoryId: "acompanhamentos",
    name: "Nuggets Chicken Supreme",
    description:
      "Porção com 08 unidades de Nuggets Original de peito de frango, empanados.",
    price: "R$ 16,00",
    image: "/img/nuggets.jpg",
    link: "https://shop.beetech.com.br/oneburger/nuggets-chicken-supreme-(08-un)/",
  },
  {
    id: "ac-5",
    categoryId: "acompanhamentos",
    name: "Batata com Cheddar e Bacon",
    description:
      "Porção com 200g de batata frita com molho cheddar e bacon picado.",
    price: "R$ 18,00",
    image: "/img/batata-cheddar-bacon.jpg",
    link: "https://shop.beetech.com.br/oneburger/batata-frita-com-cheddar-e-bacon/",
  },
  {
    id: "ac-6",
    categoryId: "acompanhamentos",
    name: "Grande Batata (Cheddar e Bacon)",
    description:
      "(Serve de 1 a 2 pessoas) Porção com 300g de batata frita com molho cheddar e bacon picado.",
    price: "R$ 23,90",
    image: "/img/grande-batata.jpg",
    link: "https://shop.beetech.com.br/oneburger/",
  },

  // --- MILK SHAKES ---
  {
    id: "ms-1",
    categoryId: "milk-shakes",
    name: "Milk Shake Morango",
    description: "Milk Shake de Morango 400ml.",
    price: "R$ 17,90",
    image: "/img/milk-shake-morango.jpg",
    link: "https://shop.beetech.com.br/oneburger/milk-shake-morango/",
  },
  {
    id: "ms-2",
    categoryId: "milk-shakes",
    name: "Milk Shake Ovomaltine",
    description: "Milk Shake de Ovomaltine® 400ml.",
    price: "R$ 17,90",
    image: "/img/milk-shake-ovomaltine.jpg",
    link: "https://shop.beetech.com.br/oneburger/milk-shake-ovomaltine/",
  },

  // --- BEBIDAS ---
  {
    id: "beb-1",
    categoryId: "bebidas",
    name: "Suco Maracujá Del Valle 290ml",
    description: "Bebida gelada.",
    price: "R$ 8,00",
    image: "/img/suco-maracuja.jpg",
    link: "https://shop.beetech.com.br/oneburger/suco-maracuja-del-valle-290ml/",
  },
  {
    id: "beb-2",
    categoryId: "bebidas",
    name: "Del Valle Uva 290ml",
    description: "Bebida gelada.",
    price: "R$ 8,00",
    image: "/img/del-valle-uva.jpg",
    link: "https://shop.beetech.com.br/oneburger/del-valle-uva-290ml/",
  },
  {
    id: "beb-3",
    categoryId: "bebidas",
    name: "Coca-Cola 350ml",
    description: "Lata bem gelada.",
    price: "R$ 8,00",
    image: "/img/coca-cola.jpg",
    link: "https://shop.beetech.com.br/oneburger/coca-cola-350ml/",
  },
  {
    id: "beb-4",
    categoryId: "bebidas",
    name: "Coca-Cola Zero 350ml",
    description: "Lata bem gelada sem açúcar.",
    price: "R$ 8,00",
    image: "/img/coca-cola-zero.jpg",
    link: "https://shop.beetech.com.br/oneburger/coca-cola-zero-350ml/",
  },
  {
    id: "beb-5",
    categoryId: "bebidas",
    name: "Água",
    description: "Garrafa de água mineral.",
    price: "R$ 4,90",
    image: "/img/agua.jpg",
    link: "https://shop.beetech.com.br/oneburger/agua/",
  },
  {
    id: "beb-6",
    categoryId: "bebidas",
    name: "Del Valle Uva 200ml Caixinha",
    description: "Suco de caixinha.",
    price: "R$ 6,00",
    image: "/img/del-valle-caixinha.jpg",
    link: "https://shop.beetech.com.br/oneburger/del-valle-uva-200ml-caixinha/",
  },

  // --- MOLHOS ---
  {
    id: "mol-1",
    categoryId: "molhos",
    name: "Molhos Adicionais",
    description:
      "Molhos especiais em copinhos e sachês para acompanhar seu lanche.",
    price: "A partir de R$ 0,10",
    image: "/img/molhos.jpg",
    link: "https://shop.beetech.com.br/oneburger/molhos-adicionais/",
  },
];
