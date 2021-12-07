// consider: what data type is game here? where will you need to pass it this data type in your app?
export function renderGame(game) {
    const div = document.createElement('div');
    
    const team1Div = renderTeam(game.name1, game.score1);
    const team2Div = renderTeam(game.name2, game.score2);

    div.append(team1Div, team2Div);

    div.classList.add('game');

    return div;
}

export function renderTeam(name, score) {
    const teamDiv = document.createElement('div');
    const nameDiv = document.createElement('p');
    const scoreDiv = document.createElement('p');
    nameDiv.textContent = name;
    scoreDiv.textContent = score;

    teamDiv.append(nameDiv, scoreDiv);
    
    return teamDiv;
}

export function renderPastGame(pastGame) {
    const container = document.createElement('div');
    const pName1 = document.createElement('p');
    const pName2 = document.createElement('p');
    const pScore1 = document.createElement('p');
    const pScore2 = document.createElement('p');

    container.classList.add('past-game');

    pName1.textContent = pastGame.name1;
    pName2.textContent = pastGame.name2;
    pScore1.textContent = pastGame.score1;
    pScore2.textContent = pastGame.score2;

    container.append(pName1, pScore1, pName2, pScore2);
    
    return container;
}