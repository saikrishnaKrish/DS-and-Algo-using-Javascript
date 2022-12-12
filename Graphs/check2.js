let A = [
    [0, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 1, 0],
    [1, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 1, 1, 1, 0],
    [1, 1, 0, 1, 1, 0, 1, 0, 0],
    [0, 0, 1, 1, 0, 1, 0, 0, 0]
  ]

let dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
];
let tc = 0;

let visited = new Array(105).fill(0).map(() => new Array(105).fill(0));

function check(i, j, n, m, A) {
    return (
        i >= 0 && i < n && j >= 0 &&
        j < m &&
        A[i][j] == 1 && visited[i][j] != tc
    );
}

function dfs(i, j, n, m, A) {
    visited[i][j] = tc;
    let di, dj;
    for (let k = 0; k < 8; ++k) {
        di = i + dir[k][0];
        dj = j + dir[k][1];
        if (check(di, dj, n, m, A))
        {
            console.log('hi');
            dfs(di, dj, n, m, A);

        }
    }
}

function solveit(A) {
    let n = A.length;
    let m = A[0].length;

    ++tc;
    let numberofislands = 0;
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            if (A[i][j] == 1 && visited[i][j] != tc) {
                dfs(i, j, n, m, A);
                ++numberofislands;
            }
        }
    }
    return numberofislands;
}


        console.log(solveit(A));
