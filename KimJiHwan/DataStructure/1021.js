const fs = require('fs');
let input = fs.readFileSync(__dirname + "\\input.txt").toString().trim().split('\n');

let list1 = input[0];
list1 = list1.split(' ');
let list2 = input[1];
list2 = list2.split(' ');


    let Deque = [];

    for (let i = 0; i < Number(list1[0]); i++) {
        Deque.push(i + 1);
    }

    const v1 = () => {
        Deque.shift();
    } // 덱 앞의 값 삭제

    const v2 = () => {
        let num = Deque.shift();
        Deque.push(num);
    } // 덱 앞의 값 삭제 후, 뒤에 삽입

    const v3 = () => {
        let num = Deque.pop();
        Deque.unshift(num);
    } // 덱 뒤의 값 삭제 후, 앞에 삽입

    let num = 0; //순서대로 뽑는데 드는 횟수 초기화

    for (let i = 0; i < list2.length; i++) {
        let target = Number(list2[i]);
        if (target === Deque[0]) {
            v1();
        } else {
            let index = Deque.indexOf(target);
            let stable = Deque.length / 2;

            if (index <= stable) {
                for (let j = 0; j < index; j++) {
                    v2();
                    num++;
                }
            } else {
                for (let j = 0; j < Deque.length - index; j++) {
                    v3();
                    num++;
                }
            }
            v1();
        }
    }

    console.log(num);