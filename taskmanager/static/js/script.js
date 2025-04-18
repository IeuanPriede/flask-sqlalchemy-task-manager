document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialization
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);

    // datepicker initialization  
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: 'Select'}
    });

    // select initialization    
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // collapsible initialization
    var collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
}); 