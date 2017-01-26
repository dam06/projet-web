module.exports = {

};
module.exports = {
    moncompte: function (req, res)
      {
      var data={};

      data.mesdata  = {
      title: " information du compte utilisateur",
      content : "mettre a jour les infos utilisateur",
                   };
               data.user=req.user;


             console.log(req.user);
        return res.view('moncompte',data);
         var where={id:"req.user.id"};
              User.findOne(where)
              .populate('adresses')
              .exec (function (error,user){
              data.user=user
              console.log(user);
              return res.view('test',data);
              });
              user.adresses[0].ville;
      },


};
