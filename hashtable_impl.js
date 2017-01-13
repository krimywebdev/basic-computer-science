//HashTable 
//{
//	maxSize: 2
//	content: {
//	0:[	{
//				"Alex": "12345"
//			},
//			{
//				"Tony": "12346"
//			}
//		],
//	1:[	{
//				"Angel": "56789"
//			},
//			{
//				"Shaun": "34567"
//			}
//		]
//  }	
//}

function HashTable(n) {
	this.content = {};
	this.maxSize = n;
};

//insert an element into the hashtable given key, value
HashTable.prototype.add = function(key, value) {
	
	var ind = this.computeHash(key); //get the index to store the key, value pair

	if(!this.content.hasOwnProperty(ind)) {
		this.content[ind] = []; // if the index does not have a key-value pair, initialize an empty array
	}

	var sizeOfArray = this.content[ind].length; //find size of Array

	if(!this.content[ind][sizeOfArray]) {
		this.content[ind][sizeOfArray] = []; //if there is no element in the indexed location, initialize it
	}
	this.content[ind][sizeOfArray][key] = value;

};

//remove the element given the key
HashTable.prototype.remove = function(key) {
	
	var ind = this.computeHash(key); //find the index to know where the element is to be removed

	if(!this.content.hasOwnProperty(ind)) {
		console.log("key is not found");
		return;
	}

	var positionOfKey = this.content[ind].findIndex(function(element){
		return (element.hasOwnProperty(key));
	});

	if(positionOfKey === -1) {
		console.log("key is not found");
		return;
	}

	this.content[ind].splice(positionOfKey, 1);

};

//find the index at which the key can be inserted, deleted, found
HashTable.prototype.computeHash = function(key) {
	return key.toString().length % this.maxSize;
};

//lookup key and return the value, else return null if not found
HashTable.prototype.findKeyValue = function(key) {
	var ind = this.computeHash(key); //find the index to know where the element could be

	if(!this.content.hasOwnProperty(ind)) {
		console.log("key is not found");
		return null;
	}

	var positionOfKey = this.content[ind].findIndex(function(element){
		return (element.hasOwnProperty(key));
	});

	if(positionOfKey === -1) {
		console.log("key is not found");
		return null;
	}

	return this.content[ind][positionOfKey][key];

};

var hashTable = new HashTable(3);

hashTable.add("Alex", "12345");
hashTable.add("Tony", "12346");
hashTable.add("Angel", "56789");
hashTable.add("Shaun", "34567");

hashTable.remove("Alex");
console.log(hashTable);
