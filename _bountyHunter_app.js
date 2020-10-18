// v0.1x 
((window)=>{

    //const URL_PREFIX = "http://localhost:3030" 
    const URL_PREFIX = "https://cdn.jsdelivr.net/gh/kaigani/avastars-bounty-hunter"

    function loadScript(url) {
        return new Promise(function (resolve, reject) {
          let script = document.createElement('script')
      
          script.async = true
          script.src = `${url}?${Date.now()}` // refresh cached version
      
          // trigger fulfilled state when script is ready
          script.onload = resolve
      
          // trigger rejected state when script is not found
          script.onerror = reject
      
          document.head.appendChild(script)
        })
    }

    function loadStyles(url) {
        return new Promise(function (resolve, reject) {
          let link = document.createElement('link')
      
          link.rel = 'stylesheet'
          link.href = url
      
          // trigger fulfilled state when stylesheet is ready
          link.onload = resolve
      
          // trigger rejected state when stylesheet is not found
          link.onerror = reject
      
          document.head.appendChild(link)
        })
      }

    // LOAD CLASSES
    Promise.all([

        // CSS
        loadStyles(`${URL_PREFIX}/kai_styles.min.css`),

        // kai_globals
        loadScript(`${URL_PREFIX}/kai_globals.min.js`), 
        loadScript(`${URL_PREFIX}/kai_xDC.min.js`), 

        // avastarTraits - data
        loadScript(`${URL_PREFIX}/avastar-traits.min.js`), 

        // kai_utils - utility functions
        loadScript(`${URL_PREFIX}/kai_utils.min.js`),
        
        // kai_ViewManager
        loadScript(`${URL_PREFIX}@0bef743a30aa062fb766b85ab9f4515b6b2f5bf7/kai_ViewManager.min.js`),

        // AvastarScan - core app
        loadScript(`${URL_PREFIX}/kai_AvastarScanList.min.js`),
        loadScript(`${URL_PREFIX}@0bef743a30aa062fb766b85ab9f4515b6b2f5bf7/kai_AvastarScan.min.js`)

    ]).then(initApp)

    function initApp(){

        //kai_utils.enableConsole()

        let app = new kai_AvastarScan(document)
        let vm = new kai_ViewManager(app.avastarScanList) // avastarScanList as data manager
    }

})(window)
