import { User, ShoppingCart, MagnifyingGlass} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <>
            <div className='w-full bg-black text-white flex justify-center py-5'>
                <div className="container flex justify-center text-lg">

                    <Link to='/home'>
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/006/077/800/original/plaster-icon-for-medicine-symbol-on-purple-background-free-vector.jpg"
                            alt="Logo"
                            className='w-12'
                        />
                    </Link>

                    <div className="flex-1 flex justify-center items-center relative w-30 text-black">
                        <form>
                            <input className="h-9 w-90 rounded-lg px-4 py-4 focus:outline-none"
                                type="search"
                                placeholder="Pesquisar produto"
                                id="busca"
                                name="busca"
                                required
                            />
                            <button type="submit" className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-black bg-white hover:bg-violet-700 rounded-lg border border-violet-950 focus:ring-4 focus:outline-none focus:ring-violet-400 dark:bg-violet-900 dark:hover:bg-violet-800 dark:focus:ring-white">
                                <MagnifyingGlass size={14} weight="bold" />
                            </button>
                        </form>
                    </div>

                    <div className='flex gap-4'>

                        <Link to='/home' className='hover:text-fuchsia-700'>Home</Link>
                        <Link to='/categorias' className='hover:text-fuchsia-700'>Categorias</Link>
                        <Link to='/cadastroTema' className='hover:text-fuchsia-700'>Cadastrar categoria</Link>
                        <div className='hover:text-fuchsia-700'>Produtos</div>
                        <User size={32} weight='bold' />
                        <ShoppingCart size={32} weight='bold' />

                    </div>
                </div>
            </div >
        </>
    );
}
export default Navbar;