/**
 * Adapter
 */
class OldSystem {
    specificRequest() {
        return "Старый формат данных";
    }
}

class Adapter {
    constructor(oldSystem) {
        this.oldSystem = oldSystem;
    }

    request() {
        const result = this.oldSystem.specificRequest();
        return `Адаптированный: ${result}`;
    }
}

const oldSystem = new OldSystem();
const adapter = new Adapter(oldSystem);
console.log(adapter.request());

/***
 * Startegy
 */
class BubbleSortStrategy {
    sort(data) {
        console.log("Сортировка пузырьком");
        return [...data].sort((a, b) => a - b);
    }
}

class QuickSortStrategy {
    sort(data) {
        console.log("Быстрая сортировка");
        return this.quickSort([...data]);
    }

    quickSort(arr) {
        if (arr.length <= 1) return arr;
        
        const pivot = arr[0];
        const left = [];
        const right = [];
        
        for (let i = 1; i < arr.length; i++) {
            arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
        }
        
        return [...this.quickSort(left), pivot, ...this.quickSort(right)];
    }
}

class Sorter {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    sort(data) {
        return this.strategy.sort(data);
    }
}

const data = [3, 1, 4, 1, 5, 9, 2, 6];
const sorter = new Sorter(new BubbleSortStrategy());
console.log(sorter.sort(data)); 

sorter.setStrategy(new QuickSortStrategy());
console.log(sorter.sort(data)); 


/**
 * Observer
 */
class NewsPublisher {
    constructor() {
        this.observers = [];
    }

    attach(observer) {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer);
        }
    }

    detach(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(data) {
        for (const observer of this.observers) {
            observer.update(data);
        }
    }

    publishNews(news) {
        console.log(`Выпускаем новость: ${news}`);
        this.notify(news);
    }
}

class EmailSubscriber {
    update(data) {
        console.log(`Отправляем email с новостью: ${data}`);
    }
}

class SMSSubscriber {
    update(data) {
        console.log(`Отправляем SMS с новостью: ${data}`);
    }
}

const publisher = new NewsPublisher();
const emailSubscriber = new EmailSubscriber();
const smsSubscriber = new SMSSubscriber();

publisher.attach(emailSubscriber);
publisher.attach(smsSubscriber);

publisher.publishNews("JavaScript ES2023 выпущен!");

publisher.detach(smsSubscriber);
publisher.publishNews("Новый синтаксис в JS!");
