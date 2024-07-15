duplicates(a, n) {
        // your code here
        let arr=[];
        a.sort();
        let freq={};
        for(let i=0;i<n;i++){
            if(!freq[a[i]]){
                freq[a[i]]=1;
            }
            else{
                freq[a[i]]=freq[a[i]]+1;
            }
        }
        for(let prop in freq){
            if(freq[prop]!=1){
                arr.push(prop);
            }
        }
        return arr.length > 0 ? arr : [-1];
        
    }
