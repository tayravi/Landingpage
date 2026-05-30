"use client"
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Box, BookOpenCheck , NotebookPen, SquareCheckBig, Target, AlarmClock, Eye } from 'lucide-react'
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'

const services = [
  {
    title: "Fundamentos",
    description: "Aulas focadas na resolução de provas anteriores, tanto objetivas quanto dissertativas. A teoria é explicada de forma direta, apenas o necessário para resolver as questões.",
    duration: "100%",
    price: "$50",
    icon: <Box />,
    linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
  },
  {
    title: "Provas Resolvidas",
    description: "Resolução completa de provas objetivas e dissertativas dos últimos anos. Você aprende não apenas o resultado, mas o raciocínio que a banca espera.",
    duration: "100%",
    price: "$45",
    icon: <BookOpenCheck />,
    linkText: 'Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.'
  },
  {
    title: "Exercícios Extras",
    description: "Lista de exercícios selecionados, com gabaritos comentados, dos principais livros de Cálculo e Álgebra Linear, com alto grau de semelhança com o que é cobrado na prova.",
    duration: "100%",
    price: "$80",
    icon: <NotebookPen />,
    linkText: 'Olá, vi no site sobre Táxi Pet e gostaria de mais informações.'
  },
  {
    title: "Orientação Estratégica",
    description: "Dicas práticas, macetes e orientações para direcionar seus estudos. Além disso, você conta com suporte para tirar dúvidas sobre exercícios, teoria e estratégia ao longo da sua preparação.",
    duration: "100%",
    price: "$60",
    icon: <Target />,
    linkText: 'Olá, vi no site sobre Hotel para pets e gostaria de mais informações.'
  },
  {
    title: "Conteúdo Atualizado",
    description: "O curso é atualizado com novas provas, listas de exercícios e resoluções, sempre acompanhando o padrão mais recente da banca.",
    duration: "100%",
    price: "$60",
    icon: <AlarmClock />,
    linkText: 'Olá, vi no site sobre Hotel para pets e gostaria de mais informações.'
  },
  {
    title: "Simulados e Revisões",
    description: "Simulados elaborados com base no estilo da UNICAMP, para você treinar em condições próximas à prova real e testar seu desempenho.",
    duration: "100%",
    price: "$60",
    icon: <Eye />,
    linkText: 'Olá, vi no site sobre Hotel para pets e gostaria de mais informações.'
  },


]



export function Services() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 }
    }
  })

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }



    return(
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold mb-12">Serviços</h2>

        <div className="relative">

          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
              {services.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className='flex-1 flex items-start justify-between'>
                      <div className='flex gap-3'>
                        <span className='text-3xl'>{item.icon}</span>
                        <div>
                          <h3 className='font-bold text-xl my-1'>{item.title}</h3>
                          <p className='text-gray-400 text-sm select-none'>
                            {item.description}
                          </p>
                        </div>
                      </div>

                    </div>

                    <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                      <div className='flex items-center gap-2 text-sm'>
                        <SquareCheckBig className='w-4 h-4' />
                        <span>{item.duration}</span>
                      </div>

                      <a
                        target='_blank'
                        href='https://pay.kiwify.com.br/FoZEkMq'
                        className='flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300'
                      >
                        <WhatsappLogoIcon className='w-5 h-5' />
                        Entrar em contato
                      </a>

                    </div>

                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
            onClick={scrollPrev}
          >
            <ChevronLeft className='w-6 h-6 text-gray-600' />
          </button>

          <button
            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
            onClick={scrollNext}
          >
            <ChevronRight className='w-6 h-6 text-gray-600' />
          </button>

        </div>

      </div>
    </section>
    )
}
