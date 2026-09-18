import { getAdminMetrics } from '@/lib/api';

// Dashboard de uso — "uso e downloads" do intake, decidido como uso DENTRO
// do app (ver ARCHITECTURE.md do backend). Números reais de download de
// loja ficaram fora do MVP.
export default async function DashboardPage() {
  // TODO(frontend-dev): token real vindo de uma sessão de admin autenticada,
  // não hardcoded. Placeholder para o scaffold funcionar sem auth ainda.
  const token = process.env.ADMIN_DEBUG_TOKEN ?? '';
  const metrics = token
    ? await getAdminMetrics(token).catch(() => null)
    : null;

  const cards = [
    { label: 'Cuidadores ativos', value: metrics?.activeCaregivers ?? '—' },
    { label: 'Idosos cadastrados', value: metrics?.activeElderly ?? '—' },
    { label: 'Adesão ao tratamento', value: metrics?.adherenceRate != null ? `${metrics.adherenceRate}%` : '—' },
    { label: 'Doses perdidas', value: metrics?.missedDoses ?? '—' },
  ];

  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="mb-6 text-2xl font-semibold text-neutral-900">Uso do Remedia Já</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div key={card.label} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-neutral-500">{card.label}</p>
            <p className="mt-2 text-3xl font-bold text-brand">{card.value}</p>
          </div>
        ))}
      </div>
      {!metrics && (
        <p className="mt-6 text-sm text-neutral-500">
          Sem dados ainda — conecte a autenticação de admin para ver os números reais do `/admin/metrics`.
        </p>
      )}
    </main>
  );
}
