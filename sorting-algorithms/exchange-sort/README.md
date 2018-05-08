# Exchange Sort
The exchange sort is almost similar as the bubble sort. The only difference between the two sorting algorithms is the manner in which they compare the elements. The exchange sort compares the first element with each element of the array, making a swap where is necessary.

## Example

- ( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.
- ( 1 5 4 2 8 ) –> ( 1 4 5 2 8 ), Now 1 is the smallest, them the window move to 2nd index. Swap since 5 > 4.
- ( 1 4 5 2 8 ) –> ( 1 2 5 4 8 ), Since 4 < 5, do not swap. Since 4 > 2, then swap.  
- ( 1 2 5 4 8 ) –> ( 1 2 4 5 8 ), Since 1 and 2 are on their places, window move to 3rd index. Swap since 5 > 4.
- ( 1 2 5 4 8 ) –> ( 1 2 4 5 8 ), Window moves to 4th window, nothing change since 5 > 8. Sort end. 
