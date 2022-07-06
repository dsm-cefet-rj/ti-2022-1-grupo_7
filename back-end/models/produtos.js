//new
const mongoose = requere('mongoose');
const Schema = mongoose.Schema;

const produtosSchema = new Schema({
    
        id: {
            type:String,
            required:true,
        
      },
      
        nomeProduto:{String,
            required:true,
        
        }
})

produtosSchema.method('tranform', function(){
    var obj = this.toObject();

    obj.id = obj._id;

    return obj;
})

var produtos = mongoose.model('produtos', produtosSchema);

module.export = produtosSchema;