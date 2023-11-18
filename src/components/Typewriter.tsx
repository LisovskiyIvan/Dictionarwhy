import { useTypewriter, Cursor} from 'react-simple-typewriter'

export function Typewriter () {

    const [typewriter] = useTypewriter({
        words: ['definition', 'определение', '定义', 'définition', '정의', 'คำนิยาม', 'tanım', 'definición'],
        loop: false,
        typeSpeed: 90,
        deleteSpeed: 80
    })

    return (
        <div className='m-12 text-4xl'>
            <h1>Dictionarwhy is a useful way to get a <span className='text-5xl text-transparent bg-gradient-to-r bg-clip-text font-bold from-red-500 via-rose-400 to-purple-500 '>{typewriter}</span><Cursor /> of your word </h1>
        </div>
    )
}