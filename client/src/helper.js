export function getCurrentDate() {
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

export function random_item(items) {
    return items[Math.floor(Math.random()*items.length)];       
  }