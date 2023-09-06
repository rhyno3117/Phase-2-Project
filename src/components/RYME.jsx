import React from 'react'
import { Link } from 'react-router-dom';

function RYME() {
    return (
        <nav id="Topbar">
            <h1 id="RYME">RYME 🦏</h1>
            <div id="menuContainer">
                <Link id="MyHome" to="/RYME/myhome" style={{ color: "black" }}>My Home |</Link>
                <div id="Family">
                    <Link id="Family" to="/RYME/FAM" style={{ color: "black" }}>My Family |</Link>
                </div>
                <div id="FavoriteFoods">
                    <Link id="FavFoods" to="/RYME/favfoods" style={{ color: "black" }}>Favorite Foods |</Link>
                </div>
                <div id="FavoriteSports">
                    <Link id="FavSports" to="/RYME/favsports" style={{ color: "black" }}>Favorite Sports |</Link>
                </div>
                <div id="Goals">
                    <Link id="Goals" to="/RYME/goals" style={{ color: "black" }}>Goals |</Link>
                </div>
            </div>

        </nav>
    );
}

export default RYME;