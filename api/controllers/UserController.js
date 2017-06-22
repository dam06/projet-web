var path = require('path');
module.exports = {

     test: function (req,res) {
        res.json({val1:'val1',val2 :'val2'});
     },

    moncompte: function (req, res) {
      var data={};

      data.mesdata  = {
      title: " information du compte utilisateur",
      content : "mettre a jour les infos utilisateur",
                   };
               data.user=req.user;


             console.log(req.user);

         var where={id:req.user.id};
              User.findOne(where)
              .populate('adresses')
              .exec (function (error,user){
              data.user=user;
              console.log(user);
              return res.view('moncompte',data);
              });
      },
          upload: function  (req, res) {
            req.file('avatar').upload({
              dirname:path.resolve(sails.config.appPath, 'assets/images/upload')
              },function (err, files) {
              if (err) return res.serverError(err);
         console.log(path.basename(files[0].fd));
          var where={id:req.user.id,urlAvatar:path.basename(files[0].fd)};
                       User.update(where).exec (function (error,user){
                       data.user=user;
                       console.log(user);
              return res.json({
                message: files.length + ' file(s) uploaded successfully!',

                files: files

              });

            });
        });
        }

}

