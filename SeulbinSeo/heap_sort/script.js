myCanvas.width = 400;
myCanvas.height = 300;

const margin = 30;
const n = 20;
const array = [];

for (let i = 0; i < n; i++) {
    array[i] = Math.random();
}

const cols = [];
const spacing = (myCanvas.width-margin*2) / n;
const ctx = myCanvas.getContext("2d");

const maxColumnHeight = 200;

for (let i = 0; i < array.length; i++) {
    const x = i * spacing + spacing / 2 + margin;
    const y = myCanvas.height-margin-i*3;
    const width = spacing - 4;
    const height = maxColumnHeight * array[i];
    cols[i] = new Column(x, y, width, height);
}

//let moves=bubbleSort(array);
//heapSort(array);

function heapify(arr, n, i, moves) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    
    //부모 노드가 자식 노드와 바꼈을 때
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        moves.push({ indices: [i, largest], swap: true });
        heapify(arr, n, largest, moves);
    } else {
        moves.push({ indices: [i, largest], swap: false });
    }
}

function heapSort(array) {
    const moves = [];
    const n = array.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i, moves);
    }

    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        [array[0], array[i]] = [array[i], array[0]];
        moves.push({ indices: [0, i], swap: true });
        heapify(array, i, 0, moves);
    }

    return moves;
}

// 이하 애니메이션 관련 부분
const moves = heapSort(array);
let animationFrame = 0;

function animate() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

    let changed = false;
    for (let i = 0; i < cols.length; i++) {
        changed = cols[i].draw(ctx) || changed;
    }

    if(!changed && moves.length > 0) {
                const move = moves.shift();
                const [i, j]=move.indices;
                if(move.swap) {
                    cols[i].moveTo(cols[j]);
                    cols[j].moveTo(cols[i], -1);
                    [cols[i], cols[j]] = [cols[j], cols[i]];
                }
                else{
        
                }
            }    
    
    requestAnimationFrame(animate);
}

// function animate(){
//     ctx.clearRect(0,0,myCanvas.width, myCanvas.height);
//     let changed=false;
//     for(let i = 0; i < cols.length; i++){
//         changed = cols[i].draw(ctx)||changed;
//     }

//     if(!changed && moves.length > 0) {
//         const move = moves.shift();
//         const [i, j]=move.indices;
//         if(move.swap) {
//             cols[i].moveTo(cols[j]);
//             cols[j].moveTo(cols[i], -1);
//             [cols[i], cols[j]] = [cols[j], cols[i]];
//         }
//         else{
//         }
//     }
//     requestAnimationFrame(animate);
// }

animate();

// function bubbleSort(array) {
//     const moves=[];
//     do{
//         var swapped = false;
//         for(let i = 1; i < array.length; i++){
//             if(array[i-1] > array[i]){
//                 swapped=true;
//                 [array[i-1], array[i]] = [array[i], array[i-1]];
//                 moves.push(
//                     {indices:[i-1, i], swap:true}
//                 );
//             }
//             else{
//                 moves.push(
//                     {indices:[i-1, i], swap:false}
//                 );
//             }
//         }
//     }while(swapped);
//     return moves;
// }

// function animate(){
//     ctx.clearRect(0,0,myCanvas.width, myCanvas.height);
//     let changed=false;
//     for(let i = 0; i < cols.length; i++){
//         changed = cols[i].draw(ctx)||changed;
//     }

//     if(!changed && moves.length > 0) {
//         const move = moves.shift();
//         const [i, j]=move.indices;
//         if(move.swap) {
//             cols[i].moveTo(cols[j]);
//             cols[j].moveTo(cols[i], -1);
//             [cols[i], cols[j]] = [cols[j], cols[i]];
//         }
//         else{

//         }
//     }
//     requestAnimationFrame(animate);
// }

