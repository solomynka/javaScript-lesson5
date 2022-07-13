function makeBuffer(){
	let curentValue = [];
	
	return{
		add: function(val){
			curentValue.push(val);
			return 'додано значення ' + val;
		},
		print: function(){
			console.log(curentValue.join(''));
		},
		clear: function(){
			curentValue.splice(0);
			return 'buffer очищено';
			
		}
	}
};


let buffer = makeBuffer();

console.log(buffer.add('bbbb'));
console.log(buffer.add('cccc'));
console.log(buffer.add('aaaa'));
buffer.print();
console.log(buffer.clear());
buffer.print();
console.log(buffer.add('zzzz'));
buffer.print();
