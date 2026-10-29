import type { ImageMetadata } from "astro";

import daniel_melo from "../assets/equipe/daniel-melo.jpg";
import laura_castro from "../assets/equipe/laura-castro.jpg";
import ricardo_mendonca from "../assets/equipe/ricardo-mendonca.jpg";
import stela_melo from "../assets/equipe/stela-melo.jpg";

export interface Membro {
  slug: string;
  titulo: string;
  nome: string;
  cargo: string;
  texto: string;
  foto: ImageMetadata;
  link: { rotulo: string; href: string };
}

export const equipe: Membro[] = [
  {
    slug: "daniel-melo",
    titulo: "DANIEL MELO | Madeiras Capit",
    nome: "Carlos Silva",
    cargo: "Sócio e Gerente",
    texto:
      "Na Madeiras Capitão do Mato, somos apaixonados pela qualidade de nossos produtos e pelo compromisso com a sustentabilidade. Nossa missão é fornecer madeira de alta qualidade, proveniente de fontes legais e sustentáveis. Com uma equipe de especialistas, garantimos soluções personalizadas para as indústrias da Zona Franca de Manaus (ZFM), atendendo às necessidades específicas de cada cliente. Fundada com o objetivo de fortalecer a cadeia produtiva local, nossa empresa se destaca pela legalidade e transparência em todos os processos, contribuindo para um futuro mais sustentável na Amazônia.",
    foto: daniel_melo,
    link: { rotulo: "Voltar", href: "/nossa-historia" },
  },
  {
    slug: "laura-castro",
    titulo: "LAURA CASTRO | Madeiras Capit",
    nome: "João Silva",
    cargo: "Engenheiro Florestal",
    texto:
      "Na Madeiras Capitão do Mato, trabalhamos com um compromisso inabalável com a qualidade e a sustentabilidade. Nossa equipe, composta por engenheiros florestais e especialistas em madeiras, está dedicada a oferecer produtos de alta qualidade para atender às demandas das indústrias. Focamos na legalidade e rastreabilidade da madeira, garantindo que todos os nossos produtos sejam de origem legal e ambientalmente responsáveis. Compreendemos as necessidades específicas das indústrias da Zona Franca de Manaus (ZFM) e estamos preparados para oferecer soluções competitivas que promovam a sustentabilidade da Amazônia e a viabilidade econômica dos nossos parceiros.",
    foto: laura_castro,
    link: { rotulo: "Voltar", href: "/nossa-historia" },
  },
  {
    slug: "ricardo-mendonca",
    titulo: "RICARDO MENDONÇA | Madeiras Capit",
    nome: "Madeiras Capitão do Mato",
    cargo: "Fabricante de Madeira",
    texto:
      "Na Madeiras Capitão do Mato, somos especialistas na produção de madeira de alta qualidade, focando em soluções sustentáveis e legais. Nossa equipe é dedicada a atender as necessidades específicas das indústrias da Zona Franca de Manaus, garantindo a conformidade com as legislações ambientais e promovendo a rastreabilidade dos produtos. Com um compromisso firme com a Amazônia, fortalecemos a cadeia produtiva regional, oferecendo produtos que não só atendem às exigências do mercado, mas que também respeitam o meio ambiente. Descubra como podemos ajudar a sua empresa a prosperar com madeira de origem legal e competitiva.",
    foto: ricardo_mendonca,
    link: { rotulo: "Saiba Mais", href: "/nossa-historia" },
  },
  {
    slug: "stela-melo",
    titulo: "STELA MELO | Madeiras Capit",
    nome: "Carlos Silva",
    cargo: "Sócio Fundador",
    texto:
      "Na Madeiras Capitão do Mato, somos apaixonados pela madeira e pela sustentabilidade. Nossa equipe é composta por profissionais experientes que entendem as necessidades da indústria madeireira e estão comprometidos com a qualidade e a legalidade dos produtos. Oferecemos madeira de origem legal, com total rastreabilidade, que atende aos mais altos padrões industriais. Nossa proposta é não apenas fornecer produtos, mas também apoiar os nossos clientes na otimização de suas operações, garantindo competitividade tributária e segurança jurídica. Estamos aqui para fortalecer a cadeia produtiva regional, promovendo práticas sustentáveis que respeitam a Amazônia e suas comunidades. Conheça mais sobre nossa equipe e como podemos colaborar com o seu negócio!",
    foto: stela_melo,
    link: { rotulo: "Nossa Equipe", href: "/nossa-historia" },
  },
];
