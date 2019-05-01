//créé la liste cart qui correspond au contenu du panier
var cart=[];
//on créé une liste de tous les articles de la page,
var articlesList = [];
// quand la page est chargée
$(document).ready(function(){
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
        articleInfos[4]=$(this).find('.price').text(); //sa description
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
    })
    //lorsque l'on clique sur un article de la classe article
    $('.article').click(function(){
        //on parcours le tableau des articles pour retrouver l'index
        for (index=0; i<articlesList.length;index++){
            //des que je tombe sur l'id de l'element cliqué (premiere entrée du sous tableau) je quitte la boucle
            if (articlesList[i][0]==$(this).attr('id')){
                break;
            }
        }
        // j'alerte le contenu du tableau
        alert(articlesList[index]);
    });
}
