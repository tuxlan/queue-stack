function Queue(){
	var elements = [];

	this.add = add;
	this.remove = remove;
	this.getFirstElement = getFirstElement;
	this.hasElements = hasElements;
	this.removeAll = removeAll;
	this.size = size;
	this.toString = toString;

	function add(element){
		elements.push(element);
	}

	function remove(){
		return elements.shift();
	}

	function getFirstElement(){
		return elements[0];
	}

	function hasElements(){
		return elements.length > 0;
	}

	function removeAll(){
		elements = [];
	}

	function size(){
		return elements.length;
	}

	function toString(){
		return elements.toString();
	}
}

function Stack(){
	var elements = [];

	this.add = add;
	this.remove = remove;
	this.getLastElement = getLastElement;
	this.hasElements = hasElements;
	this.removeAll = removeAll;
	this.size = size;
	this.toString = toString;

	function add(element){
		elements.push(element);
	}

	function remove(){
		return elements.pop();
	}

	function getLastElement(){
		return elements[elements.length - 1];
	}

	function hasElements(){
		return elements.length > 0;
	}

	function removeAll(){
		elements = [];
	}

	function size(){
		return elements.length;
	}

	function toString(){
		elements = elements.reverse();
		return elements.toString();
	}
}
console.log('Queue');
var peopleQueue = new Queue();
console.log('Are there elements?: '+peopleQueue.hasElements());
console.log('Add elements...');
peopleQueue.add('Fulano');
peopleQueue.add('Mengano');
peopleQueue.add('Perengano');
 
console.log('Elements: '+peopleQueue.toString());
console.log('Elements total: '+peopleQueue.size());
console.log('Are there elements: '+peopleQueue.hasElements());
console.log('First element added: '+peopleQueue.getFirstElement());
console.log('Remove elements...');
peopleQueue.remove();
peopleQueue.remove();
console.log('Elements: '+peopleQueue.toString());

console.log('Stack');
var fruitStack = new Stack();
console.log('Are there elements?: ' + fruitStack.hasElements());
console.log('Add elements...');
fruitStack.add('Orange');
fruitStack.add('Apple');
fruitStack.add('Banana');
fruitStack.add('Peach');

console.log('Elements: '+fruitStack.toString());
console.log('Elements total: '+fruitStack.size());
console.log('Are there elements: '+fruitStack.hasElements());
console.log('Last element added: '+fruitStack.getLastElement());
console.log('Remove elements...');
fruitStack.remove();
fruitStack.remove();

console.log('Last element added: '+fruitStack.getLastElement());