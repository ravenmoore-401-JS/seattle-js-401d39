'use strict';

class Node {
  constructor(value=0, left=null, right=null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // this will add a value to a BST
  add(value) {
    // if we are adding to a BST, the value HAS to be an int
    if(typeof value !== 'number'){
      return null;
    }

    // make a new node to insert
    if(!this.root){
      this.root = new Node(value);
      return;
    }

    let _insert = (node) => {

      // if the value is less than the value of the value of the node
      if( value < node.value ){

        if( node.left === null ){
          node.left = new Node(value);
          return;
        }
        // otherwise...
        else if(node.left !== null){
          return _insert(node.left);
        }
      }

      // if the value is greater
      else if( value >= node.value ){

        // if there is no right node, create a new node - and we're done!
        if( node.right === null ){
          node.right = new Node(value);
          return;
        }

        // if it is NOT null
        else if(node.right !== null){
          // continue to the right with the _insert function
          return _insert(node.right);
        }
      }
    }

    _insert(this.root);
  }

  // Depth First Search
  // works with either a BST or just a BT
  preOrder() {
    // create an array that holds the values 
    const results = [];

    let _walk = (node) => {
      results.push(node.value);
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
    }

    _walk(this.root);
  }
}