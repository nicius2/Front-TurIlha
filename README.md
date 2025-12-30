# 🌴 TurIlha — Turistando a Ilha de São Luís

Descubra os melhores pontos turísticos, atividades e experiências em São Luís do Maranhão.
O TurIlha conecta viajantes aos destinos mais incríveis da ilha com praticidade e geolocalização.

<img width="1345" height="692" alt="image" src="https://github.com/user-attachments/assets/f966ad56-51db-454a-949f-b60cffbcc406" />

### 🚀 Features Principais

🔐 **Login e criação de conta** com validação completa </br>
🔑 **Autenticação via Google** usando Firebase </br>
📍 **Algoritmo de geolocalização** até o destino desejado </br>
🗺️ Listagem inteligente de pontos turísticos, atividades e eventos </br>
⭐ Sistema pensado para facilitar a vida do turista </br>

### 🛠️ Tecnologias Utilizadas
#### Front-end

- React, TailwindCSS, Shadcn/UI, Radix UI, React Hook Form, Zod (validação), React Query.
`front hospedado na vercel`

#### Back-end

Node.js, Express, TypeScript, JWT (autenticação), Docker / Docker Compose, PostgreSQL, Prisma ORM, bcrypt, Jest (testes automatizados, teste de integração e E2E ).
repo do back: https://github.com/nicius2/Back-TurIlha

`back hospedado no railway`

## 📥 Como clonar e rodar o projeto
#### 🔧 1. Clone o repositório
```
git clone https://github.com/seu-usuario/TurIlha.git
cd TurIlha
```

## 🖥️ 2. Rodando o Back-end
#### 📦 Instalar dependências
```
cd backend
pnpm install
```

## 🔐 Criar arquivo .env

Crie um arquivo chamado .env na raiz do backend com o conteúdo:

```
DATABASE_URL="postgresql://username:passowrd@localhost:5432/name-db"
JWT_SECRET="sua_chave_secreta"
```

### 🧊 Rodar migrações do Prisma
```
pnpm prisma migrate dev
```

### 🚀 Rodar em modo desenvolvimento
```
pnpm run dev
```

### 🐳 2.1 Rodando o Back-end com Docker
```
docker compose up -d --build
```

### 🌐 3. Rodando o Front-end
```
cd frontend
pnpm install
pnpm run dev
```

Acesse:
``
http://localhost:5173
``
