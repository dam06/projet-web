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
      },
};
