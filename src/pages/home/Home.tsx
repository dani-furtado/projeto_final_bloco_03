function Home() {
    return (
        <>
            <div className="bg-white flex justify-center">
                <div className="container grid grid-cols-3 text-black">

                    <div className="flex justify-center py-16">
                        <img
                            src="https://img.freepik.com/free-vector/medical-icons-set_98292-2065.jpg?t=st=1716988577~exp=1716992177~hmac=07ed9029fd4e52932fc121757f6902bb5e036169fae29512aedc79be32201b61&w=826"
                            alt="Imagem da Página Home"
                            className="w-2/3"
                        />
                    </div>

                    <div className="flex flex-col items-center gap-4 justify-center py-3">
                        <h2 className="text-5xl text-center font-display">
                            Seja Bem Vinde a Farmácia!
                        </h2>

                        <p className="text-xl">Aqui você encontra os melhores produtos!</p>

                        <div className="flex justify-around gap-4">
                            <div className="rounded text-black hover:bg-violet-700 border-violet-950 dark:bg-violet-900 dark:hover:bg-violet-800 border-2 py-2 px-4">
                                Novo Produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center py-16">
                        <img
                            src="https://img.freepik.com/free-vector/medicine-concept-illustration_114360-2802.jpg?t=st=1716987926~exp=1716991526~hmac=1dc013af1c1afcc44f3ee91a69b250c2981077b3eb55e51e82a9a121d69eea48&w=826"
                            alt="Imagem da Página Home"
                            className="w-2/3"
                        />
                    </div>


                </div>
            </div >
        </>
    )
}

export default Home