// Graph Traversal using BFS
// --> Traverse the nodes level by level in a cicular fashion
// --> Uses Queue for traversing

// Graph Traversal involves 
// Graph representation + Traversal Algorithm

// class for representing a graph using adjList
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

// code for BFS
let found=0;
const BFS=(graph,start,dest)=>{

  let count=graph.count;
  let visited=new Array(count).fill(false);

  let Queue=[];
  Queue.push(start);
  visited[start]=true;
  while(Queue.length>0){
    start=Queue.shift();

    if(start==dest){
        found=1;
        return found;
    }
    for(let i in graph.adjList[start]){
        if(!visited[i]){
            visited[i]=true;
            Queue.push(i);
        }
    }
  }
}


let g= new Graph();
A = 5
B = [  [1, 2], 
       [4, 1], 
       [2, 4], 
       [3, 4], 
       [5, 2], 
       [1, 3] ]

//Graph creation
console.log(g) 
B.forEach(element => {
   g.addEdge(element[0],element[1]) 
});
console.log(g)

let start=A;
let end=B[0][0];

BFS(g,start,end)
console.log('element path found from sraring',found)