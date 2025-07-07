import PipotronCCSC from '@/components/PipotronCCSC';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#003049] font-sans flex flex-col items-center justify-center p-6">
      <img src="/logo.png" alt="CCSC Logo" className="w-32 mb-6" />
      <h1 className="text-3xl font-bold mb-4 text-center">🎙️ Pipotron CCSC</h1>
      <p className="text-sm mb-6 text-center text-[#6c757d]">
        Centre de Communication Santé des Capitales – Générateur institutionnel de phrases synergiques
      </p>
      <PipotronCCSC />
    </main>
  );
}
