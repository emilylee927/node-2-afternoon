let messages = [];
let id = 0;

function create(req,res){
    const{text,time} = req.body;
    messages.push({id,text,time});
    id++;
    res.status(200).json(messages)
}


function read(req,res){
    res.status(200).json(messages);
}


function update(req,res){
    const {text} = req.body;
    const updateID = req.params.id;
    for (let i= 0; i<messages.length; i++){
        if(messages[i].id == updateID){
            messages[i].text = req.body.text;
        } 
      }}
//     const messageIndex = messages.findIndex(message => message.id == updateID )
//     let message = messages[messageIndex] ={
//         id: message.id,
//         text: text || message.text,
//         time: message.time
//     };
//       res.status(200).json(messages)
      
// }


function update(req, res){
    const { text } = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex(message => message.id == updateID);
    let message = messages[messageIndex];

    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };

    res.status(200).send(messages);
  }


function deleteMessages(req,res){
    for (let i= 0; i<messages.length; i++){
        if(messages[i].id == req.params.id){
            messages.splice(i,1)
        } 
      }
      res.status(200).json(messages)
}

// function deleteMessages(req, res){
//     const deleteID = req.params.id;
//     messageIndex = messages.findIndex(message => message.id == deleteID);
//     messages.splice(messageIndex, 1);
//     res.status(200).send(messages);
//   }



module.exports={
  create,
  read,
  deleteMessages,
  update

}