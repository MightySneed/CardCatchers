import React, { useState } from "react";
import Game from './game';
import SearchBarYGO from './SearchYGO';
import SearchBarMTG from './SearchMTG';
import SearchBarPOK from './SearchPOK';

const Search = () => {
    const [GameSelect, setGameSelect] = useState('Nothing');

    return (
        <div>
            <br />
            <br />
            <Game setGameSelect={setGameSelect} />
            {GameSelect === 'YGO' && <><SearchBarYGO /><p>YGO</p></>}
            {GameSelect === 'MTG' && <><SearchBarMTG /><p>MTG</p></>}
            {GameSelect === 'POK' && <><SearchBarPOK /><p>POK</p></>}
            {GameSelect === 'Nothing' && <><p>"Select a game to search for cards."</p></>}
        </div>
    );
}

export default Search;
