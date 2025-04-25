/**
 * Adapter
 */

interface NewSystem {
    request(): string;
}

class OldSystem {
    specificRequest(): string {
        return "Старый формат данных";
    }
}

class Adapter implements NewSystem {
    private oldSystem: OldSystem;

    constructor(oldSystem: OldSystem) {
        this.oldSystem = oldSystem;
    }

    request(): string {
        const result = this.oldSystem.specificRequest();
        return `Адаптированный: ${result}`;
    }
}

const oldSystem = new OldSystem();
const adapter = new Adapter(oldSystem);
console.log(adapter.request()); 

/**
 * Strategy
 */
interface SortingStrategy {
    sort(data: number[]): number[];
}

class BubbleSortStrategy implements SortingStrategy {
    sort(data: number[]): number[] {
        console.log("Сортировка пузырьком");
        return [...data].sort((a, b) => a - b);
    }
}

class QuickSortStrategy implements SortingStrategy {
    sort(data: number[]): number[] {
        console.log("Быстрая сортировка");
        return this.quickSort([...data]);
    }

    private quickSort(arr: number[]): number[] {
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
    private strategy: SortingStrategy;

    constructor(strategy: SortingStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: SortingStrategy): void {
        this.strategy = strategy;
    }

    sort(data: number[]): number[] {
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
interface Observer {
    update(data: string): void;
}

interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(data: string): void;
}

class NewsPublisher implements Subject {
    private observers: Observer[] = [];

    attach(observer: Observer): void {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer);
        }
    }

    detach(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(data: string): void {
        for (const observer of this.observers) {
            observer.update(data);
        }
    }

    publishNews(news: string): void {
        console.log(`Выпускаем новость: ${news}`);
        this.notify(news);
    }
}

class EmailSubscriber implements Observer {
    update(data: string): void {
        console.log(`Отправляем email с новостью: ${data}`);
    }
}

class SMSSubscriber implements Observer {
    update(data: string): void {
        console.log(`Отправляем SMS с новостью: ${data}`);
    }
}

const publisher = new NewsPublisher();
const emailSubscriber = new EmailSubscriber();
const smsSubscriber = new SMSSubscriber();

publisher.attach(emailSubscriber);
publisher.attach(smsSubscriber);

publisher.publishNews("TypeScript 5.0 выпущен!");

publisher.detach(smsSubscriber);
publisher.publishNews("Новый паттерн в JavaScript!");
