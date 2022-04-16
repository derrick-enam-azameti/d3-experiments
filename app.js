/*
Explanation

The data() method joins data to the selected elements.

It is used to join the specified array of data to
the selected DOM elements and returns the updated
selection.

D3 works with different types of data like:
Arrays,
CSV,
TSV,
JSON,
XML, etc.

Here we manually created the html elements
since we are not using the enter() method.

The commented parts are what the code would
have looked like should we decide to create
the html elements automatically using the 
enter() and append() methods.

*/
let myData1 = [1, 2, 3, 4, 5]

let p = d3.select('body')
.selectAll('p')
.data(myData1)
// .enter()
// .append('p')
.text(d => d)




/*
The enter() method dynamically creates placeholder
references corresponding to the number of data
values.
The output of enter() can be fed to append() method
and the append() method will create DOM elements for
which there are no corresponding DOM elements on 
the page.

*/

let myData2 = [4, 1, 6, 2, 8, 9]
let body = d3.select('body')
.selectAll('span')
.data(myData2)
.enter()
.append('span')
.text(d => d + ', ')




/*
While enter() is used to add new reference nodes,
exit() is used to remove a node.

The exit() method removes nodes and adds them to
the exit() selection which can be later removed
from the DOM with remove() method.
*/

let myData3 = ['Hello World!', 'Hi people'] //[]
let p_one = d3.select('#d3exit_eg')
.selectAll('p')
.data(myData3)
.text(d => d)
.exit()
.remove()


/*
The datum() method is used for static visualization
which does not need updates.

It binds data directly to an element.
It injects data to the selected element 
without computing a join.
*/ 
d3.select('#d3datum_eg')
.select('p')
.datum(myData1)
.text(d => d)


