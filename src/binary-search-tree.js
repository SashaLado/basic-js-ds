const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {

  constructor() {
    this.rule=null;

  }

  root() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    this.rule=addWithin(this.rule, data);

    function addWithin(node, data){
      if (!node){
        return new Node(data);
      }

      if (node.data===data){
        return node;
      }

      if (data<node.data){
        node.left=addWithin(node.left, data)
      } else {
        node.right=addWithin(node.right, data)
      }

      return node
    }
  }

  has(data) {
    return searchWithin(this.rule, data);

    function searchWithin(node, data){
      if (!node){
        return false;
      }

      if (node.data===data){
        return true;
      }

      return data<node.data ?
          searchWithin(node.left, data):
          searchWithin(node.left, data);


    }
  }

  find(data) {
    if(!this.rule) return false

    let current = this.rule
    let found = false
    while(current && !found){
      if(data < current.data){
        current = current.left
      } else if(data > current.data){
        current = current.right
      } else {
        found = current
      }

    }

    if(!found) return undefined;
    return found

  }

  remove(data) {
    this.rule=removeNode(this.rule, data);

    function removeNode(node, data){
      if (!node){
        return null;
    }

      if (data<node.data){
        node.left=removeNode(node.left, data);
        return node
      } else if (data<node.data){
        node.right=removeNode(node.right, data);
        return node
      } else {
        if (!node.left && !node.right){
          return null
        }

        if (!node.left){
          node=node.right;
          return node;
        }

        if (!node.right){
          node=node.left;
          return node;
        }

        let minFromRight=node.right;
        while (minFromRight.left){
          minFromRight=minFromRight.left
        }
        node.data=minFromRight.data;
        node.right=removeNode(node.right, minFromRight.data)

        return node
      }
    }
  }

  min() {
    if (!this.rule){
      return
    }

    let node=this.rule;
    while (node.left){
      node=node.left
    }

    return node.data;
  }

  max() {
    if (!this.rule){
      return
    }

    let node=this.rule;
    while (node.right){
      node=node.right
    }

    return node.data;
  }

}