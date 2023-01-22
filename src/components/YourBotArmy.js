import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({bots,handleClick, handleDelete}) {
  const botCollection=bots.map(bot=>
  <BotCard
   key={bot.id}
   bot={bot} 
  handleClick={handleClick} 
  handleDelete={handleDelete}
 
  />)

  return (
    <div className="grid text-center">
      <div className="row ">
        <div className="col-4">
          {botCollection}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;