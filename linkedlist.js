class ListNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null
    }

    // Time Complexity:
    // Auxiliary Space Complexity:
    append(value) {
        if(this.head === null) {
            this.head = new ListNode(value)
        } else {
            let tempNode = this.head
            while(tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new ListNode(value)
        }
    }

    // Time Complexity:
    // Auxiliary Space Complexity:
    insert(value, index) {
        let currNode = this.head
        let prevNode 
        while(index !== 0) {
            prevNode = currNode
            currNode = currNode.next
            index--
        }
        let newNode = new ListNode(value)
        newNode.next = currNode
        prevNode.next = newNode
    }

    // Time Complexity:
    // Auxiliary Space Complexity:
    delete(index) {
        let currNode = this.head
        let prevNode 
        while(index !== 0) {
            prevNode = currNode
            currNode = currNode.next
            index--
        }
        prevNode.next = currNode.next
    }

    // Time Complexity:
    // Auxiliary Space Complexity:
    contains(value) {
        let currNode = this.head
        let find = false
        while(currNode !== null) {
            if(currNode.value === value) {
                find = true
            }
            currNode = currNode.next
        }
        return find
    }
}

let list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.insert(10,1)
list.delete(1)
console.log(list.contains(2))

console.log(list)