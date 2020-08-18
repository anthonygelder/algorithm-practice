class Matrix {
    constructor(m, n) {
      this.m = m;
      this.n = n;
      this.storage = [];
      for(let i = 0; i < m; i++) {
        this.storage.push(new Array(n).fill(0));
      }
    }

    
    print() {
        console.log(this.storage)
    }

  
    isValid(i, j) {
        if(this.storage[i][j]) {
            return true
        } else {
            return false
        }
    }

    insert(i, j, val) {
        this.storage[i][j] = val
    }
    
    retrieve(i, j) {
        return this.storage[i][j]
    }

    scale(factor) {
        let newArr = []

        for(let l = 0; l < this.storage.length; l++) {
            console.log(this.storage[l].length)
            let newRow = []

            for(let i = 0; i < this.storage[l].length; i++) {
                for(let j = 0; j < factor; j++) {
                    newRow.push(this.storage[l][i])
                }
            }

            for(let k = 0; k < factor; k++) {
                newArr.push(newRow)
            }
        }
        return newArr
    }

    fill(val) {
        for(let i = 0; i < this.storage.length; i++) {
            for(let j = 0; j < this.storage[i].length; j++) {
                this.storage[i][j] = val
            }
        }
    }

    flatten() {
        let flat = []
        for(let i = 0; i < this.storage.length; i++) {
            for(let j = 0; j < this.storage[i].length; j++) {
                flat.push(this.storage[i][j])
            }
        }
        return flat
    }

    transpose() {
        for (let i = 0; i < this.storage.length; i++) { 
            for (let j = 0; j < i; j++) { 
                const tmp = this.storage[i][j]; 
                this.storage[i][j] = this.storage[j][i]; 
                this.storage[j][i] = tmp; 
            } 
        } 
    }
}

let matrix = new Matrix(3, 4);

matrix.insert(0,1,5)
matrix.insert(1,1,3)
matrix.insert(2,1,1)

matrix.print()
// console.log(matrix.transpose())
matrix.print()

