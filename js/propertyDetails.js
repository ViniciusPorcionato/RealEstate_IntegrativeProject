// Verifica se estamos na página de detalhes
if (window.location.pathname.includes("detalhes.html")) {
  document.addEventListener("DOMContentLoaded", function () {
    // Dados dos imóveis (simulando um banco de dados)
    const properties = {
      1: {
        title: "Casa em São Paulo",
        location: "São Paulo, São Paulo",
        price: "R$ 3.500.000",
        rooms: "3 Quartos",
        bathrooms: "2 Banheiros",
        area: "150 m²",
        description:
          "Moderna casa urbana com fachada sofisticada, sala ampla integrada, cozinha planejada com ilha central, 3 quartos (sendo 1 suíte), 2 banheiros e acabamento de alto padrão. Localizada em bairro nobre, ideal para famílias que buscam conforto e estilo na cidade.",
        mainImage: "./assets/images/casa1-1.png",
        images: [
          "./assets/images/casa1-2.png",
          "./assets/images/casa1-3.png",
          "./assets/images/casa1-1.png",
        ],
      },
      2: {
        title: "Apartamento no Centro",
        location: "São Paulo, Centro",
        price: "R$ 850.000",
        rooms: "2 Quartos",
        bathrooms: "1 Banheiro",
        area: "75 m²",
        description:
          "Apartamento bem localizado no coração da cidade, próximo a todas as facilidades. Reformado recentemente, possui 2 quartos, 1 banheiro, sala ampla e cozinha americana. Edifício com portaria 24h e área de lazer.",
        mainImage: "./assets/images/casa4-1.png",
        images: [
          "./assets/images/casa4-1.png",
          "./assets/images/casa4-2.png",
          "./assets/images/casa4-3.png",
        ],
      },
      3: {
        title: "Casa com Vista para o Mar",
        location: "Rio de Janeiro, Copacabana",
        price: "R$ 5.500.000",
        rooms: "4 Quartos",
        bathrooms: "3 Banheiros",
        area: "220 m²",
        description:
          "Exclusiva cobertura com vista panorâmica para o mar. Amplo living com varanda, 4 suítes, home office, cozinha gourmet e área de serviço completa. Condomínio com piscina, sauna e academia.",
        mainImage: "./assets/images/casa2-1.png",
        images: [
          "./assets/images/casa2-1.png",
          "./assets/images/casa2-2.png",
          "./assets/images/casa2-3.png",
        ],
      },
      // Adicione os outros imóveis seguindo o mesmo padrão
      4: {
        title: "Casa Familiar com Jardim",
        location: "Belo Horizonte, Savassi",
        price: "R$ 1.800.000",
        rooms: "4 Quartos",
        bathrooms: "3 Banheiros",
        area: "300 m²",
        description:
          "Espaçosa casa familiar em um dos bairros mais tradicionais de BH. Com jardim amplo, 4 quartos (3 suítes), sala de estar e jantar, cozinha planejada, área de churrasco e piscina. Garagem para 3 carros.",
        mainImage: "./assets/images/casa3-1.png",
        images: [
          "./assets/images/casa3-1.png",
          "./assets/images/casa3-2.png",
          "./assets/images/casa3-3.png",
        ],
      },
      5: {
        title: "Apartamento Moderno",
        location: "Curitiba, Batel",
        price: "R$ 1.100.000",
        rooms: "3 Quartos",
        bathrooms: "2 Banheiros",
        area: "120 m²",
        description:
          "Apartamento moderno em edifício de alto padrão. Plantas livres com 3 quartos (sendo 1 suíte master), 2 banheiros, sala ampla, cozinha integrada e varanda gourmet. Condomínio com completa área de lazer.",
        mainImage: "./assets/images/casa5-1.png",
        images: [
          "./assets/images/casa5-1.png",
          "./assets/images/casa5-2.png",
          "./assets/images/casa5-3.png",
        ],
      },
      6: {
        title: "Sobrado em Condomínio Fechado",
        location: "Campinas, Barão Geraldo",
        price: "R$ 1.500.000",
        rooms: "5 Quartos",
        bathrooms: "4 Banheiros",
        area: "350 m²",
        description:
          "Sobrado em condomínio fechado com total segurança e privacidade. 5 quartos (4 suítes), sala de estar e TV, escritório, cozinha gourmet, área de serviço completa e quintal amplo. Garagem coberta para 4 carros.",
        mainImage: "./assets/images/casa6-1.png",
        images: [
          "./assets/images/casa6-1.png",
          "./assets/images/casa6-2.png",
          "./assets/images/casa6-3.png",
        ],
      },
      7: {
        title: "Kitnet para Investidores",
        location: "Porto Alegre, Centro Histórico",
        price: "R$ 350.000",
        rooms: "1 Quarto",
        bathrooms: "1 Banheiro",
        area: "45 m²",
        description:
          "Excelente kitnet para investidores, com alto potencial de locação. Bem localizado próximo a universidades e comércio. Mobiliado, com 1 quarto, banheiro, sala e cozinha compacta. Ótimo custo-benefício.",
        mainImage: "./assets/images/casa7-1.png",
        images: [
          "./assets/images/casa7-1.png",
          "./assets/images/casa7-2.png",
          "./assets/images/casa7-3.png",
        ],
      },
      8: {
        title: "Fazenda para Lazer",
        location: "Interior de São Paulo",
        price: "R$ 3.200.000",
        rooms: "6 Quartos",
        bathrooms: "5 Banheiros",
        area: "500 m² (construídos)",
        description:
          "Encantadora propriedade rural com casa sede de 6 quartos, ampla área de lazer com piscina, churrasqueira e pomar. Terreno de 50.000 m² com riacho e mata nativa. Ideal para quem busca tranquilidade sem abrir mão do conforto.",
        mainImage: "./assets/images/casa8-1.png",
        images: [
          "./assets/images/casa8-1.png",
          "./assets/images/casa8-2.png",
          "./assets/images/casa8-3.png",
        ],
      },
      9: {
        title: "Loft Industrial",
        location: "São Paulo, Vila Madalena",
        price: "R$ 950.000",
        rooms: "1 Quarto",
        bathrooms: "1 Banheiro",
        area: "80 m²",
        description:
          "Autêntico loft industrial em um dos bairros mais descolados de SP. Pé-direito alto, planta livre, tijolos aparentes e muita personalidade. Espaço versátil que pode ser usado como moradia ou escritório criativo.",
        mainImage: "./assets/images/casa9-1.png",
        images: [
          "./assets/images/casa9-1.png",
          "./assets/images/casa9-2.png",
          "./assets/images/casa9-3.png",
        ],
      },
    };

    // Obter o ID do imóvel da URL
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = urlParams.get("id");

    if (propertyId && properties[propertyId]) {
      const property = properties[propertyId];

      // Preencher os dados do imóvel
      document.getElementById("property-title").textContent = property.title;
      document.getElementById("property-location").textContent =
        property.location;
      document.getElementById("property-price").textContent = property.price;
      document.getElementById("property-rooms").textContent = property.rooms;
      document.getElementById("property-bathrooms").textContent =
        property.bathrooms;
      document.getElementById("property-area").textContent = property.area;
      document.getElementById("property-description-text").textContent =
        property.description;

      // Configurar imagem principal
      const mainImage = document.getElementById("main-property-image");
      if (mainImage) {
        mainImage.src = property.mainImage;
        mainImage.alt = property.title;
      }

      // Configurar miniaturas
      const thumbnailContainer = document.querySelector(".thumbnail-container");
      if (thumbnailContainer) {
        thumbnailContainer.innerHTML = "";

        property.images.forEach((image, index) => {
          const thumbnail = document.createElement("img");
          thumbnail.src = image;
          thumbnail.alt = `Imagem ${index + 1} do imóvel`;
          thumbnail.classList.add("thumbnail");

          thumbnail.addEventListener("click", () => {
            if (mainImage) mainImage.src = image;
          });

          thumbnailContainer.appendChild(thumbnail);
        });
      }
    } else {
      // Redirecionar se ID inválido
      window.location.href = "imoveis.html";
    }
  });
}
