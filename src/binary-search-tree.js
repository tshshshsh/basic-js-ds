const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
      return;
    }
    let current = this.rootNode;
    while(true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  find(data) {
    if (!this.rootNode) {
      return null;
    }
    let current = this.rootNode;
    while (true) {
      if (data === current.data) {
        return current;
      } else if (data < current.data) {
        if (!current.left) {
          return null;
        }
        current = current.left;
      } else {
        if (!current.right) {
          return null;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      // Лист (нет потомков)
      if (node.left === null && node.right === null) {
        return null;
      }

      // Один потомок
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }

      // Два потомка
      let successor = node.right;
      while (successor.left) {
        successor = successor.left;
      }
      node.data = successor.data;
      node.right = this.removeNode(node.right, successor.data);
      return node;
    }
  }

  min() {
    let current = this.rootNode;
    if (!current) {
      return null;
    }
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this.rootNode;
    if (!current) {
      return null;
    }
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};