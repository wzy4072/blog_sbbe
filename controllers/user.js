const model = require('../model');
let User = model.User;

var fn_userlist = async (ctx, netx) => {
    var user  = await User.findAll();
    console.log(user);
    ctx.response.type = 'application/json';
    ctx.response.body = {success:true,result:user,message:'查询成功',error:null};
}
var fn_usersave = async (ctx, netx) => {
    console.log(ctx.request);
    ctx.response.type = 'application/json';
    ctx.response.body = {success:true,result:[],message:'插入成功！',error:null};
    // name
    // real_name
    // pet_id
    // email

    // id
    // createAt
    // upDateAt
    // version
}

module.exports = {
    'GET /user/list': fn_userlist,
    'POST /user/save2': fn_usersave,
    'OPTIONS /user/save': fn_usersave
}
