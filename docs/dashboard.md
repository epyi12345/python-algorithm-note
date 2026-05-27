# Dashboard

## Summary

- Solved Problems: 3
- Reviewed Problems: 3
- Wrong Notes: 3
- Current Focus: Prefix Sum / Range Query / Indexing

## Recent Problem Log

| Date | Problem | Type | Difficulty | Result | Score | Main issue | Review target |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-05-14 | 0003. Range Sales Query | Prefix Sum / Range Query | Lv.2 Core | Solved with review | 98/100 | direct repeated summation caused O(NQ) | Re-solve later |
| 2026-05-14 | 0002. Popular Products | Hash / Implementation / Tie-break | Lv.1+ Basic | Solved with review | 97/100 | maximum-only output and tie-break handling | Re-solve later |
| 2026-05-14 | 0001. Order Settlement | Hash / Implementation | Lv.1 Basic | Solved with review | 85/100 | pass vs continue | Re-solve later |

## Difficulty Progress

| Difficulty | Solved | Reviewed | Pending | Notes |
|---|---:|---:|---:|---|
| Lv.0 Warm-up | 0 | 0 | 0 | Not needed yet |
| Lv.1 Basic | 1 | 1 | 0 | Order Settlement |
| Lv.1+ Basic | 1 | 1 | 0 | Popular Products |
| Lv.2 Core | 1 | 1 | 2 | Range Sales Query, Target Sales Window, Next Growth Day |
| Lv.3 Intermediate | 0 | 0 | 2 | Minimum Shipping Capacity, Store Map Shortest Path |
| Lv.4 Advanced | 0 | 0 | 0 | Not started |
| Lv.5 Challenge | 0 | 0 | 0 | Not started |

## Weakness Tracker

- Control flow: pass vs continue
- Duplicate handling with set
- Debug output removal
- Distinguishing all-positive output from maximum-only output
- Tie-break sorting by product name
- Avoiding unnecessary full sorting
- Empty-case handling before max()

- Avoiding repeated range summation
- Understanding prefix[0] = 0
- Handling 1-based query indexes
- Applying prefix[R] - prefix[L - 1]

## Pending Practice Queue

- 0004. Target Sales Window / Lv.2 Core / Pending
- 0005. Next Growth Day / Lv.2 Core / Pending
- 0006. Minimum Shipping Capacity / Lv.3 Intermediate / Pending
- 0007. Store Map Shortest Path / Lv.3 Intermediate / Pending
