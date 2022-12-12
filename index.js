var regex = /\n{2,}/g;

var elves = text.split(regex);
console.log(elves.length);
console.log(elves[0]);

let maxElf = 0;

for (let i=0; i<elves.length; i++){
    let elf = elves[i].split(/\r?\n/);
    let sumElf = 0;
    for (let j=0; j<elf.length;j++){
        sumElf += parseInt(elf[j]);
    }
    maxElf = (sumElf>maxElf) ? sumElf : maxElf;
} 


