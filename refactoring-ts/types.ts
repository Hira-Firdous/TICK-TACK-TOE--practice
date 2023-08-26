
export type Player={
    id: number;
    name: string;
    iconClass: string;
    colorClass: string;

};
export type Move={
    squareId:number;
    player:Player;

};


export type GameStatus={
    isComplete: boolean;
    winner:Player|null;
};


export type Game={
    moves:Move[];
    status: GameStatus;
};



export type GameState={
    currentGameMoves: Move[]; // All the player moves for the active game
    history: {
      currentRoundGames: Game[];
      allGames: Game[];
    };

};