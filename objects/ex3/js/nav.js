class Navbar{

    render(){
        const nav =  `  <img class="navbar__logo" src="./imgs/logo.png" alt="Logo" />
        <div class="group__input">
            <input class="input__search"  type="search" placeholder="Search" aria-label="Search">
            <button class="button__search" onclick="search()"> Search </button>
        </div>`

        document.getElementById('navbar').insertAdjacentHTML('beforeend', nav)
    }
}

const criaNav = new Navbar
criaNav.render()