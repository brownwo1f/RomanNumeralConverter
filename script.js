const inputNum = document.getElementById("number");
const conBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function romanConvert(num){
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];
    const msgP = {
        m1:'Please enter a valid number',
        m2:'Please enter a number greater than or equal to 1',
        m3:'Please enter a number less than or equal to 3999'
    }
    if(!num){errorMsg(msgP.m1);}
    else if(num<0){errorMsg(msgP.m2);}
    else if(num>=4000){errorMsg(msgP.m3);}
    else{
        let rnum = '';
        for (let i = 0; i < romanNumerals.length; i++) {
            while (num >= romanNumerals[i].value) {
                    rnum += romanNumerals[i].numeral;
                    num -= romanNumerals[i].value;
            }
        }
        return rnumOut(rnum);
    }
}
function errorMsg(msg){
        const p = document.createElement("p");
        p.innerText = msg;
        output.appendChild(p);
        output.classList.remove("hidden");
        conBtn.addEventListener("click",() => {
            output.replaceChildren();
            romanConvert(inputNum.value);
        });
        inputNum.addEventListener("keydown",(e) => {
            if(e.key === "Enter"){
                output.replaceChildren();
                romanConvert(inputNum.value)
            }
        });
}
const rnumOut = (rnum) => {
        const p = document.createElement("p");
        p.innerText = rnum;
        output.appendChild(p);
        output.classList.remove("hidden");
        conBtn.addEventListener("click",() => {
            output.replaceChildren();
            romanConvert(inputNum.value);
        });
        inputNum.addEventListener("keydown",(e) => {
            if(e.key === "Enter"){
                output.replaceChildren();
                romanConvert(inputNum.value)
            }
        });
}


conBtn.addEventListener("click",() => {
    romanConvert(inputNum.value)
});
inputNum.addEventListener("keydown",(e) => {
    if(e.key === "Enter"){
        romanConvert(inputNum.value)
    }
});

