export default function(){

    let width = window.innerWidth;
    if(width < 768){
        return 'xs';
    }
    else if(width <992){
        return 'sm';
    }
    else if(width < 1200){
        return 'md';
    }
    else{
        return 'lg';
    }
}

