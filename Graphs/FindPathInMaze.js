let hasPath=(maze,start,dest)=>{
    console.log(start)
    maze[start[0]][start[1]]=1;
    // return searchMazeHelper(maze,start,dest);
}

function searchMazeHelper(maze,current,end){
  if(current[0]==end[0] && current[1]==end[1]){
    return true;
  }  

  let neighborIndices
  let directions=[[0,1],[1,0],[0,-1],[-1,0]];
  for(const direction of directions){
    neighborIndices=[current[0]+direction[0],current[1]+direction[1]]
    if(isFeasible(maze,neighborIndices)){
        console.log(maze[0])
        maze[neighborIndices[0]][neighborIndices[1]]=1;
        if(searchMazeHelper(maze,neighborIndices,end)){
            return true;
        }
    }
  }  
  return false;
}

function isFeasible(maze,indices){
    let x=indices[0],y=indices[1];
    console.log(maze)
    return x>=0 && x<maze.length &&
        y>=0 && y < maze[x].length 
        && maze[x][y]===0;
}



let maze= [[0,0,1,0],
           [0,0,0,0],
           [0,0,0,1],
           [1,1,0,1],
           [0,0,0,0]]
let x=hasPath(maze,[0,0],[4,1]);
console.log(x)
console.log(maze[0].length)
