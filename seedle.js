const form = document.querySelector('form');
const newFeedback = document.querySelector('.newFeedback');
const labels = document.querySelector('.labels');
const input = document.querySelector('#cropInput');




//Class for building every crop and their respective attributes
class Crop {
    constructor(name, season, cost, value, time, energy, health) {
        this.name = name;
        this.season = season;
        this.cost = cost;
        this.value = value;
        this.time = time;
        this.energy = energy;
        this.health = health;
    }
}

//Building objects for every available crop to guess
const blueJazz = new Crop('Blue Jazz', 0, 30, 50, 7, 45, 20);
const carrot = new Crop('Carrot', 0, 0, 35, 3, 75, 33);
const cauliflower = new Crop('Cauliflower', 0, 80, 175, 12, 75, 33);
const coffeeBean= new Crop('Coffee Bean', 0, 2500, 15, 10, 0, 0);
const garlic = new Crop('Garlic', 0, 40, 4, 60, 20, 9);
const greenBean = new Crop('Green Bean', 0, 60, 40, 10, 25, 11);
const kale = new Crop('Kale', 0, 70, 110, 6, 50, 22);
const parsnip = new Crop('Parsnip', 0, 20, 35, 4, 25, 11);
const potato = new Crop('Potato', 0, 50, 80, 6, 25, 11);
const rhubarb = new Crop('Rhubarb', 0, 100, 220, 13, 0, 0);
const strawberry = new Crop('Strawberry', 0, 100, 120, 8, 50, 22);
const tulip= new Crop('Tulip', 0, 20, 30, 6, 45, 20);
const unmilledRice= new Crop('Unmilled Rice', 0, 40, 30, 6, 3, 1);
const ancientFruit = new Crop('Ancient Fruit', 0, 0, 550, 28, 0, 0);
const blueberry = new Crop('Blueberry', 1, 80, 13, 50, 25, 11);
const corn = new Crop('Corn', 1, 150, 50, 14, 25, 11);
const hops = new Crop('Hops', 1, 60, 25, 11, 45, 20);
const hotPepper = new Crop('Hot Pepper', 1, 40, 40, 5, 13, 5);
const melon = new Crop('Melon', 1, 80, 250, 12, 113, 50);
const poppy = new Crop('Poppy', 1, 100, 140, 7, 45, 20);
const radish = new Crop('Radish', 1, 40, 90, 6, 45, 20);
const redCabbage = new Crop('Red Cabbage', 1, 100, 260, 9, 75, 33);
const starfruit = new Crop('Starfruit', 1, 400, 750, 13, 125, 56);
const summerSpangle = new Crop('Summer Spangle', 1, 50, 90, 8, 45, 20);
const summerSquash = new Crop('Summer Squash', 1, 0, 45, 6, 63, 28);
const sunflower = new Crop('Sunflower', 1, 200, 80, 8, 45, 20);
const tomato = new Crop('Tomato', 1, 50, 60, 11, 20, 9);
const wheat = new Crop('Wheat', 1, 10, 25, 4, 0, 0);
const pineapple = new Crop('Pineapple', 1, 0, 300, 14, 138, 62);
const taroRoot= new Crop('Taro Root', 1, 0, 100, 7, 38, 17);
const amaranth = new Crop('Amaranth', 2, 70, 150, 7, 50, 22);
const artichoke = new Crop('Artichoke', 2, 30, 160, 8, 30, 13);
const beet = new Crop('Beet', 2, 20, 100, 6, 30, 13);
const bokChoy = new Crop('Bok Choy', 2, 50, 80, 4, 25, 11);
const broccoli = new Crop('Broccoli', 2, 0, 70, 8, 63, 28);
const cranberries = new Crop('Cranberries', 2, 240, 75, 7, 38, 17);
const eggplant = new Crop('Eggplant', 2, 20, 60, 5, 20, 9);
const fairyRose = new Crop('Fairy Rose', 2, 200, 290, 12, 45, 20);
const grape = new Crop('Grape', 2, 60, 10, 80, 38, 17);
const pumpkin = new Crop('Pumpkin', 2, 100, 320, 13, 0, 0);
const yam = new Crop('Yam', 2, 60, 160, 10, 45, 20);
const sweetGemBerry = new Crop('Sweet Gem Berry', 2, 1000, 3000, 24, 0, 0);
const powdermelon = new Crop('Powder Melon', 3, 0, 60, 7, 63, 28);

const answerArray = [blueJazz, carrot, cauliflower, coffeeBean, garlic, greenBean, kale, parsnip, potato, rhubarb, strawberry, tulip, unmilledRice, ancientFruit, 
    blueberry, corn, hops, hotPepper, melon, poppy, radish, redCabbage, starfruit, summerSpangle, summerSquash, sunflower, tomato, wheat, pineapple, taroRoot,
    amaranth, artichoke, beet, bokChoy, broccoli, cranberries, eggplant, fairyRose, grape, pumpkin, yam, sweetGemBerry, powdermelon];

let answer = answerArray[Math.round(Math.random()*100)%43];
let attempts = 6;
let playing = true;

form.addEventListener('submit', e => {

    

    e.preventDefault();

    let currentFeedback = newFeedback.innerHTML;

    console.log(form.guess.value);
    if(playing){
        let seasonSrc = '';
        let costSrc = '';
        let valueSrc = '';
        let timeSrc = '';
        let energySrc = '';
        let healthSrc = '';
        let guessSeason;
        let guessCost;
        let guessValue;
        let guessTime;
        let guessEnergy;
        let guessHealth;
        let cropImage;
        let currentFeedback = newFeedback.innerHTML;

        answerArray.forEach(element => {
            const lower = 'imgs/downArrow.jpeg';
            const higher = 'imgs/upArrow.jpeg';
            const correct = 'imgs/check.jpeg';
            if (element.name.toLowerCase() === form.guess.value.toLowerCase()) {
                if (element.season === answer.season) {
                    seasonSrc = correct;
                }
                else if (element.season > answer.season) {
                    seasonSrc = lower;
                }
                else if (element.season < answer.season) {
                    seasonSrc = higher;
                }
                if (element.cost === answer.cost) {
                    costSrc = correct;
                }
                else if (element.cost > answer.cost) {
                    costSrc = lower;
                }
                else if (element.cost < answer.cost) {
                    costSrc = higher;
                }
                if (element.value === answer.value) {
                    valueSrc = correct;
                }
                else if (element.value > answer.value) {
                    valueSrc = lower;
                }
                else if (element.value < answer.value) {
                    valueSrc = higher;
                }
                if (element.time === answer.time) {
                    timeSrc = correct;
                }
                else if (element.time > answer.time) {
                    timeSrc = lower;
                }
                else if (element.time < answer.time) {
                    timeSrc = higher;
                }
                if (element.energy === answer.energy) {
                    energySrc = correct;
                }
                else if (element.energy > answer.energy) {
                    energySrc = lower;
                }
                else if (element.energy < answer.energy) {
                    energySrc = higher;
                }
                if (element.health === answer.health) {
                    healthSrc = correct;
                }
                else if (element.health > answer.health) {
                    healthSrc = lower;
                }
                else if (element.health < answer.health) {
                    healthSrc = higher;
                }
                guessSeason = element.season;
                guessCost = element.cost;
                guessValue = element.value;
                guessTime = element.time;
                guessEnergy = element.energy;
                guessHealth = element.health;
                cropImage = element.name;

            }
        });
        let feedback  =  `<span class="season">Season</span> <span class="cost">Cost</span> <span class="value">Value</span>
                          <span class="time">Time</span> <span class="energy">Energy</span> <span class="health">Health</span><br>
                          <img src="${seasonSrc}" alt="${guessSeason}" id="season"> <img src="${costSrc}" alt="${guessCost}" id="cost"> 
                          <img src="${valueSrc}" alt="${guessValue}" id="value"> <img src="${timeSrc}" alt="${guessTime}" id="time"> 
                          <img src="${energySrc}" alt="${guessEnergy}" id="energy"> <img src="${healthSrc}" alt="${guessHealth}" id="health">
                          <img src="imgs/crops/${cropImage}.png" alt="${cropImage}" id="thumbnail"><br><br><br><br>` + currentFeedback;
        attempts--;
        console.log(feedback);
        newFeedback.innerHTML = feedback;
        labels.classList.remove('hidden');

        try {
            if (window.innerWidth < 1110){
                spans = document.querySelectorAll('span');
                console.log(spans);
                spans.forEach(item => {
                    item.classList.add("squish");
                })
        
            }
            // if (window.innerWidth > 1110){
            //     document.querySelector('.display').classList.remove('squish');
            // }
        } catch (error) {
            console.log(error);
        }

        form.guess.value = '';
        if (attempts === 0) {
            console.log('OUT OF ATTEMPTS! YOU LOSE!')
            playing = false;
        }
    }
});

form.addEventListener('keyup', e => {
    if(/^season/.test(form.guess.value)){
        let str = form.guess.value.split("season");
        if(str[1].toLowerCase() === ":spring"){
            answerArray.forEach(element => {
                if (element.season === 0){
                    console.log(element.name);
                }
            });
        }
        else if(str[1].toLowerCase() === ":summer"){
            answerArray.forEach(element => {
                if (element.season === 1){
                    console.log(element.name);
                }
            });
        }
        else if(str[1].toLowerCase() === ":fall"){
            answerArray.forEach(element => {
                if (element.season === 2){
                    console.log(element.name);
                }
            });
        }
        else if(str[1].toLowerCase() === ":winter"){
            answerArray.forEach(element => {
                if (element.season === 3){
                    console.log(element.name);
                }
            });
        }
        else if(str[1].toLowerCase() === ">spring"){
            answerArray.forEach(element => {
                if (element.season > 0){
                    console.log(element.name);
                }
            });
        }
        else if(str[1].toLowerCase() === ">summer"){
            answerArray.forEach(element => {
                if (element.season > 1){
                    console.log(element.name);
                }
            });
        }
        else if(str[1].toLowerCase() === ">fall"){
            answerArray.forEach(element => {
                if (element.season > 2){
                    console.log(element.name);
                }
            });
        }
        else if(str[1].toLowerCase() === "<summer"){
            answerArray.forEach(element => {
                if (element.season < 1){
                    console.log(element.name);
                }
            });
        }
        else if(str[1].toLowerCase() === "<fall"){
            answerArray.forEach(element => {
                if (element.season < 2){
                    console.log(element.name);
                }
            });
        }
        else if(str[1].toLowerCase() === "<winter"){
            answerArray.forEach(element => {
                if (element.season < 3){
                    console.log(element.name);
                }
            });
        }
    }
    else if(/^cost/.test(form.guess.value)){
        console.log("Finding Cost");
    }
    else if(/^value/.test(form.guess.value)){
        console.log("Finding Value");
    }
    else if(/^time/.test(form.guess.value)){
        console.log("Finding Time");
    }
    else if(/^energy/.test(form.guess.value)){
        console.log("Finding Energy");
    }
    else if(/^health/.test(form.guess.value)){
        console.log("Finding Health");
    }
    else {
        const compareValue = form.guess.value.toLowerCase().split("");
        let compareArray = [];
        answerArray.forEach(element => {
            splitArray = element.name.toLowerCase().split("");
            let matches = 0;
            for(i = 0; i < compareValue.length; i++){
                if(splitArray[i] === compareValue[i]){
                    matches++;
                }
            }
            if (matches === compareValue.length){
                compareArray.push(element.name);
            }
        });
        console.log(compareArray);
    }   
});