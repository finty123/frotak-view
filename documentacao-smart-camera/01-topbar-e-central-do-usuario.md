# Topbar e Central do usuário

## Seletor de produto (ícone de grade)

**Posição:** à esquerda, após a marca SMART CAMERAS.

**Efeito testado:** abre um pequeno popover sob o ícone com dois destinos:

- FT Vision — o produto atualmente utilizado.
- FT Manager — atalho para o gerenciador administrativo.

O menu fecha com `Esc` ou clique fora.

## Busca global (lupa)

**Posição:** primeiro ícone do bloco direito.

**Efeito testado:** abre modal central sobre fundo escurecido. O modal contém campo “Procurar...”, indicação de tecla `esc` e área de resultados. Sem termo informado, exibiu “Sem dados disponíveis”. Serve para localizar funções/entradas disponíveis globalmente.

## Idioma (globo + “PT” + chevron)

**Efeito testado:** abre menu com:

- English
- Español
- Português (Brasil)

Português (Brasil) era o idioma ativo. Nenhuma troca de idioma foi aplicada para não alterar a preferência da conta.

## Gestão/Centro de downloads (ícone de caixa com seta)

**Efeito testado:** abre uma gaveta branca larga pela direita, intitulada “Central do usuário”, diretamente na aba “Centro de downloads”. A gaveta mantém a tela de origem visível e escurecida ao fundo.

Subabas do Centro de downloads:

- Sucesso
- Baixando
- Aguardando
- Falhar (rótulo traduzido como “Falhar (por exemplo, experimentos)”)

Na aba Sucesso, a tabela possui checkbox, Nome de arquivo, Hora da criação e Ação. Cada linha oferece download e exclusão. Há exclusão em lote, atualizar, configurações, paginação e tamanho de página. A amostra mostrava 69 itens. Downloads e exclusões não foram executados.

## Notificações (sino com ponto vermelho)

**Efeito testado:** abre a Central do usuário já na aba “Notificações”.

Conteúdo:

- Aviso: somente as 31 notificações mais recentes são mantidas.
- Abas Não lido, Lido e Todos.
- Ação “Marcar todos como lido”.
- Atualizar, paginação e tamanho de página.
- Cartões/linhas com tipo, estado, resumo e data.

Na amostra havia quatro notificações não lidas de informação do sistema sobre manutenção/expansão de capacidade. “Marcar todos como lido” não foi acionado para preservar o estado.

## Avatar “C”

**Efeito testado:** abre a Central do usuário na aba “Dados do usuário”.

### Dados do usuário

- Avatar circular com inicial.
- Conta: `central.trans`.
- E-mail mascarado e ícone de olho.
- Editar.
- Vincular celular — exibiu “O celular não está vinculado”.
- Senha do usuário — exibiu “A senha foi definida”; link “Modificar”.
- Compartilhamento de conta — explica login sem senha por link; links “Registro de compartilhamento” e “Ir para o compartilhamento”.

Por envolver credenciais/compartilhamento, editar conta, revelar e-mail, vincular telefone, mudar senha e criar compartilhamento não foram executados.

### Ferramenta

Dois utilitários para Windows, cada um com botão “Baixar”:

- DiskTool — `DiskTool_v1.1.0.21.exe`.
- LocalPlayer — `LocalPlayer_V2.5.9.exe`.

Os instaladores não foram baixados nem executados.

### Sobre a plataforma

- Produto: SMART CAMERAS.
- Versão: `V3.18.4.15-P10-C133044`.
- Lançamento: 20/09/2026.
- Aplicativo: iOS 12+; Android 5.0/API 21+, arquiteturas armeabi-v7a e arm64-v8a.
- PC para até 5.000 veículos: CPU i5-7500 equivalente, 8 GB RAM, DirectX 12+, 1080p, 20 Mbps exclusivos (4 acessos diretos), Windows 7+, Chrome 64-bit 109.0.5414.120+.
- Acima de 5.000 veículos: 16 GB RAM, 4K, 200 Mbps exclusivos (36 acessos diretos); demais requisitos semelhantes.

## Sair (ícone de energia)

**Efeito testado até confirmação:** abre diálogo “Confirmar logout — Sair do sistema atual?” com “Cancelamentos” e “Confirmar”. Foi escolhida a opção de cancelamento, mantendo a sessão ativa.

## Central do usuário — navegação interna

Lista vertical à esquerda da gaveta:

1. Dados do usuário
2. Notificações
3. ferramenta
4. Sobre a plataforma
5. Centro de downloads

O `X` do canto superior direito fecha a gaveta. Cada ícone da topbar abre a mesma gaveta, mas seleciona uma aba inicial diferente: sino → Notificações; caixa/seta → Centro de downloads; avatar → Dados do usuário.
