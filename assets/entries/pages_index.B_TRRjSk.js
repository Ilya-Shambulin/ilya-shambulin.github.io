import{r as p,a as B,R as q,j as e,b as g,i as E,P as $,c as D,d as H}from"../chunks/chunk-Ckdsfueu.js";/* empty css                      */var U=(c,t)=>/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(c)===!1&&(t!==""&&c.startsWith("/")&&c.startsWith(t))===!1,F=(c,t,n)=>c===""?{pathname:t.pathname,search:t.search,hash:""}:c.startsWith("#")?{pathname:t.pathname,search:t.search,hash:c==="#"?"":c}:n,V=(c,t)=>c.pathname===t.pathname&&c.search===t.search&&c.hash===t.hash;const W=(c,t,n)=>{const{href:i,"aria-current":a,className:s,...r}=c,o=F(i,t,n),d=V(t,o),h=[s,d?"active":void 0].filter(Boolean).join(" ");return{linkProps:r,currentLinkProps:{...d?{"aria-current":a??"page"}:{},...h===""?{}:{className:h}}}},I=({prefetch:c,discover:t,reloadDocument:n,replace:i,preventScrollReset:a,relative:s,state:r,viewTransition:o,...d})=>d,Q=()=>{if(!(typeof window>"u"))return window.location.href},X=c=>{if(c!==void 0)return new URL(c,"https://webstudio.local")},l=p.forwardRef((c,t)=>{const n=p.useContext(B),{assetBaseUrl:i}=p.useContext(q),{children:a,$webstudio$canvasOnly$assetId:s,"aria-current":r,className:o,...d}=c,h=d.href!==void 0,y=h?String(d.href):"#",z=n??Q(),x=X(z);let w=I(d),k={...r===void 0?{}:{"aria-current":r},...o===void 0?{}:{className:o}};if(x&&h&&U(y,i)){const f=W({...d,href:y,"aria-current":r,className:o},x,new URL(y,x));w=I(f.linkProps),k=f.currentLinkProps}return e.jsx("a",{...w,...k,href:y===""&&x?`${x.pathname}${x.search}`:y,ref:t,children:a})});l.displayName="Link";function Y(...c){return c.length===1&&c[0]?c[0]:t=>{for(let n of c)typeof n=="function"?n(t):n!=null&&(n.current=t)}}const G=()=>document.readyState==="complete"||document.readyState==="interactive",v=[];let C=!1;const Z=()=>{if(G()===!1){console.error("DOMContentLoaded event has not been fired yet");return}if(C)return;C=!0;const c=document.addEventListener,t=window.addEventListener,n=new Event("DOMContentLoaded"),i=new Event("load");window.addEventListener=(a,s,r)=>{a==="DOMContentLoaded"?v.push(()=>s.call(window,n)):(a==="load"&&v.push(()=>s.call(window,i)),t.call(window,a,s,r))},document.addEventListener=(a,s,r)=>{a==="DOMContentLoaded"?v.push(()=>s.call(document,n)):c.call(document,a,s,r)}},K=()=>{for(const c of v)c();v.length=0},J="client-",ee=c=>new Promise((t,n)=>{const i=document.createElement("script"),a=c.hasAttribute("src"),s=c.type==="module";for(const{name:r,value:o}of c.attributes)i.setAttribute(r,o);if(i.dataset.testid!==void 0&&(i.dataset.testid=`${J}${i.dataset.testid}`),a)i.addEventListener("load",()=>{t()}),i.addEventListener("error",n);else{if(s){const r=new Blob([c.innerText],{type:"text/javascript"}),o=URL.createObjectURL(r);import(o).then(t).catch(n).finally(()=>{URL.revokeObjectURL(o)});return}i.textContent=c.innerText}c.replaceWith(i),a===!1&&t()}),N=[];let S=!1;const ce=async c=>{if(N.push(...c),await Promise.resolve(),!S){for(Z(),S=!0;N.length>0;)await N.shift()();K(),S=!1}},te=c=>{const t=c.querySelectorAll("script"),n=[],i=[];t.forEach(a=>{(a.hasAttribute("async")?i:n).push(()=>ee(a))});for(const a of i)a();ce(n)},ne=c=>{const{code:t,innerRef:n,...i}=c;return e.jsx("div",{ref:n,...i,style:{display:"block",padding:20},children:'Open the "Settings" panel to insert HTML code.'})},P=()=>p.useSyncExternalStore(()=>()=>{},()=>!1,()=>!0),j=c=>{if(!P())return c.children},T=c=>{const{code:t,innerRef:n,...i}=c,a=p.useRef(null),s=p.useRef(!0),r=p.useMemo(()=>({__html:t??""}),[t]);return p.useEffect(()=>{const o=a.current;o&&s.current&&(s.current=!1,te(o))},[]),e.jsx("div",{...i,ref:Y(n,a),dangerouslySetInnerHTML:r})},_=c=>{const{code:t,innerRef:n,...i}=c;return e.jsx("div",{...i,ref:n,dangerouslySetInnerHTML:{__html:t??""}})},A=_,m=p.forwardRef((c,t)=>{const{code:n,executeScriptOnCanvas:i,clientOnly:a,children:s,...r}=c,{renderer:o,isSafeMode:d}=p.useContext(q),h=P(),[y]=p.useState(h);return n===void 0||String(n).trim().length===0?e.jsx(ne,{innerRef:t,...r}):y?a!==!0?e.jsx(_,{innerRef:t,code:n,...r}):e.jsx(j,{children:e.jsx(T,{innerRef:t,code:n,...r})}):d?e.jsx(j,{children:e.jsx(A,{innerRef:t,code:n,...r})}):o==="canvas"&&i!==!0?e.jsx(j,{children:e.jsx(A,{innerRef:t,code:n,...r})}):e.jsx(j,{children:e.jsx(T,{innerRef:t,code:n,...r},n)})});m.displayName="HtmlEmbed";var ie=`data:image/svg+xml;base64,${btoa(`<svg
  width="140"
  height="140"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="600" height="600" fill="#DFE3E6" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M450 170H150C141.716 170 135 176.716 135 185V415C135 423.284 141.716 430 150 430H450C458.284 430 465 423.284 465 415V185C465 176.716 458.284 170 450 170ZM150 145C127.909 145 110 162.909 110 185V415C110 437.091 127.909 455 150 455H450C472.091 455 490 437.091 490 415V185C490 162.909 472.091 145 450 145H150Z"
    fill="#C1C8CD"
  />
  <path
    d="M237.135 235.012C237.135 255.723 220.345 272.512 199.635 272.512C178.924 272.512 162.135 255.723 162.135 235.012C162.135 214.301 178.924 197.512 199.635 197.512C220.345 197.512 237.135 214.301 237.135 235.012Z"
    fill="#C1C8CD"
  />
  <path
    d="M160 405V367.205L221.609 306.364L256.552 338.628L358.161 234L440 316.043V405H160Z"
    fill="#C1C8CD"
  />
</svg>`)}`,ae=[16,32,48,64,96,128,256,384],M=[640,750,828,1080,1200,1920,2048,3840],u=[...ae,...M],se=(c,t)=>{if(t){const a=/(^|\s)(1?\d?\d)vw/g,s=[];for(let r;r=a.exec(t);r)s.push(Number.parseInt(r[2],10));if(s.length){const r=Math.min(...s)*.01;return{widths:u.filter(o=>o>=M[0]*r),kind:"w"}}return{widths:u,kind:"w"}}if(c==null)return{widths:M,kind:"w"};const n=2;let i=u.findIndex(a=>a>=n*c);return i=i<0?u.length:i,{widths:u.slice(0,i+1),kind:"w"}},re=({src:c,width:t,quality:n,sizes:i,loader:a})=>{const{widths:s,kind:r}=se(t,i);return{sizes:!i&&r==="w"?"100vw":i,srcSet:s.map((o,d)=>`${a({src:c,quality:n,width:o})} ${r==="w"?o:d+1}${r}`).join(", "),src:a({src:c,quality:n,width:s[s.length-1]})}},R=c=>{if(typeof c=="number")return Math.round(c);if(typeof c=="string"){const t=Number.parseFloat(c);if(!Number.isNaN(t))return Math.round(t)}},oe="(min-width: 1280px) 50vw, 100vw",le=80,de=c=>{try{return new URL(c),!0}catch{return!1}},pe=c=>{const t=R(c.width),n=Math.max(Math.min(R(c.quality)??le,100),0);if(c.src!=null&&c.src!==""){if(c.src.startsWith("data:"))return{src:c.src};if(c.srcSet==null&&c.optimize){const a=c.sizes??(c.width==null?oe:void 0);return re({src:c.src,width:t,quality:n,sizes:a,loader:c.loader})}const i={src:de(c.src)?c.src:c.loader({src:c.src,format:"raw"})};return c.srcSet!=null&&(i.srcSet=c.srcSet),c.sizes!=null&&(i.sizes=c.sizes),i}},me=({quality:c,loader:t,optimize:n=!0,loading:i="lazy",decoding:a="async",...s})=>{const r=pe({src:s.src,srcSet:s.srcSet,sizes:s.sizes,width:s.width,quality:c,loader:t,optimize:n})??{src:ie};return{alt:"",...s.alt!==void 0?{alt:s.alt}:{},...s.width!==void 0?{width:s.width}:{},...s.height!==void 0?{height:s.height}:{},...r,decoding:a,loading:i}};const he=({props:c,imageLoader:t,renderer:n})=>{let{loading:i="lazy",width:a,height:s,optimize:r=!0,decoding:o,quality:d,$webstudio$canvasOnly$assetId:h,alt:y,sizes:z,srcSet:x,src:w,...k}=c;const f=String(w??"");let L=f;return n==="canvas"&&(i="eager",o="sync",L=h??f,a!==void 0&&s!==void 0&&Number.isNaN(a)&&Number.isNaN(s)&&(r=!1,a=void 0,s=void 0)),{key:L,imageProps:{...k,...me({alt:y,width:a,height:s,sizes:z,src:f,srcSet:x,quality:d,loader:t,optimize:r,loading:i,decoding:o})}}},b=p.forwardRef((c,t)=>{const{imageLoader:n,renderer:i}=p.useContext(q),{key:a,imageProps:s}=he({props:c,imageLoader:n,renderer:i});return e.jsx("img",{...s,ref:t},a)});b.displayName="Image";const O=void 0,ye=[{id:"cRYmr86dmRW_vp3SlcTMq"},{id:"lamraCdNr6x864fZW4-71",maxWidth:390}],xe="avatar_wD6Rh8InQc6aRE7RC56OQ.png",be=["classicrussian_bolditalic_9OGPqjnCWGj2nlQ7H7Hf0.ttf","classicrussian_zdp5-O2AtRqAIZSBXaFfG.ttf","VelaSans-GX_v_5DtQOWyEVeM3bXiqVU8.ttf","classicrussianplain_XXMua8U76VDK3aVS9K5cd.ttf","classicrussian_bold_OxcgvGtvwvAwzeBKwHShq.ttf","VelaSans-Light_0sa8UXgQ8-6hzxlTDA9-d.ttf","classicrussianbolditalic_Dx6Uvg1MAPd5I9fWqqbDJ.ttf","VelaSans-Regular_l1R7RQq8PDNvC935XG6EB.ttf","classicrussian_italic_DydJDyeVNhB8pcziGelwg.ttf","classicrussianitalic_Ve7pfI9u21nFBPocc-GYI.ttf","classicrussianbold_EVyQkBmEr1aB2T3vLyeCJ.ttf"],fe=[],ue=c=>e.jsxs("body",{className:"w-element cbgfy19 c1ghyfie cktccy8 c15im3zh cidopjm c1t1ky9i cjgug1y c1hwq8cc c1hbfygp c1axp7bz c5ud6dt cau4eo5 c10upm9x ck8szcj crjcrep cd3ep79 c1hd41b4 c1igc2wm c1npjhdx",children:[e.jsxs("div",{className:"w-element c5ud6dt ctrqbiw c1uj8myn c1bdxy3n c1f6vrps c11f31e3 c1hbfygp c1axp7bz c1hwq8cc c1t1ky9i c18hk7wt cs6kyoq cjgug1y c1aqv6us cvolzx7 c13tewi9 cw4l4gu c1w0f9rl c1ijy4jg crjcrep ck8szcj",children:[e.jsx("div",{id:"intro",className:"w-element c1dt4toh c1t1ky9i c9y978x c14sb83n c5ud6dt c11f31e3 ctdclm5 c15s627d c1hwq8cc ckl92cv cyvmqhh cgdvsya ci6t33 c1ijy4jg crjcrep",children:e.jsxs("div",{className:"w-element c1t1ky9i c12jobch cn43n1h c1ss0qyd c1bf3gbv cbzgvrn cjgug1y c18tpnkd cs6kyoq c1ghyfie c1y3tvcb ctdclm5 c1lmqsq8 c11f31e3 cseikrj cq6vf2n cknnh12 cbgt5od cnpmm9y c12pndbt cb8zjrt reveal-group",children:[e.jsxs("div",{className:"w-element c1t1ky9i c12jobch cn43n1h c1ss0qyd c1bf3gbv c12z4sws cjgug1y cbgt5od c12pndbt c14mz0w7",children:[e.jsxs("div",{"data-reveal":"",className:"w-element chqwizw cttdk6k c1t1ky9i c1sesscl c9y978x cs6kyoq cf9kvnj c93layf c9uu1mj c1ghyfie cv9ty0f cefdn9z c9e82x3 ckvhfsb",children:[e.jsx("div",{className:"w-element ctyqyhg c8lis7b c11f31e3 c1vg1ldp crzsn58",children:e.jsx(b,{src:"/assets/avatar_wD6Rh8InQc6aRE7RC56OQ.png",width:80,height:80,alt:"Анфас дизайнера",className:"w-image avatar"})}),e.jsxs("h3",{className:"w-element cbgfy19 c13hwq9p c1yboeqv cfky18h cje2fxc clako7o c5bqngv cee4xb8",children:["Илья Шамбулин","",e.jsx("br",{}),"",e.jsx("span",{className:"w-element",children:"Продуктовый дизайнер"})]})]}),e.jsxs("h1",{"data-reveal":"",className:"w-element cieqqcu c1u5offw clako7o c1vrp7pb c5bqngv c1am9md2 cpllduj c1i78djw c11isikc",children:[e.jsxs("span",{className:"w-element cwnd9p8 c1vrp7pb cvd9i87 c1vom59 c1kyx2ph c15gucfv",children:["Делаю сложные интерфейсы, ","",e.jsx("br",{}),"","в которых легко быть ","",e.jsx("br",{}),"","человеком "]}),e.jsx(m,{code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Интерактивный Каомодзи</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f2f5;
            margin: 0;
            font-family: Arial, sans-serif;
            user-select: none;
        }

        /* ГЛАВНЫЙ КОНТЕЙНЕР */
        .kaomoji-wrapper {
            position: relative;
            cursor: default;
            display: inline-flex;
            justify-content: center;
            align-items: center;
        }

        /* Контейнер для лица */
        .lenny-face {
            position: relative;
            display: inline-flex;
            align-items: center;
            color: #1a1a1a;
            opacity: 1;
            visibility: visible;
            transition: opacity 0.1s ease, visibility 0.2s;
        }

        /* ТЕКСТ ПРИ НАВЕДЕНИИ */
        .hover-text {
            position: absolute;
            color: #1a1a1a;
            opacity: 0;
            visibility: hidden;
            white-space: nowrap;
            transition: opacity 0.1s ease, visibility 0.2s;
        }

        /* HOVER-ЛОГИКА (Для ПК) */
        .kaomoji-wrapper:hover .lenny-face {
            opacity: 0;
            visibility: hidden;
        }
        .kaomoji-wrapper:hover .hover-text {
            opacity: 1;
            visibility: visible;
        }

        /* ЧИСЛОВЫЕ НАСТРОЙКИ ВЕРСТКИ (Для ПК) */
        .eye-container {
            position: relative;
            display: inline-block;
            width: 32px;  
            height: 38px; 
        }

        .brow {
            position: absolute;
            left: 14px; 
            top: 0px;   
            line-height: 1;
        }

        .pupil {
            position: absolute;
            left: 18px; 
            top: 0px;
            line-height: 1;
            transition: transform 0.05s ease-out;
        }

        .center-space {
            display: inline-block;
            width: 24px; 
            height: 1px;
        }

        .mouth-nose {
            position: absolute;
            left: 56px;  
            top: 0px;   
            line-height: 1;
            white-space: nowrap;
        }

        /* ЖЕСТКАЯ ПОДМЕНА И ОБНУЛЕНИЕ ОТСТУПОВ (до 720px включительно) */
        @media screen and (max-width: 720px), screen and (max-device-width: 720px) {
            /* Полностью вырезаем физическое присутствие элементов */
            .kaomoji-wrapper .lenny-face,
            .kaomoji-wrapper .hover-text,
            .kaomoji-wrapper .lenny-face * {
                display: none !important;
                width: 0 !important;
                height: 0 !important;
                margin: 0 !important;
                padding: 0 !important;
                opacity: 0 !important;
                visibility: hidden !important;
                pointer-events: none !important;
            }

            /* Создаем один чистый текст без промежутков */
            .kaomoji-wrapper::after {
                content: "( ͡° ͜ʖ ͡°)" !important;
                display: inline-block !important;
                font-family: inherit !important;
                font-size: inherit !important;
                color: #1a1a1a !important;
                white-space: nowrap !important;
                position: static !important;
                visibility: visible !important;
                opacity: 1 !important;
                width: auto !important;
                height: auto !important;
            }
        }
    </style>



    <div class="kaomoji-wrapper">
        
        <div class="lenny-face" id="lenny">
            <span>(</span>
            
            <span class="eye-container">
                <span class="brow">͡</span>
                <span class="pupil">°</span>
            </span>
            
            <span class="center-space"></span>
            
            <span class="mouth-nose"> ͜ʖ </span>
            
            <span class="eye-container">
                <span class="brow">͡</span>
                <span class="pupil">°</span>
            </span>
            
            <span>)</span>
        </div>

        <div class="hover-text">( ͡ᵔ ͜ʖ ͡ᵔ)</div>

    </div>

    <script>
        const pupils = document.querySelectorAll('.pupil');
        const lennyFace = document.querySelector('.lenny-face');

        window.addEventListener('mousemove', (e) => {
            // Проверка по ширине окна браузера напрямую в JS
            if (window.innerWidth <= 720) return;

            if (getComputedStyle(lennyFace).display !== 'none' && getComputedStyle(lennyFace).visibility !== 'hidden') {
                pupils.forEach(pupil => {
                    const rect = pupil.getBoundingClientRect();
                    const pupilX = rect.left + rect.width / 2;
                    const pupilY = rect.top + rect.height / 2;

                    const angle = Math.atan2(e.clientY - pupilY, e.clientX - pupilX);
                    const maxDistance = 3;

                    const moveX = Math.cos(angle) * maxDistance;
                    const moveY = Math.sin(angle) * maxDistance;

                    pupil.style.transform = \`translate(\${moveX}px, \${moveY}px)\`;
                });
            }
        });
    <\/script>

`,className:"w-html-embed c15lq6mx c91d8ro c1jcpumz c16z13ob cjs4ars cxq86i1 c385xy3"})]})]}),e.jsxs("div",{"data-reveal":"",className:"w-element c1t1ky9i c1sesscl c9y978x cs6kyoq c1bk30av c12z4sws c12pndbt c1gsrl4f ci6t33 c1ijy4jg c1aqeu73 chp7ggd c1edtw69 c1othdyf c1tr8yp7 c1ltr0l6",children:[e.jsxs(l,{type:"button",href:"https://t.me/IlyaShamb",className:"w-element chqwizw c1dbhjn4 cttdk6k c15tuz05 cic10qx c1i0y4jr c1o1oanr c1uj8myn ctrqbiw ciwe2ci c1yovmgn c1ffxkx7 c75s3ps ciuyspz cw7re8b c1t1ky9i c9y978x c1h3h4ca coo2v9f c1bblol2 crkq6wa clbpz92 c3ntk31 c4ea4e6 cnpmm9y c1uspl8d c1a4g5eq cb7tjgb c11bfe8v c16o0cst c1hoan7r",children:[e.jsx(b,{src:"/assets/tg_black_UMqRFE3bOfBt2wZt4HQ1Q.svg",width:24,height:24,alt:"",className:"w-image cbo0a7t c58loiw c1i0y4jr c1kzg60b c7hi520"}),e.jsx("span",{className:"w-element cbgfy19 cjmqefl c5bqngv cfky18h c1xb78yf cee4xb8 c1hoan7r cw2v8py",children:"Написать мне"})]}),e.jsxs("div",{className:"w-element c1t1ky9i c1sesscl c9y978x cs6kyoq cf9kvnj cdlt2zp c1ghyfie c9uu1mj c13tewi9 ci6t33 c1ijy4jg c12pndbt c14mz0w7 c7565xs",children:[e.jsxs("div",{className:"w-element c1t1ky9i c11f31e3 c1sesscl c1ghyfie c9uu1mj c9y978x c1h3h4ca c12jobch cn43n1h c1ss0qyd c1bf3gbv c93layf ctdclm5 c95fmx9 c1wz28sq",children:[e.jsx("div",{className:"w-element clh4sgj c5qf0q2 crvcavn ch88x4d c3bqno0 cyevpe8 cnudor3 c1ffxkx7 c75s3ps ciuyspz cw7re8b c11f31e3 cbyw8y2 c1hfv5o0 cv9ty0f cefdn9z"}),e.jsx("div",{className:`w-element cyevpe8 cnudor3 c1ffxkx7 c75s3ps ciuyspz cw7re8b c11f31e3 cemq7jg clh4sgj ch04zb6 c1bealef cclut8i cu8pon3 c1hfv5o0 pulse-wave
`}),e.jsx("div",{className:`w-element cyevpe8 cnudor3 c1ffxkx7 c75s3ps ciuyspz cw7re8b c18m3nax clh4sgj c30mykz ch04zb6 c1bealef cclut8i cu8pon3 c1hfv5o0 pulse-wave wave-delayed
`}),e.jsx(m,{code:`<style>
@keyframes pulse-ring {
  0% {
    transform: translate(-50%, -50%) scale(1); /* Центрирование + масштаб */
    opacity: 0.8;
  }
  100% {
    transform: translate(-50%, -50%) scale(4); /* Центрирование сохраняется */
    opacity: 0;
  }
}

.pulse-wave {
  display: block !important;
  width: 12px !important; 
  height: 12px !important;
  
  /* Обводка */
  background-color: transparent !important;
  border: 1.5px solid #22c55e !important;
  border-radius: 50% !important;
  
  /* Жесткое позиционирование в центр */
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  margin: 0 !important;
  padding: 0 !important;
  
  /* Анимация (медленная - 4 секунды) */
  animation: pulse-ring 4s ease-out infinite !important;
  z-index: 1 !important;
}

.wave-delayed {
  animation-delay: 2s !important;
}
</style>

`,executeScriptOnCanvas:!1,className:"w-html-embed czmkkbm cyevpe8 cnudor3 c1mxnpsi"})]}),e.jsxs("h3",{className:"w-element cfky18h c15tuz05 c13hwq9p c1ssdpzc cje2fxc clako7o cbgfy19 c5bqngv ch04zb6 c1bealef cclut8i cu8pon3 cee4xb8",children:["Открыт ",e.jsx("span",{className:"w-element c1l3s5yg",children:"к предложениям"})]})]})]})]})}),e.jsxs("div",{className:"w-element c1t1ky9i cjgug1y cjbidmg c1bf3gbv c12pndbt crqzkns",children:[e.jsxs("div",{id:"works",className:"w-element c1t1ky9i cjgug1y c1g7k7ti cdqfwys c1u5offw c124mwf6 c1l2fdjr c165raxf",children:[e.jsxs("div",{id:"works",className:"w-element cbgt5od c1t1ky9i c1r0i6f5 c11l58ng cxw5uam cmdfsav c1a2eyth c12pndbt c1vrv1r1 cb8zjrt chp7ggd",children:[e.jsxs("div",{className:"w-element c1j8iybi c1t1ky9i cjgug1y cwh5kk cyhpsl7 c12pndbt cb8zjrt chp7ggd",children:[e.jsxs("div",{className:"w-element c1t1ky9i cjgug1y c6p55kh c5uqp3h c1ykdc61 c14mz0w7 c7565xs",children:[e.jsxs("div",{className:"w-element c1t1ky9i cjgug1y c1bblol2 coo2v9f cevpnyh cemext8",children:[e.jsxs("div",{"data-reveal":"",className:"w-element c1t1ky9i c1sesscl coo2v9f c1bblol2",children:[e.jsx("h3",{className:"w-element c5bqngv cfky18h c7ydmfi cje2fxc clako7o cee4xb8",children:"rTIM"}),e.jsx("h3",{className:"w-element c5bqngv cfky18h c7ydmfi cje2fxc clako7o cee4xb8",children:"|"}),e.jsx("h3",{className:"w-element c5bqngv cfky18h c7ydmfi cje2fxc clako7o cee4xb8",children:"10 минут на чтение"})]}),e.jsxs("h2",{"data-reveal":"",className:"w-element chydk8c c1u5offw clako7o c1vrp7pb c5bqngv c1j8iybi c1qi3ah2 c13hwq9p c1e37voh c1n6thg7 c126mgj0 ctjol56 c1r42fpw c1ty5cll c12pndbt",children:["Дизайн-система, помогающая строить ",e.jsx("span",{className:"w-element cw2v8py",children:"наши города"})]})]}),e.jsx("p",{"data-reveal":"",className:"w-element c5bqngv cfky18h c14yn3m5 cje2fxc clako7o cee4xb8",children:"Создание и ведение дизайн-системы из сотни компонентов, экранов и цветов для AI-powered проектировочного сервиса на основе данных картографии"})]}),e.jsxs("div",{"data-reveal":"",className:"w-element c1t1ky9i cjgug1y cdlt2zp cf9kvnj c14mz0w7 c7565xs",children:[e.jsx(l,{type:"button",href:"https://www.google.com/",className:"w-element chqwizw c1dbhjn4 cttdk6k c15tuz05 cic10qx c1i0y4jr c1o1oanr c1vxr82e c1nw50m c11o1rsj c1dtxm8y c1ffxkx7 c75s3ps ciuyspz cw7re8b c1t1ky9i c9y978x c1h3h4ca coo2v9f c1bblol2 crkq6wa clbpz92 c3ntk31 c4ea4e6 cnpmm9y c9uu1mj c1uspl8d",children:e.jsxs("span",{className:"w-element cbgfy19 cjmqefl c5bqngv cfky18h c1xb78yf cee4xb8",children:["Прочитать ",e.jsx("span",{className:"w-element c16kw8ic",children:"( ಠ ͜ʖರೃ)"})]})}),e.jsxs("div",{className:"w-element c1t1ky9i coo2v9f c1bblol2 cemext8 cevpnyh",children:[e.jsx(l,{type:"button",className:"w-element chqwizw c1dbhjn4 cttdk6k c15tuz05 c1qrm8ng c1i0y4jr c1o1oanr cl68b6d c4eebdq c11o1rsj c1dtxm8y c1ffxkx7 c75s3ps ciuyspz cw7re8b c1t1ky9i c9y978x c1h3h4ca coo2v9f c1bblol2 crkq6wa clbpz92 c3ntk31 c4ea4e6 cnpmm9y c9uu1mj c1ibe1yk c1n18ztd cee4xb8",children:e.jsx("span",{className:"w-element cbgfy19 cjmqefl c5bqngv c1ykdc61 c7ydmfi",children:"B2B"})}),e.jsx(l,{type:"button",href:"",className:"w-element chqwizw c1dbhjn4 cttdk6k c15tuz05 c1qrm8ng c1i0y4jr c1o1oanr cl68b6d c4eebdq c11o1rsj c1dtxm8y c1ffxkx7 c75s3ps ciuyspz cw7re8b c1t1ky9i c9y978x c1h3h4ca coo2v9f c1bblol2 crkq6wa clbpz92 c3ntk31 c4ea4e6 cnpmm9y c9uu1mj c1ibe1yk c1n18ztd",children:e.jsxs("span",{className:"w-element cbgfy19 cjmqefl c5bqngv c1ykdc61 c7ydmfi",children:["Desktop",e.jsx("br",{}),""]})}),e.jsx(l,{type:"button",href:"",className:"w-element chqwizw c1dbhjn4 cttdk6k c15tuz05 c1qrm8ng c1i0y4jr c1o1oanr cl68b6d c4eebdq c11o1rsj c1dtxm8y c1ffxkx7 c75s3ps ciuyspz cw7re8b c1t1ky9i c9y978x c1h3h4ca coo2v9f c1bblol2 crkq6wa clbpz92 c3ntk31 c4ea4e6 cnpmm9y c9uu1mj c1ibe1yk c1n18ztd",children:e.jsx("span",{className:"w-element cbgfy19 cjmqefl c5bqngv c1ykdc61 c7ydmfi cee4xb8",children:"Проектировочное ПО"})})]})]})]}),e.jsx(m,{code:'<iframe src="https://kinescope.io/embed/cRDgfb3jn4EdhQTpLdnEGq" allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;" frameborder="0" allowfullscreen width="360" height="360"></iframe>',"data-reveal":"",className:"w-html-embed c9uu1mj c1ghyfie c1xx4jjy c1plx3me c3gpemq c1nzigw9 cejj1yn c1bdxy3n ccsx6tw cpiyym7 cm3aiw2 c1e341c9 c1vrv1r1"})]}),e.jsxs("div",{id:"works",className:"w-element cbgt5od c1t1ky9i c1r0i6f5 c11l58ng cxw5uam c1a2eyth c1vrv1r1 c12pndbt cb8zjrt chp7ggd",children:[e.jsxs("div",{className:"w-element c1j8iybi c1t1ky9i cjgug1y cwh5kk cyhpsl7 cb8zjrt chp7ggd",children:[e.jsxs("div",{className:"w-element c1t1ky9i cjgug1y c6p55kh c5uqp3h c1ykdc61 c14mz0w7 c7565xs c12pndbt",children:[e.jsxs("div",{className:"w-element c1t1ky9i cjgug1y c1bblol2 coo2v9f cevpnyh cemext8",children:[e.jsxs("div",{"data-reveal":"",className:"w-element c1t1ky9i c1sesscl coo2v9f c1bblol2 c12pndbt",children:[e.jsx("h3",{className:"w-element c5bqngv cfky18h c7ydmfi cje2fxc clako7o cee4xb8",children:"QuantCAD"}),e.jsx("h3",{className:"w-element c5bqngv cfky18h c7ydmfi cje2fxc clako7o cee4xb8",children:"|"}),e.jsx("h3",{className:"w-element c5bqngv cfky18h c7ydmfi cje2fxc clako7o cee4xb8",children:"10 минут на чтение"})]}),e.jsxs("h2",{"data-reveal":"",className:"w-element chydk8c c1u5offw clako7o c1vrp7pb c5bqngv c1j8iybi c1qi3ah2 c13hwq9p c1e37voh c1n6thg7 c126mgj0 ctjol56 c1r42fpw c1ty5cll c12pndbt",children:["112 млн ",e.jsx("span",{className:"w-element chqwizw cxl7cjc cw3msh cm9ljkc",children:"₽"})," инвестиций ","",e.jsx("br",{}),"","и ноль редизайнов"]})]}),e.jsxs("p",{"data-reveal":"",className:"w-element c5bqngv cfky18h c14yn3m5 cje2fxc clako7o cee4xb8 c12pndbt",children:["Поиск и разработка оптимальных решений ","",e.jsx("br",{}),"","для успешного запуска MVP фотонного САПР, который не пришлось переделывать благодаря масштабируемой дизайн-системе"]})]}),e.jsxs("div",{"data-reveal":"",className:"w-element c1t1ky9i cjgug1y cdlt2zp cf9kvnj",children:[e.jsx(l,{type:"button",href:"https://www.google.com/",className:"w-element chqwizw c16kw8ic cttdk6k c15tuz05 cic10qx c1i0y4jr c1o1oanr c1vxr82e c1nw50m c11o1rsj c1dtxm8y c1ffxkx7 c75s3ps ciuyspz cw7re8b c1t1ky9i c9y978x c1h3h4ca coo2v9f c1bblol2 crkq6wa clbpz92 c3ntk31 c4ea4e6 cnpmm9y c9uu1mj c1uspl8d",children:e.jsxs("span",{className:"w-element cbgfy19 cjmqefl c5bqngv cfky18h c1xb78yf cee4xb8",children:["Прочитать ",e.jsx("span",{className:"w-element c16kw8ic",children:"( ˘ ³˘)目"})]})}),e.jsxs("div",{className:"w-element c1t1ky9i coo2v9f c1bblol2",children:[e.jsx(l,{type:"button",href:"",className:"w-element chqwizw c1dbhjn4 cttdk6k c15tuz05 c1qrm8ng c1i0y4jr c1o1oanr cl68b6d c4eebdq c11o1rsj c1dtxm8y c1ffxkx7 c75s3ps ciuyspz cw7re8b c1t1ky9i c9y978x c1h3h4ca coo2v9f c1bblol2 crkq6wa clbpz92 c3ntk31 c4ea4e6 cnpmm9y c9uu1mj c1ibe1yk c1n18ztd",children:e.jsx("span",{className:"w-element cbgfy19 cjmqefl c5bqngv c1ykdc61 c7ydmfi",children:"B2S"})}),e.jsx(l,{type:"button",href:"",className:"w-element chqwizw c1dbhjn4 cttdk6k c15tuz05 c1qrm8ng c1i0y4jr c1o1oanr cl68b6d c4eebdq c11o1rsj c1dtxm8y c1ffxkx7 c75s3ps ciuyspz cw7re8b c1t1ky9i c9y978x c1h3h4ca coo2v9f c1bblol2 crkq6wa clbpz92 c3ntk31 c4ea4e6 cnpmm9y c9uu1mj c1ibe1yk c1n18ztd",children:e.jsxs("span",{className:"w-element cbgfy19 cjmqefl c5bqngv c1ykdc61 c7ydmfi",children:["Desktop",e.jsx("br",{}),""]})}),e.jsx(l,{type:"button",href:"",className:"w-element chqwizw c1dbhjn4 cttdk6k c15tuz05 c1qrm8ng c1i0y4jr c1o1oanr cl68b6d c4eebdq c11o1rsj c1dtxm8y c1ffxkx7 c75s3ps ciuyspz cw7re8b c1t1ky9i c9y978x c1h3h4ca coo2v9f c1bblol2 crkq6wa clbpz92 c3ntk31 c4ea4e6 cnpmm9y c9uu1mj c1ibe1yk c1n18ztd cee4xb8",children:e.jsx("span",{className:"w-element cbgfy19 cjmqefl c5bqngv c1ykdc61 c7ydmfi",children:"Проектировочное ПО"})})]})]})]}),e.jsx(m,{code:`<div style="width: 360px; height: 360px; overflow: hidden; position: relative; border-radius: 16px; transform: translateZ(0); -webkit-mask-image: -webkit-radial-gradient(white, black);">
  <iframe src="https://kinescope.io/embed/txtkvuNb88DndtBW3jGeCd" 
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;" 
          frameborder="0" 
          allowfullscreen 
          style="position: absolute; width: 102%; height: 102%; top: -1%; left: -1%;">
  </iframe>
</div>`,"data-reveal":"",className:"w-html-embed c9uu1mj c1ghyfie c1xx4jjy c1plx3me c3gpemq c1nzigw9 cejj1yn c1bdxy3n ccsx6tw cpiyym7 cm3aiw2 c1e341c9"})]}),e.jsxs("div",{id:"works",className:"w-element cbgt5od c1t1ky9i c1r0i6f5 c11l58ng cxw5uam c1a2eyth c1vrv1r1 c12pndbt cb8zjrt chp7ggd",children:[e.jsxs("div",{className:"w-element c1j8iybi c1t1ky9i cjgug1y c1knwxb8 c1ca2x0x cb8zjrt chp7ggd c12pndbt",children:[e.jsxs("div",{className:"w-element c1t1ky9i cjgug1y c6p55kh c5uqp3h c1ykdc61 c14mz0w7 c7565xs",children:[e.jsxs("div",{className:"w-element c1t1ky9i cjgug1y c1bblol2 coo2v9f cevpnyh cemext8",children:[e.jsxs("div",{"data-reveal":"",className:"w-element c1t1ky9i c1sesscl coo2v9f c1bblol2 c12pndbt",children:[e.jsx("h3",{className:"w-element c5bqngv cfky18h c7ydmfi cje2fxc clako7o cee4xb8",children:"Градус тепла"}),e.jsx("h3",{className:"w-element c5bqngv cfky18h c7ydmfi cje2fxc clako7o cee4xb8",children:"|"}),e.jsx("h3",{className:"w-element c5bqngv cfky18h c7ydmfi cje2fxc clako7o cee4xb8",children:"5 минут на чтение"})]}),e.jsxs("h2",{"data-reveal":"",className:"w-element chydk8c c1u5offw clako7o c1vrp7pb c5bqngv c1j8iybi c1qi3ah2 c13hwq9p c1e37voh c1n6thg7 c126mgj0 ctjol56 c1r42fpw c1ty5cll c12pndbt",children:["Продажа инженерных ",e.jsx("span",{className:"w-element",children:"систем"})," ",e.jsx("span",{className:"w-element cw2v8py",children:"без "}),"менеджера"]})]}),e.jsxs("p",{"data-reveal":"",className:"w-element c5bqngv cfky18h c14yn3m5 cje2fxc clako7o cee4xb8",children:["Снятие страхов клиентов через контент ","",e.jsx("br",{}),"","и логику сайта на тильде в сфере водоснабжения, отопления и электрики"]})]}),e.jsxs("div",{"data-reveal":"",className:"w-element c1t1ky9i cjgug1y cdlt2zp cf9kvnj",children:[e.jsx(l,{type:"button",href:"https://www.google.com/",className:"w-element chqwizw c1dbhjn4 cttdk6k c15tuz05 cic10qx c1i0y4jr c1o1oanr c1vxr82e c1nw50m c11o1rsj c1dtxm8y c1ffxkx7 c75s3ps ciuyspz cw7re8b c1t1ky9i c9y978x c1h3h4ca coo2v9f c1bblol2 crkq6wa clbpz92 c3ntk31 c4ea4e6 cnpmm9y c9uu1mj c1uspl8d",children:e.jsxs("span",{className:"w-element cbgfy19 cjmqefl c5bqngv cfky18h c1xb78yf cee4xb8",children:["Прочитать ",e.jsx("span",{className:"w-element c16kw8ic",children:"(╭ರ_•́)"})]})}),e.jsxs("div",{className:"w-element c1t1ky9i coo2v9f c1bblol2",children:[e.jsx(l,{type:"button",href:"",className:"w-element chqwizw c1dbhjn4 cttdk6k c15tuz05 c1qrm8ng c1i0y4jr c1o1oanr cl68b6d c4eebdq c11o1rsj c1dtxm8y c1ffxkx7 c75s3ps ciuyspz cw7re8b c1t1ky9i c9y978x c1h3h4ca coo2v9f c1bblol2 crkq6wa clbpz92 c3ntk31 c4ea4e6 cnpmm9y c9uu1mj c1ibe1yk c1n18ztd",children:e.jsx("span",{className:"w-element cbgfy19 cjmqefl c5bqngv c1ykdc61 c7ydmfi",children:"B2С"})}),e.jsx(l,{type:"button",href:"",className:"w-element chqwizw c1dbhjn4 cttdk6k c15tuz05 c1qrm8ng c1i0y4jr c1o1oanr cl68b6d c4eebdq c11o1rsj c1dtxm8y c1ffxkx7 c75s3ps ciuyspz cw7re8b c1t1ky9i c9y978x c1h3h4ca coo2v9f c1bblol2 crkq6wa clbpz92 c3ntk31 c4ea4e6 cnpmm9y c9uu1mj c1ibe1yk c1n18ztd",children:e.jsx("span",{className:"w-element cbgfy19 cjmqefl c5bqngv c1ykdc61 c7ydmfi",children:"Web"})}),e.jsx(l,{type:"button",href:"",className:"w-element chqwizw c1dbhjn4 cttdk6k c15tuz05 c1qrm8ng c1i0y4jr c1o1oanr cl68b6d c4eebdq c11o1rsj c1dtxm8y c1ffxkx7 c75s3ps ciuyspz cw7re8b c1t1ky9i c9y978x c1h3h4ca coo2v9f c1bblol2 crkq6wa clbpz92 c3ntk31 c4ea4e6 cnpmm9y c9uu1mj c1ibe1yk c1n18ztd",children:e.jsx("span",{className:"w-element cbgfy19 cjmqefl c5bqngv c1ykdc61 c7ydmfi",children:"Лендинг"})})]})]})]}),e.jsx(b,{src:"/assets/Frame_952_1_WnhbWSJFHj14ubNz9wNwG.png",width:1080,"data-reveal":"",className:"w-image cutvrtt cxw5uam cqho5js c2f9ju c1rjy4ay c1fwvg4j"})]})]}),e.jsxs("div",{className:"w-element c1t1ky9i cjgug1y c1aqv6us cvolzx7 cbgt5od c12pndbt",children:[e.jsxs("div",{className:"w-element cpiyym7 c12jobch cn43n1h c1ss0qyd c1bf3gbv cbzgvrn cjgug1y c18tpnkd cs6kyoq c1ghyfie c1y3tvcb ctdclm5 c1lmqsq8 c11f31e3 cseikrj cq6vf2n cknnh12 cbgt5od cnpmm9y reveal-group",children:[e.jsxs("p",{"data-reveal":"",className:"w-element cfky18h c7ydmfi c9uu1mj c77vzf0 c95fmx9 cq36l5o cee4xb8 c4yd2mv ctoijep c1lpisp4",children:["Дитер Рамс,","",e.jsx("br",{}),"","ведущий дизайнер Braun в 1962—1995 гг."]}),e.jsx(b,{src:"/assets/Dieter_maqpcP_tNIBJlBxB4Qn7j.png",width:840,height:1297,alt:"",id:"values","data-reveal":"",className:"w-image c118z8uz czmkkbm c130qndo c1i9caxv cmdfsav c7mhib2 c1qiu0zo c72uy8b c1xd9zji"}),e.jsxs("div",{className:"w-element c1t1ky9i c12jobch cn43n1h c1ss0qyd c1bf3gbv cdtgyqe cjgug1y cbgt5od",children:[e.jsx("h1",{"data-reveal":"",className:"w-element cieqqcu c1u5offw clako7o c1vrp7pb c5bqngv c1am9md2 cpllduj c1i78djw cvd9i87",children:e.jsx("span",{className:"w-element cwnd9p8 c1vrp7pb cvd9i87",children:"Меньше, но лучше"})}),e.jsx("h1",{"data-reveal":"",className:"w-element cieqqcu c1u5offw clako7o c1vrp7pb c5bqngv c1am9md2 cpllduj c1i78djw c6t2nsr cvd9i87 c12pndbt c8c86py",children:e.jsx("span",{className:"w-element cwnd9p8 c1vrp7pb c7ydmfi c11f31e3 cvd9i87",children:"Less but better"})})]})]}),e.jsxs("div",{className:"w-element clkz3ry c12jobch c1rympy0 c1ss0qyd c1bulgx4 coft08o c1ghyfie cbgt5od c18tpnkd cs6kyoq c12qkanr cq35n2q cn84w8l c1ltr0l6 ctn2de2 c1aqeu73 c14ytmqd",children:[e.jsxs("p",{"data-reveal":"",className:"w-element cfky18h c1am9md2 c1753p6u cpfk4kc c1iy9oo1 c1d8lgv3 c2442mf c76l1yu c12pndbt cee4xb8",children:["В своей работе я придерживаюсь принципов дизайна, которые сформулировал Дитер. Я считаю, что они применимы не только ","",e.jsx("br",{}),"","к объектам промышленного дизайна, но и к цифровым сервисам.","",e.jsx("br",{}),"","",e.jsx("br",{}),"","Хороший дизайн должен быть честен к себе и к пользователю, должен строиться с учётом ресурсов, которыми мы обладаем."]}),e.jsxs("p",{"data-reveal":"",className:"w-element cfky18h c1am9md2 c2442mf cee4xb8 c12pndbt",children:["Ядро философии Дитера — оптимальный для решения пользовательских задач минимализм.","",e.jsx("br",{}),"","",e.jsx("br",{}),"",e.jsx("b",{className:"w-element",children:"Моя задача — искать оптимальное решение на стыке потребностей пользователей, целей компании и ограничений команды."})]})]})]})]}),e.jsxs("div",{className:"w-element c1t1ky9i cjgug1y czl8c44 c6p55kh c5uqp3h c18tpnkd c1h3h4ca c1bdxy3n czr15qi c12pndbt reveal-group",children:[e.jsx("h1",{"data-reveal":"",id:"contact",className:"w-element cieqqcu c1u5offw clako7o c1vrp7pb c5bqngv cbgt5od cpllduj c1i78djw c1t1ky9i cjgug1y cdlt2zp cf9kvnj c1ghyfie c18tpnkd c1h3h4ca c1wz28sq",children:e.jsx("span",{"data-reveal":"",className:"w-element cwnd9p8 c1vrp7pb cbgt5od cvqwz5o cic10qx c12pndbt cvd9i87 typewriter-morse",children:"Будем на связи"})}),e.jsxs("div",{className:"w-element c1t1ky9i cjgug1y c1bblol2 coo2v9f",children:[e.jsxs("div",{"data-reveal":"",className:"w-element c1t1ky9i c9y978x cs6kyoq coo2v9f c1bblol2 cfky18h c12pndbt",children:[e.jsx(b,{src:"/assets/tg_black_UMqRFE3bOfBt2wZt4HQ1Q.svg",width:24,height:24,alt:"",className:"w-image cbo0a7t"}),e.jsx(l,{href:"https://t.me/IlyaShamb",className:"w-element c13to7nf cfky18h c15tuz05 c1vcftj7 c1xb78yf cbgfy19 c1ioryru",children:"Telegram: @IlyaShamb"})]}),e.jsxs("div",{"data-reveal":"",className:"w-element c1t1ky9i c9y978x cs6kyoq coo2v9f c1bblol2 c12pndbt",children:[e.jsx(b,{src:"/assets/mail_sX_tTpvUK3BjEj_cG_KR2.svg",width:28,height:28,alt:"",className:"w-image cbo0a7t"}),e.jsx(m,{code:`<div class="email-widget">
  <span class="copy-text" id="copyTextBtn" data-copy="ilyashamb@duck.com">
    <span class="copy-original">ilyashamb@duck.com</span>
    <span class="copy-feedback">Скопировано (°◡°♡)</span>
  </span>
  <span class="divider">|</span>
  <a class="mail-link" href="mailto:ilyashamb@duck.com?subject=Предложение%20по%20работе&body=Привет!%20Хочу%20предложить%20сотрудничество,%20когда%20будет%20удобно%20созвониться%20для%20обсуждения%20деталей?">
    Написать
  </a>
</div>

<style>
.email-widget {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: inherit;
}

.copy-text {
  cursor: pointer;
  position: relative;
  display: inline-block;
  user-select: none;
  transition: opacity 0.2s ease;
}

.copy-text:hover {
  opacity: 0.7;
}

.copy-original {
  display: inline-block;
}

.copy-feedback {
  display: none;
  color: #2e7d32;
  font-weight: 500;
}

.copy-text.copied .copy-original {
  display: none;
}

.copy-text.copied .copy-feedback {
  display: inline-block;
}

.divider {
  color: #888;
}

.mail-link {
  color: inherit;
  text-decoration: none; /* Убрано подчёркивание */
  font-weight: normal;   /* Обычный жирность текста */
  transition: opacity 0.2s ease;
}

.mail-link:hover {
  opacity: 0.7;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copyTextBtn');
  let timeoutId = null;

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const textToCopy = copyBtn.getAttribute('data-copy');
      
      try {
        await navigator.clipboard.writeText(textToCopy);
        copyBtn.classList.add('copied');
        
        if (timeoutId) clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
          copyBtn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.error('Ошибка копирования:', err);
      }
    });
  }
});
<\/script>`,className:"w-html-embed c15tuz05 cfky18h c1vcftj7 cbgfy19"})]}),e.jsxs("div",{"data-reveal":"",className:"w-element c1t1ky9i c9y978x cs6kyoq coo2v9f c1bblol2 c12pndbt",children:[e.jsx(b,{src:"/assets/Pin_PMqRZ83VWm5uBT3v-6RJE.svg",width:28,height:28,alt:"",className:"w-image cbo0a7t"}),e.jsxs("h2",{"data-reveal":"",className:"w-element cfky18h c1u5offw clako7o cbgfy19 c5bqngv cgxs7b2 c15tuz05 c13hwq9p c1e37voh c1n6thg7 c126mgj0 ctjol56 c1r42fpw cw2v8py",children:["Санкт-Петербург ",e.jsx("span",{className:"w-element c7ydmfi",children:"(без релокации)"})]})]})]})]}),e.jsxs("div",{className:`w-element c1vs0y4n c1jtgw1l c1a3xdoe c1t1ky9i cjgug1y c1bblol2 coo2v9f ctdclm5 c17ed0gl c9uu1mj crccz8s c1ghyfie menu-sidebar
`,children:[e.jsx(l,{href:"#intro",className:`w-element c13to7nf cfky18h c5bqngv c7ydmfi cnpmm9y menu-link
`,children:"Интро"}),e.jsx(l,{href:"#works",className:`w-element c13to7nf cfky18h c5bqngv c7ydmfi cnpmm9y menu-link
`,children:"Работы"}),e.jsx(l,{href:"#values",className:`w-element c13to7nf cfky18h c5bqngv c7ydmfi cnpmm9y menu-link
`,children:"Ценности"}),e.jsx(l,{href:"#contact",className:`w-element c13to7nf cfky18h c5bqngv c7ydmfi cnpmm9y menu-link
`,children:"Связаться"}),e.jsx(m,{code:`<style>
  /* ГЛОБАЛЬНЫЙ ФИКС СКРОЛЛА */
  html {
    scroll-behavior: smooth;
  }

  /* ФИКС КОНТЕЙНЕРА МЕНЮ (Десктоп) */
  .menu-sidebar {
    position: fixed !important;
    top: 50% !important;
    left: calc(50% - 600px + 20px) !important;

    height: auto !important;
    min-height: 0 !important;
    width: auto !important;

    transform: translateY(-50%) !important;
    margin: 0 !important;
    padding: 0 !important;

    display: flex !important;
    flex-direction: column !important;
    gap: 16px !important;
    z-index: 9999 !important;

    align-items: flex-start !important;
    justify-content: center !important;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  /* ССЫЛКИ МЕНЮ */
  .menu-link,
  .menu-link:visited,
  .menu-link:hover,
  .menu-link:focus {
    text-decoration: none !important;
    color: #7A7A7A;
    transition: color 0.2s ease;
  }

  .menu-link:hover {
    color: #505050 !important;
  }

  .menu-link.active {
    color: #282828 !important;
    font-weight: bold !important;
  }

  section {
    scroll-margin-top: 80px;
  }

  /* КНОПКА БУРГЕРА (Слева вверху, 8px от краев) */
  .dynamic-burger-btn {
    display: none !important;
    position: fixed !important;
    top: 12px !important;
    left: 8px !important;
    z-index: 2147483647 !important; /* Максимально возможный z-index */
    width: 40px !important;
    height: 40px !important;
    background: #ffffff !important;
    border: 1px solid #a3a3a3 !important;
    border-radius: 8px !important;
    cursor: pointer !important;
    padding: 8px !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08) !important;
    
    flex-direction: column !important;
    justify-content: space-around !important;
    align-items: center !important;
    box-sizing: border-box !important;
  }

  .dynamic-burger-btn span {
    display: block !important;
    width: 100% !important;
    height: 2px !important;
    background-color: #282828 !important;
    border-radius: 2px !important;
    transition: all 0.3s ease !important;
  }

  /* Анимация крестика */
  .dynamic-burger-btn.active span:nth-child(1) {
    transform: translateY(7px) rotate(45deg) !important;
  }
  .dynamic-burger-btn.active span:nth-child(2) {
    opacity: 0 !important;
  }
  .dynamic-burger-btn.active span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg) !important;
  }

  /* --- МОБИЛЬНЫЙ АДАПТИВ (#fefdfb на весь экран) --- */
  @media (max-width: 1240px) {
    .menu-sidebar {
      left: 20px !important;
    }
  }

  @media (max-width: 800px) {
    .dynamic-burger-btn {
      display: flex !important;
    }

    .menu-sidebar {
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      background-color: #fefdfb !important;
      
      padding: 80px 8px 40px 8px !important;
      box-sizing: border-box !important;
      
      align-items: center !important;
      justify-content: center !important;
      text-align: center !important;
      gap: 28px !important;
      z-index: 2147483646 !important;

      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
      transform: scale(0.98) !important;
      transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease !important;
    }

    .menu-sidebar.open {
      opacity: 1 !important;
      visibility: visible !important;
      pointer-events: auto !important;
      transform: scale(1) !important;
    }

    .menu-link {
      font-size: 22px !important;
      text-align: center !important;
    }
  }
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
  // АВТО-СОЗДАНИЕ КНОПКИ В САМЫЙ КОНЕЦ BODY
  let burgerBtn = document.querySelector('.dynamic-burger-btn');
  if (!burgerBtn) {
    burgerBtn = document.createElement('div');
    burgerBtn.className = 'dynamic-burger-btn';
    burgerBtn.setAttribute('role', 'button');
    burgerBtn.setAttribute('aria-label', 'Открыть меню');
    burgerBtn.innerHTML = '<span></span><span></span><span></span>';
    document.body.appendChild(burgerBtn);
  }

  const sections = [
    document.getElementById('intro'),
    document.getElementById('works'),
    document.getElementById('values'),
    document.getElementById('contact')
  ].filter(Boolean);

  const links = document.querySelectorAll('.menu-link');
  const sidebar = document.querySelector('.menu-sidebar');
  
  let isManualScrolling = false;
  let scrollEndFallbackTimer = null;

  // Логика открытия/закрытия без сброса скролла
  const toggleMenu = (show) => {
    if (!sidebar) return;
    const isOpening = show !== undefined ? show : !sidebar.classList.contains('open');
    
    sidebar.classList.toggle('open', isOpening);
    burgerBtn.classList.toggle('active', isOpening);
  };

  // Нажатие на бургер: предотвращаем стандартные действия браузера
  burgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });

  const setActiveLink = (targetId) => {
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === \`#\${targetId}\`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  const resetManualScroll = () => {
    isManualScrolling = false;
    clearTimeout(scrollEndFallbackTimer);
    window.removeEventListener('scrollend', resetManualScroll);
  };

  // 1. INTERSECTION OBSERVER
  const observer = new IntersectionObserver(
    (entries) => {
      if (isManualScrolling) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    },
    {
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0
    }
  );

  sections.forEach(section => observer.observe(section));

  // 2. РУЧНОЙ РАСЧЕТ СКРОЛЛА К СЕКЦИИ
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);

      // 1. Закрываем окно меню
      toggleMenu(false);

      // 2. Скроллим к нужной секции
      if (targetSection) {
        isManualScrolling = true;
        setActiveLink(targetId);

        window.removeEventListener('scrollend', resetManualScroll);
        clearTimeout(scrollEndFallbackTimer);

        // Расчет абсолютных координат элемента на странице с учетом отступа 80px
        const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 80;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        window.addEventListener('scrollend', resetManualScroll, { once: true });

        scrollEndFallbackTimer = setTimeout(() => {
          resetManualScroll();
        }, 1000);
      }
    });
  });
});
<\/script>`,className:"w-html-embed c1mxnpsi"})]}),e.jsx(m,{code:`<style>
  /* Базовые стили для элементов с классом .reveal или атрибутом [data-reveal] */
  .reveal,
  [data-reveal] {
    opacity: 0;
    transform: translateY(28px);
    filter: blur(4px);
    transition: 
      opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1),
      transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
      filter 1.2s cubic-bezier(0.16, 1, 0.3, 1);
    transition-delay: var(--delay, 0s);
    will-change: opacity, transform, filter;
  }

  /* Состояние после появления */
  .reveal.is-visible,
  [data-reveal].is-visible {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }

  /* Отключение анимации при системных настройках уменьшения движения */
  @media (prefers-reduced-motion: reduce) {
    .reveal,
    [data-reveal] {
      transition: none !important;
      opacity: 1 !important;
      transform: none !important;
      filter: none !important;
    }
  }
</style>

<script>
  (function () {
    const initScrollReveal = () => {
      // 1. Автоматический расчет задержки (--delay) для элементов внутри контейнеров-групп
      const groups = document.querySelectorAll('.reveal-group, [data-reveal-group]');
      groups.forEach((group) => {
        const items = group.querySelectorAll('.reveal, [data-reveal]');
        items.forEach((item, index) => {
          if (!item.style.getPropertyValue('--delay')) {
            item.style.setProperty('--delay', \`\${index * 0.08}s\`);
          }
        });
      });

      // 2. Инициализация Observer
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // 3. Подключение ко всем анимируемым объектам
      const revealElements = document.querySelectorAll('.reveal, [data-reveal]');
      revealElements.forEach((el) => observer.observe(el));
    };

    // Безопасный запуск после загрузки DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initScrollReveal);
    } else {
      initScrollReveal();
    }
  })();
<\/script>`,className:"w-html-embed"}),e.jsx(m,{code:`<script>
document.addEventListener("DOMContentLoaded", () => {
  // Каждому символу/букве сопоставлен свой код Морзе
  const sequence = [
    { char: "Б", morse: "-..." },
    { char: "у", morse: ".." },
    { char: "д", morse: "-.." },
    { char: "е", morse: "." },
    { char: "м", morse: "--" },
    { char: " ", morse: " " },
    { char: "н", morse: "-." },
    { char: "а", morse: ".-" },
    { char: " ", morse: " " },
    { char: "с", morse: "..." },
    { char: "в", morse: ".--" },
    { char: "я", morse: ".-.-" },
    { char: "з", morse: "--.." },
    { char: "и", morse: ".." }
  ];

  const charSpeed  = 50;  // Скорость печати отдельных знаков Морзе (мс)
  const pauseSpeed = 150; // Пауза между буквами (мс)

  const elements = document.querySelectorAll(".typewriter-morse");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startTyping(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(el => observer.observe(el));

  function startTyping(el) {
    // Морзе — серым (#a3a3a3), основной текст — чёрным (#000000)
    el.innerHTML = '<div style="letter-spacing: 2px; font-size: 0.75em; color: #a3a3a3; min-height: 1.2em;"></div><div style="color: #000000; min-height: 1.2em;"></div>';
    
    const morseLine = el.children[0];
    const mainLine  = el.children[1];

    let charIndex = 0;
    let currentMorseText = "";
    let currentMainText = "";

    function typeNextChar() {
      if (charIndex >= sequence.length) return;

      const item = sequence[charIndex];
      const morseCode = item.morse;
      let symbolIndex = 0;

      // Если это пробел, добавляем его сразу
      if (item.char === " ") {
        currentMorseText += "  ";
        currentMainText += " ";
        morseLine.textContent = currentMorseText;
        mainLine.textContent = currentMainText;
        charIndex++;
        setTimeout(typeNextChar, pauseSpeed);
        return;
      }

      // Посимвольно (точка/тире) печатаем код Морзе текущей буквы
      const symbolTimer = setInterval(() => {
        symbolIndex++;
        
        morseLine.textContent = currentMorseText + morseCode.slice(0, symbolIndex);

        // Когда код Морзе для текущей буквы полностью напечатан:
        if (symbolIndex >= morseCode.length) {
          clearInterval(symbolTimer);
          
          currentMorseText += morseCode + " ";
          currentMainText += item.char;
          
          morseLine.textContent = currentMorseText;
          mainLine.textContent = currentMainText;

          charIndex++;
          // Пауза перед следующей буквой
          setTimeout(typeNextChar, pauseSpeed);
        }
      }, charSpeed);
    }

    typeNextChar();
  }
});
<\/script>`,className:"w-html-embed"}),e.jsx(m,{code:`


<meta charset="UTF-8">
<style>
  /* Даем странице высоту, чтобы появился скролл */
  body {
    margin: 0;
    height: 200vh; /* Скролл на 2 экрана вниз */
    position: relative;
    background: #f0f0f0; 
  }

  /* Fixed позиционирование, чтобы слой не улетал вверх при скролле, а таял на месте */
  #physics-layer {
    position: fixed; 
    top: 0; left: 0; 
    width: 100%; 
    height: 100%;
    z-index: 9999;
    pointer-events: none; 
    transition: opacity 0.1s ease-out; /* Плавное исчезновение */
  }

     .mac-hybrid-item {
            position: absolute;
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: "Courier New", Courier, monospace;
            font-weight: bold;
            font-size: 16px;
            will-change: transform;
            user-select: none;
          }

          /* Стили компонентов со скруглением */
          .mac-btn {
            background: #fff;
            border: 2.5px solid #000;
            box-shadow: 4px 4px 0px #000;
            padding: 6px 20px;
            border-radius: 6px; /* Добавлено/сохранено */
            font-weight: bold;
            font-family: inherit;
          }
          .mac-label {
            display: flex;
            align-items: center;
            gap: 10px;
            background: #fff;
            padding: 4px 8px;
            border: 2px solid #000;
            border-radius: 6px; /* Добавлено скругление */
          }
          .mac-checkbox {
            width: 18px;
            height: 18px;
            border: 2.5px solid #000;
            background: #fff;
            position: relative;
            border-radius: 4px; /* Маленькое скругление для чекбокса */
          }
          .mac-checkbox.checked::before,
          .mac-checkbox.checked::after {
            position: absolute;
            background: #000;
            top: 1px;
            left: 5px;
            width: 2.5px;
            height: 11px;
          }
          .mac-checkbox.checked::before {
            transform: rotate(45deg);
          }
          .mac-checkbox.checked::after {
            transform: rotate(-45deg);
          }

          .mac-radio {
            width: 18px;
            height: 18px;
            border: 2.5px solid #000;
            border-radius: 50%;
            background: #fff;
          }
          .mac-radio.checked::after {
            display: none;
          }

          .mac-select {
            background: #fff;
            border: 2.5px solid #000;
            box-shadow: 4px 4px 0px #000;
            padding: 4px 10px;
            display: flex;
            align-items: center;
            gap: 10px;
            border-radius: 6px; /* Добавлено скругление */
          }
          .mac-arrow-down {
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 7px solid #000;
          }
          .mac-input {
            background: #fff;
            border: 2.5px solid #000;
            padding: 4px 10px;
            display: flex;
            align-items: center;
            gap: 8px;
            box-shadow: 4px 4px 0px #000;
            border-radius: 6px; /* Добавлено скругление */
          }

          /* Окно со скруглением */
          .mac-window {
            width: 160px;
            height: 110px;
            background: #fff;
            border: 2.5px solid #000;
            box-shadow: 4px 4px 0px #000;
            display: flex;
            flex-direction: column;
            border-radius: 8px; /* Скругляем окно */
            overflow: hidden; /* Чтобы внутренности не вылезали за скругление */
          }
          .mac-win-header {
            height: 18px;
            background: #fff;
            display: flex;
            align-items: center;
            padding: 0 6px;
            gap: 8px;
            border-bottom: 2.5px solid #000;
          }
          .mac-close-box {
            width: 8px;
            height: 8px;
            border: 2px solid #000;
            border-radius: 2px;
          }
          .mac-win-stripes {
            flex-grow: 1;
            height: 7px;
            background: linear-gradient(to bottom, #000 1px, transparent 1px);
            background-size: 100% 3px;
          }
          .mac-win-content {
            flex-grow: 1;
            position: relative;
            background: #fff;
          }
          .mac-scrollbar {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 14px;
            border-left: 2.5px solid #000;
            background-image:
              linear-gradient(45deg, #000 25%, transparent 25%),
              linear-gradient(-45deg, #000 25%, transparent 25%);
            background-size: 4px 4px;
            opacity: 0.25;
          }

          /* Базовый класс для иконок-квадратов со скруглением */
          .mac-pixel-icon {
            width: 32px;
            height: 32px;
            border: 2.5px solid #000;
            background: #fff;
            border-radius: 4px; /* Аккуратное скругление корпуса */
          }

          /* ИКОНКА ДИСКЕТЫ */
          .icon-floppy {
            position: relative;
          }
          .icon-floppy::before {
            display: block !important;
            content: "";
            position: absolute;
            top: 3px;
            left: 8px;
            width: 8px;
            height: 6px;
            background: #000;
            box-shadow: -4px 0 0 #fff;
          }
          .icon-floppy::after {
            content: "";
            position: absolute;
            bottom: 3px;
            left: 6px;
            width: 15px;
            height: 12px;
            border: 2px solid #000;
            background: #fff;
            background-image: linear-gradient(
              to bottom,
              transparent 3px,
              #000 3px,
              #000 5px,
              transparent 5px,
              transparent 8px,
              #000 8px,
              #000 10px
            );
            background-size: 100% 100%;
            border-radius: 2px; /* Маленькое скругление этикетки */
          }

          /* ИКОНКА КОРЗИНЫ СО СКРУГЛЕНИЕМ */
          .icon-trash {
            width: 24px;
            height: 32px;
            border: none;
            background: transparent;
            border-top: 5px solid #000;
            border-radius: 3px; /* Скругление крышки */
            position: relative;
            box-shadow: none;
          }
          .icon-trash::before {
            content: "";
            position: absolute;
            top: -5px;
            left: 9px;
            width: 6px;
            height: 2px;
            background: #000;
            border-radius: 1px 1px 0 0; /* Скругление ручки сверху */
          }
          .icon-trash::after {
            content: "";
            position: absolute;
            top: 2px;
            left: 3px;
            right: 3px;
            bottom: 2px;
            border: 2.5px solid #000;
            border-top: none;
            background: #fff;
            background-image: linear-gradient(
              to right,
              #000 2px,
              transparent 2px
            );
            background-size: 4px 100%;
            background-position: 1px 0;
            border-radius: 0 0 4px 4px; /* Скругление дна бака */
          }

          /* Сердечко теперь тоже немного сглаженное за счет небольшого border-radius */
          .icon-heart {
            width: 20px;
            height: 20px;
            background: #000;
            clip-path: polygon(
              50% 20%,
              75% 0,
              100% 25%,
              100% 55%,
              50% 100%,
              0 55%,
              0 25%,
              25% 0
            );
            border-radius: 2px;
          }

          .mac-toggle-container {
            display: flex;
            align-items: center;
            gap: 10px;
            background: #fff;
            padding: 4px 10px;
            border: 2px solid #000;
            box-shadow: 4px 4px 0px #000;
            border-radius: 6px; /* Добавлено скругление */
          }
          .mac-switch {
            width: 36px;
            height: 18px;
            border: 2px solid #000;
            background: #fff;
            position: relative;
            border-radius: 4px;
          }
          .mac-switch.active {
            background: #000;
          }
          .mac-switch-handle {
            width: 12px;
            height: 10px;
            background: #000;
            border: 2px solid #fff;
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: 2px;
          }
          .mac-switch.active .mac-switch-handle {
            left: auto;
            right: 0px;
            background: #fff;
            border-color: #000;
          }

          .mac-badge {
            background: #000;
            color: #fff;
            padding: 4px 12px;
            border: 2px solid #000;
            border-radius: 6px;
          }

          .mac-alert-box {
            border: 2.5px solid #000;
            background: #fff;
            padding: 4px 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 4px 4px 0px #000;
            border-radius: 6px; /* Добавлено скругление */
          }
          /* ИКОНКА WARNING С ЖИРНЫМ ПИКСЕЛЬНЫМ ЗНАКОМ */
          .mac-alert-icon {
            width: 20px;
            height: 20px;
            border: 2px solid #000;
            background: #000;
            border-radius: 4px;
            position: relative;
          }
          /* Отрисовываем жирный «главный штрих» и крупную квадратную точку */
          .mac-alert-icon::before {
            content: "";
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 3px; /* Жирность знака */
            height: 14px; /* Общая высота */
            top: 3px;
            /* Верхняя часть — палочка, затем прозрачный пропуск в 3px, затем жирная точка в 3px */
            background: linear-gradient(
              to bottom,
              #fff 0px,
              #fff 8px,
              transparent 8px,
              transparent 11px,
              #fff 11px,
              #fff 14px
            );
          }
        </style>



<div id="physics-layer">
  <div class="mac-hybrid-item"><button class="mac-btn">OK</button></div>
  <div class="mac-hybrid-item"><label class="mac-label"><span class="mac-checkbox checked"></span>Checkbox</label></div>
  <div class="mac-hybrid-item"><label class="mac-label"><span class="mac-radio checked"></span>Radio</label></div>
  <div class="mac-hybrid-item"><div class="mac-select"><span>File</span><span class="mac-arrow-down"></span></div></div>
  
  <div class="mac-hybrid-item">
    <div class="mac-input">
      <svg width="14" height="21" viewBox="0 0 14 21" style="margin-right:8px; display:block;">
        <path d="M0 3.5A3.5 3.5 0 0 1 3.5 0H7v7H3.5A3.5 3.5 0 0 1 0 3.5z" fill="#000"></path>
        <path d="M7 3.5A3.5 3.5 0 0 1 10.5 0h3.5v7h-3.5A3.5 3.5 0 0 1 7 3.5z" fill="#000"></path>
        <path d="M0 10.5A3.5 3.5 0 0 1 3.5 7H7v7H3.5A3.5 3.5 0 0 1 0 10.5z" fill="#000"></path>
        <circle cx="10.5" cy="10.5" r="3.5" fill="#000"></circle>
        <path d="M0 17.5A3.5 3.5 0 0 1 3.5 14H7v3.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 0 17.5z" fill="#000"></path>
      </svg>
      Figma
    </div>
  </div>

  <div class="mac-hybrid-item"><div class="mac-window"><div class="mac-win-header"><div class="mac-close-box"></div><div class="mac-win-stripes"></div></div><div class="mac-win-content"><div class="mac-scrollbar"></div></div></div></div>
  <div class="mac-hybrid-item"><div class="mac-pixel-icon icon-floppy"></div><span>Save</span></div>
  <div class="mac-hybrid-item"><div class="icon-trash"></div><span>Trash</span></div>
  <div class="mac-hybrid-item"><div class="mac-toggle-container"><span>Sound</span><div class="mac-switch active"><div class="mac-switch-handle"></div></div></div></div>
  
  <div class="mac-hybrid-item"><div class="mac-alert-box"><div class="mac-alert-icon"></div><span>Warning</span></div></div>
  
  <div class="mac-hybrid-item"><div class="mac-badge">#hashtag</div></div>
  <div class="mac-hybrid-item"><div class="icon-heart"></div><span>Made with love</span></div>
</div>

<script>
// Глобальные переменные скрипта, защищенные от поломок линтера
var physicsContainer = document.getElementById('physics-layer');
var physicsItems = [];
var physicsMouse = { x: -999, y: -999 };
var physicsAnimationId = null; 
var physicsIsAnimating = true;

// Сбор всех элементов на сцене
var elements = document.querySelectorAll('.mac-hybrid-item');
for (var i = 0; i < elements.length; i++) {
  var el = elements[i];
  physicsItems.push({
    el: el,
    w: el.offsetWidth || 100,
    h: el.offsetHeight || 40,
    x: Math.random() * (window.innerWidth - 150),
    y: -100 - (i * 100),
    vx: (Math.random() - 0.5) * 2,
    vy: 0
  });
}

// Отслеживание курсора мыши
window.addEventListener('mousemove', function(e) { 
  physicsMouse.x = e.clientX; 
  physicsMouse.y = e.clientY; 
});

// Основная функция расчета физики
function animatePhysics() {
  if (!physicsIsAnimating) return; 

  for (var i = 0; i < physicsItems.length; i++) {
    var item = physicsItems[i];
    
    item.vy += 0.25; 
    item.vx *= 0.98;
    item.vy *= 0.98;
    item.x += item.vx;
    item.y += item.vy;

    var dx = (item.x + item.w/2) - physicsMouse.x;
    var dy = (item.y + item.h/2) - physicsMouse.y;
    var dist = Math.sqrt(dx*dx + dy*dy);
    
    if (dist < 150) {
      var force = (150 - dist) / 150;
      item.vx += (dx/dist) * force * 3;
      item.vy += (dy/dist) * force * 3;
    }

    // Столкновение со стенками окна браузера
    if (item.x < 0) { item.x = 0; item.vx *= -0.5; }
    if (item.x + item.w > window.innerWidth) { item.x = window.innerWidth - item.w; item.vx *= -0.5; }
    if (item.y + item.h > window.innerHeight) { 
      item.y = window.innerHeight - item.h; 
      item.vy = -Math.abs(item.vy) * 0.5;
    }

    item.el.style.transform = 'translate(' + Math.round(item.x) + 'px, ' + Math.round(item.y) + 'px)';
  }
  
  physicsAnimationId = requestAnimationFrame(animatePhysics);
}

// Оптимизированный скролл-обработчик (исчезновение на 1/4 экрана + стоп движка)
window.addEventListener('scroll', function() {
  var fadeEnd = window.innerHeight / 10; 
  var scrollTop = window.scrollY;
  var opacity = 1 - (scrollTop / fadeEnd);

  if (opacity < 0) opacity = 0;
  if (opacity > 1) opacity = 1;

  physicsContainer.style.opacity = opacity;

  // Если элементы полностью скрылись и анимация еще крутится — вырубаем её
  if (opacity === 0 && physicsIsAnimating) {
    physicsIsAnimating = false;
    cancelAnimationFrame(physicsAnimationId);
    physicsContainer.style.display = 'none'; // Отключаем взаимодействие с мышью
  } 
  // Если прокрутили обратно наверх — заводим движок заново
  else if (opacity > 0 && !physicsIsAnimating) {
    physicsIsAnimating = true;
    physicsContainer.style.display = 'block';
    animatePhysics();
  }
});

// Запуск при загрузке
animatePhysics();
<\/script>

`,className:"w-html-embed"})]}),e.jsx("div",{className:"w-element c1t1ky9i cjgug1y czl8c44 c6p55kh c5uqp3h c9y978x c1h3h4ca c1bdxy3n c10lyvrj c8h4jae c8hpzfi ",children:e.jsxs("h2",{className:"w-element cfky18h c1u5offw clako7o cbgfy19 c5bqngv c1am9md2 c15tuz05 c13hwq9p c1e37voh c1n6thg7 c126mgj0 ctjol56 c1r42fpw c7ydmfi c2iulaz cee4xb8 cpb1gy2",children:[e.jsx("b",{className:"w-element",children:e.jsx("i",{className:"w-element",children:"❤"})}),"   сделано с любовью | Илья Шамбулин ",e.jsx("span",{className:"w-element cw2v8py",children:"| 59.938°, 30.315°"})]})})]}),ge=c=>{const{origin:t,pathname:n,search:i}=new URL(c);return`${t}${n}${i}`},ve=p.memo(({pageKey:c,system:t})=>e.jsx(ue,{system:t},c),(c,t)=>c.pageKey===t.pageKey),we=({data:c})=>{const{system:t,resources:n,url:i,pageMeta:a}=c,s=ge(i),r=p.useMemo(()=>({imageLoader:E,assetBaseUrl:g,resources:n,breakpoints:ye,onError:console.error}),[n]);return e.jsxs(q.Provider,{value:r,children:[e.jsx(B.Provider,{value:i,children:e.jsx(ve,{pageKey:s,system:t})}),e.jsx($,{url:i,pageMeta:a,siteName:O,imageLoader:E,assetBaseUrl:g}),e.jsx(D,{children:a.title})]})},ke=Object.freeze(Object.defineProperty({__proto__:null,default:we},Symbol.toStringTag,{value:"Module"})),je=({})=>e.jsxs(e.Fragment,{children:[O,e.jsx("link",{rel:"icon",href:E({src:`${g}${xe}`})}),be.map(c=>e.jsx("link",{rel:"preload",href:`${g}${c}`,as:"font",crossOrigin:"anonymous"},c)),fe.map(c=>e.jsx("link",{rel:"preload",href:`${g}${c}`,as:"image"},c))]}),qe=Object.freeze(Object.defineProperty({__proto__:null,Head:je},Symbol.toStringTag,{value:"Module"})),Se={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:H}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:ke}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:qe}}};export{Se as configValuesSerialized};
