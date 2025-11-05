const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.number')

let active = 0
const total = items.length
let timer

function update(direction) {
    // Remove classes ativas atuais
    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

    // Atualiza o índice de acordo com a direção
    if (direction > 0) {
        active = active + 1
        if (active === total) {
            active = 0
        }
    } else if (direction < 0) {
        active = active - 1
        if (active < 0) {
            active = total - 1
        }
    }

    // Ativa o novo item e o novo ponto
    items[active].classList.add('active')
    dots[active].classList.add('active')

    // Atualiza o número do indicador
    numberIndicator.textContent = (active + 1).toString().padStart(2, '0')
}

// Eventos de clique
prevButton.addEventListener('click', () => update(-1))
nextButton.addEventListener('click', () => update(1))

// Troca automática a cada 5 segundos
timer = setInterval(() => update(1), 5000)





