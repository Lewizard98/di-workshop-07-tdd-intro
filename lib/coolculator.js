class Coolculator{
	add(...args){let count=0;for (let arg of args) count+=arg; return count;} // returns the total of the two arguments
	multiply(a,b){return a*b;} // returns the product of the two arguments
	subtract(a,b){return a-b;} // returns one arguments minus the other
	divide(a,b){return a/b;} // returns one argument divived by the other
	highest(a,b){if(a>b){return a;}return b;} // returns the highest argument
    lowest(a,b){if(a<b){return a;}return b;} // returns the lowest argument
	double(a){return a*2;} // returns double the argument
	square(a){return a*a;} // returns the argument squared
	raise(a,b){return Math.pow(a,b);} // returns one argument to the power of the other
    isNegative(a){if(a<0){return true;}return false;} //returns a boolean for whether the argument is a negative
	isPositive(a){if(a>0){return true;}return false;} // returns a boolean for whether the argument is positive
	isCool(a){if(a[0]==a[a.length-1]){return true;}return false;} // returns a boolean for whether the first digit and last digit are the same for the number
	sum(a){let count=0;for(let i=0;i<a.length;i++){count+=a[i];}return count} // takes an array of integers and returns the sum of them
	multiplyArray(a){let count=1;for(let i=0;i<a.length;i++){count*=a[i];}return count} // takes an array of integers and returns a product of them
	mean(a){let count=1;for(let i=0;i<a.length;i++){count*=a[i];}return count/a.length} // takes an array of integers and returns the mean
	factorial(a){let count=1;for(let i=a;i>0;i--){count*=i;}return count;} // takes a number and returns its factorial
	random(a){return(Math.floor(Math.random()*a));}
}
module.exports = Coolculator