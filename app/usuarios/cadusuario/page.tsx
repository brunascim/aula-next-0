import Link from 'next/link';

export default function CadUsuario () {
    return(
        <>
        <h1>Cadastro</h1>
        <p>Insira as informações sobre o usuário</p>

        <p><Link href={'/'}>Voltar</Link></p>
        </>
    );
}

