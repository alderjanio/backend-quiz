const questionSchema = require('./questionSchema');


const all = async (_,res) => {
const listAll = await questionSchema.find()
return res.json(listAll);

}

const findByid = async (req,res) => {
    const {id} = req.params
    const model = await questionSchema.findById(id);
    if (!model){
        return res.status(404).send('banco não encontrado')
    }
    else{return res.json(model)}
}

const save = async (req,res) => {
    const { id } = req.params
    const { body } = req
    
    //res.json(req.body)

    if(id){
        await questionSchema.updateOne({_id:id},{$set: body})
        const updated = await questionSchema.findById(id)
        return res.status(202).send(updated)
    }else{
        const newquestions = new questionSchema(body)
        await newquestions.save()
        return res.status(201).send(newquestions)
    }
}
    const remove = async (req,res) => {
        const {id} = req.params
        await questionSchema.deleteOne({_id:id})
        return res.status(204).send('Quetão removida');
    }
module.exports = {
    all,
    findByid,
    save,
    remove,
}

