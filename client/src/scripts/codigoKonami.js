const codigoKonami = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
    'Enter'
]
const easterEgg = 'https://www.youtube.com/watch?v=xvFZjo5PgG0'

function detectarCodigoKonami() 
{
    let codigoEscrito = []
    let posicionCodigo = 0

    document.body.addEventListener('keyup', (event) => {
        const tecla = event.key
        if (tecla === codigoKonami[posicionCodigo]) {
            codigoEscrito.push(tecla)
            posicionCodigo++
        } else {
            posicionCodigo = 0
            codigoEscrito = []
        }
        if (codigoEscrito.toString() === codigoKonami.toString())
            window.location.href = easterEgg
    })
}
export default detectarCodigoKonami