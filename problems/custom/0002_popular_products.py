import sys
from collections import defaultdict

def solve():
  input = sys.stdin.readline
  n = int(input())
  
  seen = set()
  
  result = defaultdict(int)
  
  for _ in range(n):
    customer_id, product, qty, status = input().split()
    qty = int(qty)
    key = (customer_id, product, qty, status)
    
    if key in seen:
      continue

    seen.add(key)
      
    if status == 'BUY':
      result[product] += qty
    elif status == 'CANCEL':
      result[product] -= qty
  
  valid = {}

  for product, qty in result.items():
    if qty > 0:
      valid[product] = qty
  
  if not valid:
    print('NONE')
    return
  
  max_num = max(valid.values())
  for product in sorted(valid):
    if valid[product] == max_num:
      print(product, valid[product])
    
if __name__ == "__main__":
    solve()
