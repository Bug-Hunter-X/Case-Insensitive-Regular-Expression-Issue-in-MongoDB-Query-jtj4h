# Case-Insensitive Regular Expression Issue in MongoDB Query

This repository demonstrates a subtle bug related to case-insensitive regular expressions in MongoDB queries.  The issue arises when using the 'i' flag for case-insensitive matching, as the behavior can be inconsistent across different MongoDB versions.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version.

## Bug Description

The original query attempts to find documents where the 'name' field matches 'John' case-insensitively. However, due to inconsistencies in how the 'i' flag is handled, the query might not always return the expected results.

## Solution

The corrected code in `bugSolution.js` ensures reliable case-insensitive matching across various MongoDB versions by using a more robust method. This may involve explicit case conversion before querying or employing a different approach.