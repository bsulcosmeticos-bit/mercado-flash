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
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-2xl font-black text-slate-900 mb-2">Algo deu errado!</h2>
      <p className="text-slate-500 mb-6">{error.message || 'Ocorreu um erro inesperado.'}</p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-green-600 text-white rounded-2xl font-bold"
      >
        Tentar novamente
      </button>
    </div>
  );
}
