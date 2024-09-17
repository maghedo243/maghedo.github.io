let ask = true;
const first = [];
const second = [];
const ops = [];
const results = [];

document.write("<table border='1'>");
document.write("<tr bgcolor='#FFA500'><th>x</th><th>op</th><th>y</th><th>result</th></tr>");
while(ask){
    let a = prompt("First number");
    if(a == null){
        break;
    }
    let b = prompt("Second number");
    if(b == null){
        break;
    }
    let op = prompt("Enter an operator (+,-,*,/,%)");
    if(op == null){
        break;
    }
    first.push(a);
    second.push(b);
    ops.push(op);
    document.write("<tr><th>"+a+"</th><th bgcolor='#FFE4B2'>"+op+"</th><th>"+b+"</th>");

    if(["+","-","*","/","%"].includes(op)){
        if(!isNaN(a) && !isNaN(b)){
            switch(op){
                case "+":
                    a = +a
                    b = +b
                    results.push(a+b)
                    break;
                case "-":
                    results.push(a-b)
                    break;
                case "*":
                    results.push(a*b)
                    break;
                case "/":
                    results.push(a/b)
                    break;
                case "%":
                    results.push(a%b)
                    break;
            }
            document.write("<th>"+results[results.length-1]+"</th>");
        }else{
            //results.push("numerr");
            document.write("<th>wrong input number</th>");
        }
    } else {
        //results.push("operr");
        document.write("<th>computation error</th>");
    }
}
document.write("</tr></table>");

let total = 0;
let numNum = 0;

results.forEach(x => {
    if(!isNaN(x)){
        numNum++;
        total += x;
    }
})


let avg = total / numNum;
let min = Math.min(...results);
let max = Math.max(...results)


document.write("<table border='1'>");
document.write("<tr bgcolor='#FFA500'><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
document.write("</table>");
