// const mongoose = require('mongoose');
// require('dotenv').config();

// mongoose.connect(`mongodb+srv://nafrooz2003:Nafrooz2004@mernchat.evg1vsh.mongodb.net/merndb?retryWrites=true&w=majority`, ()=> {
//   console.log('connected to mongodb')
// })
// mongoose.connect(`mongodb+srv://nafrooz2003:Nafrooz2004@mernchat.evg1vsh.mongodb.net/merndb?retryWrites=true&w=majority` , { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => { console.log('Connected to MongoDB'); } );
const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://nafrooz2003:Nafrooz2004@mernchat.evg1vsh.mongodb.net/merndb?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
      }
    );
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

connectToDatabase();
