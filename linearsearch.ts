// We have array which we know is sorted
const a = [1, 2, 3, 12, 100, 555, 999, 12000, 10**5];

function linear_search(array: number[], value: number)
{
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] === value) return true;
    }
    return false;
}

console.log("5 is " + (linear_search(a, 5) ? " " : "not ") + "in the array.");
console.log("555 is " + ( linear_search(a, 555) ? "" : "not ") + "in the array.");