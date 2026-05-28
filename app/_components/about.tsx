import Image from 'next/image'

export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16">
            <div className="container mx-auto grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                    <Image
                        src="/aprovados.webp"
                        alt="Alunos aprovados"
                        fill
                        quality={100}
                        className="object-cover hover:scale-110 duration-300"
                        priority
                    />
                </div>

            </div>
        </section>
    )
}