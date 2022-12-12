//WeightedGraph
let found=0;
class Graph{
    constructor(){
         this.adjList={}
         this.count=0;
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex]=new Set();
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjList[vertex1]){
            this.addVertex(vertex1);
        }
        if(!this.adjList[vertex2]){
            this.addVertex(vertex2);
        }
        this.adjList[vertex1].add(vertex2);
        this.adjList[vertex2].add(vertex1);
    }
    getCount(){
        return this.count;     
    }
    BFS=(vertex)=>{
        let cnt=this.getCount();
        let visited=new Array(cnt);
        let queue=[vertex];
        visited[vertex]=true;
        while(queue.length){
            let parent=queue.shift();
            for(let child of this.adjList[parent]){
                console.log('parent',parent,'child',child);
                if(!visited[child]){
                    visited[child]=true;
                    queue.push(child)
                }
            }    
        }
    }
    DFSIterative=(vertex)=>{
        let cnt=this.getCount();
        let visited=new Array(cnt);
        let stk=[vertex];
        visited[vertex]=true;

        while(stk.length){
            let parent=stk.pop();
            this.adjList[parent].forEach(element => {
                console.log('Parent',parent,'child',element
                )
                if(!visited[element]){
                    visited[element]=true;
                    stk.push(element)
                }
            });
        }
    }  
    DetectCycle=(vertex,visited)=>{
        
        let queue=[vertex]
        let parentArray=[];
        parentArray[vertex]=-1;
        visited[vertex]=true;
            while(queue.length && found==0){
                let parent=queue.shift();
                this.adjList[parent].forEach((child)=>{
                    if(!visited[child]){
                        visited[child]=true;
                        queue.push(child)
                        parentArray[child]=parent;
                        // console.log('parent',parent,'child',child);
                    }else if(parentArray[parent]!=child){
                            // console.log('found a cycle');
                            // console.log('parent',parent,'child',child);
                            found=1;
                            return 1
                        }
                    
                })
                // visited[vertex] = 2;
            }
            return 0;
    }
}

let g1=new Graph();
// console.log(g1)
// g1.addEdge(1,2)
// g1.addEdge(2,8)
// g1.addEdge(2,3)
// g1.addEdge(3,4)
// g1.addEdge(9,3)
// g1.addEdge(3,11)
// g1.addEdge(4,5)
// g1.addEdge(4,6)
// g1.addEdge(8,9)
// g1.addEdge(6,5)
// console.log('=========Graph=======')
// console.log(g1)
// console.log('==========BFS========')
// g1.BFS(1)
// console.log('=========DFSITerative===========')
// g1.DFSIterative(1)
// console.log('==========Detect Cycle==========')
// console.log(g1.DetectCycle(1)?'no cycle':'found cycle')
// A = 5
 B = [      
    [11, 12],
    [11, 13],
        [1, 2],
        [1, 3],
        [2, 3],
        [1, 4],
        [4, 5],
     
     ]

//      B = [  
//   ]

// B =[
//   [1, 2]
// ]

// B = 
// [
//   [44, 50],
//   [23, 26],
//   [20, 45],
//   [4, 26],
//   [12, 33],
//   [9, 41],
//   [30, 51],
//   [2, 26],
//   [2, 23],
//   [16, 18]
//   [32, 51],
//   [30, 49],
//   [46, 52],
//   [13, 31],
//   [2, 37],
//   [11, 44],
//   [22, 23],
//   [31, 40],
//   [1, 5],
//   [13, 44],
//   [6, 13],
//   [23, 37],,
//   [29, 37],
//   [8, 43],
//   [13, 37],
//   [30, 36],
//   [11, 39],
//   [11, 42],
//   [29, 32],
//   [28, 32],
//   [26, 37],
//   [28, 45],
//   [7, 31],
//   [15, 46],
//   [31, 51],
//   [15, 19],
//   [22, 36],
//   [6, 47],
//   [10, 48],
//   [19, 27],
//   [2, 19],
//   [11, 40],
//   [33, 35],
//   [8, 38],
//   [38, 43],
//   [3, 36],
//   [1, 16],
//   [22, 32]
//   [18, 20],
//   [31, 43],
//   [18, 44],
//   [5, 33],
//   [21, 42],
//   [17, 29],
//   [2, 51],
//   [12, 19],
//   [13, 47],
//   [18, 38],
//   [22, 27],
//   [15, 21],
//   [10, 31],
//   [16, 20],
//   [44, 45],
//   [2, 11],
//   [7, 36],
//   [8, 47],
//   [25, 38],
//   [10, 36],
//   [1, 41],
//   [5, 49],
//   [11, 38]
//   [32, 40],
//   [32, 37],
//   [17, 45],
//   [6, 37],
//   [2, 10],
//   [13, 48],
//   [3, 26],
//   [5, 9],
//   [43, 50],
//   [17, 52],
//   [2, 42],
//   [10, 27],
//   [24, 37],
//   [37, 51],
//   [10, 29],
//   [24, 46],
//   [38, 46],
//   [46, 51],
//   [14, 44],
//   [6, 39],
//   [31, 35],
//   [39, 41],
//   [2, 15],
//   [3, 13],
//   [16, 27],
//   [20, 23],
//   [16, 28],
//   [12, 20],
//   [3, 4],
//   [26, 35],
//   [12, 50],
//   [35, 41],
//   [21, 30],
//   [27, 52],
//   [2, 45],
//   [23, 45],
//   [14, 51],
// ]


const graph = new Graph()

        B.forEach(element => {
            graph.addEdge(element[0], element[1])
        });
        // console.log(found) 
        let cnt=graph.getCount();
        let visited=new Array(cnt);
        // console.log(B.length)
        for(let i=1;i<B.length;i++){
          if(!visited[i]){
            graph.DetectCycle(B[i][0],visited)
          }
        }

        console.log(found) 
        // return found


        // module.exports = { 
        //     //param A : integer
        //     //param B : array of array of integers
        //     //return an integer
        //        solve : function(A, B){
           
        //    //WeightedGraph
        //    let found=0;
        //    class Graph{
        //        constructor(){
        //             this.adjList={}
        //             this.count=0;
        //        }
        //        addVertex(vertex){
        //            if(!this.adjList[vertex]){
        //                this.adjList[vertex]=new Set();
        //                this.count++;
        //            }
        //        }
        //        addEdge(vertex1,vertex2){
        //            if(!this.adjList[vertex1]){
        //                this.addVertex(vertex1);
        //            }
        //            if(!this.adjList[vertex2]){
        //                this.addVertex(vertex2);
        //            }
        //            this.adjList[vertex1].add(vertex2);
        //            this.adjList[vertex2].add(vertex1);
        //        }
        //        getCount(){
        //            return this.count;     
        //        }
        //        DetectCycle=(vertex,visited)=>{
        //            // let cnt=this.getCount();
        //            // let visited=new Array(cnt);
        //            let queue=[vertex]
        //            let parentArray=[];
        //            parentArray[vertex]=-1;
        //            visited[vertex]=true;
        //                while(queue.length && found==0){
        //                    let parent=queue.shift();
        //                    this.adjList[parent].forEach((child)=>{
        //                        if(!visited[child]){
        //                            visited[child]=true;
        //                            queue.push(child)
        //                            parentArray[child]=parent;
        //                            // console.log('parent',parent,'child',child);
        //                        }else if(parentArray[parent]!=child){
        //                                // console.log('found a cycle');
        //                                // console.log('parent',parent,'child',child);
        //                                found=1;
        //                                return 1
        //                            }
                               
        //                    })
        //                    // visited[vertex] = 2;
        //                }
        //                return 0;
        //        }
        //    }
           
           
        //    const graph = new Graph()
           
        //            B.forEach(element => {
        //                graph.addEdge(element[0], element[1])
        //            });
        //            // console.log(found)  
        //            found = 0; // reset the value of found as it is global
           
        //               let cnt=graph.getCount();
        //            let visited=new Array(cnt);
           
        //            for(let i=0;i<B.length;i++){ // i = 0, start from 0th index
        //              if(!visited[B[i][0]]){ // you have to check if node is visited or not
        //                graph.DetectCycle(B[i][0],visited)
        //              }
        //            }
                   
        //            // graph.DetectCycle(B[0][0])
        //            // console.log(found) 
        //            return found
           
        //        }
        //    };
           
           
           