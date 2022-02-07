// import Tuit from "../models/Tuit";
// import TuitModel from "../mongoose/TuitModel";
// import TuitDaoI from "../interfaces/TuitDao";

// export default class TuitDao implements TuitDaoI {
//    async findAllTuits(): Promise<Tuit[]> {
//        return await TuitModel.find();
//    }
//    async findTuitById(uid: string): Promise<any> {
//        return await TuitModel.findById(uid);
//    }
//    async createTuit(Tuit: Tuit): Promise<Tuit> {
//        return await TuitModel.create(Tuit);
//    }
//    async deleteTuit(uid: string):  Promise<any> {
//        return await TuitModel.deleteOne({_id: uid});
//    }
//    async updateTuit(uid: string, Tuit: Tuit): Promise<any> {
//        return await TuitModel.updateOne({_id: uid}, {$set: Tuit});
//    }
// }
