(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,6919,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},10965,e=>{"use strict";var t=e.i(58138);let i=(...e)=>e.filter((e,t,i)=>!!e&&""!==e.trim()&&i.indexOf(e)===t).join(" ").trim();var r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,t.forwardRef)(({color:e="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:n,className:s="",children:l,iconNode:d,...c},p)=>(0,t.createElement)("svg",{ref:p,...r,width:a,height:a,stroke:e,strokeWidth:n?24*Number(o)/Number(a):o,className:i("lucide",s),...c},[...d.map(([e,i])=>(0,t.createElement)(e,i)),...Array.isArray(l)?l:[l]])),o=(e,r)=>{let o=(0,t.forwardRef)(({className:o,...n},s)=>(0,t.createElement)(a,{ref:s,iconNode:r,className:i(`lucide-${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,o),...n}));return o.displayName=`${e}`,o};e.s(["default",()=>o],10965)},29739,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return s}});let r=e.r(58138),a="undefined"==typeof window,o=a?()=>{}:r.useLayoutEffect,n=a?()=>{}:r.useEffect;function s(e){let{headManager:t,reduceComponentsToState:i}=e;function s(){if(t&&t.mountedInstances){let e=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(i(e))}}return a&&(t?.mountedInstances?.add(e.children),s()),o(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),o(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),n(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},87762,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={default:function(){return g},defaultHead:function(){return p}};for(var a in r)Object.defineProperty(i,a,{enumerable:!0,get:r[a]});let o=e.r(81258),n=e.r(44066),s=e.r(29511),l=n._(e.r(58138)),d=o._(e.r(29739)),c=e.r(37398);function p(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function u(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(6919);let f=["name","httpEquiv","charSet","itemProp"];function h(e){let t,i,r,a;return e.reduce(u,[]).reverse().concat(p().reverse()).filter((t=new Set,i=new Set,r=new Set,a={},e=>{let o=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;let i=e.key.slice(e.key.indexOf("$")+1);t.has(i)?o=!1:t.add(i)}switch(e.type){case"title":case"base":i.has(e.type)?o=!1:i.add(e.type);break;case"meta":for(let t=0,i=f.length;t<i;t++){let i=f[t];if(e.props.hasOwnProperty(i))if("charSet"===i)r.has(i)?o=!1:r.add(i);else{let t=e.props[i],r=a[i]||new Set;("name"!==i||!n)&&r.has(t)?o=!1:(r.add(t),a[i]=r)}}}return o})).reverse().map((e,t)=>{let i=e.key||t;return l.default.cloneElement(e,{key:i})})}let g=function({children:e}){let t=(0,l.useContext)(c.HeadManagerContext);return(0,s.jsx)(d.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},79078,(e,t,i)=>{"use strict";function r({widthInt:e,heightInt:t,blurWidth:i,blurHeight:r,blurDataURL:a,objectFit:o}){let n=i?40*i:e,s=r?40*r:t,l=n&&s?`viewBox='0 0 ${n} ${s}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},60966,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={VALID_LOADERS:function(){return o},imageConfigDefault:function(){return n}};for(var a in r)Object.defineProperty(i,a,{enumerable:!0,get:r[a]});let o=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},43248,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImgProps",{enumerable:!0,get:function(){return l}}),e.r(6919);let r=e.r(79078),a=e.r(60966),o=["-moz-initial","fill","none","scale-down",void 0];function n(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l({src:e,sizes:t,unoptimized:i=!1,priority:l=!1,preload:d=!1,loading:c,className:p,quality:u,width:f,height:h,fill:g=!1,style:m,overrideSrc:v,onLoad:b,onLoadingComplete:x,placeholder:y="empty",blurDataURL:w,fetchPriority:P,decoding:_="async",layout:C,objectFit:E,objectPosition:j,lazyBoundary:k,lazyRoot:z,...O},S){var A;let R,I,M,{imgConf:D,showAltText:T,blurComplete:$,defaultLoader:L}=S,F=D||a.imageConfigDefault;if("allSizes"in F)R=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t),i=F.qualities?.sort((e,t)=>e-t);R={...F,allSizes:e,deviceSizes:t,qualities:i}}if(void 0===L)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let N=O.loader||L;delete O.loader,delete O.srcSet;let U="__next_img_default"in N;if(U){if("custom"===R.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=N;N=t=>{let{config:i,...r}=t;return e(r)}}if(C){"fill"===C&&(g=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(m={...m,...e});let i={responsive:"100vw",fill:"100vw"}[C];i&&!t&&(t=i)}let B="",W=s(f),G=s(h);if((A=e)&&"object"==typeof A&&(n(A)||void 0!==A.src)){let t=n(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(I=t.blurWidth,M=t.blurHeight,w=w||t.blurDataURL,B=t.src,!g)if(W||G){if(W&&!G){let e=W/t.width;G=Math.round(t.height*e)}else if(!W&&G){let e=G/t.height;W=Math.round(t.width*e)}}else W=t.width,G=t.height}let q=!l&&!d&&("lazy"===c||void 0===c);(!(e="string"==typeof e?e:B)||e.startsWith("data:")||e.startsWith("blob:"))&&(i=!0,q=!1),R.unoptimized&&(i=!0),U&&!R.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(i=!0);let H=s(u),X=Object.assign(g?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:j}:{},T?{}:{color:"transparent"},m),V=$||"empty"===y?null:"blur"===y?`url("data:image/svg+xml;charset=utf-8,${(0,r.getImageBlurSvg)({widthInt:W,heightInt:G,blurWidth:I,blurHeight:M,blurDataURL:w||"",objectFit:X.objectFit})}")`:`url("${y}")`,Y=o.includes(X.objectFit)?"fill"===X.objectFit?"100% 100%":"cover":X.objectFit,J=V?{backgroundSize:Y,backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},K=function({config:e,src:t,unoptimized:i,width:r,quality:a,sizes:o,loader:n}){if(i)return{src:t,srcSet:void 0,sizes:void 0};let{widths:s,kind:l}=function({deviceSizes:e,allSizes:t},i,r){if(r){let i=/(^|\s)(1?\d?\d)vw/g,a=[];for(let e;e=i.exec(r);)a.push(parseInt(e[2]));if(a.length){let i=.01*Math.min(...a);return{widths:t.filter(t=>t>=e[0]*i),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof i?{widths:e,kind:"w"}:{widths:[...new Set([i,2*i].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,r,o),d=s.length-1;return{sizes:o||"w"!==l?o:"100vw",srcSet:s.map((i,r)=>`${n({config:e,src:t,quality:a,width:i})} ${"w"===l?i:r+1}${l}`).join(", "),src:n({config:e,src:t,quality:a,width:s[d]})}}({config:R,src:e,unoptimized:i,width:W,quality:H,sizes:t,loader:N}),Q=q?"lazy":c;return{props:{...O,loading:Q,fetchPriority:P,width:W,height:G,decoding:_,className:p,style:{...X,...J},sizes:K.sizes,srcSet:K.srcSet,src:v||K.src},meta:{unoptimized:i,preload:d||l,placeholder:y,fill:g}}}},33201,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=e.r(81258)._(e.r(58138)),a=e.r(60966),o=r.default.createContext(a.imageConfigDefault)},56781,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"RouterContext",{enumerable:!0,get:function(){return r}});let r=e.r(81258)._(e.r(58138)).default.createContext(null)},9845,(e,t,i)=>{"use strict";function r(e,t){let i=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-i)<Math.abs(e-i)?t:e,0):i}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"findClosestQuality",{enumerable:!0,get:function(){return r}})},85493,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return o}});let r=e.r(9845);function a({config:e,src:t,width:i,quality:a}){if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let o=(0,r.findClosestQuality)(a,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${i}&q=${o}${t.startsWith("/_next/static/media/"),""}`}a.__next_img_default=!0;let o=a},12642,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"Image",{enumerable:!0,get:function(){return y}});let r=e.r(81258),a=e.r(44066),o=e.r(29511),n=a._(e.r(58138)),s=r._(e.r(49463)),l=r._(e.r(87762)),d=e.r(43248),c=e.r(60966),p=e.r(33201);e.r(6919);let u=e.r(56781),f=r._(e.r(85493)),h=e.r(8191),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/igniteed/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,i,r,a,o,n){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),i?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,a=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}r?.current&&r.current(e)}}))}function v(e){return n.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,n.forwardRef)(({src:e,srcSet:t,sizes:i,height:r,width:a,decoding:s,className:l,style:d,fetchPriority:c,placeholder:p,loading:u,unoptimized:f,fill:g,onLoadRef:b,onLoadingCompleteRef:x,setBlurComplete:y,setShowAltText:w,sizesInput:P,onLoad:_,onError:C,...E},j)=>{let k=(0,n.useCallback)(e=>{e&&(C&&(e.src=e.src),e.complete&&m(e,p,b,x,y,f,P))},[e,p,b,x,y,C,f,P]),z=(0,h.useMergedRef)(j,k);return(0,o.jsx)("img",{...E,...v(c),loading:u,width:a,height:r,decoding:s,"data-nimg":g?"fill":"1",className:l,style:d,sizes:i,srcSet:t,src:e,ref:z,onLoad:e=>{m(e.currentTarget,p,b,x,y,f,P)},onError:e=>{w(!0),"empty"!==p&&y(!0),C&&C(e)}})});function x({isAppRouter:e,imgAttributes:t}){let i={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...v(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,i),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...i},"__nimg-"+t.src+t.srcSet+t.sizes)})}let y=(0,n.forwardRef)((e,t)=>{let i=(0,n.useContext)(u.RouterContext),r=(0,n.useContext)(p.ImageConfigContext),a=(0,n.useMemo)(()=>{let e=g||r||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t),a=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i,qualities:a,localPatterns:"undefined"==typeof window?r?.localPatterns:e.localPatterns}},[r]),{onLoad:s,onLoadingComplete:l}=e,h=(0,n.useRef)(s);(0,n.useEffect)(()=>{h.current=s},[s]);let m=(0,n.useRef)(l);(0,n.useEffect)(()=>{m.current=l},[l]);let[v,y]=(0,n.useState)(!1),[w,P]=(0,n.useState)(!1),{props:_,meta:C}=(0,d.getImgProps)(e,{defaultLoader:f.default,imgConf:a,blurComplete:v,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{..._,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:h,onLoadingCompleteRef:m,setBlurComplete:y,setShowAltText:P,sizesInput:e.sizes,ref:t}),C.preload?(0,o.jsx)(x,{isAppRouter:!i,imgAttributes:_}):null]})});("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},7846,e=>{"use strict";var t=e.i(29511),i=e.i(58138),r=e.i(67881);let a=(0,e.i(10965).default)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);function o(){let[o,n]=(0,i.useState)(!1),s=async()=>{n(!0);try{let t=(await e.A(66997)).default,{jsPDF:i}=await e.A(23086),r=document.createElement("iframe");r.style.position="absolute",r.style.left="-9999px",r.style.width="1200px",r.style.height="850px",document.body.appendChild(r);let a=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IgniteEd | Administrator Executive Summary</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    <style>
        :root {
            --purple: #56457f;
            --orange: #f27a37;
            --teal: #2f8ca8;
            --warm-white: #FEFDFB;
            --midnight: #192028;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Roboto', Arial, sans-serif;
            background-color: var(--warm-white);
            color: var(--midnight);
            font-size: 11px;
            line-height: 1.4;
            width: 1200px;
        }
        h1, h2, h3, h4 {
            font-family: 'Montserrat', Arial, sans-serif;
            font-weight: 600;
            color: var(--purple);
        }
        
        .hero {
            background: linear-gradient(to left, #56457f 0%, #2f8ca8 100%);
            color: white;
            padding: 28px 36px;
        }
        .hero-badge {
            display: inline-block;
            background: white;
            color: #56457f;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 9px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 12px;
        }
        .hero h1 {
            font-size: 26px;
            margin-bottom: 10px;
            line-height: 1.3;
        }
        .hero h1 .ignite { color: #56457f; }
        .hero h1 .ed { color: #f27a37; }
        .hero h1 .title { color: white; }
        .hero .tagline {
            font-size: 16px;
            opacity: 0.95;
            margin-bottom: 10px;
        }
        .hero .description {
            font-size: 12px;
            opacity: 0.9;
            max-width: 900px;
            line-height: 1.5;
        }
        
        .main {
            padding: 24px 36px;
        }
        
        .value-props {
            display: flex;
            gap: 24px;
            margin-bottom: 28px;
        }
        .value-prop {
            flex: 1;
            text-align: center;
            padding: 12px;
        }
        .value-prop-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 12px;
            font-size: 18px;
        }
        .value-prop-icon.teal { background: rgba(47, 140, 168, 0.15); color: #2f8ca8; }
        .value-prop-icon.orange { background: rgba(242, 122, 55, 0.15); color: #f27a37; }
        .value-prop-icon.purple { background: rgba(86, 69, 127, 0.15); color: #56457f; }
        .value-prop h3 {
            font-size: 14px;
            margin-bottom: 6px;
        }
        .value-prop p {
            font-size: 10px;
            color: #555;
            line-height: 1.4;
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 20px;
        }
        .section-title h2 {
            font-size: 18px;
            margin-bottom: 6px;
        }
        .section-title p {
            color: #777;
            font-size: 11px;
        }
        
        .phases {
            display: flex;
            gap: 12px;
            margin-bottom: 28px;
        }
        .phase {
            flex: 1;
            background: white;
            border-radius: 10px;
            padding: 14px;
            border-top: 4px solid #2f8ca8;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .phase-label {
            color: #2f8ca8;
            font-size: 8px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 6px;
        }
        .phase h4 {
            font-size: 12px;
            margin-bottom: 6px;
        }
        .phase p {
            font-size: 9px;
            color: #555;
            margin-bottom: 8px;
            line-height: 1.4;
        }
        .phase ul {
            list-style: none;
            font-size: 9px;
            color: #777;
        }
        .phase ul li {
            margin-bottom: 3px;
            padding-left: 10px;
            position: relative;
        }
        .phase ul li:before {
            content: "•";
            position: absolute;
            left: 0;
            color: #2f8ca8;
        }
        
        .tiers {
            display: flex;
            border: 1px solid #ddd;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 28px;
        }
        .tier {
            flex: 1;
            padding: 16px;
            background: white;
        }
        .tier.middle {
            background: #f8f8f8;
            border-left: 1px solid #ddd;
            border-right: 1px solid #ddd;
            position: relative;
        }
        .popular-badge {
            position: absolute;
            top: 0;
            right: 0;
            background: #f27a37;
            color: white;
            font-size: 8px;
            font-weight: 700;
            padding: 4px 10px;
            border-radius: 0 0 0 8px;
        }
        .tier h3 {
            font-size: 14px;
            margin-bottom: 4px;
        }
        .tier h3.teal { color: #2f8ca8; }
        .tier h3.orange { color: #f27a37; }
        .tier h3.purple { color: #56457f; }
        .tier .price {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 12px;
            color: #192028;
        }
        .tier .price span {
            font-size: 10px;
            font-weight: 400;
            color: #999;
        }
        .tier ul {
            list-style: none;
            font-size: 10px;
        }
        .tier ul li {
            display: flex;
            align-items: flex-start;
            gap: 6px;
            margin-bottom: 8px;
        }
        .tier ul li .check {
            font-weight: 700;
            font-size: 12px;
        }
        .tier:first-child ul li .check { color: #2f8ca8; }
        .tier.middle ul li .check { color: #f27a37; }
        .tier:last-child ul li .check { color: #56457f; }
        .tier .plus-label {
            font-size: 8px;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 10px;
        }
        .tier .plus-label.orange { color: #f27a37; }
        .tier .plus-label.purple { color: #56457f; }
        
        .leadership {
            text-align: center;
            border-top: 1px solid #eee;
            padding-top: 20px;
            margin-top: 12px;
        }
        .leadership-label {
            font-size: 9px;
            text-transform: uppercase;
            letter-spacing: 3px;
            color: #999;
            font-weight: 700;
            margin-bottom: 16px;
        }
        .leaders {
            display: flex;
            justify-content: center;
            gap: 60px;
        }
        .leader {
            text-align: center;
        }
        .leader .name {
            font-size: 14px;
            font-weight: 700;
            color: #56457f;
            margin-bottom: 3px;
            font-family: 'Montserrat', Arial, sans-serif;
        }
        .leader .role {
            font-size: 10px;
            font-weight: 700;
            color: #2f8ca8;
            margin-bottom: 3px;
        }
        .leader .org {
            font-size: 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #333;
        }
        .leadership-note {
            margin-top: 16px;
            font-size: 9px;
            color: #999;
            font-style: italic;
        }
        
        .footer {
            background: #192028;
            color: white;
            padding: 20px 36px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .footer h2 {
            color: white;
            font-size: 16px;
            margin-bottom: 6px;
        }
        .footer p {
            color: #888;
            font-size: 10px;
            max-width: 320px;
        }
        .footer-cta {
            text-align: right;
        }
        .footer-btn {
            display: inline-block;
            background: #f27a37;
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            font-weight: 700;
            text-decoration: none;
            font-size: 11px;
            margin-bottom: 8px;
        }
        .footer-copy {
            font-size: 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="hero">
        <div class="hero-badge">Strategic capacity-building partnership</div>
        <h1>
            <span class="ignite">Ignite</span><span class="ed">Ed</span><span class="title">: Responsible AI & Adaptive Learning for Educators</span>
        </h1>
        <p class="tagline">Where <strong>human curiosity</strong> meets <strong>responsible AI</strong>.</p>
        <p class="description">We prepare your educators to lead the AI disruption as Instructional Architects, mastering the design of resilient, human-centered learning environments that evolve alongside every new technological frontier.</p>
    </div>

    <div class="main">
        <div class="value-props">
            <div class="value-prop">
                <div class="value-prop-icon teal">&#10003;</div>
                <h3>Platform Agnostic</h3>
                <p>Principles that work across Google, Microsoft, Apple, or Canvas. We build long-term capability, not dependency on a single tool.</p>
            </div>
            <div class="value-prop">
                <div class="value-prop-icon orange">&#9881;</div>
                <h3>Instructional Architects</h3>
                <p>We move beyond "how to use a chatbot." We train educators to design high-quality, personalized learning systems that outlast software trends.</p>
            </div>
            <div class="value-prop">
                <div class="value-prop-icon purple">&#9889;</div>
                <h3>Pedagogy Led</h3>
                <p>Grounded in UDL and differentiation science. AI is the engine, but human expertise is always the driver of the classroom.</p>
            </div>
        </div>

        <div class="section-title">
            <h2>The 4-Phase Transformation Cycle</h2>
            <p>A deliberate 12-month journey toward sustainable capacity building.</p>
        </div>
        
        <div class="phases">
            <div class="phase">
                <div class="phase-label">Phase 01 | Months 1-3</div>
                <h4>Ignite & Align</h4>
                <p>Establishing baseline literacy, safe governance, and the "Human-in-the-Loop" commitment.</p>
                <ul>
                    <li>Policy Alignment</li>
                    <li>AI Ethics Audit</li>
                </ul>
            </div>
            <div class="phase">
                <div class="phase-label">Phase 02 | Months 4-6</div>
                <h4>Build & Analyze</h4>
                <p>Creating multi-modal UDL resources and leveraging privacy-safe learning analytics.</p>
                <ul>
                    <li>Prompt Engineering</li>
                    <li>UDL Content Design</li>
                </ul>
            </div>
            <div class="phase">
                <div class="phase-label">Phase 03 | Months 7-9</div>
                <h4>Apply & Pilot</h4>
                <p>Running classroom PDSA micro-pilots to measure and refine instructional impact.</p>
                <ul>
                    <li>Classroom Piloting</li>
                    <li>Impact Measurement</li>
                </ul>
            </div>
            <div class="phase">
                <div class="phase-label">Phase 04 | Months 10-12</div>
                <h4>Scale & Celebrate</h4>
                <p>Consolidating evidence in portfolios and certifying internal peer-mentors.</p>
                <ul>
                    <li>Peer Certification</li>
                    <li>Showcase Events</li>
                </ul>
            </div>
        </div>

        <div class="section-title">
            <h2>Partnership Tiers</h2>
            <p style="font-style: italic;">Designed for 10-teacher cohorts to maximize institutional impact.</p>
        </div>

        <div class="tiers">
            <div class="tier">
                <h3 class="teal">Essential</h3>
                <div class="price">$30,000 <span>/ year</span></div>
                <ul>
                    <li><span class="check">&#10003;</span> Full 8-Module Curriculum</li>
                    <li><span class="check">&#10003;</span> Administrator "Look-Fors" Training</li>
                    <li><span class="check">&#10003;</span> 3 Coaching Cycles</li>
                    <li><span class="check">&#10003;</span> Resource Hub Access</li>
                </ul>
            </div>
            <div class="tier middle">
                <div class="popular-badge">MOST POPULAR</div>
                <h3 class="orange">Premium</h3>
                <div class="price">$48,000 <span>/ year</span></div>
                <div class="plus-label orange">Everything in Essential, plus:</div>
                <ul>
                    <li><span class="check">&#10003;</span> Monthly "Office Hours"</li>
                    <li><span class="check">&#10003;</span> Family & Parent Guide Toolkit</li>
                    <li><span class="check">&#10003;</span> 8 In-Person/Hybrid Coaching Cycles</li>
                </ul>
            </div>
            <div class="tier">
                <h3 class="purple">Platinum</h3>
                <div class="price">$70,000 <span>/ year</span></div>
                <div class="plus-label purple">Everything in Premium, plus:</div>
                <ul>
                    <li><span class="check">&#10003;</span> Custom IT "Technical Track"</li>
                    <li><span class="check">&#10003;</span> Board-Level Strategic Advisory</li>
                    <li><span class="check">&#10003;</span> "Train the Trainer" Certification</li>
                </ul>
            </div>
        </div>

        <div class="leadership">
            <div class="leadership-label">Design & Development Leadership</div>
            <div class="leaders">
                <div class="leader">
                    <div class="name">Azade Sanjari</div>
                    <div class="role">AI Architect</div>
                    <div class="org">Stanford Graduate School of Business</div>
                </div>
                <div class="leader">
                    <div class="name">Dr. Azin Sanjari</div>
                    <div class="role">Professor of Mathematics Education</div>
                    <div class="org">University of Central Arkansas</div>
                </div>
            </div>
            <p class="leadership-note">IgniteEd is a proprietary framework designed and developed by the Ignite Curiosity Lab.</p>
        </div>
    </div>

    <div class="footer">
        <div>
            <h2>Ready to transform?</h2>
            <p>Schedule a consultation to audit your district's AI readiness and build a custom roadmap.</p>
        </div>
        <div class="footer-cta">
            <div class="footer-btn">Book a Strategy Session</div>
            <div class="footer-copy">&copy; 2026 Ignite Curiosity Lab</div>
        </div>
    </div>
</body>
</html>`;r.contentDocument?.open(),r.contentDocument?.write(a),r.contentDocument?.close(),await new Promise(e=>setTimeout(e,1500));let o=r.contentDocument?.body;if(!o)throw Error("Could not access iframe content");let n=await t(o,{scale:2,useCORS:!0,allowTaint:!0,backgroundColor:"#FEFDFB",width:1200,windowWidth:1200}),s=n.toDataURL("image/png"),l=n.width,d=n.height,c=297/(l/d),p=new i({orientation:"landscape",unit:"mm",format:[297,c]});p.addImage(s,"PNG",0,0,297,c),p.save("IgniteEd-Program-Overview.pdf"),document.body.removeChild(r)}catch(e){console.error("Error generating PDF:",e),window.open("/igniteed/IgniteEd-Program-Overview.html","_blank")}finally{n(!1)}};return(0,t.jsx)(r.Button,{size:"lg",variant:"outline",className:"bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 h-auto",onClick:s,disabled:o,children:o?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{className:"mr-2 h-5 w-5 animate-spin"}),"Generating PDF..."]}):"Download Program Overview"})}e.s(["DownloadPDFButton",()=>o],7846)},66997,e=>{e.v(t=>Promise.all(["static/chunks/cf4fc1e20e39d4cb.js"].map(t=>e.l(t))).then(()=>t(21487)))},23086,e=>{e.v(t=>Promise.all(["static/chunks/31766a292ce72031.js","static/chunks/d8f4851773373edb.js"].map(t=>e.l(t))).then(()=>t(71710)))}]);