'use strict';

const store = (function() {

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  const findById = function(id) {
    return items.find(i => i.id === id);
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      store.items.push(Item.create(name));
    } catch (error) {
      console.log('Cannot add item: ' + error.message);
    }
  };

  const findAndToggleChecked = function(id) {
    const idFound = this.findById(id);
    idFound.checked = !idFound.checked;
  };

  const findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(newName);
      const idFound = store.findById(id);
      idFound.name = newName;
    } catch (error) {
      console.log('Cannot update name: ' + error.message);
    }

  }

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = this.hideCheckedItems;
  }

  const findAndDelete = function(id) {
    this.items = this.items.filter(x => x.id !== id);
  }

  const setSearchTerm = function(search) {
    this.searchTerm = search;
  }

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm
  };

}());