//créé la liste cart qui correspond au contenu du panier
var cart=[];
//on créé une liste de tous les articles de la page,
var articlesList = [];
// quand la page est chargée
$(document).ready(function(){
//    confirm("En accedant à votre site préféré, vous nous autorisez à utiliser vos données personnelles à des fins commerciales.\nNous vous conseillons donc de créer dès maintenant une addresse e-mail de secours.")
    createArticlesList();
    createArticleModal();
});
//cette fonction cree la liste des articles de la page
function createArticlesList(){
    //on parcours tous les éléments de la page qui portent la classe 'article'
    $('.article').each(function(){
        //on créé un nouveau tableau articleInfos qui comportera toutes les infos de l'article en cours
        let articleInfos = [];
        //on recupere tous les elements qui nous interessent
        articleInfos[0]=$(this).attr('id');                         //l'id de l'article
        articleInfos[1]=$(this).find('img').attr('src');            //l'image qui lui est associée
        articleInfos[2]=$(this).find('.articleName').text();        //le nom de l'article
        articleInfos[3]=$(this).find('.articleDescription').text(); //sa description
        articleInfos[4]=$(this).find('.price').text(); //son prix
        articleInfos[5]=$(this).find('.finalPrice').text(); //son prix
        //et on injecte ce tableau dans notre liste d'articles
        articlesList.push(articleInfos);
    });
    var text ="";
    for(i=0;i<articlesList.length;i++){
        text += articlesList[i] + "\n";
    }
     // alert(text);
};
//cette fontion ajoute un article au panier
function addToCart(){

};
//cette fonction fait apparaitre une modale lorsque l'on clique sur un article1
function createArticleModal(){
    // lorsque la souris est au dessus d'un article
    $('.article').hover(function(){
        //on passe le curseur en pointeur
        document.body.style.cursor = "pointer";
    });
    //lorsque l'on clique sur un article de la classe article
    $('.article').click(function(){
        //on parcours le tableau des articles pour retrouver l'index
        for (i=0; i<articlesList.length;i++){
            //des que je tombe sur l'id de l'element cliqué (premiere entrée du sous tableau) je quitte la boucle
            if (articlesList[i][0]==$(this).attr('id')){
                break;
            }
        }
        //je recupere les infos de l'article qui m'interessent
        var modalId=articlesList[i][0];
        var modalImg=articlesList[i][1];
        var modalTitle=articlesList[i][2];
        var modalDescription=articlesList[i][3];
        var modalPrice=articlesList[i][4];
        var modalFinalPrice=articlesList[i][5];

        //je créé la modale de l'article sélectionné
        var modal= $('  <div id="articleModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">\
                            <div class="modal-dialog modal-lg">\
                                <div class="modal-content">'
                                    +'<div class="row m-2">'
                                        +'<div class="col-6">'
                                            +'<img class="img-fluid mb-2" src="' + modalImg +'"></img>'
                                            +'<p class="my-0 py-0">Prix initial: <strike>'+modalFinalPrice+'€</strike><p>'
                                            +'<div class="bgc5">'
                                                +'<p class="my-0">Pour vous seulement :</p>'
                                                +'<p style="font-size:2em;"><b>'+modalFinalPrice+'€</b><p>'
                                            +'</div>'
                                        +'</div>'
                                        +'<div class="col-6 justify-content-center">'
                                            +'<h5 class="font-weight-bold">' + modalTitle + '</h5>'
                                            +'<hr>'
                                            +'<p>'+modalDescription+'</p>'
                                        +'</div>'
                                    +'</div>'
                                    +'<div class="row m-2 my-2 justify-content-center">'
                                        +'<button class="btn bgc1 txc4 mx-1">Ajouter au panier</button>'
                                        +'<button class="btn bgc6 mx-1">Continuer mes achats</button>'
                                    +'</div>'
                                +'</div>\
                            </div>\
                        </div>');
        //j'injecte la modal dans le DOM après l'article
        $('#articleModal').remove();
        $(this).after(modal);
        $('#articleModal').modal('toggle');
        //                 var small = $('<small></small>');
        //                 //on ajoute le message
        //                 small.text(input.validationMessage);
        //                 //on ajoute la classe alert de bootstrap
        //                 small.addClass('text-center');
        //                 //on ajoute la balise que l'on a créée après l'input
        //                 $(input).after(small);
        // j'alerte le contenu du tableau
    //    alert(articlesList[i]);
    });
}
