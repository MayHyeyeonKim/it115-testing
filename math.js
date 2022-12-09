function add(a,b){
    return a + b ;
};

function sub(a,b){
    return a - b ;
};

function mult(a,b){
    return a * b ;
};

function div(a,b){
    return a / b ;
};

function between(a,b) {
    if(a > b) {
        return a + " is greater than " + b;
    } else if (b > a) {
        return b + " is greater than " + a;
    } else {
        return a + " is equal to " + b;
    }
}

function colors(color){
    if(color == "purple") {
        return "I love " + color;
    } else if (color == "red") {
        return color + " is okay";
    } else {
        return "I hate " + color;
    }
}

module.exports = {
    add,
    sub,
    mult,
    div,
    between,
    colors
};