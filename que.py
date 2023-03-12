# def solve(arr,length,K):
#     remaining = [False] * K + [True]
#     for i in arr:
#         remaining[i%K] = True
#         if all(remaining):
#             break
#         nextmove = K
#         for i in range(1,K):
#             remaining_left = remaining[:i]
#             remaining_right = remaining[i:]

#             temp = 0
#             if True in remaining_left:
#                 temp = len(remaining_left)-1-remaining_left[::-1].index(True)

#             if True in remaining_right:
#                 temp += K-i-remaining_right.index(True)
#             nextmove = min(nextmove,temp)

#             return nextmove
        

# t = int(input())
# ans = []

# for i in range(t):
#     length, K = input().split()

#     K = int(K)
#     arr = list(map(int, input().split()))

#     ans.append(solve(arr,length, K))

# print(*ans,)

# def solve():
#     n = int(input())
#     A = list(map(int, input().split()))
#     odd = 0
#     even = 0
#     for i in range(n):
#         if(A[i]%2 == 0):
#             even += 1
#         else:
#             odd += 1
#     count = 1
#     if odd == 0:
#         print("0")
#         return 0

#     odd -= 1
#     count += even
#     count += odd//2
#     print(count)
#     return 0

# solve()


t = int(input())
for i in range(t):
    n,k = map(int, input().split())
    A = list(map(int, input().split()))
    count = 0
    for i in range(n):
        val = A[i]
        while (A[i] % k) != 0:
            count += 1
            val += 1
print(count)

