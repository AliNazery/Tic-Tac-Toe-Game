import React, { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, seIsEditing] = useState(false);

  function handlEditClick() {
    seIsEditing(!isEditing);
    }
    
    function handleChange(event) {
        console.log(event)
        setPlayerName(event.target.value);
    }

  let editableplayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editableplayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
  }
  return (
    <>
      <li>
        <span className="player">
          {editableplayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handlEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
