import { Bot, Workflow, MessageSquare, Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            ARAI <span className="text-primary-600">SaaS</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plataforma B2B para integración de IA con automatización y comunicación empresarial
          </p>
        </header>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard
            icon={<Bot className="w-8 h-8" />}
            title="IA Inteligente"
            description="3 capas de interacción: Informativa, Consultiva y Transaccional"
          />
          <FeatureCard
            icon={<Workflow className="w-8 h-8" />}
            title="n8n Workflows"
            description="Automatización de procesos con flujos personalizables"
          />
          <FeatureCard
            icon={<MessageSquare className="w-8 h-8" />}
            title="WhatsApp Business"
            description="Comunicación directa con clientes a través de WhatsApp"
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8" />}
            title="Seguridad Empresarial"
            description="RLS, AI Guardrails y aislamiento multi-tenant"
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/login"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            Comenzar ahora
          </a>
        </div>
      </div>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="text-primary-600 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
