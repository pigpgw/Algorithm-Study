#최소 힙

import sys
import heapq

n = int(sys.stdin.readline())
heap = []
for _ in range(n):
    num = int(sys.stdin.readline())
    if(num != 0):
        heapq.heappush(heap,num)
    else:
        if(len(heap) == 0):
            print(0)
        else:
            print(heapq.heappop(heap))

# n = int(sys.stdin.readline())
# list=[]
# for _ in range(n):
#     num = int(sys.stdin.readline())
#     if(num == 0):
#         if(len(list) == 0):
#             print(0)
#         else:
#             list.sort(reverse=True)
#             print(list.pop())
#     elif (num > 0):
#         list.append(num)
        
#시간 초과