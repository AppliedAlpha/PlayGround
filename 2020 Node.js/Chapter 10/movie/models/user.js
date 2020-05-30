var mongoose = require("mongoose");

// 스키마 정의
var UserSchema = new mongoose.Schema({
  id: {
    type: String,
    trim: true,
    required: true
  },
  pwd: {
    type: String,
    trim: true,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  }
});

// 스키마에서 모델 클래스 생성 후 exports
module.exports = mongoose.model("user", UserSchema);