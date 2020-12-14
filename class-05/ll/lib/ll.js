'use strict';

const Node = require('./node');

class LinkedList {
  constructor(){
    this.head = null;
  }

  insert(value) {
    // insert a node at the beginning of a list
    
    // make a new Node with the value given
    const node = new Node(value);
    // make the new Node's .next point at the current head
    node.next = this.head;
    // reassign the head to the new node
    this.head = node;
  }

  append(value) {
    const node = new Node(value);
    // traverse the entire list until I find the one whose next is null

    if(!this.head){
      this.head = node;
      return;
    }

    let currentNode = this.head;
    while(currentNode.next !== null){
      currentNode = currentNode.next;
    }
    // when I find that one, make the next my new node
    currentNode.next = node;
    

    // make my new node's next null - already done

  }

  includes(value) {
    // takes in a value and returns true if that value is in the list otherwise returns false

    if(!this.head){
      return false;
    }

    // loop through our linked list to see if the value is there
    let currentNode = this.head;
    while(currentNode !== null){
      // if we find it, return true
      if(currentNode.value === value) return true;
      currentNode = currentNode.next;
    }

    return false;
    // if we don't, return false

  }

  toString() {
    // make an array of all of the values
    // "{a} -> {b} -> {c} -> null"

    // edge case - one node
    // TODO: this will not catch one node - we need to deal with this
    let newString = '';

    let current = this.head;

    if(!this.head){
      return 'NULL';
    }

    newString = `{${this.head.value}} -> `;

    while(current.next){
      current = current.next;
      newString += `{${current.value}} -> `;
    }

    newString += `NULL`;
    
    return newString;
  }
}


module.exports = LinkedList;