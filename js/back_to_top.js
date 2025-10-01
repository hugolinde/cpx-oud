function assignIds(selector, prefix) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    element.id = `${prefix}-${index}`;
  });
}

assignIds('.w-toplink', 'mijn-knop-id');
assignIds('.w-nav-anchor', 'mijn-menu-id');

assignIds('.w-grid-list','mijn-grid');

assignIds('.l-canvas.type_wide','mijn-canvas');

document.getElementById('mijn-knop-id-0').addEventListener('click', function() {
    window.scrollTo(0, 0); // Scroll to top
    console.log(window.location.pathname);
    let pathname=window.location.pathname;
    switch(pathname){
      case "/home/":
        document.getElementById('mijn-menu-id-0').focus(); // Set focus
        break;
     case "/diensten/":
        document.getElementById('mijn-menu-id-1').focus(); // Set focus
        break;
    case "/cases/":
        document.getElementById('mijn-menu-id-2').focus(); // Set focus
        break;
    case "/social-return/":
        document.getElementById('mijn-menu-id-3').focus(); // Set focus
        break;
    case "/werken-bij/":
        document.getElementById('mijn-menu-id-4').focus(); // Set focus
        break;
    case "/over-ons/":
        document.getElementById('mijn-menu-id-5').focus(); // Set focus
        break;
    case "/contact/":
        document.getElementById('mijn-menu-id-6').focus(); // Set focus
        break;
     default:
        document.getElementById('mijn-menu-id-0').focus(); // Set focus
    }
});
