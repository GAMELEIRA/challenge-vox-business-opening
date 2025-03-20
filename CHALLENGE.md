# Case Front Senior: Abertura de Empresa

Olá, queremos te desafiar a participar do nosso Time Vox. Podemos começar? Seu trabalho será visto pelo nosso time técnico e você receberá ao final um feedback sobre o seu desafio. Interessante? Não teremos protótipo, pois a intenção é avaliar também a sua criatividade e interpretação do escopo.

## Primeira Tela
- Coloque um cabeçalho com o logotipo da Vox e o título de Abertura de Empresa
- Dashboard das solicitações de empresas feitas, podendo clicar para visualizar/editar
  - Copie o json encontrado em [/mocks/db.json](/mocks/db.json) para dentro do projeto
  - Deverá consumir uma api fake com json-server ou similar integrar esses dados
- Botão Abrir Empresa redirecionando para a segunda tela

## Segunda Tela
- Cabeçalho padrão
- Formulário com duas seções:
  - Dados do Solicitante: Nome, CPF, Data de nascimento.
  - Dados da Empresa: Nome fantasia e endereço
- Botão de Solicitar e Voltar. 
- Ao clicar em Solicitar o sistema valida se os campos estão preenchidos corretamente, 
- E então estando ok mostra um modal de sucesso com a mensagem "Solicitação cadastrada com sucesso" e direciona para a tela inicial.
- Caso não esteja ok, informe os campos não preenchidos ou com erro.

## Avaliação

### O mínimo que esperamos
- Esperamos que faça commits com poucas alterações
- Use o framework Angular na versão LTS ou até duas versões anteriores à LTS, tendo domínio dos seus recursos próprios
- Poderá usar libs extras, mas com moderação
- Criar um repositório privado no Github

### Pontos Básicos
- Clean Code e Clean Architecture
- Parte visual bem estruturada
- Subir projeto em algum servidor (Heroku, Netlify, Vercel, etc)
- Utilizar uma API fake como json-server

### Pontos Médios
- Angular Signals
- Componentes reutilizáveis
- Validações dos formulários
- Feedbacks visuais

### Pontos Avançados
- Testes unitários
- Tela de autenticação

## Como nos enviar a resolução
- Crie um repositório privado na github.com;
- Desenvolva. Você terá 3 (três) dias a partir da data do envio do desafio;
- Crie um arquivo README.md com a explicação de como devemos executar o projeto e com uma descrição do que foi feito, o que não fez e/ou o que poderia melhorar; 
- Após concluir seu trabalho, adicione como membro (develop) o usuário `front-vox` e nos comunique com o link do repositório; 
- Pronto! Agora é so esperar o nosso feedback... Boa sorte!!
- Sendo aprovado para a entrevista estude seu código, pois ele será avaliado.