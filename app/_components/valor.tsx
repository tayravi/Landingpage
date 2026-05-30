import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'



export function Valor() {
    return (
<section className="bg-[#111111] py-12">
  <div className="container mx-auto px-4">

    <div className="max-w-2xl mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 text-center">

      <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
        🔥 30% OFF NAS PRIMEIRAS VAGAS
      </span>

      <h2 className="text-3xl md:text-4xl font-bold text-white mt-5 leading-tight">
        Garanta sua vaga no curso
      </h2>

      <p className="text-zinc-300 mt-4 text-base md:text-lg">
        Método focado na prova de transferência da Unicamp.
      </p>

      <div className="mt-8">

        <p className="text-zinc-500 line-through text-lg">
          De R$ 297,00
        </p>

        <div className="mt-1">
          <span className="text-4xl md:text-5xl font-black text-green-400">
            12x R$ 20,37
          </span>
        </div>

        <p className="text-zinc-400 mt-2">
          ou R$ 197,00 à vista
        </p>

      </div>

      <div className="mt-6 space-y-2 text-sm md:text-base">

        <div className="flex items-center justify-center gap-2 text-zinc-200">
          <Check className="w-4 h-4 text-green-400" />
          Acesso imediato
        </div>

        <div className="flex items-center justify-center gap-2 text-zinc-200">
          <Check className="w-4 h-4 text-green-400" />
          Questões resolvidas
        </div>

        <div className="flex items-center justify-center gap-2 text-zinc-200">
          <Check className="w-4 h-4 text-green-400" />
          Suporte via WhatsApp
        </div>

      </div>

      <a
        href="#"
        className="inline-flex items-center gap-2 mt-8 bg-green-500 hover:bg-green-600 duration-300 text-white font-bold px-6 py-3 rounded-xl"
      >
        <WhatsappLogoIcon className="w-5 h-5" />
        QUERO ME INSCREVER
      </a>

    </div>

  </div>
</section>
   )
}