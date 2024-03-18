import Link from 'next/link';

export default function PerfilUsuario ({ params }: { params: { slug: string } }) {
    return(
        <>
        <h1>Perfil</h1>
        <p>Nome do suário </p>

        <p><Link href={'/usuarios'}>Voltar</Link></p>
        </>
    );
}

