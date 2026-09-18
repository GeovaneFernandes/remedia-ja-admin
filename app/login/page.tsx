export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <form className="w-full max-w-sm rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-2xl font-semibold text-neutral-900">Entrar</h1>
        <label className="mb-1 block text-sm font-medium text-neutral-700">E-mail</label>
        <input
          type="email"
          className="mb-4 w-full rounded-lg border border-neutral-300 px-3 py-2"
          placeholder="admin@remediaja.com.br"
        />
        <label className="mb-1 block text-sm font-medium text-neutral-700">Senha</label>
        <input type="password" className="mb-6 w-full rounded-lg border border-neutral-300 px-3 py-2" />
        <button type="submit" className="w-full rounded-lg bg-brand px-4 py-2 font-semibold text-white hover:bg-brand-dark">
          Entrar
        </button>
      </form>
    </main>
  );
}
