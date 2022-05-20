import illustrationImg from '../assets/images/illustration.svg'
//import googleIconImg from '../assets/images/google-icon.svg'
import logoImg from   '../assets/images/logo.svg'
import '../styles/auth.scss';
import { Button } from '../components/button';
import { Link } from 'react-router-dom';
        // webpack (snowpack, vite, ...) module bundler ->
        
export function NewRoom() {
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
                            
                           <h2>Criar uma nova sala</h2>
        
                            <form>
                                <input
                                 type="text"
                                 placeholder='Nome da sala'
                                  />
                                <Button type='submit'>Criar sala</Button>
                                
                            </form>

                            <p>Quer entrar em uma sala já existente? <Link to='/'>Clique aqui</Link></p>
        
                        </div>
                    </main>
        
                </div>
    );
}
    