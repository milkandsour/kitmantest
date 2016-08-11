# Kitman Labs test Question 1

I am quite proud of almost any applications I wrote from scratch, especially of those in which I had the possibility to express myself and my creativity, although they are often the same applications that I would still like to rewrite once I look back at my code, because there is always room for improvement since perfection does not exist.

One of the recent applications I am particularly proud of - although it has made me suffer quite a bit - was the PaddyPower login application. Using a different technology from the one that had been peviously used I managed to dramatically speed it up and boost its performance. The thing that made me particularly proud was has seing a big smile on my principal's face and understanding that I had just deserved the trust he gave me when he put me in charge of this solo project.

# Kitman Labs test Question 2

I am a Martin Flower follower... lets say the truth, he is cool and he know a lot of things! 
I can honestly say that he always know how to be interesting, even in boring context as system engineer stuff...just joking. 

Altough the last thing I really understood from him dates back to 2011, 
now I'm trying to grasp one that talks about refactoring to an adaptive model. 
I would like to explain it in a few words, but I would certainly use more than him and I would be 100% less clear, 
so I just give you the link:

http://www.martinfowler.com/articles/refactoring-adaptive-model.html

Despite being old, I have discovered it just few days ago.

# Kitman Labs test Question 3

To me the solution is a modified version of the stable quicksort.

Considering memory constraint certainly it would not be my choice, 
although I personally love this algorithm and I would use it anywhere.

It is quite fast, the average complexity should be somewhere around n log n, which is quite good, 
but if your worst enemy use it multiple times, with a huge sorted array, that could a problem, 
its quadratic worse case could cause a lot of problems.

Not having specifics to determine the size and the shape of the data, 
I cannot be accurate enought to use an hybrid approach.

###quicksort

```
function quickSort(arr){
	if(arr.length <= 1){
		return arr; 
	}
	var pivot = arr[0];
	var tail = arr.slice(1);
	return Array.prototype.concat.call(
		qsort(tail.filter(function(e){return e < pivot;})),
		pivot,
		qsort(tail.filter(function(e){return e > pivot;}))
	);
}
```

# Kitman Labs test Question 4

The application cannot be considered production ready: 
Specifications should always be discussed, and the code reviewed.

For example, I believe that in these cases it is good practice to make targeted queries via apis, rather than sort the data client side.
Services such as /apis/countriesbymedals ... would actually do the works, could be paginated...
I was about to write a small back end, but I didn't want to stray too far from the specific.

I decided not to use sass or less for setup reasons, just not to give you any more headache.

## Table of Contents
* [Install](docs/Install.md)
* [Dev/Prod Server/Build](docs/Build.md)
* [Acceptance/Unit test](docs/Test.md)
