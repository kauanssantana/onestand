export const siteData = {
  company: {
    name: "One Stand Hamburgueria",
    description: "Hambúrguer Artesanal grelhado no fogo como churrasco.",
    address: "R. Jequirituba, 1510 - Parque America, São Paulo - SP, 04822-000",
    phone: "5511966582313", // Formatado para o link do WhatsApp
    menuLink: "https://menu.beefood.com.br", // Link para o sistema de pedidos
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

  menu: {
    combos: [
      {
        name: "Original Burger (Combo)",
        description:
          "Pão brioche, carne 100g, ketchup, mostarda, cebola roxa, picles e queijo cheddar + Acomp. + Bebida",
        price: "a partir de R$ 36,90",
      },
      {
        name: "Tasty Bacon (Combo)",
        description:
          "Pão brioche, carne 100g, queijo cheddar, maionese defumada, cebola roxa, alface, tomate e bacon",
        price: "a partir de R$ 41,90",
      },
      {
        name: "Combo Kids",
        description:
          "Pão, carne, queijo, ketchup + batata pequena + suco Del Valle",
        price: "a partir de R$ 34,90",
      },
    ],
    burgers: [
      {
        name: "One Burger",
        description:
          "Pão brioche, carne 100g, fatias de queijo cheddar e maionese verde temperada",
        price: "R$ 24,00",
      },
      {
        name: "Smash 2.0",
        description:
          "Pão brioche, duas carnes 100g, maionese grill, fatias de cheddar, cebola roxa e molho caipira",
        price: "R$ 33,00",
      },
    ],
    sides: [
      {
        name: "Mozza Sticks",
        description:
          "6 unidades de palitos de mussarela empanada + molho especial",
        price: "R$ 32,00",
      },
      {
        name: "Batata Frita com Cheddar e Bacon",
        description:
          "Porção com 200g de batata frita com molho cheddar e bacon",
        price: "R$ 18,00",
      },
    ],
    desserts: [
      {
        name: "Pudim - Leite Condensado",
        description: "Copo de pudim tradicional 150ml da Fábrica do Pudim",
        price: "R$ 15,90",
      },
      {
        name: "Brownie",
        description:
          "Tradicional de chocolate com casquinha leve e textura macia",
        price: "R$ 10,90",
      },
    ],
  },
};
