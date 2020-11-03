function change_nbRlt(){
    // Défintion du nombre de roulement. Permet de générer les onglets associés au roulement
    nbRlt = parseInt(document.getElementById("nbRlt").value);
    if (parseInt(anc_onglet) > nbRlt) {
        anc_onglet = "1";
    }
    var element = document.getElementById("systeme_onglets");
    element.parentNode.removeChild(element);
    add_rlt();
    change_onglet(anc_onglet);
}

function change_onglet(name){
    document.getElementById('onglet_'+anc_onglet).className = 'onglet_0 onglet';
    document.getElementById('onglet_'+name).className = 'onglet_1 onglet';
    document.getElementById('contenu_onglet_'+anc_onglet).style.display = 'none';
    document.getElementById('contenu_onglet_'+name).style.display = 'block';
    anc_onglet = name;
}

function add_rlt(){
    var systeme_onglets = document.createElement("div");
    systeme_onglets.className = "systeme_onglets";
    systeme_onglets.id = "systeme_onglets";
    
    var onglets = document.createElement("div");
    onglets.className = "onglets";
    
    var contenu_onglets = document.createElement("div");
    contenu_onglets.className = "contenu_onglets";
    
    for (var i = 0; i < nbRlt; i++) {
        var onglet = document.createElement("span");
        onglet.className = "onglet_0 onglet";
        onglet.id = "onglet_" + String(i + 1);
        const j = String(i + 1);
        onglet.onclick = function() {change_onglet(j)};
        
        var y = document.createTextNode("onglet " + String(i + 1));
        onglet.appendChild(y);
        onglets.appendChild(onglet);
        
        var contenu = document.createElement("div");
        contenu.className = "contenu_onglet";
        contenu.id = "contenu_onglet_" + String(i + 1);
        
        var title = document.createElement("h1");
        y = document.createTextNode("onglet " + String(i + 1));
        title.appendChild(y);
        
        var contenuText = document.createElement("p");
        var y = document.createTextNode("contenu onglet " + String(i + 1));
        contenuText.appendChild(y);
        contenuChamps = contenuRlt();
        
        contenu.appendChild(title);
        contenu.appendChild(contenuChamps);
        
        contenu_onglets.appendChild(contenu);
    }
    systeme_onglets.appendChild(onglets);
    systeme_onglets.appendChild(contenu_onglets);
    
    var currentDiv = document.getElementById('divClick');
    document.body.insertBefore(systeme_onglets, currentDiv);
}
function contenuRlt(){
    var nomBagues = ["bague OR", "bague IR"];
    var parameters = [["D", "Do", "Lo", "ko", "Bo", "mat"], ["d", "Di", "Li", "ki", "Bi", "mat"]];
    
    var materiaux = ["W14", "W19", "W21"]
    
    var par_rlt = document.createElement("div");
    for (var i = 0; i < 2; i++){
        
        var form = document.createElement("form");
        form.onsubmit = "return false";
        
        for (var j = 0; j < parameters[i].length; j++){
            var div = document.createElement("div");
            var label = document.createElement("label");
            var text = document.createTextNode(parameters[i][j]);
            label.appendChild(text);
            div.appendChild(label);
            if (j < 5){
                var input = document.createElement("input");
                input.id = parameters[i][j];
                input.setAttribute('type','number');
                var proba = document.createElement('a');
                proba.id = "proba_" + parameters[i][j];
                proba.className = "proba";
                var y = document.createTextNode("...");
                proba.appendChild(y);
                proba.href = "proba.html"
                div.appendChild(input);
                div.appendChild(proba);
            }
            else{
                input = document.createElement("select");
                input.id = "mat_select";
                for (var k = 0; k < materiaux.length; k++){
                    var option = document.createElement("option");
                    option.value = materiaux[k];
                    option.text = materiaux[k];
                    input.appendChild(option);
                    div.appendChild(input);
                }
            }
            form.appendChild(div);
        }
        
        var bague = document.createElement("div");
        bague.id = nomBagues[i];
        bague.appendChild(form);
        
        par_rlt.appendChild(bague);
    }
    return par_rlt;
    
}