/**
 * Dados do cliente em um único lugar (nome, contatos, redes, mapa).
 */

const whatsappNumero = "559281093018";

export const site = {
  nome: "Madeiras Capit",
  nomeMarca: "Madeiras Capitão do Mato",
  /** URL base usada no canonical e nas tags Open Graph. Trocar pelo domínio definitivo ao publicar. */
  url: "https://madeirascapitaodomato.com.br",
  /** Publica `noindex` por enquanto. Mude para true quando o domínio definitivo entrar no ar. */
  indexavel: false,
  idioma: "pt-BR",
  credito: "@ 2026 - Desenvolvido por Brann Marketing Digital",
  logo: {
    parte1: "Madeiras",
    parte2: "Capitão do Mato",
  },
  contato: {
    endereco: "Rodovia KM 85 BR 174, Zona Rural, Rio Preto da Eva-AM",
    enderecoCompleto:
      "Rodovia KM 85 BR 174, Zona Rural, Rio Preto da Eva-AM - CEP 69117-000",
    email: "comercial@capitaodomato.com",
    telefoneContato: "(92) 98109-3018",
    /** Texto exibido no rodapé da página inicial. */
    telefoneRodape: "Tel: (92) 8109-3018",
  },
  whatsapp: {
    numero: whatsappNumero,
    url: `https://wa.me/${whatsappNumero}?text=Ol%C3%A1%2C+gostaria+de+fazer+um+or%C3%A7amento%21`,
  },
  redes: {
    facebook: "https://www.facebook.com/madeirascapitaodomato",
    instagram: "https://www.instagram.com/capitaodomatomadeiras/",
  },
  mapa: {
    latitude: -3.1329197,
    longitude: -59.97348779999999,
    rotulo: "Matriz",
  },
  navegacao: [
    { id: "inicio", rotulo: "PÁGINA INICIAL", href: "/" },
    { id: "contato", rotulo: "CONTATO", href: "/contato" },
    { id: "nossa-historia", rotulo: "NOSSA HISTÓRIA", href: "/nossa-historia" },
  ],
  botaoCabecalho: "INICIAR",
  /** Dados estruturados (JSON-LD) da página inicial. */
  jsonLd: {
    "@context": "https://schema.org/",
    "@type": "LocalBusiness",
    name: "Madeiras Capitão do Mato",
    url: "https://madeirascapitaodomato.com.br",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
      addressLocality: "Manaus",
      addressRegion: "AM",
      postalCode: "69075-830",
      streetAddress: "1.424 Avenida Ministro Mário Andreazza",
    },
  },
} as const;

export type IdNavegacao = (typeof site.navegacao)[number]["id"];
