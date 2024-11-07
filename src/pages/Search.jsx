import React, { useState } from "react";
import Game from './game';
import SearchBarYGO from './SearchYGO';
import SearchBarMTG from './SearchMTG';
import SearchBarPOK from './SearchPOK';

function Search() {
    const [GameSelect, setGameSelect] = useState('Nothing');

    return (
        <div>
            <Game setGameSelect={setGameSelect} />
            {GameSelect === 'YGO' && <><SearchBarYGO /><p>YGO</p></>}
            {GameSelect === 'MTG' && <><SearchBarMTG /><p>MTG</p></>}
            {GameSelect === 'POK' && <><SearchBarPOK /><p>POK</p></>}
            {GameSelect === 'Nothing' && <><p>"Select a game you silly billy!"</p></>}
        </div>
    );
}

export default Search;
