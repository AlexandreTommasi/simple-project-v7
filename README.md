# Simple Project - Test Deploy

Projeto simplificado para testar o deploy completo no Azure.

## Estrutura

```
simple-project/
├── backend/
│   ├── src/
│   │   └── server.ts      # Servidor Express simples
│   ├── database/
│   │   ├── 01-schema.sql  # Criação das tabelas
│   │   └── 02-seed.sql    # Dados iniciais
│   ├── package.json
│   └── tsconfig.json
└── frontend/
    ├── src/
    │   ├── App.tsx        # Componente principal
    │   ├── main.tsx       # Entry point
    │   └── index.css      # Estilos
    ├── index.html
    ├── package.json
    ├── tsconfig.json
    └── vite.config.ts
```

## Stack

- **Frontend:** React + TypeScript + Vite
- **Backend:** Express + TypeScript
- **Database:** SQL Server (Azure)

## Funcionalidades

- ✅ Frontend React funcionando
- ✅ Backend Express com API
- ✅ Health check endpoint
- ✅ Teste de conexão com banco
- ✅ Arquivos SQL para criar tabelas
- ✅ Configurado para Azure