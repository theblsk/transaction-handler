export default interface CheckFunctions<T> {
    checkIfExistsById(id: string): Promise<boolean>; //
}