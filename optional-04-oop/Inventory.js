class Inventory {
  constructor() {
    this.items = []; // Array untuk menyimpan barang-barang
  }

  // Method untuk menambahkan barang
  addItem(item) {
    this.items.push(item);
  }

  // Method untuk menghapus barang berdasarkan id
  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
  }

  // Method untuk menampilkan daftar barang dalam format string
  listItems() {
    return this.items.map(item => item.displayDetails()).join('\n');
  }
}

export default Inventory;
