module.exports = {
  //param A : integer
  //param B : array of array of integers
  //return an integer
  solve: function (A, B) {

    function Graph() {
      this.adjList = {}
    }

    Graph.prototype.addVertex = function (vertex) {
      this.adjList[vertex] = new Set();
    }

    Graph.prototype.addEdge = function (vertex1, vertex2) {
      if (!this.adjList[vertex1]) {
        this.addVertex(vertex1)
      }
      if (!this.adjList[vertex2]) {
        this.addVertex(vertex2)
      }
      this.adjList[vertex1].add(vertex2);
      this.adjList[vertex2].add(vertex1);
    }


    Graph.prototype.detectCycle = function () {
      let visited = new Array(A + 1).fill(0); 8
      for (let i = 1; i <= A; i++) {
        if (visited[i] == 0) {
          if (this.dfsCycle_util(i, -1, visited) === true) {
            return 1
          }
        }
      }
      return 0;
    }

    Graph.prototype.dfsCycle_util = function (vertex, parent, visited) {
      visited[vertex] = 1;

      if (!this.adjList[vertex]) {
        // console.log(vertex)
        // console.log(this.adjList)
        return false
      }
      for (let child of this.adjList[vertex]) {

        if (!visited[child]) {
          if (this.dfsCycle_util(child, vertex, visited) === true) {
            return true;
          }
        }
        else {
          if (visited[child] === 1) {
            if (child != parent) {
              return true;
            }
          }
        }
      }
      visited[vertex] = 2;
      return false;
    }
    const graph = new Graph()

    B.forEach(element => {
      graph.addEdge(element[0], element[1])
    });

    return graph.detectCycle()

  }
};


//0 not visited
//1 visited
//2 visited but not in current cycle8r9896PQ9