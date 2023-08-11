let addBtn = document.querySelector( '#add-btn' );
let ul = document.querySelector( '#todo-list' );

addBtn.addEventListener( 'click', function () {
    
    let todoText = document.querySelector( '#todo-text' ).value;
    let todoList = document.querySelector( '#todo-list' );

    if ( todoText == '' ) {
        alert( 'Plz type your task' );
    } else {
        let li = document.createElement( 'li' );
        todoList.appendChild( li );
        li.innerHTML = todoText;
        let span = document.createElement( 'span' );
        span.innerHTML = " X ";
        li.appendChild( span );
        document.querySelector( '#todo-text' ).value = '';
        
    }
    
} )

ul.addEventListener( 'click', function (e) {
    if ( e.target.tagName == "SPAN" ) {
        alert('Plz click on cross')
        e.target.parentNode.remove();

        

    } else {
        alert('Please click in cross')
    }
})