import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot,handleClick,handleDelete}) {

 function handleDeleteClick(){

  fetch(`http://localhost:8001/bots/${bot.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  .then(result => result.json())
  .then(() =>handleDelete(bot.id))
}

  
   
  return (
    <div className="col" 
    >
      <div
        className="card"
        key={bot.id}
        onClick={() => handleClick(bot.id)
      }
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            {botTypeClasses[bot.bot_class]}
          </div>
          <div className="catchphrase">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra-content">
          <span>
            {bot.health}
          </span>

          <span>
            {bot.damage}
          </span>
          <span>
            {bot.armor}
          </span>
          <span>
            <div className="button">
              <button
                className="btn btn-danger"
                onClick={(e) =>
                  {e.stopPropagation();
                    handleDeleteClick(bot.id)}
                }
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;