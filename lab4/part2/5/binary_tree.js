class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = {
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

    insertNode(node, newNode) {
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

    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
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

    remove(value) {
        this.root = this.removeNode(this.root, value);
    }

    removeNode(node, value) {
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

    findMinNode(node) {
        if (node.left === null) {
            return node;
        }
        return this.findMinNode(node.left);
    }

    update(oldValue, newValue) {
        if (this.search(oldValue)) {
            this.remove(oldValue);
            this.insert(newValue);
            return true;
        }
        return false;
    }

    height() {
        return this.calculateHeight(this.root);
    }

    calculateHeight(node) {
        if (node === null) {
            return 0;
        }
        return Math.max(
            this.calculateHeight(node.left),
            this.calculateHeight(node.right)
        ) + 1;
    }

    inOrder() {
        const result = [];
        this.inOrderTraversal(this.root, result);
        return result;
    }

    inOrderTraversal(node, result) {
        if (node !== null) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
    }
}

const tree = new BinaryTree();
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