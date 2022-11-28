import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Head>
      <title>AEM Headless PWA</title>
      <meta
					name="description"
					content="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
				/>
    </Head>
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
      <h1 className="text-primary-700 text-2xl font-semibold">AEM Headless PWA</h1>
      </div>
    </main>
    </>
  )
}
