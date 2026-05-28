import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import Logo from '../../../unicamp/public/logo-unicamp.webp'
import Image from 'next/image'


export default function Hero() {
  return (
    <section className="bg-[#E84C3D] text-white relative overflow-hidden">

        <div>
            <Image
            src="/logo-unicamp.webp"
            alt='Logo da Unicamp'
            fill
            sizes="100vw"
            priority 
            className="object-cover opacity-60 lg:hidden" 
            />
            <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>

        </div>

        <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
                    Curso Para Transferência Externa - Unicamp
                    </h1>
                    <p className="lg:text-lg">
                    O curso de transferência externa para a Unicamp é uma oportunidade para estudantes que desejam ingressar na universidade por meio de transferência de outra instituição de ensino superior. 
                    A Unicamp é uma das principais universidades do Brasil, conhecida por sua excelência acadêmica e pesquisa de ponta. 
                    </p>

                    <div className="flex">
                        <a 
                        href="#"
                        className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center gap-2"
                        >
                            <WhatsappLogoIcon className="w-5 h-5" />
                            Contato WhatsApp
                        </a>
                    </div>

                    <div className="mt-8">   
                        <p className="text-sm mb-4">
                         <b className="bg-black text-white px-2 py-1 rounded-md">10%</b> Desconto nas primeiras compras
                        </p>
                    </div>
                </div>

                <div className="hidden md:block h-full relative">
                    <Image src="/logo-unicamp.webp" alt='Logo da Unicamp' className="object-contain" fill
                    sizes="(max-width: 768px) 0vw, 50vw"
                    quality={100} priority />

                    
                </div>

            </article>
        </div>

    </section>
  )
}
