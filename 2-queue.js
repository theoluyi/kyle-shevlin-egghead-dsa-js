function createQueue() {
	const queue = []

	return {
		enqueue(item) {
			queue.unshift(item)
		},
		dequeue() {
			return queue.pop()
		},
		peek() {
			return queue[queue.length - 1]
		},
		get length() {
			return queue.length
		},
		isEmpty() {
			return queue.length === 0
		}
	}
}

const q = createQueue()
console.log(q.isEmpty())

q.enqueue("this is my first queue item")
q.enqueue("you'll always be NUMBER 2")
q.enqueue("three trees trusted their tryst's truth")
console.log(q.isEmpty())

console.log(q.length)
