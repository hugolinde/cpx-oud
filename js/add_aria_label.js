function addAriaLabelToMultipleClasses(classSelectors, ariaLabelValue) {
  const elements = document.querySelectorAll(classSelectors); // Use classSelectors directly

  elements.forEach(element => {
    element.setAttribute('aria-label', ariaLabelValue);
  });
}

addAriaLabelToMultipleClasses('.fas.fa-phone-alt ', 'Telefoon');
addAriaLabelToMultipleClasses('.fas.fa-envelope', 'E-mail');
addAriaLabelToMultipleClasses('.fas.fa-map-marker-alt ', 'Adressen');

const linkData = [
  {
    href: '/cases/?filter_category=it-projecten#cases',
    ariaLabel: 'Zie IT-projecten',
  },
  {
    href: '/cases/?filter_category=it-staffing#cases',
    ariaLabel: 'Zie IT-staffing',
  },
  {
    href: '/cases/?filter_category=innovationlabs#cases',
    ariaLabel: 'Zie innovation labs',
  },
];

linkData.forEach((linkInfo) => {
  const specificLink = document.querySelector(`a[href="${linkInfo.href}"]`);
  if (specificLink) {
    specificLink.setAttribute('aria-label', linkInfo.ariaLabel);
  }
});

const element = document.getElementById("mijn-grid-1");
if ( element !== null  ){
  element.setAttribute("tabindex","-1");
  element.setAttribute("aria-disabled","true");
}
//element.setAttribute("role","list");
//element.setAttribute("aria-label","logo grid");

const canvas = document.getElementById("mijn-canvas-0");
if ( canvas !== null){
  canvas.setAttribute("tabindex","-1");
  canvas.setAttribute("aria-disabled","true");
}
//canvas.setAttribute("role","main");
//canvas.setAttribute("aria-label","website");
