import React, { useContext } from "react";
import './style.css'
import { AppContext } from "../../context/appcontext";


function Navbar() {

    const context = useContext(AppContext);

    function controlCheck() {
        if (context?.checked === false) {
            context.setChecked(true);
        } else {
            context?.setChecked(false);
        }
    }

    return <div className="navbar">
        <button className="add" onClick={controlCheck}>Nuovo post</button>
        <div>
            <button className="button">Sign in</button>
            <button className="button">Log in</button>
        </div>
    </div>
}
export default Navbar