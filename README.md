# ARAI SaaS

> Plataforma B2B para integración de IA con automatización (n8n) y comunicación (WhatsApp)

## 🎯 Visión del Proyecto

ARAI SaaS es una plataforma empresarial que permite a las organizaciones integrar capacidades de Inteligencia Artificial en sus flujos de trabajo mediante n8n y canales de comunicación como WhatsApp.

## 🏗️ Arquitectura de 3 Capas

El sistema está diseñado con una arquitectura de **3 capas de interacción con IA**, cada una con diferentes niveles de acceso y capacidades:

### 1. Capa Informativa (Nivel Básico)
- **Propósito**: Respuestas a preguntas frecuentes y consultas generales
- **Características**:
  - Información pública del negocio
  - FAQs automatizadas
  - Sin acceso a datos personales del usuario
- **Seguridad**: Solo lectura de contenido público

### 2. Capa Consultiva (Nivel Intermedio)
- **Propósito**: Consultas personalizadas con contexto del usuario
- **Características**:
  - Acceso a historial del usuario (con autenticación)
  - Recomendaciones personalizadas
  - Consultas a datos específicos del tenant
- **Seguridad**: Autenticación requerida + RLS por tenant

### 3. Capa Transaccional (Nivel Avanzado)
- **Propósito**: Operaciones que modifican estado del sistema
- **Características**:
  - Crear/actualizar registros
  - Ejecutar workflows de n8n
  - Procesar pagos o acciones críticas
- **Seguridad**: Autenticación + autorización + AI Guardrails + confirmación explícita

## 🔒 Medidas de Seguridad

### Row Level Security (RLS)
- Todas las tablas implementan políticas RLS en Supabase
- Aislamiento completo de datos entre tenants
- Los usuarios solo acceden a datos de su organización

### AI Guardrails
- **Input Validation**: Sanitización de prompts para prevenir injection
- **Output Filtering**: Verificación de respuestas antes de enviar
- **Rate Limiting**: Límites por usuario/tenant para prevenir abuso
- **Audit Logging**: Registro de todas las interacciones con IA
- **Scope Limiting**: La IA solo puede ejecutar acciones pre-aprobadas

### Autenticación & Autorización
- Supabase Auth con soporte para SSO empresarial
- Roles: `super_admin`, `tenant_admin`, `user`
- Permisos granulares por feature/módulo

## 🛠️ Stack Tecnológico

| Categoría | Tecnología |
|-----------|------------|
| Framework | Next.js 14 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Base de Datos | Supabase (PostgreSQL) |
| Validación | Zod |
| Iconos | Lucide React |
| Automatización | n8n |
| Comunicación | WhatsApp Business API |

## 📁 Estructura del Proyecto

```
arai-saas/
├── app/
│   ├── (auth)/              # Rutas de autenticación (login, registro)
│   ├── (dashboard)/
│   │   ├── admin/           # Panel de administración (super_admin)
│   │   └── client/          # Dashboard del cliente (tenant)
│   └── api/                 # API Routes
├── components/
│   ├── ui/                  # Componentes base reutilizables
│   └── features/            # Componentes específicos por feature
├── lib/
│   ├── supabase/            # Cliente y utilidades de Supabase
│   ├── ai/                  # Integraciones y guardrails de IA
│   ├── mcp/                 # Model Context Protocol
│   └── utils/               # Utilidades generales
├── n8n/
│   └── workflows/           # Definiciones de workflows n8n
├── supabase/
│   └── migrations/          # Migraciones SQL
└── public/                  # Assets estáticos
```

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js >= 18.17.0
- npm o pnpm
- Cuenta en Supabase
- Instancia de n8n (local o cloud)

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/alan0dari/arai-saas.git
cd arai-saas

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus credenciales

# Iniciar en desarrollo
npm run dev
```

### Variables de Entorno

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# n8n
N8N_WEBHOOK_URL=your-n8n-webhook-url
N8N_API_KEY=your-n8n-api-key

# WhatsApp Business API
WHATSAPP_API_URL=your-whatsapp-api-url
WHATSAPP_ACCESS_TOKEN=your-access-token
```

## 📊 Modelo de Datos (Multi-tenant)

```
tenants (organizaciones)
├── users (usuarios del tenant)
├── conversations (historial de conversaciones)
├── ai_interactions (logs de interacciones con IA)
└── workflows (configuraciones de n8n)
```

## 🧪 Desarrollo

```bash
# Ejecutar en desarrollo
npm run dev

# Build de producción
npm run build

# Linting
npm run lint

# Generar tipos de Supabase
npm run db:generate-types
```

## 📝 Licencia

Propiedad de ARAI. Todos los derechos reservados.

---

**Desarrollado por el equipo ARAI** 🚀
