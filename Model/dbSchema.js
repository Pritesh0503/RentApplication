const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/RentalService', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

//Schema
const userSchema = new mongoose.Schema(
  {
    userID: {
      type: Number,
      unique: true,
      required: [true, 'Required field'],
    },
    name: {
      type: String,
      required: [true, 'Required field'],
    },
    contact: {
      type: Number,
    },
    emailId:{
        type: String
    }
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

const itemSchema = new mongoose.Schema(
    {
      itemID: {
        type: Number,
        unique: true,
        required: [true, 'Required field'],
      },
      itemName: {
        type: String,
        required: [true, 'Required field'],
      },
      description: {
        type: String,
      },
      price:{
          type: Number
      }
    },
    {
      timestamps: {
        createdAt: true,
        updatedAt: true,
      },
    }
  );

//Model
exports.userModel = mongoose.model('user', userSchema);
exports.itemModel = mongoose.model('user', itemSchema);
