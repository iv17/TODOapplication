export function getCurrentDate0() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    return today = dd + ' / ' + mm + ' / ' + yyyy;
}

export function getCurrentDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    return today = dd + '/' + mm + '/' + yyyy;
}

export function getRandomItem(items) {
    return items[Math.floor(Math.random()*items.length)];       
}

export function filterTODOs(todos) {
    return todos.filter(todo => {
        return todo.Finished === false 
      });
}