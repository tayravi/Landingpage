import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'



export function Persona() {
    return (
        <section className="bg-[#FFD449] py-16">
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
                
                <div className="space-y-6 mt-10">
                    <h2 className="text-4xl font-bold">SOBRE O CURSO</h2>
                    
                    <p>
                       O curso enfatiza cálculo, álgebra linear, estatística e programação, preparando os alunos para enfrentar desafios complexos. 
                       Com uma abordagem prática, os estudantes aplicam seus conhecimentos em projetos reais, desenvolvendo habilidades essenciais para o mercado de trabalho.
                        O curso é projetado para fornecer uma base sólida em ciência de dados, capacitando os alunos a se tornarem profissionais competentes e inovadores na área. 
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500" />
                            Aberto desde 2006.
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500" />
                            Equipe com mais de 10 veterinários.
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500" />
                            Qualidade é nossa prioridade.
                        </li>
                    </ul>


                    <div className="flex gap-2">
                        <a
                            target='_blank'
                            href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`}
                            className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                            >
                            <WhatsappLogoIcon className="w-5 h-5 text-white" />
                            Contato via WhatsApp
                        </a>

                        <a
                            href="#"
                            className=" flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                        >
                            <MapPin className="w-5 h-5 text-black" />
                            Endereço da loja
                        </a>
                    </div>
                </div>



                </div>


            </div>
        </section>
    )
}