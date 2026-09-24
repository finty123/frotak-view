# FrotaK View

Frontend navegável de videotelemetria construído a partir do mapeamento funcional do Smart Cameras e da direção visual aprovada para o FrotaK View.

## Escopo entregue

- 36 telas: 27 do FT Vision e 9 do FT Manager.
- Shell responsivo com sidebar contextual, topbar, busca, seletor de produto, notificações, downloads e perfil.
- Monitoramento em mapa, reprodução e mosaico de vídeo, alertas, evidências, relatórios, consumo de dados, frotas, veículos, motoristas, usuários, áudio e regras de compartilhamento.
- Tabelas com ordenação, seleção e paginação client-side real.
- Filtros recolhíveis, abas, modais, drawers, formulários em etapas, estados vazios e indicadores operacionais.
- Fixtures locais determinísticas. Não há API, banco de dados ou backend nesta etapa.
- Layout responsivo para desktop, tablet e mobile.

## Tecnologia e sistema visual

- React 18, TypeScript e React Router.
- Vite e Tailwind CSS 4.
- AlignUI free v1.2 como sistema visual único, adaptado por componentes próprios do FrotaK View.
- Primitivos locais derivados dos padrões AlignUI preservados em `.agent/references/visual-system`.
- Radix UI para overlays acessíveis, Remix Icon para iconografia e Recharts para visualização de dados.

O contrato funcional está em `.agent/skills/smartcameras-product-guide.md`. O contrato visual está em `.agent/skills/videotelemetry-visual-system.md` e `.agent/references/visual-system/`.

## Executar

```bash
npm install
npm run dev
```

O Vite inicia em `http://localhost:4173`.

## Verificação

```bash
npm run typecheck
npm run lint
npm test -- --run
npm run build
```

O teste do manifesto garante exatamente 36 caminhos únicos e a distribuição 27/9 entre os dois produtos.

## Organização

```text
src/
  components/
    ui/       primitivos do sistema visual
    layout/   shell, sidebar e topbar
    domain/   mapas, vídeo, gráficos, frota e evidências
  data/       fixtures locais
  pages/      módulos funcionais
  routes/     manifesto canônico das 36 rotas
```

## Produtos

**FT Vision:** dashboard, monitoramento em tempo real, risco, trajeto, playback, biblioteca de vídeo, alertas, análise, relatórios, e-mails agendados, consumo de dados, reconhecimento, frotas, veículos e motoristas.

**FT Manager:** notificações, logs, usuários, evidências, tarefas de áudio e compartilhamento com embarcadores.
