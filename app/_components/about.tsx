import Image from 'next/image'
import Logo from '../../../unicamp/public/aprovados.webp'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon, StudentIcon } from '@phosphor-icons/react/dist/ssr'



export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className="relative w-full h-100 rounded-3xl overflow-hidden" data-aos="fade-right">
                    <Image
                        src="/aprovados.webp"
                        alt="Alunos aprovados"
                        fill
                        quality={100}
                        className="object-cover hover:scale-110 duration-300"
                        priority
                    />
                </div>

                <div className="space-y-6 mt-10" data-aos="fade-left">
                    <h2 className="text-4xl font-bold">SOBRE O CURSO</h2>
                    
                    <p>
                    A prova de Transferência Externa da Unicamp exige domínio de conteúdos como Álgebra Linear, Pré-Cálculo e Cálculo, frequentemente cobrados em questões que demandam raciocínio matemático e sólida base teórica.
                    Para ajudá-lo a se preparar com eficiência, desenvolvemos um curso que vai desde a revisão dos conceitos fundamentais até a resolução detalhada de questões objetivas e dissertativas de provas anteriores.
                    Como bônus, você terá acesso a exercícios selecionados da bibliografia recomendada pela Unicamp, todos resolvidos passo a passo e comentados, permitindo um estudo direcionado e focado nos temas mais relevantes para a aprovação.                    

                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500" />
                            Questões resolvidas e comentadas de provas anteriores.
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500" />
                            Conteúdo direcionado para a prova.
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500" />
                            Estudo focado e sem desperdício de tempo.
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500" />
                            Acesso vitalício e imediato ao material após a compra. 
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500" />
                            Suporte para dúvidas via WhatsApp.
                        </li>
                    </ul>


                    <div className="flex gap-2">
                        <a
                            target='_blank'
                            href="https://pay.kiwify.com.br/FoZEkMq"

                            className="bg-[#E84C3D] hover:bg-[#D63E30] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-bold
                            px-6 py-3 rounded-md text-white flex items-center justify-center gap-2"

                            >
                            <StudentIcon className="w-5 h-5 text-white" />
                            Estudar Agora
                        </a>

                        <a
                            target='_blank'
                            href="https://wa.me/5511999903868"
                            className="bg-green-500 hover:bg-green-600 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                            >
                            <WhatsappLogoIcon className="w-5 h-5 text-white" />
                            Quero Saber mais
                        </a>


                        
                    </div>
                </div>



                </div>


            </div>
        </section>
    )
}