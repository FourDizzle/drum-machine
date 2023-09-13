const synths = [
    new Tone.synth(),
    new Tone.Synth(),
    new Tone.Synth(),
    new Tone.Synth()
];

synths.forEach(synth => synth.toMaster());
let index = 0;
const rows = 
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
Tone.transport.scheduleRepeat(repeat, 8n);
function repeat(time) 
    let step = index  % 8;
    for (let i = 0; i < synths.length; i++) {
        let synth = synths[i],
        row = rows[i],
        note = row[step + 1];
        if (note) {
            synth.triggerAttack(note, time);
        }   else {
            synth.triggerRelease(time);
        }
        index++;
        index %= 8;
    };

    Tone.Transport.scheduleRepeat(repeat, 8n);

    function repeat(time) {
        let step = index  % 8;
        for (let i = 0; i < synths.length; i++) {
            let synth = synths[i],
            row = rows[i],
            note = row[step + 1];
            if (note) {
                synth.triggerAttack(note, time);
            }   else {  //  if (row[step]) {
                synth.triggerRelease(time);
            }
            index++;
            index %= 8;
            console.log(index);
            console.log(row);
            console.log(note);
            console.log(step);
            console.log(synth);
            console.log(row[step + 1]);
            console.log(row[step]);
            console.log(row[step + 1]);
            console.log(row[step]);
        };
    };