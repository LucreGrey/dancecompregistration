import Calendarify from "calendarify"

const calendarify = new Calendarify('.date-picker', {
  // accent color in hex
  accentColor: '#0090FC',
  // enable dark mode
  isDark: true,
  // z-index property
  zIndex: 9999, 
  // append additional CSS classes to the date picker
  customClass: ['font-poppins'], 
  // localize the date picker here
  locale: {
    format: "DD-MM-YYYY", // date format
    lang: {
      code: 'id', // language id
      months: [/* month names */], 
      weekdays: [/* weekdays*/],
    }
  }
  
})
calendarify.init();

