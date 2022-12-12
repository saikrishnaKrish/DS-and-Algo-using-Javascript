// Graphs
// --Representation types
//      --> Adjacency Matrix
//      --> Adjacency List

// Representing using Adjacency List
A = 5;
B = [
  [1, 2],
  [4, 1],
  [2, 4],
  [3, 4],
  [5, 2],
  [1, 3],
];

// =================================================
class Graph {
  constructor() {
    (this.adjList = {}), (this.count = 0);
  }
  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = new Set();
      this.count++;
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.addEdge[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjList[vertex1].add(vertex2);
    this.adjList[vertex2].add(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjList[vertex1].delete(vertex2);
    this.adjList[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adjList[vertex]) {
      return;
    }
    for (let i of this.adjList[vertex]) {
      this.removeEdge(vertex, i);
    }
    delete this.adjList[vertex];
  }
  //helper methods
  getCount() {
    return this.count;
  }
  // Graph traversals--(1)BFS,(2)DFS
  BFS = (vertex) => {
    let cnt = this.getCount();
    let visited = new Array(cnt);

    let queue = [vertex];
    // queue.push(vertex);
    visited[vertex] = true;
    while (queue.length > 0) {
      let node = queue.shift();
      this.adjList[node].forEach((element) => {
        console.log(node, "--->", element);
        // console.log(!visited[element])
        if (!visited[element]) {
          visited[element] = true;
          queue.push(element);
        }
      });
    }
  };
  DFSIterative=(vertex)=>{
    let cnt=this.getCount();
    let visited=new Array(cnt);
    let stack=[vertex];

    visited[vertex]=true;
  
    while(stack.length>0){
        let node=stack.pop();
        this.adjList[node].forEach(ele=>{
         
            console.log(node,'--->',ele)
            if(!visited[ele]){
                visited[ele]=true;
                stack.push(ele);

            }
        })
    }
  }
  dfsIterative = function(start) {
    const result = [];
    const stack = [start];
    const visited = {};
    visited[start] = true;
    let currentVertex;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjList[currentVertex].forEach(neighbor => {
        console.log(currentVertex,'==>',neighbor)
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
}

  DFS_helper(start,visited){
    visited[start]=true;
      for(let i of this.adjList[start]){
        console.log(start,'==>',i)
          if(!visited[i]){
          
            this.DFS_helper(i,visited)
          }
      }
  }
  DFSRecursive=(vertex)=>{
    let count=this.getCount();
    let visited=new Array(count);
    // let stack=[];
    // stack.push(vertex)
    // visited[vertex]=true;
    this.DFS_helper(vertex,visited)
  }

 
dfsRecursive = function(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjList;
    (function dfs(vertex){
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        console.log(vertex,'==>',neighbor)  
        if (!visited[neighbor]) {
            return dfs(neighbor);
          }
      })
    })(start);
    return result;
}
}
// ===================================================
let g1 = new Graph();

g1.addEdge(1,2)
g1.addEdge(1,4)
g1.addEdge(4,1)
g1.addEdge(4,3)
g1.addEdge(3,4)
g1.addEdge(3,2)
g1.addEdge(3,5)
g1.addEdge(5,3)
g1.addEdge(5,6)
g1.addEdge(5,7)
g1.addEdge(6,5)
g1.addEdge(7,5)

console.log(g1)
console.log('======BFS=======')
g1.BFS(1)
console.log('===DFSIterative=====')
g1.DFSIterative(1)
console.log('==============')
g1.dfsIterative(1)
console.log('====DFSRecursive====')

g1.DFSRecursive(1)
console.log('=============')
g1.dfsRecursive(1)