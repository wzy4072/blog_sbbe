var fn_index = async (ctx, next) => {
     ctx.render('signin/signin.html')
};

var fn_signin = async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    if (name === 'koa' && password === '123') {
     ctx.render('signin/signin-ok.html', { name: '小明' });
    } else {
      ctx.render('signin/signin-failed.html');
    }
};

module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
};