function include(file) {
      
    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;
      
    document.getElementsByTagName('head').item(0).appendChild(script);
      
    }
      
    /* Include Many js files */
include('lib/jstable/jstable.min.js');
include('configuracoes/config.js');
include('js/descriptionObject.js');
include('js/converter.js');
include('js/ui.js');