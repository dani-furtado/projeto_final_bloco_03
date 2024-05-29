import { Link } from "react-router-dom"
import Categoria from "../../../model/Categoria"

interface CardCategoriasProps{
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriasProps) {

    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-5 bg-black text-white font-bold text-2xl'>Categoria</header>
            
            <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.nome}</p>
            
            <div className="flex">
                <Link to={`/editartema/${categoria.id}`} className='w-full text-black bg-violet-300 hover:bg-violet-400 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                
                <Link to={`/deletartema/${categoria.id}`} className='text-black bg-violet-700 hover:bg-violet-950 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategorias 