const element = document.getElementById("quote")
const data = ["\'When the going gets rough - turn to wonder.\' \n- Parker Palmer","'If you have knowledge, let others light their candles in it.\n - Margaret Fuller","'A bird doesn't sing because it has an answer, it sings because it has a song.' - Maya Angelou"]
const randomNumber = Math.round(Math.random()*data.length)
const runTimeQuote = data[randomNumber]
element.innerHTML = runTimeQuote