import './Menu.css'

function Menu() {
    return (
        <div className='header'>
            <div className='header__content center'>
                <a href="/">Logo</a>
                <nav className='menu_nav'>
                    <a href="/">Main</a>
                    <a href="/">TODOs</a>
                    <a href="/">Profile</a>
                </nav>
            </div>
        </div>
    );
}

export default Menu;