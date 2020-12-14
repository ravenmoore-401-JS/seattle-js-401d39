'use strict';

let LL = require('../lib/ll');

describe('Linked List', () => {
  it('inserts a node at the beginning an an empty list', () => {
    const list = new LL();
    list.insert('bananas');
    list.insert('apples');
    list.insert('oranges');
    list.insert('cookies');

    console.log('our list', list);

    expect(list.head.value).toEqual('cookies');
  })

    it('includes - returns true if a value is in the list', () => {
      const list = new LL();
      list.insert('bananas');
      list.insert('apples');
      list.insert('oranges');
      list.insert('cookies');
      expect(list.includes('apples')).toBe(true);
    })

    it('turns the values into a string', () => {
      const list = new LL();
      list.insert('bananas');
      list.insert('apples');
      list.insert('oranges');
      list.insert('cookies');
      expect(list.toString()).toEqual('{cookies} -> {oranges} -> {apples} -> {bananas} -> NULL')
    })
})
