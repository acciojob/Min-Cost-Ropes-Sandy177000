function mincost(arr)
{ 
	let pq = new PriorityQueue();

	for (let index = 0; index < arr.length; index++) {
		pq.enqueue(arr[index]);
	}

	let x = 0 ;
	while(pq.size()>1){
		let f = pq.dequeue();
		let s = pq.dequeue();
		x+= f+s;
		pq.enqueue(f+s);
	}

	return x;
}

module.exports=mincost;
