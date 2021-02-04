const nav = () => {
  const burger = document.querySelector('#Burger')
  const listNav = document.querySelector('#NavLink')

  burger.addEventListener('click', () => {
    listNav.classList.toggle('nav-active')
    burger.classList.toggle('toogle')
  })
}
nav()
