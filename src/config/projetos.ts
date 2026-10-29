import type { ImageMetadata } from "astro";

import p1_hero from "../assets/projetos/projeto-1-hero.jpg";
import p1_galeria_1 from "../assets/projetos/projeto-1-galeria-1.jpg";
import p1_galeria_2 from "../assets/projetos/projeto-1-galeria-2.jpg";
import p1_galeria_3 from "../assets/projetos/projeto-1-galeria-3.jpg";
import p2_hero from "../assets/projetos/projeto-2-hero.jpg";
import p2_galeria_1 from "../assets/projetos/projeto-2-galeria-1.jpg";
import p2_galeria_2 from "../assets/projetos/projeto-2-galeria-2.jpg";
import p3_hero from "../assets/projetos/projeto-3-hero.jpg";
import p3_galeria_1 from "../assets/projetos/projeto-3-galeria-1.jpg";
import p3_galeria_3 from "../assets/projetos/projeto-3-galeria-3.jpg";
import p4_hero from "../assets/projetos/projeto-4-hero.jpg";
import p4_galeria_1 from "../assets/projetos/projeto-4-galeria-1.jpg";
import p4_galeria_2 from "../assets/projetos/projeto-4-galeria-2.jpg";
import p5_hero from "../assets/projetos/projeto-5-hero.jpg";
import p5_galeria_1 from "../assets/projetos/projeto-5-galeria-1.jpg";
import p5_galeria_2 from "../assets/projetos/projeto-5-galeria-2.jpg";
import p6_hero from "../assets/projetos/projeto-6-hero.jpg";
import p6_galeria_2 from "../assets/projetos/projeto-6-galeria-2.jpg";
import p6_galeria_3 from "../assets/projetos/projeto-6-galeria-3.jpg";

export interface Projeto {
  slug: string;
  titulo: string;
  /** Largura do título (força a quebra de linha). */
  larguraTitulo?: number;
  texto: string;
  linkTopo: { rotulo: string; href: string };
  linkRodape: string;
  fundo: ImageMetadata;
  galeria: [ImageMetadata, ImageMetadata, ImageMetadata];
}

export const projetos: Projeto[] = [
  {
    slug: "projeto-1",
    titulo: "Nosso Compromisso com a Qualidade",
    larguraTitulo: 180,
    texto:
      "Na Madeiras Capitão do Mato, somos dedicados a oferecer produtos de madeira de alta qualidade, atendendo às exigências rigorosas da indústria. Nossos produtos são provenientes de fontes legais e sustentáveis, assegurando que cada peça de madeira é rastreável e licenciado, em conformidade com as leis ambientais. Temos uma equipe comprometida que trabalha junto aos nossos clientes para entender suas necessidades específicas e fornecer soluções personalizadas. Acreditamos na importância de fortalecer a cadeia produtiva local, promovendo práticas que respeitam a Amazônia e garantem a sustentabilidade para as futuras gerações. Nossa missão é ser o parceiro confiável no fornecimento de madeira, contribuindo para o desenvolvimento econômico da região.",
    linkTopo: { rotulo: "Explorar Nossos Produtos", href: "/" },
    linkRodape: "Retornar à Página Inicial",
    fundo: p1_hero,
    galeria: [p1_galeria_1, p1_galeria_2, p1_galeria_3],
  },
  {
    slug: "projeto-2",
    titulo: "Nossos Produtos",
    texto:
      "Na Madeiras Capitão do Mato, oferecemos uma ampla variedade de produtos de madeira de alta qualidade, adequados para diversas indústrias. Nosso compromisso com a legalidade e a sustentabilidade garante que todas as nossas madeiras sejam provenientes de fontes legais e rastreáveis. Com uma equipe especializada, estamos prontos para atender às necessidades específicas de cada cliente, garantindo que nossos produtos atendam aos mais altos padrões de qualidade industrial. Descubra como nossa operação contribui para o fortalecimento da cadeia produtiva regional e como podemos ajudar sua empresa a se destacar no mercado.",
    linkTopo: { rotulo: "Voltar à Página Inicial", href: "/" },
    linkRodape: "Retornar ao Início",
    fundo: p2_hero,
    galeria: [p2_galeria_1, p2_galeria_2, p2_hero],
  },
  {
    slug: "projeto-3",
    titulo: "Compromisso com a Qualidade",
    texto:
      "Na Madeiras Capitão do Mato, dedicamo-nos a oferecer madeiras de alta qualidade, com um forte compromisso com a legalidade e a sustentabilidade. Nossa madeira é proveniente de fontes legais, garantindo a rastreabilidade e o licenciamento adequados. Trabalhamos para atender às necessidades específicas das indústrias da Zona Franca de Manaus, oferecendo soluções que respeitam a legislação ambiental e promovem a segurança para nossos clientes e parceiros. Acreditamos que a qualidade dos produtos é fundamental para o sucesso de nossos clientes e estamos sempre prontos para inovar e melhorar nossos processos. Venha descobrir como podemos ajudá-lo a fortalecer sua cadeia produtiva com nossas madeiras.",
    linkTopo: { rotulo: "Voltar à Nossa História", href: "/" },
    linkRodape: "Voltar ao Início",
    fundo: p3_hero,
    galeria: [p3_galeria_1, p3_hero, p3_galeria_3],
  },
  {
    slug: "projeto-4",
    titulo: "Nossos Produtos",
    texto:
      "Na Madeiras Capitão do Mato, oferecemos uma variedade de produtos de madeira de alta qualidade, que atendem às exigências das indústrias da Zona Franca de Manaus (ZFM). Nossos produtos são provenientes de fontes legais e sustentáveis, garantindo que cada peça de madeira que fornecemos não apenas atenda a padrões industriais rigorosos, mas também respeite o meio ambiente e a legislação vigente. Trabalhamos para fortalecer a cadeia produtiva local, promovendo a legalidade e a sustentabilidade, enquanto oferecemos um atendimento especializado que se adapta às necessidades dos nossos clientes. Ao optar por nossas madeiras, você contribui para um futuro mais verde e sustentável para a Amazônia.",
    linkTopo: { rotulo: "Voltar aos Nossos Produtos", href: "/" },
    linkRodape: "Voltar ao Início",
    fundo: p4_hero,
    galeria: [p4_galeria_1, p4_galeria_2, p4_hero],
  },
  {
    slug: "projeto-5",
    titulo: "Compromisso com a Sustentabilidade",
    texto:
      "Na Madeiras Capitão do Mato, nos dedicamos a oferecer produtos de madeira de alta qualidade, respeitando a legislação ambiental e promovendo a sustentabilidade. Nossos produtos são provenientes de fontes legais e rastreáveis, garantindo segurança e confiança aos nossos clientes. Trabalhamos em estreita colaboração com a indústria da Zona Franca de Manaus, oferecendo um atendimento especializado que atende às necessidades específicas de nossos parceiros. Além disso, buscamos sempre a competitividade tributária, assegurando que nossos clientes possam se beneficiar de operações que geram crédito de ICMS. Nosso compromisso é fortalecer a cadeia produtiva regional, contribuindo para um desenvolvimento sustentável e responsável na Amazônia.",
    linkTopo: { rotulo: "Voltar à Página Inicial", href: "/" },
    linkRodape: "Retornar ao Início",
    fundo: p5_hero,
    galeria: [p5_galeria_1, p5_galeria_2, p5_hero],
  },
  {
    slug: "projeto-6",
    titulo: "Madeiras Capitão do Mato",
    larguraTitulo: 162,
    texto:
      "Na Madeiras Capitão do Mato, somos especialistas na fabricação de produtos de madeira de alta qualidade, provenientes da Amazônia. Nosso compromisso vai além da produção; garantimos que cada peça de madeira seja extraída de forma responsável, com total conformidade às normas ambientais e legais. Oferecemos um portfólio diversificado que atende às necessidades específicas das indústrias da Zona Franca de Manaus (ZFM), possibilitando operações que podem gerar créditos de ICMS para nossos clientes. Estamos dedicados a fortalecer a cadeia produtiva regional, promovendo a sustentabilidade e respeitando o meio ambiente. Ao escolher a Madeiras Capitão do Mato, você opta por qualidade e segurança jurídica, assegurando que sua empresa opere com materiais de origem legal e rastreabilidade garantida.",
    linkTopo: { rotulo: "Descubra nossa linha de produtos", href: "/" },
    linkRodape: "Voltar ao início",
    fundo: p6_hero,
    galeria: [p6_hero, p6_galeria_2, p6_galeria_3],
  },
];
