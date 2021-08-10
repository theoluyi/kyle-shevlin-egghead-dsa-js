
### Queues: what are they?

A queue basically functions like a line of people waiting to buy a slice of pizza. Hence, QUEUE, duh.

Mr. Shevlin explains thus: "A queue is a first-in, first-out data structure (FIFO). We can only remove items from the queue one at a time, and must remove items in the same sequence as they were placed in the queue."

### Mnemonic: "I love QC."

- Obviously a snowclone of I Love Lucy
- Sounds like the name: queues
- References the metaphor of what a queue is (a FIFO conveyor belt, on which a person might perform Quality Control)

### FIFO principle: first in first out

The first person in line will get served first. If we think in terms of additions (enqueues) and removals (dequeues) from the line, that means that the first person enqueued will be the first person dequeued. Like a conveyor belt. Linear, chunked. Think [I Love Lucy in the Chocolate Factory](https://www.youtube.com/watch?v=NkQ58I53mjk)


![I Love Lucy](https://media.giphy.com/media/JKSaYOkCHcblK/giphy.gif)


### This is different from what?

The clearest contrast is with stacks, because a stack is directly opposite to a queue in this respect: a stack is first in, last off (if FILO isn't an acronym, it is now)

Another data structure we could ***sort** of* contrast the queue with is an array. This is a lot messier though, because

A) we're making a queue from an array (I think you could say that the queue is "implemented on top of an existing/indigenous (resizable) array structure in JS.")

B) this requires a bunch of logical stretches. But for fun, let's make those stretches:

- we can think about an array as being "pseudo-agnostic" about order, because while you \*\*\*can \*\*\*add or remove from either side, it's much more efficient to add and remove from the end of the array, (avoids reindexing every element).
- So if we care about efficiency, we can think of an array, and will tend to use it as a First In, Last Off data structure, similar to a stack, but without the controlled usage of a stack, since obviously you can use an array however you want.

## Divergent Implementations

### Shevlin's implementation

- ~~If adding to the queue happens with unshift, that means index 0 of the array is the end of the queue, which makes this a bit backwards.~~
- ~~So if that is our starting point, then dequeue should use array.prototype.pop() to remove the last (really the first, bc cs = biblical) element from the end of the array.~~
- I thought about that wrong, got myself mixed up. Unshift adds an element at array\[0\]. Pop removes an element at array\[array.length-1\]
- So this is the non-cognitively dissonant model of a queue in JS: if the array functions as a conveyor belt, and the elements are chocolates, then the conveyor belt rotates towards the the end of the array
    - The chocolates literally pop off the end of the conveyor belt and into some other container.
    - If we wanted to index these elements from 0 onward, every new chocolate added to the conveyor belt would take index = 0, and every subsequent chocolate on the array would have to be re-indexed (unshift)

### Reversal of Shevlin's implementation

- shift and push: items are added at the end of the array, and remove at the start of the array. The conveyor belt rotates towards the start of the array.

### Is one implementation better?

Practically, I think first one is better since it's less confusing to think about and to look at.

That seems most important since both shift and unshift seemly roughly equally burdensome as operations.

If you are only adding things though, using push is more efficient than unshift. (just noticed: push and unshift both have letter "u" and "up" the number of elements)

If you are primarily removing elements (doesn't primarily adding only make sense, since primarily removing implies you're going to get to zero, at which point you need to primarily add things in order for the queue to serve any use?) using pop is more efficient than shift

### A queue will have these methods

- add or enqueue
- remove or dequeue
- peek (show the next element to be removed)
- length (ideally not a method but a property lookup)
- isEmpty
