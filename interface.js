import inquirer from 'inquirer'
import fs from 'fs'
import path from 'path'
import readlineSync from 'readline-sync'
import chalk from "chalk"

// const entryData = fs.readFileSync('entries.JSON', 'utf8')
// const entry = JSON.parse(recordsData)

// local data in an array

let entries = [{
date: 11/2/2024, 
time: 1134, 
entry: "Today I went for a walk and then ate some icecream while sitting in the sun"
}, {
date: 22/1/2024, 
time: 442, 
entry: "I can't sleep because my cat keeps chewing on my hair, I would rather not have split ends."
}, {
date: 1/4/2024, 
time: 1654, 
entry: "I had lamb for lunch, followed by a pear, followed by brie with strawberry jam, then some macadamia dark chocolate"
}, {
date: 3/4/2024, 
time: 2134, 
entry: "I've had a big day. I coded my little heart out and analysed my cats birthchart."

}, {
date: 23/5/2024, 
time: 2359, 
entry: "Its almost tomorrow!"
}]