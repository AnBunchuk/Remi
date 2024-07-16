// кнопка close
function tagLine() {
    console.log('hello')
    const CloseTagLineBtn = document.querySelector('.tagline__close');
    console.log(CloseTagLineBtn)

    const Tagline = document.querySelector('.tagline')
    console.log(Tagline)

    CloseTagLineBtn.onclick = function () {
        Tagline.remove()
    }
}

export default tagLine();