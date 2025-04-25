type TreeNode<T> = {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
};

class BinaryTree<T> {
  private root: TreeNode<T> | null = null;

  insert(value: T): void {
      const newNode: TreeNode<T> = {
          value,
          left: null,
          right: null
      };

      if (this.root === null) {
          this.root = newNode;
      } else {
          this.insertNode(this.root, newNode);
      }
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
      if (newNode.value < node.value) {
          if (node.left === null) {
              node.left = newNode;
          } else {
              this.insertNode(node.left, newNode);
          }
      } else {
          if (node.right === null) {
              node.right = newNode;
          } else {
              this.insertNode(node.right, newNode);
          }
      }
  }

  search(value: T): boolean {
      return this.searchNode(this.root, value);
  }

  private searchNode(node: TreeNode<T> | null, value: T): boolean {
      if (node === null) {
          return false;
      }

      if (value < node.value) {
          return this.searchNode(node.left, value);
      } else if (value > node.value) {
          return this.searchNode(node.right, value);
      } else {
          return true;
      }
  }

  remove(value: T): void {
      this.root = this.removeNode(this.root, value);
  }

  private removeNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
      if (node === null) {
          return null;
      }

      if (value < node.value) {
          node.left = this.removeNode(node.left, value);
          return node;
      } else if (value > node.value) {
          node.right = this.removeNode(node.right, value);
          return node;
      } else {
          if (node.left === null && node.right === null) {
              return null;
          }

          if (node.left === null) {
              return node.right;
          } else if (node.right === null) {
              return node.left;
          }

          const minRight = this.findMinNode(node.right);
          node.value = minRight.value;
          node.right = this.removeNode(node.right, minRight.value);
          return node;
      }
  }

  private findMinNode(node: TreeNode<T>): TreeNode<T> {
      if (node.left === null) {
          return node;
      }
      return this.findMinNode(node.left);
  }

  update(oldValue: T, newValue: T): boolean {
      if (this.search(oldValue)) {
          this.remove(oldValue);
          this.insert(newValue);
          return true;
      }
      return false;
  }

  height(): number {
      return this.calculateHeight(this.root);
  }

  private calculateHeight(node: TreeNode<T> | null): number {
      if (node === null) {
          return 0;
      }
      return Math.max(
          this.calculateHeight(node.left),
          this.calculateHeight(node.right)
      ) + 1;
  }

  inOrder(): T[] {
      const result: T[] = [];
      this.inOrderTraversal(this.root, result);
      return result;
  }

  private inOrderTraversal(node: TreeNode<T> | null, result: T[]): void {
      if (node !== null) {
          this.inOrderTraversal(node.left, result);
          result.push(node.value);
          this.inOrderTraversal(node.right, result);
      }
  }
}

const tree = new BinaryTree<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log(tree.inOrder()); 
console.log(tree.search(7));
console.log(tree.search(12));

tree.update(5, 6);
console.log(tree.inOrder()); 
tree.remove(10);
console.log(tree.inOrder()); 

console.log(tree.height()); 