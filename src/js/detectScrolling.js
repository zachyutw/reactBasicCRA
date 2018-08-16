export const isBottom=(el=document.getElementsByTagName("BODY")[0])=>{
    const elHeight = Math.max(el.scrollHeight, el.offsetHeight, el.clientHeight,  el.scrollHeight, el.offsetHeight);
    const windowScrollHeight = Math.max(window.scrollY,window.pageYOffset);
    const windowInnerHeight = Math.max(window.innerHeight,document.documentElement.offsetHeight);
    return windowScrollHeight+windowInnerHeight >= elHeight;
}