function Stack(){
    this.array = [];
}

Stack.prototype.push = function(e) {
    this.array.push(e);
}
Stack.prototype.pop = function(e){
    return this.array.pop(e);
}

Stack.prototype.peek = function(e){
    return this.array[this.array.length - 1];
}

Stack.prototype.isEmpty = function(e) {
    return this.array.length == 0;
}

Stack.prototype.isEmpty = function(e) {
    return this.array.length == 0;
}

function rpn (expr){
    var stack = new Stack();
    var result = [];

    // split: '3 4 +' => ['3', '4', '+']
    var exprItems = expr.split(" ");
    exprItems.forEach(item => {
        switch(item) {
            case "+": 
                var sup1 = stack.pop(); 
                var sup2 = stack.pop(); 
                stack.push(sup2 + sup1);
                break;
            case "-": 
                var sup1 = stack.pop(); 
                var sup2 = stack.pop(); 
                stack.push(sup2 - sup1);
                break;
            case "*": 
                var sup1 = stack.pop(); 
                var sup2 = stack.pop(); 
                stack.push(sup2 * sup1);
                break;
            case "/": 
                var sup1 = stack.pop();
                var sup2 = stack.pop();
                stack.push(sup2 / sup1);
                break;
            default:
                stack.push(parseInt(item));
        }
    });        
    return stack.peek();

}

