#회전하는 큐
import sys
from collections import deque

n, m = map(int,sys.stdin.readline().split())
index = list(map(int,sys.stdin.readline().split()))
data = deque([i for i in range(1,n+1)])
count = 0 

for num in index:
    while 1:
        if data[0] == num:
            data.popleft()
            break;
        else:
            if data.index(num) <= len(data)//2:
                data.rotate(-1)
                count+=1
            else:
                data.rotate(1)
                count+=1

print(count)