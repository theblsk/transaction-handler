export default interface BasicFunctions<T> {
    getAll(): Promise<T[]>;
    getById(id: string): Promise<T | null>;
    create(data: T): Promise<T>;
    createMany(data: T[]): Promise<T[]>;
    update(id: string, data: T): Promise<T | null>;
    updateMany(data: T[]): Promise<T[]>;
    delete(id: string): Promise<T | null>;
    deleteMany(): Promise<T[]>;
}