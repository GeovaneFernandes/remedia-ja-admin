const API_URL = process.env.API_URL ?? 'http://localhost:3001';

export interface AdminMetrics {
  activeCaregivers: number;
  activeElderly: number;
  totalDoses: number;
  confirmedDoses: number;
  missedDoses: number;
  adherenceRate: number | null;
}

export async function getAdminMetrics(token: string): Promise<AdminMetrics> {
  const res = await fetch(`${API_URL}/admin/metrics`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error(`Falha ao buscar métricas (${res.status})`);
  }
  return res.json();
}
