var marked=require('marked');
var Comment=require('../lib/mongo').Comment;

//将comment 的content 从 markdown转换为html
Comment.plugin('contentToHtml',{
  afterFind:function(comments){
    return comments.map(function(comment){
      comment.content=marked(comment.content);
      return comment;
    });
  }
});

module.exports={
  //创建一个留言
  create:function create(comment){
    return Comment.create(comment).exec();
  },

  //通过用户Id和留言Id删除一个留言
  delCommentById:function delCommentById(commentId,author){
    return Comment.remove({author:author,_id:commentId}).exec();
  },
  //通过文章Id删除该文章下所有留言
  delCommentsByPostsId:function delCommentsByPostsId(postId){
    return comment.remove({postId:postId}).exec();
  },
  //通过文章id 获取该文章下所有留言，按留言创建时间升序
  getComments:function getComments(postId){
    return Comment
    .find({postId:postId})
    .populate({path:'author',model:'User'})
    .sort({_id:1})
    .addCreateAt()
    .contentToHtml()
    .exec();
  },

  //通过文章Id 获取该文章下留言数
  getCommentsCount:function getCommentsCount(postId){
    return Comment.count({postId:postId}).exec();
  }
}
