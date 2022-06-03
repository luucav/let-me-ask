import illustrationImg from '../assets/images/illustration.svg'
import logoImg from   '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss';
import { Button } from '../components/button';
//import { database } from '../services/firebase'
import { useNavigate } from "react-router-dom";
//import React, { FormEvent, useState  } from 'react';
//import useModal from '../hooks/useModal'
import useAuth from '../hooks/useAuth'

export default function Home() {
    
    const navigate = useNavigate()
    const { singInWithGoogle, user } = useAuth()
    /*const [ roomCode, setRoomCode ] = useState('')
    const { openModal, isModalOpen, closeModal } = useModal()
    const [ isRoomClosed, setIsRoomClosed ] = useState(false)
    */
    async function handleCreateRoom() {
        if (!user) {
            await singInWithGoogle()
        }
        navigate('/rooms/new')
    }

   /* async function handleJoinRoom(e: FormEvent) {
        e.preventDefault()
        if (roomCode.trim() === '') {
            return;
        }
        const roomRef = await database.ref(`room/${roomCode}`).get()

        if (!roomRef.exists()) {
            openModal()
            return;
        }
        if (roomRef.val().endedAt) {
            setIsRoomClosed(true)
            return;
        }
        navigate(`/rooms/${roomCode}`)

    }
    */
    


    
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
                    <button type='button' onClick={handleCreateRoom} className='create-room'>
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