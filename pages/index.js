import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Contador />
            <div>Teste</div>
            <script data-ad-client="ca-pub-9328493142597493" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </div>
    )
    
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}


export default Home
