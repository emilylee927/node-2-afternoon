const express = require("express");
const {create, update,deleteMessages, read} = require("./controllers/messages_controller.js")
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));



app.get("/api/messages", read );
app.post("/api/messages", create);
app.put("/api/messages/:id",update);
app.delete("/api/messages/:id",deleteMessages);



app.listen(3001,()=>{
    console.log('hihi');
});

