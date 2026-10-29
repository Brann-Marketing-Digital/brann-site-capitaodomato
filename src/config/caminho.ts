const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/**
 * Prefixa o `base` do Astro em caminhos internos ("/contato", "/favicon.ico").
 * No domínio próprio o base é "/" e nada muda; em `usuario.github.io/repo` vira "/repo/contato".
 * Links externos, âncoras e mailto passam intactos.
 */
export function comBase(caminho: string): string {
  return caminho.startsWith("/") && !caminho.startsWith("//")
    ? base + caminho
    : caminho;
}
