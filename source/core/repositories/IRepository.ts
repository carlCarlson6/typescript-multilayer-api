interface IRepository<Entity> {
    Add(entity: Entity): Promise<Entity>
    Query(queryObject: any): Promise<Array<Entity>>
    Update(id: any, updateParams: Entity): Promise<Entity>
    Delete(id: any): Promise<void>

}

export default IRepository;
