/**
 * MedecinController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */





module.exports = {
  
    inscrire: function(req, res){
        res.view('pages/inscrire');
    },

    ajout: function(req, res){
        var nom = req.param("nom");
        var prenom = req.param("prenom");
        var categorie = req.param("categorie");
        Medecin.create(req.allParams(), function(err, user){
            if(err){
                console.log("Erreur:" + err);
            }
            else{
             
                res.redirect('/vue');
                }
            
     })
    },
    affiche: function(req, res){
        Medecin.find(function(err, medecin){
          if(err) return res.send(err);
         // console.log(client);
          res.view('pages/affiche', {medecin:medecin});
        });
      },

};

