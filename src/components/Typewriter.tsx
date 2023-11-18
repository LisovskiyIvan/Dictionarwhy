import { useTypewriter, Cursor} from 'react-simple-typewriter'

export function Typewriter () {

    const [typewriter] = useTypewriter({
        words: ['translate', 'перевести', '翻译', '번역하다', 'traduire', 'übersetzen'],
        loop: false,
        typeSpeed: 90,
        deleteSpeed: 80
    })

    return (
        <div className='m-12 text-4xl'>
            <h1>Translatee is a powerful tool to <span className='text-5xl text-transparent bg-gradient-to-r bg-clip-text font-bold from-red-500 via-rose-400 to-purple-500 '>{typewriter}</span><Cursor /> your text </h1>
        </div>
    )
}