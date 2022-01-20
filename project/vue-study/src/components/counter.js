export default function(number){
    function increase(i){
        list[i].count++;
    }
    function decrease(i){
        list[i].count--;
        if(list[i].count === 0 && confirm("是否删除数据")){
            list.splice(i,1)
        }
    }
    return {
        increase,
        decrease
    }
}