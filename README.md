# 🍔 One Stand Hamburgueria - Landing Page

Uma landing page moderna, responsiva e altamente interativa desenvolvida para a **One Stand**, a primeira hamburgueria com atendimento robótico do Grajaú - SP. O projeto foca em conversão de vendas, experiência do usuário (UX) e design imersivo.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

*   **[React](https://reactjs.org/) / [Next.js](https://nextjs.org/)** - Base da aplicação e renderização.
*   **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para maior segurança do código.
*   **CSS Customizado & Tailwind CSS** - Estilização responsiva e estruturação de layouts flexíveis.
*   **Lucide React** - Biblioteca de ícones vetoriais leves.
*   **IntersectionObserver API** - Utilizado nativamente para gatilhos de animação de performance otimizada.

## ✨ Principais Funcionalidades

*   **Animações de Scroll Nativas (`ScrollReveal`):** Componente customizado que repete animações fluidas (`fade-up`, `fade-left`, `fade-right`, `zoom-in`) sempre que os elementos entram e saem da tela, garantindo um site sempre "vivo".
*   **Carrossel de Banners Customizado:** Sistema de loop infinito com cálculo dinâmico de largura que exibe 3 banners simultâneos em desktop e 1 em mobile.
*   **Efeito Cascata (Staggered Animations):** Renderização visual atrasada dinamicamente (via index) em listas de produtos no **Cardápio** e opções de **Delivery**.
*   **Botões Flutuantes Inteligentes:** 
    *   **WhatsApp:** Com animação de "pulso" infinita e link integrado à API do WhatsApp (`wa.me`) com mensagem automática pré-preenchida.
    *   **Back to Top:** Aparece dinamicamente apenas após o usuário descer 300px na página.
*   **Layout Flexbox Avançado:** Uso de travas dimensionais (`flex: 0 0 50%`) na seção Hero para suportar imagens superdimensionadas (oversized) sem quebrar a estrutura responsiva.
*   **Integração Google Maps:** Iframe embutido com altura travada nativamente para evitar colapso de layout dentro da div de animação.

## 📂 Estrutura do Projeto

Os componentes principais estão divididos para facilitar a manutenção:

*   `/components/Hero.tsx` - Primeira dobra com vídeo de fundo e imagem colossal.
*   `/components/AboutSection.tsx` - Seção sobre o robô garçom e diferenciais.
*   `/components/MenuSection.tsx` - Cardápio filtrável com efeito de cascata.
*   `/components/DeliverySection.tsx` - Cards de plataformas de entrega com `zoom-in`.
*   `/components/BannerCarousel.tsx` - Carrossel de ofertas em loop infinito.
*   `/components/LocationSection.tsx` - Informações de contato e mapa.
*   `/components/ScrollReveal.tsx` - O motor de animação baseado em scroll do site.

## 🛠️ Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/one-stand-hamburgueria.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd one-stand-hamburgueria
   ```

3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.