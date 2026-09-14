'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-slate-50">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
        <h2 className="text-2xl font-black text-slate-900 mb-2">Algo deu errado!</h2>
        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
          {error?.message || 'Ocorreu um erro inesperado ao carregar o aplicativo.'}
        </p>
        <button
          onClick={() => reset()}
          className="w-full py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold transition-colors"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
