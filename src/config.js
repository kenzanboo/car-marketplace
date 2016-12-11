require('babel-polyfill');

const environment = {
  development: {
    isProduction: false,
  },
  staging: {
    isProduction: false,
  },
  production: {
    isProduction: true,
  },
}[process.env.NODE_ENV || 'development'];

const config =  Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT || '8888',
  app: {
    title: 'Prodigy',
    description: 'Easy and simple car buying',
    head: {
      titleTemplate: 'Prodigy: %s',
      meta: [
        { name: 'description', content: 'Purchase a car end to end online' },
        // For third party styles
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'Car Buying Online' },
        { property: 'og:image', content: 'https://getprodigy.com/wp-content/uploads/2015/02/logo_coming_soon.png' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'Prodigy' },
        { property: 'og:description', content: 'Online Car Buying' },
        { property: 'og:card', content: 'summary' },
        { property: 'og:site', content: 'Prodigy' },
        { property: 'og:creator', content: 'Prodigy' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' },
      ],
      link: [
        {
          href: 'https://fonts.googleapis.com/css?family=Roboto:400,300,500',
          rel: 'stylesheet',
          type: 'text/css',
        },
        {
          rel: 'shortcut icon',
          href: '/favicon.ico',
        },
      ],
      script: [
        {
          type: 'text/javascript',
          innerHTML: `
            window.__prodigyAPI = window.__prodigyAPI || {};

          `,
        },
        {
          type: 'text/javascript',
          src: 'https://cdn.getprodigy.com/static.js',
        },
        {
          src: 'https://cdn.ravenjs.com/2.3.0/raven.min.js',
        },
        {
          type: 'text/javascript',
          innerHTML: "Raven.config('https://74c56b4857f647229df426ed921971ff@app.getsentry.com/84567').install();",
        },
      ],
    },
  },

}, environment);

if (environment.isProduction) {
  config.app.head.script.push({ // Lucky Orange, optimizely, Google analytics  FIX THIS FOR STAGING
    type: 'text/javascript',
    innerHTML: `
      if (window.location.href.indexOf('staging') == -1 ){
          window.__lo_site_id = 60142;
          (function() {
          var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
          wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
          })();

          // optimizely
          (function() {
          var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
          wa.src = 'https://cdn.optimizely.com/js/5134300034.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
          })();

          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
           m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-79923447-1', 'auto');
          ga('send', 'pageview');


          // full story
          window['_fs_debug'] = false;
          window['_fs_host'] = 'www.fullstory.com';
          window['_fs_org'] = '1HV3Q';
          window['_fs_namespace'] = 'FS';
          (function(m,n,e,t,l,o,g,y){
            if (e in m && m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'); return;}
            g=m[e]=function(a,b){g.q?g.q.push([a,b]):g._api(a,b);};g.q=[];
            o=n.createElement(t);o.async=1;o.src='https://'+_fs_host+'/s/fs.js';
            y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
            g.identify=function(i,v){g(l,{uid:i});if(v)g(l,v)};g.setUserVars=function(v){g(l,v)};
            g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
            g.clearUserCookie=function(d,i){d=n.domain;while(1){n.cookie='fs_uid=;domain='+d+
                    ';path=/;expires='+new Date(0);i=d.indexOf('.');if(i<0)break;d=d.slice(i+1)}}
          })(window,document,window['_fs_namespace'],'script','user');

          // Hot Jar
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:256553,hjsv:5};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');

          // decible insights
          (function(d,e,c,i,b,el,it) {
            d._da_=d._da_||[];_da_.oldErr=d.onerror;_da_.err=[];
            d.onerror=function(){_da_.err.push(arguments);_da_.oldErr&&_da_.oldErr.apply(d,Array.prototype.slice.call(arguments));};
            d.DecibelInsight=b;d[b]=d[b]||function(){(d[b].q=d[b].q||[]).push(arguments);};
            el=e.createElement(c),it=e.getElementsByTagName(c)[0];el.async=1;el.src=i;it.parentNode.insertBefore(el,it);
          })(window,document,'script','//cdn.decibelinsight.net/i/13615/68905/di.js','decibelInsight');

      }
      `,
  });
}
console.log(config.app.head.script);
module.exports = config;
