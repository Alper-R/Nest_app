import { Repository } from "typeorm";
export declare abstract class Service {
    protected readonly repository: Repository<any>;
    constructor(repository: Repository<any>);
    create(data: any): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: number | any): Promise<any>;
    uptade(id: number, data: any): Promise<any>;
    delete(id: number): Promise<any>;
}
