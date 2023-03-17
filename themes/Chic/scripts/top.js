var pagination = require('hexo-pagination');
hexo.extend.generator.register('top', function(locals){
    let allPost = locals.posts;
   
    return pagination('/top', allPost, {
        perPage: this.config.top_generator.per_page,
        layout: ['top', 'archive', 'index'],
        format: 'page' + '/%d/',
        data: {
            __index: true
        }
    });

});
