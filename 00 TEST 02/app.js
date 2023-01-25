/* 
    $('div').mouseup(function() {
        alert(getSelectedText());
    });

    function getSelectedText() {
        if (window.getSelection) {
            return window.getSelection().toString();
        } else if (document.selection) {
            return document.selection.createRange().text;
        }
        return '';
    }
    */
// http://jsfiddle.net/FvnPS/11/

// Proje Bir Metin olustur. Ustte tuslar ile o metindeki secilen yerleri tus islevleri ile duzenle. text edit programi gibi
