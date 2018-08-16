import _ from 'lodash';

export default (array,length)=>{
    let newArray = _.times(length,_.constant([]));
    array.map( (item,i)=> {

        newArray.map( 
         (array,j)=>{
            if(i%length==j){
                newArray[j]= [...newArray[j],item];
            }
        } );
    })
    return newArray;
}