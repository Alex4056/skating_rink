const text = [
    'Давай сходим на каток в\n',
    'воскресенье вечером в 19-00?\n',
    'А потом попьем кофе?\n'

];

let line = 0;
let count = 0;
let result = '';

function typeLine() {
    let interval = setTimeout(
        () => {
            result += text[line][count]
            document.querySelector('pre').innerHTML = result + '|';


            count++;
            if (count >= text[line].length) {
                count = 0;
                line++;
                if (line == text.length) {
                    clearTimeout(interval);
                    document.querySelector('pre').innerHTML = result;
                    return true;
                }
            }
            typeLine();
        }, getRandomInt(getRandomInt(250 * 2.5)))
}
typeLine();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}