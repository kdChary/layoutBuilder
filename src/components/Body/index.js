import ConfigurationContext from '../../context'
import './index.css'

const Body = () => (<ConfigurationContext.Consumer>
    {value={
        {showContent, showRightNavbar, showRightNavbar} = value

        return(
            <div className="body-container">
                <div className="left-navbar">
                    <h2 className="navbar-heading">Left Navbar Menu</h2>
                    <ul className="app-items-list">
                        <li className="navbar-items">Item 1</li>
                                                <li className="navbar-items">Item 2</li>
                        <li className="navbar-items">Item 3</li>
                        <li className="navbar-items">Item 4</li>

                    </ul>
                </div>
            </div>
        )
    }}
</ConfigurationContext.Consumer>
)

export default Body