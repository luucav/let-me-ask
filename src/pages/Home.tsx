import illustrationImg from '../assets/images/illustration.svg'
import logoImg from   '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss';

import { NavLink } from "react-router-dom";



import { Button } from '../components/button';

// webpack (snowpack, vite, ...) module bundler ->


export function Home() {


    
    
    return (
        <div id="page-auth">

            <aside>
                <img src={illustrationImg} alt="Illustração simbolizando perguntas e respostas" />
                <strong>Toda pergunta tem uma resposta.</strong>
                <p>
                Aprenda e compartilhe conhecimento
                com outras pessoas
                </p>
            </aside>

            <main>
                <div className='main-content'>
                    <img src={logoImg} alt="Let me Aks logo" />
                    <button className='create-room'>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className='separator'>
                        Ou entre em uma sala
                    </div>

                    <form>
                        <input
                         type="text"
                         placeholder='Digite o código da sala'
                          />
                        <Button type='submit'>Entrar na sala</Button>
                        
                    </form>

                </div>
            </main>

        </div>
    )
}