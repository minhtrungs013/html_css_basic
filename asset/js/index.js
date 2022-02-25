// call back
function myfunctions(valuse) {
    valuse('trung');
};

function myfun(cmd){
    console.log('giá trị: ', cmd);
}
myfunctions(myfun);