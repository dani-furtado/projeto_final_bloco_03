function Home() {
    return (
        <>
            <div className="bg-black flex justify-center">
                <div className="container grid grid-cols-3 text-white">

                    <div className="flex justify-center py-12">
                        <img
                            src="https://img.freepik.com/free-vector/flat-smiling-pharmacist-simple-background_23-2148196007.jpg?t=st=1716985189~exp=1716988789~hmac=56692bdb0a36a770bfe9dabeb198e2def45e4a95667b7f068eddb83432ecd4d6&w=740"
                            alt="Imagem da Página Home"
                            className="w-2/3"
                        />
                    </div>

                    <div className="flex flex-col items-center gap-4 justify-center py-4">
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

                    <div className="flex justify-center py-8">
                        <img
                            src="https://img.freepik.com/free-vector/flat-smiling-pharmacist-simple-background_23-2148196007.jpg?t=st=1716985189~exp=1716988789~hmac=56692bdb0a36a770bfe9dabeb198e2def45e4a95667b7f068eddb83432ecd4d6&w=740"
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