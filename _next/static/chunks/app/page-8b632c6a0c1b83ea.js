(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4227:function(e,t,a){Promise.resolve().then(a.bind(a,7479)),Promise.resolve().then(a.bind(a,1233)),Promise.resolve().then(a.bind(a,6110)),Promise.resolve().then(a.bind(a,5073)),Promise.resolve().then(a.t.bind(a,5878,23)),Promise.resolve().then(a.t.bind(a,2972,23))},7479:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var r=a(7437),n=a(2265),o=a(4922),s=a(8614),i=a(4847);function l(e){let{children:t,className:a,variant:l,duration:d=.4,delay:u=0,yOffset:c=6,inView:f=!1,inViewMargin:m="-50px",blur:p="6px"}=e,g=(0,n.useRef)(null),h=(0,o.Y)(g,{once:!0,margin:m});return(0,r.jsx)(s.M,{children:(0,r.jsx)(i.E.div,{ref:g,initial:"hidden",animate:!f||h?"visible":"hidden",exit:"hidden",variants:l||{hidden:{y:c,opacity:0,filter:"blur(".concat(p,")")},visible:{y:-c,opacity:1,filter:"blur(0px)"}},transition:{delay:.04+u,duration:d,ease:"easeOut"},className:a,children:t})})}},1233:function(e,t,a){"use strict";a.d(t,{Carousel:function(){return p},CarouselContent:function(){return g},CarouselItem:function(){return h},CarouselNext:function(){return v},CarouselPrevious:function(){return x}});var r=a(7437),n=a(2265),o=a(9467),s=a(2660),i=a(6858),l=a(4508),d=a(7053);let u=(0,a(7712).j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=n.forwardRef((e,t)=>{let{className:a,variant:n,size:o,asChild:s=!1,...i}=e,c=s?d.g7:"button";return(0,r.jsx)(c,{className:(0,l.cn)(u({variant:n,size:o,className:a})),ref:t,...i})});c.displayName="Button";let f=n.createContext(null);function m(){let e=n.useContext(f);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let p=n.forwardRef((e,t)=>{let{orientation:a="horizontal",opts:s,setApi:i,plugins:d,className:u,children:c,...m}=e,[p,g]=(0,o.Z)({...s,axis:"horizontal"===a?"x":"y"},d),[h,x]=n.useState(!1),[v,b]=n.useState(!1),y=n.useCallback(e=>{e&&(x(e.canScrollPrev()),b(e.canScrollNext()))},[]),N=n.useCallback(()=>{null==g||g.scrollPrev()},[g]),w=n.useCallback(()=>{null==g||g.scrollNext()},[g]),C=n.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),N()):"ArrowRight"===e.key&&(e.preventDefault(),w())},[N,w]);return n.useEffect(()=>{g&&i&&i(g)},[g,i]),n.useEffect(()=>{if(g)return y(g),g.on("reInit",y),g.on("select",y),()=>{null==g||g.off("select",y)}},[g,y]),(0,r.jsx)(f.Provider,{value:{carouselRef:p,api:g,opts:s,orientation:a||((null==s?void 0:s.axis)==="y"?"vertical":"horizontal"),scrollPrev:N,scrollNext:w,canScrollPrev:h,canScrollNext:v},children:(0,r.jsx)("div",{ref:t,onKeyDownCapture:C,className:(0,l.cn)("relative",u),role:"region","aria-roledescription":"carousel",...m,children:c})})});p.displayName="Carousel";let g=n.forwardRef((e,t)=>{let{className:a,...n}=e,{carouselRef:o,orientation:s}=m();return(0,r.jsx)("div",{ref:o,className:"overflow-hidden",children:(0,r.jsx)("div",{ref:t,className:(0,l.cn)("flex","horizontal"===s?"-ml-4":"-mt-4 flex-col",a),...n})})});g.displayName="CarouselContent";let h=n.forwardRef((e,t)=>{let{className:a,...n}=e,{orientation:o}=m();return(0,r.jsx)("div",{ref:t,role:"group","aria-roledescription":"slide",className:(0,l.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===o?"pl-4":"pt-4",a),...n})});h.displayName="CarouselItem";let x=n.forwardRef((e,t)=>{let{className:a,variant:n="outline",size:o="icon",...i}=e,{orientation:d,scrollPrev:u,canScrollPrev:f}=m();return(0,r.jsxs)(c,{ref:t,variant:n,size:o,className:(0,l.cn)("absolute  h-8 w-8 rounded-full","horizontal"===d?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",a),disabled:!f,onClick:u,...i,children:[(0,r.jsx)(s.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});x.displayName="CarouselPrevious";let v=n.forwardRef((e,t)=>{let{className:a,variant:n="outline",size:o="icon",...s}=e,{orientation:d,scrollNext:u,canScrollNext:f}=m();return(0,r.jsxs)(c,{ref:t,variant:n,size:o,className:(0,l.cn)("absolute h-8 w-8 rounded-full","horizontal"===d?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",a),disabled:!f,onClick:u,...s,children:[(0,r.jsx)(i.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Next slide"})]})});v.displayName="CarouselNext"},6110:function(e,t,a){"use strict";a.d(t,{Dialog:function(){return l},DialogContent:function(){return f},DialogTrigger:function(){return d}});var r=a(7437),n=a(2265),o=a(4182),s=a(2489),i=a(4508);let l=o.fC,d=o.xz,u=o.h_;o.x8;let c=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(o.aV,{ref:t,className:(0,i.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...n})});c.displayName=o.aV.displayName;let f=n.forwardRef((e,t)=>{let{className:a,children:n,...l}=e;return(0,r.jsxs)(u,{children:[(0,r.jsx)(c,{}),(0,r.jsxs)(o.VY,{ref:t,className:(0,i.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...l,children:[n,(0,r.jsxs)(o.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,r.jsx)(s.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});f.displayName=o.VY.displayName,n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(o.Dx,{ref:t,className:(0,i.cn)("text-lg font-semibold leading-none tracking-tight",a),...n})}).displayName=o.Dx.displayName,n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(o.dk,{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",a),...n})}).displayName=o.dk.displayName},5073:function(e,t,a){"use strict";a.r(t),a.d(t,{HoverCard:function(){return i},HoverCardContent:function(){return d},HoverCardTrigger:function(){return l}});var r=a(7437),n=a(2265),o=a(1512),s=a(4508);let i=o.fC,l=o.xz,d=n.forwardRef((e,t)=>{let{className:a,align:n="center",sideOffset:i=4,...l}=e;return(0,r.jsx)(o.VY,{ref:t,align:n,sideOffset:i,className:(0,s.cn)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...l})});d.displayName=o.VY.displayName},4508:function(e,t,a){"use strict";a.d(t,{cn:function(){return o}});var r=a(1994),n=a(3335);function o(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.m6)((0,r.W)(t))}}},function(e){e.O(0,[346,971,117,744],function(){return e(e.s=4227)}),_N_E=e.O()}]);