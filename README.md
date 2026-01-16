📌 API de Gerenciamento de Tickets de Suporte Técnico.

📖 Descrição do Projeto:

Este projeto consiste em uma API para o gerenciamento de tickets de suporte técnico, desenvolvida com foco no back-end utilizando Node.js.
A API permite que tickets sejam criados, listados, filtrados, atualizados, fechados e excluídos, facilitando o controle de solicitações de suporte relacionadas a equipamentos e problemas técnicos.
O sistema foi projetado para garantir simplicidade e organização no desenvolvimento de APIs, incluindo geração automática de identificadores e controle de campos editáveis.

🚀 Funcionalidades
• ✅ Criação de tickets de suporte
• 📋 Listagem de todos os tickets
• 🔍 Filtragem de tickets por critérios específicos
• ✏️ Atualização de informações do ticket
• 🔒 Bloqueio da edição do nome do usuário após a criação
• 🧾 Edição apenas dos campos equipamento e descrição
• 🆔 Geração automática de ID para cada ticket
• ✔️ Fechamento de tickets
• 🗑️ Exclusão de tickets

🛠️ Tecnologias Utilizadas
• Node.js
• JavaScript
• Client: Insomnia
• JSON para troca de dados

📂 Estrutura da API
A API disponibiliza rotas para realizar operações CRUD (Create, Read, Update, Delete) sobre os tickets:
• Criar ticket
• Obter tickets
• Atualizar ticket
• Fechar ticket
• Excluir ticket
Cada ticket contém as seguintes informações:
• ID (gerado automaticamente)
• Nome do usuário (imutável após criação)
• Equipamento
• Descrição
• Status do ticket

📥 Exemplo de Dados Enviados (JSON)
{ "usuario": "Nome", "equipamento": "Notebook Dell", "descricao": "Tela não liga" } 

⚠️ Regras de Negócio

• O nome do usuário não pode ser alterado após a criação do ticket
• Apenas os campos equipamento e descrição podem ser editados
• Cada ticket recebe um ID único automaticamente
• Tickets podem ser fechados quando o problema for resolvido

📌 Objetivo do Projeto

Este projeto tem como objetivo praticar e consolidar conhecimentos em desenvolvimento back-end, especialmente na construção de APIs REST utilizando Node.js, aplicando conceitos como rotas, requisições HTTP.
