'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if ( ! this.head ) {
      this.head = node;
      return;
    }

    let current = this.head;
    while( current.next ) {
      current = current.next;
    }
    current.next = node;
  }


}

class Hashmap {

  constructor(size) {
    this.size = size;
    this.map = new Array(size); //.fill();
  }

  hash(key) {
    // turning the key into an array of characters that make up the string
    // doing .reduce to add the charCodeAt(0) + totalSoFar 
    // then mulitply it by 599
    // then get the remainder when  you divide that by the size
    return key.split('').reduce((totalSoFar, n) => {
      return totalSoFar + n.charCodeAt(0);
    },0) * 599 % this.size;
  }

  // [
  //   {
  //     094(hashed-key):{value:{key:value}, next: {value{key:value}}, next: null}}}
  //   }
  // ]

  set(key,value) {
    // first you get the hash
    let hash = this.hash(key);
    
    // then you make an entry
    // the key is the value of key and the value is the value
    let entry = { [key]: value };

    // if the hash doesn't already exists in the map
    // then, the hash is the key and a new LinkedList is the value
    if(! this.map[hash] ) { this.map[hash] = new LinkedList(); }

    // we then add the entry to the LL at the key of hash
    this.map[hash].add( entry );
  }

  /**
   * Find a key in the hashmap and return its value
   * @param key
   * @return {string}
   * 
   * [
   *  {
   *    hash: head{{
   *          value: { key: value }
   *          next: {value: {key: value},
   *                 next: null
   *                }
   *       
   *          }
   *  }}
   * ]
   * 
   * 
   * [{0: head:{value:{key:'apples'}, next:{null}]
   */
  get(key) {
    // first, I need to hash the key
    const hash = this.hash(key);
    // if there isn't a hash return null
    if(!this.map[hash]) return null;

    // make my hashed position (which is a linked list) equal to current
    let current = this.map[hash].head;
    // while current exists
    while(current){
      if(current.value.hasOwnProperty(key)){ return current.value[key] }
      current = current.next;
    }

    return null;
    // look to see if the keys match
      // if they do, return the value

  }
}

const myHash = new Hashmap(40);
myHash.set('lena', 'mom');
myHash.set('adam', 'dad');
myHash.set('ilya', 'kid');
myHash.get('bob');