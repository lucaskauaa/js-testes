const front = ['HTML', 'CSS', 'JavaScript'];
const back = ['Node', 'PHP', 'Java', 'C#', 'Python'];
const frame = ['React', 'Angular', 'Vue Js', 'Next Js'];
const data = ['SQL', 'MySQL', 'Mongo DB'];

const prog = front.concat(frame, back, data);
prog.push('Git');
prog.push('GitHub');

console.log(prog.length);
let react = prog.indexOf('React');
console.log(react);

/*for (let c in prog) {
    console.log(prog[c])
}*/

while (prog.length > react) {
    prog.pop();
}

for (let c in prog) {
    console.log(prog[c]);
}

console.log(prog.length);