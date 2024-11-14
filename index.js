let baseG = document.getElementById("base");
let numberG = document.getElementById("number");
let sbt = document.getElementById("sbt");
let tenAns = document.getElementById("tenAns");
let isValid = false;

const check = () => {
    if(numberG.value != "" && baseG.value != "") {
        let base = document.getElementById("base").value;
        let number = document.getElementById("number").value;
        let nums = number.toString();
        let i;

        sbt.innerHTML = `Convert ${number}<sub>${base}</sub> to base 10`
        
        for(i = 0; i < nums.length; i++) {
            if(Number(nums[i]) >= Number(base)) {
                isValid = false;
                return;
            }
        }

        isValid = true;
        return;
    }
    
}

baseG.addEventListener("change", check)
numberG.addEventListener("change", check)

sbt.addEventListener("click", function() {
    if(isValid) {
        solve();
    }else {
        alert("Make sure the base you picked matches the number you entered.");
    }
})


const solve = () => {
    let val = numberG.value;
    let nums = val.toString();
    let mults = 0;
    let final = 0;
    let i;
    let j = nums.length-1;

    for(i = 0; i < nums.length; i++) {
        final += (Number(nums[j]) * Math.pow(Number(baseG.value), i))
        j--;
    }

    tenAns.innerHTML = `Ans: ${final}`;
}

//Code to convert from base 10
let number_from_10 = document.getElementById("number-from-10");
let base_from_10 = document.getElementById("base-from-10");
let fbt = document.getElementById("fbt");
let fta = document.getElementById("fta");

number_from_10.addEventListener("change", function() {
    if(number_from_10.value != "" && base_from_10.value != "") {
        fbt.innerHTML = `Convert ${number_from_10.value}<sub>10</sub> to base ${base_from_10.value}`
    }
})
base_from_10.addEventListener("change", function() {
    if(number_from_10.value != "" && base_from_10.value != "") {
        fbt.innerHTML = `Convert ${number_from_10.value}<sub>10</sub> to base ${base_from_10.value}`
    }
})

fbt.addEventListener("click", function() {

    if(number_from_10.value != "" && base_from_10.value != "") {
        let remainder = [];
        let num = number_from_10.value;
        let left;
        let i = 0;
        let answer = "";

        while(num != 0) {
            remainder[i] = Math.floor(num%base_from_10.value);
            left = num / base_from_10.value;
            num = Math.floor(left);

            i++;
        }

        for(let j = remainder.length-1; j >= 0; j--) {
            answer += remainder[j];
        }
    
        fta.innerHTML = `Ans: ${answer}`;
    }else {
        alert("Fill out all fields")
    }
    
})