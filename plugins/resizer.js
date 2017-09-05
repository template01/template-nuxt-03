import _ from 'lodash'

export default ({ isClient, store }) => {
  if (isClient) {
    const detectSmallDevice = () => {

      if(window.innerWidth< 960){
        store.commit('SET_SMALLSCREEN', true)

      }else{
        store.commit('SET_SMALLSCREEN', false)

      }

      console.log('heya')

    };


    detectSmallDevice();

    window.addEventListener('resize', _.debounce(detectSmallDevice, 100));
  }
};
