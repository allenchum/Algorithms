# Insertion Sort
Insertion sort is another popular sorting algorithm, even though it’s not as performant as quick sort or merge sort, for example. The way it works is that it splits the array into two sections — a sorted and an unsorted one. We don’t know if any of the items are in place yet, so we will start our sorted list with the first item (an array of a single item is sorted).

Then we start going through the other items in the array. For each one we must find it’s proper place in the sorted array. We do that by finding the first smaller item or until we reach the beginning of the sorted list. 

## Example

|Sorted | unsort | |
| --- | --- | --- |
| 5 | 9 , 13 , 4 , 1 , 6 | the only sorted part is the first item |
| 5 , 9 | 13 , 4 , 1 , 6 |  9 > 5 so we don't move it |
| 5 , 9 , 13 | 4 , 1 , 6 | 13 > 9 we don't move it |
| 4 , 5 , 9 , 13 | 1 , 6 | compare all to 4, until we reach the head |
| 1 , 4 , 5 , 9 , 13 | 6 | compare all to 1, until we reach the head |
| 1 , 4 , 5 , 6 , 9 , 13 | | first smaller item is 5, place 6 before it|

