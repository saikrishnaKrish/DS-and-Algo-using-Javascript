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
        // this.adjList[vertex2].add(vertex1)
    }
    getCount(){
        return this.count
    }
}

// code for BFS
let found=0;
const BFS=(graph,start,dest)=>{

  let count=graph.count;
  let visited=new Array(count).fill(false); // To track of visited nodes

  let Queue=[];
  Queue.push(start);
  visited[start]=true;
  
  while(Queue.length>0){
    start=Queue.shift();
    if(start==dest){
        found=1;
        console.log('hiiiiiiiii')
        return found;
    }
  
    for(let i of graph.adjList[start]){
  
        if(!visited[i]){
            visited[i]=true;
            Queue.push(i);
        }
    }
  }
}

const DFS=(graph,start)=>{
    let count=graph.count;
    let visited=new Array(count).fill(false);

    DFS_helper(graph,start,visited);
}

const DFS_helper=(graph,start,visited)=>{
    visited[start]=true;
    // console.log(visited)
    for(let i of graph.adjList[start]){
        if(!visited[i]){
            console.log(i)
            start=i
            visited[i]=true;
            DFS_helper(graph,start,visited)
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
       [3, 4],
  
     ]

//Graph creation
console.log(g) 
B.forEach(element => {
   g.addEdge(element[0],element[1]) 
});
console.log(g)


// Searching if there exists a path exists between A and B
let end=A;
let start=B[0][0];

// let x=BFS(g,start,end)
// console.log(found)
console.log('element path found from starting node',found==0 ? 'not found':'found')
start=B[0][0];
console.log('calling DFS')
// DFS(g,start)//traversing the elements from start

let tot=g.count;
let checked=new Array(tot).fill(false)
let s=B[0][0];
console.log(checked);
for(let i=1;i<=tot;i++){
if(!checked[i]){
    checked[i]=true;
    console.log('start',s,i)
    DFS_helper(g,i,checked)
}
}