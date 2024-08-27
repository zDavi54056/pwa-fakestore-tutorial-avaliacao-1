# Avaliação de recuperação - Desenvolvimento para Dispositivos Móveis

Esta é uma atividade de recuperação para a disciplina de Desenvolvimento para Dispositivos Móveis.

Primeiramente, você precisa definir as variáveis PASSAGE_APP_ID e PASSAGE_API_KEY do arquivo docker-compose.yml. Depois, você deve executar o docker, com o seguinte comando:

```bash
docker compose up --build
```

Note que já estão desenvolvidas algumas telas, inclusive a http://localhost:5173/categorias, com a inserção e listagem de categorias.

## Tarefas a serem avaliadas:

1. Configurar o PASSAGE_APP_ID e PASSAGE_API_KEY para execução do Docker, com os valores da sua aplicação passage
2. Adicionar um link nos menus das telas pequenas, médias e grandes para acessar a rota das categorias
3. Embora já esteja implementada a função para excluir categorias, o ícone de excluir na tabela não está invocando essa função. Fazer essa chamada, de forma que a exclusão de categorias funcione
4. No backend já tem os endpoints para CRUD de fabricantes (manufacturers). Implementar a entrada no menu e também as telas de frontend de para CRUD de fabricantes, a exemplo das categorias.
