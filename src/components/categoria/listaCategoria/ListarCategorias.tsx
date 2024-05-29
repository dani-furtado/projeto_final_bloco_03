import { useEffect, useState } from "react";
import Categoria from "../../../model/Categoria";
import { listar } from "../../../service/Service";
import { DNA } from "react-loader-spinner";
import CardCategorias from "../cardCategoria/CardCategorias";

function ListaCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([])

    async function buscarCategorias() {
        try {
            await listar('/categorias', setCategorias);
        } catch (error: any) {
            alert('Erro ao listar as Categorias')
        }
    }

    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])

    return (
        <>

            {categorias.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">

                        {categorias.length === 0 &&
                            <span className="text-3xl text-center my-8">
                                Nenhuma categoria foi encontrada
                            </span>}

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {categorias.map((categoria) => (
                                <CardCategorias key={categoria.id} categoria={categoria} />
                            ))}
                        </div>

                    </div>
                </div>
            </div >
        </>
    );
}

export default ListaCategorias;