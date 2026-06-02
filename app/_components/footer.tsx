import {
  InstagramLogoIcon,
  YoutubeLogoIcon, 
  FacebookLogoIcon, EnvelopeIcon,
  WhatsappLogoIcon, GlobeIcon
} from '@phosphor-icons/react/dist/ssr'

export function Footer() {
  return (
    <section className="bg-[#E84C3D] py-16 text-white">
      <div className="container mx-auto px-4">

        {/* Conteúdo Principal */}
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Professor */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Prof. Victor Tayra
            </h3>

            <p className="text-white/90 leading-relaxed mb-6">
              Engenheiro Mecatrônico pela USP e Mestre pela mesma instituição, Perito Criminal e professor com experiência no ensino de disciplinas das áreas
              de Engenharia Mecânica, Engenharia Elétrica, Matemática e Ciências Exatas. Ao longo de sua trajetória, já auxiliou estudantes de graduação e candidatos
              a processos seletivos a superar dificuldades acadêmicas, desenvolver confiança e alcançar seus objetivos.
              O método utilizado neste curso foi desenvolvido com base nas principais dificuldades enfrentadas pelos alunos, combinando explicações objetivas, resolução detalhada
              de exercícios e prática direcionada para maximizar o aprendizado.
            </p>

            <p className="mb-6 text-white/90">
              Tem dúvidas sobre o curso? Fale diretamente com o professor.
            </p>

            <a
              href="https://wa.me/5511999903868"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 transition-colors px-5 py-3 rounded-md font-semibold"
            >
              <WhatsappLogoIcon className="w-5 h-5" />
              Falar com o Professor
            </a>
          </div>

          {/* Benefícios */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Transforme sua Preparação
            </h3>

            <p className="text-white/90 leading-relaxed mb-6">
              Um método baseado em questões reais, resolução comentada e prática
              direcionada para você chegar à prova com mais confiança.
            </p>

            <ul className="space-y-3 mb-8 text-white/90">
              <li>✓ Videoaulas objetivas e diretas</li>
              <li>✓ Questões comentadas passo a passo</li>
              <li>✓ Material complementar em PDF</li>
              <li>✓ Exercícios extras e simulados</li>
              <li>✓ Acesso online e flexível</li>
              <li>✓ Estude no seu próprio ritmo</li>
            </ul>

            <a
              href="https://pay.kiwify.com.br/FoZEkMq"
              className="inline-block bg-white text-[#E84C3D] hover:bg-gray-100 transition-colors px-5 py-3 rounded-md font-bold"
            >
              Garantir Minha Vaga
            </a>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Contato
            </h3>

            <p className="text-white/90 leading-relaxed mb-6">
              Um método baseado em questões reais, resolução comentada e prática
              direcionada para você chegar à prova com mais confiança.
              Acompanhe nossos canais:
            </p>


            <div className="space-y-4 text-white/90">

              <p className="flex items-center gap-2">
                <YoutubeLogoIcon size={20} />
                <a
                  href="https://www.youtube.com/@passeideboa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  www.youtube.com/@passeideboa                
                </a>
              </p>


              <p className="flex items-center gap-2">
                <GlobeIcon size={20} />
                <a
                  href="https://www.passeideboa.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  www.passeideboa.com.br
                </a>
              </p>

              <p className="flex items-center gap-2">
                <EnvelopeIcon size={20} />
                <a
                  href="mailto:contato@passeideboa.com.br"
                  className="hover:underline"
                >
                  victor.tayra@gmail.com
                </a>
              </p>

              <p className="flex items-center gap-2">
                <WhatsappLogoIcon size={20} />
                <a
                  href="https://wa.me/5511999903868"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  (11) 99990-3868
                </a>
              </p>

              <p className="flex items-center gap-2">
                <InstagramLogoIcon size={20} />
                <a
                  href="https://www.instagram.com/passei.engenharia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  www.instagram.com/passei.engenharia/
                </a>
              </p>


            </div>
          </div>

        </footer>


        {/* Rodapé Final */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/80">

          <p>
            © 2026 Passei de Boa — Todos os direitos reservados.
          </p>

          <p className="mt-2">
            Aulas, cursos e mentorias para Engenharia, Ciências Exatas e Tecnológicas.
          </p>

          <div className="mt-3 flex justify-center gap-4 flex-wrap">
            <a href="/politica-de-privacidade">
              Política de Privacidade
            </a>

            <span>•</span>

            <a href="/termos-de-uso">
              Termos de Uso
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}