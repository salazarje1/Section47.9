class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val); 
    
    if(this.root === null) {
      this.root = newNode; 
      return this; 
    }; 
    
    let current = this.root; 
    while(true){
      if(val < current.val){
        if(current.left === null){
          current.left = newNode;
          return this; 
        } else {
          current = current.left; 
        }
      } else if (val > current.val) {
        if(current.right === null) {
          current.right = newNode; 
          return this; 
        } else {
          current = current.right; 
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current=this.root) {
    const newNode = new Node(val); 

    if(current === null){
      this.root = newNode; 
      return this; 
    }

    if(val < current.val){
      if(current.left === null){
        current.left = newNode; 
        return this; 
      }
      return this.insertRecursively(val, current.left);
    } else if (val > current.val){
      if(current.right === null){
        current.right = newNode; 
        return this; 
      }
      return this.insertRecursively(val, current.right); 
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val){
    let current = this.root; 
    let fNode = false; 

    while (current && !fNode){
      if(val < current.val){
        current = current.left;
      } else if (val > current.val){
        current = current.right; 
      } else {
        fNode = true; 
      }
    }

    if(!fNode) return undefined; 

    return current; 
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current=this.root) {
    if(current === null) return undefined; 
    if(current.val === val) return current; 

    if(val < current.val){
      return this.find(val, current.left); 
    } else if (val > current.val){
      return this.find(val, current.right); 
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node=this.root, visitedNode=[]) {
    visitedNode.push(node.val); 
 
    if(node.left) this.dfsPreOrder(node.left, visitedNode);
    if(node.right) this.dfsPreOrder(node.right, visitedNode); 

    return visitedNode; 
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node=this.root, visitedNode=[]) {
    if(node.left) this.dfsInOrder(node.left, visitedNode); 
    visitedNode.push(node.val); 
    if(node.right) this.dfsInOrder(node.right, visitedNode); 

    return visitedNode; 
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node=this.root, visitedNode=[]) {
    if(node.left) this.dfsPostOrder(node.left, visitedNode); 
    if(node.right) this.dfsPostOrder(node.right, visitedNode); 
    visitedNode.push(node.val); 

    return visitedNode; 
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root; 
    let toVisitQueue = [node]; 
    let visitedNode = []; 
    while(toVisitQueue.length){
      node = toVisitQueue.shift();
      visitedNode.push(node.val); 
      if (node.left) {
        toVisitQueue.push(node.left); 
      } 
      if(node.right) {
        toVisitQueue.push(node.right); 
      }
    }

    return visitedNode; 
  }
}

module.exports = BinarySearchTree;
