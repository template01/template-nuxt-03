export default function ({ route, redirect }) {

  function isEmpty(obj) {
      for(var key in obj) {
          if(obj.hasOwnProperty(key))
              return false;
      }
      return true;
  }

  if(!isEmpty(route.query.lang)) {
      if (['nl', 'en', 'dk'].indexOf(route.query.lang) < 0) {
          redirect(route.path,{'lang':'en'})
      }
  }


}
