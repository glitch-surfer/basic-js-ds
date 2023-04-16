const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.first = null
  }

  root() {
    return this.first
  }

  add(data) {

    this.first = addInside(this.first, data);

    function addInside(node, data) {
      if (!node) {
        return new Node(data)
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addInside(node.left, data);
      } 
      else {
        node.right = addInside(node.right, data);
      }

      return node;
    }
  }

  has(data) {

    function hasInside(node, data) {
      if (!node) {
        return false
      }
      if (node.data === data ) {
        return true
      }
      return data > node.data 
      ? hasInside(node.right, data)
      : hasInside(node.left, data)
    }

    return hasInside(this.first, data)

  }

  find(data) {
    function findInside(node, data) {
      if (!node) {
        return null
      }
      if (node.data === data ) {
        return node
      }
      return data > node.data 
      ? findInside(node.right, data)
      : findInside(node.left, data)
    }

    return findInside(this.first, data)
  }

  remove(data) {
    this.first = removeInside(this.first, data);

    function removeInside(node, data) {
      if (!node) {
        return null
      }

      if (data < node.data) {
        node.left = removeInside(node.left, data);
        return node
      } 
      else if (data > node.data) {
        node.right = removeInside(node.right, data)
        return node
      }
      else {
        if (!node.right && !node.left) {
          return null
        }
        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }
      }

      let rightMin = node.right

      while (rightMin.left) {
        rightMin = rightMin.left
      }
      node.data = rightMin.data
      node.right = removeInside(node.right, rightMin.data)

      return node;
  }
}

  min() {
    function findMin(node) {
      if (!node) {
        return null
      }
      if (node.left) {
        return findMin(node.left)
      }
      return node.data
      }
      

    return findMin(this.first)
  }

  max() {
    function findMax(node) {
      if (!node) {
        return null
      }
      if (node.right) {
        return findMax(node.right)
      }
      return node.data
      }
      

    return findMax(this.first)
  }
}

module.exports = {
  BinarySearchTree
};