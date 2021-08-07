
// FIFO principle
/* if adding to the line happens with unshift, 
that means the start of the array is the end of the line
which makes this a bit backwards. So if that is our starting point, then
dequeue should use array.prototype.pop() to remove the last (really the first, bc cs = biblical)
from the end of the array. 


*/ 
function createQueue() {
	const queue = []

	// queue will have these methods:
	return {
		// add or enqueue
		enqueue(item) {
			queue.unshift(item)
		},
		// remove or dequeue
		dequeue() {
			return queue.pop()
		},
		peek() {
			return queue[queue.length - 1]
		},

		// "if just associate queue.length with the length key, we'll get the value zero,
		// bc that's the value of queue.length when our object is created"
		// which I think means what I wrote doesn't work and will always return 0
		length() {
			return queue.length
		},

		// what's special about this get keyword?
		// get length() {
		// 	return queue.length
		// },
		isEmpty() {
			return queue.length === 0
		}
	}

}

const q = createQueue()
console.log(q.isEmpty())
console.log(q.length)

q.enqueue("this is my first queue item")
q.enqueue("you'll always be NUMBER 2")
q.enqueue("three trees trusted their tryst's truth")
console.log(q.isEmpty())

console.log(q.length())
