// let A=[
//   [0, 0, 1, 0, 1, 0, 1, 1, 1],
//   [0, 1, 0, 0, 1, 1, 1, 0, 1]
// ]

let A = [
  [0, 0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 1, 0, 1, 0],
  [1, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 1, 0, 1, 0],
  [0, 0, 1, 0, 1, 1, 1, 1, 0],
  [1, 1, 0, 1, 1, 0, 1, 0, 0],
  [0, 0, 1, 1, 0, 1, 0, 0, 0]
]
let area = A;


// [1,1]--bottom right,[-1,-1]--top left,[1,0]--bottom,[-1,0]--top,[1,-1]--topLeft
// [0,-1]--left,[0,1]--right,[-1,1]--topRight
let directions = [[1, 1], [-1, -1], [1, 0], [-1, 0], [1, -1], [0, -1], [0, 1], [-1, 1]]



let visited = new Array(area.length).fill(0).map(
  () => new Array(area[0].length).fill(0)
);

// console.log(visited)
let count = 0;
let cnt = 0

for (let i = 0; i < area.length; i++) {
  for (let j = 0; j < area[0].length; j++) {
    if (visited[i][j] != 1 && area[i][j] == 1) {
      getIslandsCount(area, [i, j])//passing givenMatrix,startIndex
      ++cnt
    }
  }
}
console.log(cnt)//result
// return cnt


function isFeasible(area, neighborIndices) {

  let x = neighborIndices[0], y = neighborIndices[1];
  return x >= 0 && x < area.length &&
    y >= 0 && y < area[0].length &&
    visited[x][y] != 1 &&
    area[x][y] == 1;
}
function getIslandsCount(area, current) {
  visited[current[0]][current[1]] = 1;
  let neighborIndices;
  for (let i = 0; i < directions.length; i++) {
    neighborIndices = [current[0] + directions[i][0], current[1] + directions[i][1]]
    if (isFeasible(area, neighborIndices)) {
      getIslandsCount(area, neighborIndices)
    }
  }
}
