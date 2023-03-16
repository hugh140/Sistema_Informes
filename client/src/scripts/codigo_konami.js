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
            window.location.href = 'https://hugh140.github.io/tik-tak-toe-deploy/'
    })
}
export default detectarCodigoKonami