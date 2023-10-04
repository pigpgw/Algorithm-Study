function permutate (arr) {
    const result = [];

    //DFS함수 만들기
    const DFS = (i, arr) => {
        if(i === arr.length) {
            return result.push([...arr]);
        }

        for(let j = i; j < arr.length; j++) {
            //swap
            [arr[i], arr[j]] = [arr[j], arr[i]];
            //dfs
            DFS(i+1, arr);
            //swap back
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    DFS(0, arr);
    return result;
}

console.log(permutate(["a", "b", "c"]));
