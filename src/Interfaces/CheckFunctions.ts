export default interface CheckFunctions<T> {
    checkId(id: string): Promise<boolean>;
    checkData(data: T): Promise<boolean>;
    checkDataMany(data: T[]): Promise<boolean>;
}