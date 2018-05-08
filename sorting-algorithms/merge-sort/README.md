# Merge Sorting

Like QuickSort, Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one. See following C implementation for details.

## Example 

| Divisions | Action |
| --- | --- | 
| [ 5 2 6 1 7 3 4 8 ] | sorting an array with length 8 |
| [ 5 2 6 1 ] , [ 7 3 4 8 ]  |  divide into halves |
| [ 5 2 ] , [ 6 1 ] , [ 7 3 ] , [ 4 8 ] | divide into halves again|
| [ 2 5 ] , [ 1 6 ] , [ 3 7 ] , [ 4 8 ] | sorting each of the divisions|
| [ 1 2 5 6 ] , [ 3 4 7 8 ] | Merge |
| [ 1 2 3 4 5 6 7 8 ] | Merge again |