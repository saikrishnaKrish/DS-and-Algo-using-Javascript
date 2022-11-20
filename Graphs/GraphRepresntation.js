// Graphs
// --Representation types
//      --> Adjacency Matrix 
//      --> Adjacency List

// Representing using Adjacency List
A = 5
B = [  [1, 2], 
       [4, 1], 
       [2, 4], 
       [3, 4], 
       [5, 2], 
       [1, 3] ]

// =================================================
 class Graph{
    constructor(){
        this.adjList={},
        this.count=0
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex]=new Set();
            this.count++;
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.addEdge[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }
    getCount(){
        return this.count
    }
}
// ===================================================
let g1= new Graph()
g1.addEdge(5,6);
g1.addEdge(15,6);
g1.addEdge(4,8);
g1.addEdge(87,86);
g1.addEdge(8,16);
g1.addEdge(15,6);
console.log(g1)

export default Graph