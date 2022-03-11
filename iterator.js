class Iterator {
	constructor(el) {
		this.index = 0;
		this.elements = el;
	}

	next() {
		return this.elements[this.index++];
	}

	hasNext() {
		return this.index < this.elements.length;
	}
};

class ObjectIterator {
	constructor(el) {
		this.index = 0;
		this.keys = Object.keys(el),
		this.elements = el;
	}

	next() {
		return this.elements[this.keys[this.index++]];
	}

	hasNext() {
		return this.index < this.keys.length;
	}
};

const collection = new Iterator(["Audi","BMW","Tesla","Mersedes"])
while (collection.hasNext()){
	console.log(collection.next());
}

const autos ={
	audi:{model:"Audi",color:"black",price:'20000'},
	bmw:{model:"BMW",color:"white",price:'15000'},
	tesla:{model:"Tesla",color:"blue",price:'10000'}
}
const collectionObj = new ObjectIterator(autos)
while (collectionObj.hasNext()){
	console.log(collectionObj.next())}
