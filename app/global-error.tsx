'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased text-slate-900 bg-slate-50 min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
          <h2 className="text-2xl font-black text-slate-900 mb-2">Algo deu errado!</h2>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            {error?.message || 'Ocorreu um problema ao carregar a página.'}
          </p>
          <button
            onClick={() => reset()}
            className="w-full py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold transition-colors"
          >
            Recarregar aplicativo
          </button>
        </div>
      </body>
    </html>
  );
}
