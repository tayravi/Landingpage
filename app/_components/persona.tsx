import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon, ChartLineUpIcon } from '@phosphor-icons/react/dist/ssr'



export function Persona() {
    return (
        <section className="bg-[#FFE082] py-16">
            <div className="container px-4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-lg">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube-nocookie.com/embed/nxCwjRXL_vc"
                            title="Vídeo do curso"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="space-y-6 mt-10" data-aos="zoom-in-up">
                        <h2 className="text-4xl font-bold">O MÉTODO</h2>

                        <p>
                            Nosso método combina teoria objetiva, prática direcionada e resolução comentada de provas reais da Unicamp.

                            Em vez de perder tempo estudando assuntos pouco relevantes, você aprenderá exatamente os conteúdos cobrados na prova de Transferência Externa, acompanhando resoluções detalhadas e estratégias de resolução.

                            O curso inclui videoaulas, material em PDF, exercícios complementares e simulados, permitindo que você evolua de forma consistente e ganhe confiança para o dia da prova.

                        </p>

                        <div className="flex gap-2">
                            <a
                                target='_blank'
                                href="https://pay.kiwify.com.br/FoZEkMq"
                                className="bg-[#E84C3D] hover:bg-[#D63E30] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-bold
                            px-6 py-3 rounded-md text-white flex items-center justify-center gap-2"
                            >
                                <ChartLineUpIcon className="w-5 h-5 text-white" />
                                Quero Passar na Unicamp
                            </a>


                        </div>
                    </div>



                </div>


            </div>
        </section>
    )
}
