function CreateObject(arr) {
    // Write your code here
    var createobj={};
    for(var i=0;i<arr.length;i=i+2)
    {
        var key = arr[i];
        var value = arr[i+1];
        createobj[key] = value;

    }
return createobj;

}

module.exports = CreateObject;
