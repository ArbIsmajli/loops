// for (let a = 9; a > 4; a-- ) {
//     console.log(a);
// }

// for (let r =0; r < 100; r +=2) {
//     console.log(r);
// }
// for(let i = 1; i < 9; i++) {
//     console.log(i);
// }
for(let i = 1; i <= 8;i++){
    console.log(i)
}

for (let i = 1; i <= 8; i++) {
    if (i === 7) {
        continue;
    }
    console.log(i);
}

let start, _stop;

start = prompt("prej cilit numer po don me printu ne konzolle");
_stop = prompt("deri te cili numer po don me printu ne konzolle");
for(let i = start; i <= _stop; i ++) {
    console.log(i);
}